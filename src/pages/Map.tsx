/// <reference types="vite/client" />
import React, { useEffect, useRef, useState, useMemo } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import { RESTAURANTS, Restaurant } from '../data/restaurants';

interface MapProps {
  setActiveTab?: (tab: string) => void;
  onRestaurantSelect?: (restaurant: Restaurant) => void;
  navigateToRestaurant?: Restaurant | null;
  onNavigateComplete?: () => void;
}

export default function Map({ setActiveTab, onRestaurantSelect, navigateToRestaurant, onNavigateComplete }: MapProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [initialNavigateRestaurant, setInitialNavigateRestaurant] = useState<Restaurant | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [markersReady, setMarkersReady] = useState(false);
  const mapInstance = useRef<any>(null);
  const amapInstance = useRef<any>(null);
  const walkingRoute = useRef<any>(null);
  const markerInstancesRef = useRef<Record<string, any>>({});
  const markerElementsRef = useRef<Record<string, Element>>({});

  // Check for navigation from localStorage on mount and when navigateToRestaurant prop changes
  useEffect(() => {
    // Priority: prop > localStorage
    if (navigateToRestaurant) {
      setInitialNavigateRestaurant(navigateToRestaurant);
    } else {
      const navRestaurant = localStorage.getItem('navigateToRestaurant');
      if (navRestaurant) {
        try {
          const restaurant = JSON.parse(navRestaurant);
          setInitialNavigateRestaurant(restaurant);
        } catch (e) {
          console.error('Failed to parse navigateToRestaurant:', e);
        }
      }
    }
  }, [navigateToRestaurant]);

  // Filter restaurants based on active filter
  const filteredRestaurants = useMemo(() => {
    switch (activeFilter) {
      case 'nearest':
        return [...RESTAURANTS].sort((a, b) => {
          const distA = parseInt(a.distance.replace(/\D/g, ''));
          const distB = parseInt(b.distance.replace(/\D/g, ''));
          return distA - distB;
        });
      case 'rating':
        return [...RESTAURANTS].sort((a, b) => b.score - a.score);
      case 'open':
        return RESTAURANTS.filter(r => r.status === '正在营业' || r.status === '开放中' || r.status === '空闲');
      case 'cheap':
        return RESTAURANTS.filter(r => {
          const price = parseInt(r.price.replace(/\D/g, ''));
          return price <= 20;
        });
      default:
        return RESTAURANTS;
    }
  }, [activeFilter]);

  // Handle restaurant click - show detail page (without changing nav)
  const handleRestaurantClick = (restaurant: Restaurant) => {
    onRestaurantSelect && onRestaurantSelect(restaurant);
  };

  useEffect(() => {
    (window as any)._AMapSecurityConfig = {
      securityJsCode: import.meta.env.VITE_AMAP_SECURITY_CODE || 'dummy_code',
    };

    AMapLoader.load({
      key: import.meta.env.VITE_AMAP_KEY || 'dummy_key', // Replace with your actual key in .env
      version: "2.0",
      plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.Walking'],
    })
    .then((AMap) => {
      if (!mapRef.current) return;

      amapInstance.current = AMap;

      const map = new AMap.Map(mapRef.current, {
        viewMode: "3D",
        zoom: 15,
        center: [116.3160, 39.9950], // Between Tsinghua and Peking University
        mapStyle: 'amap://styles/macaron',
      });
      mapInstance.current = map;
      setMapReady(true);

      map.addControl(new AMap.ToolBar({ position: 'RT' }));
      map.addControl(new AMap.Scale());

      const myLocation = [116.3160, 39.9950]; // Center of the map
      const myLocationContent = `
        <div class="relative flex items-center justify-center w-8 h-8 -translate-x-1/2 -translate-y-1/2">
          <div class="absolute inset-0 bg-primary rounded-full opacity-30 animate-ping"></div>
          <div class="relative w-4 h-4 bg-primary border-2 border-white rounded-full shadow-md"></div>
        </div>
      `;
      const myLocationMarker = new AMap.Marker({
        position: myLocation,
        content: myLocationContent,
        offset: new AMap.Pixel(0, 0),
        zIndex: 100
      });
      map.add(myLocationMarker);

      // Use RESTAURANTS data that has position info
      const restaurantsWithPosition = RESTAURANTS.filter(r => r.position);
      console.log('Creating markers for restaurants:', restaurantsWithPosition.length);

      // Create offset markers to prevent overlapping
      const getOffsetPosition = (position: [number, number], index: number) => {
        // Add small random offset based on index to prevent overlap
        // Offset is roughly 20-30 meters in lat/lng
        const latOffset = (Math.sin(index * 1.5) * 0.0002 + 0.0001) * (index % 2 === 0 ? 1 : -1);
        const lngOffset = (Math.cos(index * 1.5) * 0.0002 + 0.0001) * (index % 3 === 0 ? 1 : -1);
        return [position[0] + lngOffset, position[1] + latOffset] as [number, number];
      };

      restaurantsWithPosition.forEach((restaurant, index) => {
        const offsetPosition = getOffsetPosition(restaurant.position!, index);

        const isHighlighted = highlightedId === restaurant.id;
        const borderClass = isHighlighted ? 'border-2 border-primary ring-2 ring-primary/50' : 'border border-outline-variant/50';

        const content = `
          <div class="group cursor-pointer relative -translate-x-1/2 -translate-y-full" data-restaurant-id="${restaurant.id}">
            <div class="bg-surface text-on-surface p-1.5 rounded-xl shadow-xl transform group-hover:-translate-y-1 transition-all flex items-center gap-2 ${borderClass} w-48">
              <img src="${restaurant.image}" alt="${restaurant.name}" class="w-10 h-10 rounded-lg object-cover shrink-0" />
              <div class="flex flex-col min-w-0">
                <div class="flex justify-between items-center mb-0.5">
                  <span class="text-xs font-bold truncate">${restaurant.name}</span>
                  <span class="${restaurant.statusColor} text-[8px] px-1 py-0.5 rounded font-bold whitespace-nowrap scale-90 origin-right">${restaurant.status}</span>
                </div>
                <div class="flex items-center gap-1 text-[9px] text-on-surface-variant mb-0.5">
                  <span class="flex items-center text-secondary font-bold">
                    <span class="material-symbols-outlined text-[9px] mr-0.5" style="font-variation-settings: 'FILL' 1">star</span>
                    ${restaurant.score}
                  </span>
                  <span>·</span>
                  <span>${restaurant.tag}</span>
                  <span>·</span>
                  <span>${restaurant.price}</span>
                </div>
                <div class="text-[9px] text-on-surface-variant truncate">
                  ${restaurant.distance}
                </div>
              </div>
            </div>
            <div class="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-surface mx-auto drop-shadow-md transform group-hover:-translate-y-1 transition-all"></div>
            <div class="w-2.5 h-2.5 ${isHighlighted ? 'bg-primary' : (restaurant.markerColor || 'bg-primary')} border-2 border-white rounded-full mx-auto -mt-1 shadow-md ${isHighlighted ? 'animate-pulse' : ''}"></div>
          </div>
        `;

        const marker = new AMap.Marker({
          position: offsetPosition,
          content: content,
          offset: new AMap.Pixel(0, 0),
          clickable: true,
          zIndex: isHighlighted ? 150 : 100
        });

        marker.on('click', () => {
          handleRestaurantClick(restaurant);
        });

        // Store marker and its DOM element
        map.add(marker);
        markerInstancesRef.current[restaurant.id] = marker;
        // Use setTimeout to wait for DOM to be ready
        setTimeout(() => {
          // Try different methods to get DOM element
          let dom = marker.getContent();
          // If it's a string, we need to find the element differently
          if (dom && typeof dom === 'string') {
            // Parse the string to find the element
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = dom;
            const element = tempDiv.querySelector(`[data-restaurant-id="${restaurant.id}"]`);
            if (element) {
              markerElementsRef.current[restaurant.id] = element;
            }
          } else if (dom instanceof HTMLElement) {
            markerElementsRef.current[restaurant.id] = dom;
          }
          console.log('Marker created:', restaurant.id, 'DOM element stored:', !!markerElementsRef.current[restaurant.id]);
        }, 100);
      });
      console.log('All markers loop done');

      // Markers are ready after a short delay to allow DOM elements to be stored
      setTimeout(() => {
        setMarkersReady(true);
        console.log('Markers ready');
      }, 200);
    })
    .catch(e => {
      console.error('AMap load error:', e);
      setMapError(true);
    });
  }, []);

  // Handle navigation from restaurant detail or localStorage
  useEffect(() => {
    console.log('Navigation effect triggered, markers:', Object.keys(markerInstancesRef.current).length);
    const restaurant = navigateToRestaurant || initialNavigateRestaurant;
    // Wait for map to be ready
    if (!restaurant || !mapReady) return;

    const map = mapInstance.current;

    // Set highlighted ID and navigating state
    setHighlightedId(restaurant.id);
    setIsNavigating(true);

    // Clear previous walking route
    if (walkingRoute.current) {
      walkingRoute.current.clear();
    }

    // If restaurant has position, draw walking route
    if (restaurant.position && amapInstance.current) {
      const myLocation = [116.3160, 39.9950] as [number, number];

      // Create walking route using the AMap instance
      const walking = new amapInstance.current.Walking({
        map: map,
        hideMarkers: true,
        isOverview: true,
        outlineColor: '#1989fa',
      });

      walkingRoute.current = walking;

      // Search walking route
      walking.search(myLocation, restaurant.position, (status: string, result: any) => {
        if (status === 'complete' && result.info === 'ok') {
          // Route found successfully
          console.log('Walking route calculated:', result);

          // Adjust map to fit the walking route path
          // Get the route path polylines
          if (result.routes && result.routes[0] && result.routes[0].steps) {
            // Collect all path points from the route steps
            const pathPoints: [number, number][] = [];
            result.routes[0].steps.forEach((step: any) => {
              if (step.path) {
                step.path.forEach((point: [number, number]) => {
                  pathPoints.push(point);
                });
              }
            });

            // Also add start and end points
            pathPoints.push(myLocation);
            pathPoints.push(restaurant.position);

            // Create a polyline to get bounds
            if (pathPoints.length > 0) {
              const polyline = new amapInstance.current.Polyline({
                path: pathPoints,
                strokeWeight: 0
              });
              map.add(polyline);

              // Also include the restaurant marker in the view
              const restaurantMarker = markerInstancesRef.current[restaurant.id];

              // Set fit view with padding to show route and marker card
              // top: 180 (space for marker card), right: 20, bottom: 320 (space for bottom card), left: 20
              setTimeout(() => {
                if (restaurantMarker) {
                  map.setFitView([polyline, restaurantMarker], false, [180, 20, 320, 20], 15);
                } else {
                  map.setFitView([polyline], false, [180, 20, 320, 20], 15);
                }
              }, 100);
            }
          }
        } else {
          console.error('Walking route failed:', status, result);
          // Fallback: just pan to restaurant location
          map.setCenter(restaurant.position);
          map.setZoom(16);
        }

        // Notify parent that navigation is complete
        onNavigateComplete?.();

        // Clear localStorage
        localStorage.removeItem('navigateToRestaurant');
      });
    }
  }, [navigateToRestaurant, initialNavigateRestaurant, mapReady]);

  // Update marker highlight styles when highlightedId changes
  useEffect(() => {
    console.log('Highlight effect triggered, highlightedId:', highlightedId, 'markersReady:', markersReady);
    console.log('Marker elements:', Object.keys(markerElementsRef.current));
    console.log('Marker instances:', Object.keys(markerInstancesRef.current));

    if (!mapInstance.current || !amapInstance.current || !markersReady) {
      console.log('Map, AMap or markers not ready');
      return;
    }

    const AMap = amapInstance.current;

    Object.keys(markerElementsRef.current).forEach((id) => {
      const dom = markerElementsRef.current[id];
      const container = dom.querySelector('[data-restaurant-id]');
      if (!container) return;

      // Get all child elements: first div is card, second is triangle, third is dot
      const children = container.children;
      const card = children[0] as HTMLElement;
      const triangle = children[1] as HTMLElement;
      const dot = children[2] as HTMLElement;

      if (id === highlightedId) {
        // Show full card for highlighted marker
        if (card) {
          card.style.display = 'block';
          card.classList.remove('border-outline-variant/50', 'border');
          card.classList.add('border-2', 'border-primary', 'ring-2', 'ring-primary/50');
        }
        if (triangle) {
          triangle.style.display = 'block';
        }
        if (dot) {
          dot.classList.add('bg-primary', 'animate-pulse');
          dot.classList.remove('bg-primary');
          // Force reflow
          void dot.offsetWidth;
          dot.classList.add('bg-primary', 'animate-pulse');
        }
      } else {
        if (isNavigating) {
          // Minimize non-highlighted markers - hide card and triangle
          if (card) {
            card.style.display = 'none';
          }
          if (triangle) {
            triangle.style.display = 'none';
          }
          if (dot) {
            dot.classList.remove('bg-primary', 'animate-pulse');
            dot.style.opacity = '0.5';
          }
        } else {
          // Normal state - show full card
          if (card) {
            card.style.display = 'block';
            card.classList.remove('border-2', 'border-primary', 'ring-2', 'ring-primary/50');
            card.classList.add('border', 'border-outline-variant/50');
          }
          if (triangle) {
            triangle.style.display = 'block';
          }
          if (dot) {
            dot.classList.remove('bg-primary', 'animate-pulse');
            dot.style.opacity = '1';
          }
        }
      }
    });

    // Also update marker zIndex for proper layering
    Object.keys(markerInstancesRef.current).forEach((id) => {
      const marker = markerInstancesRef.current[id];
      if (marker) {
        if (id === highlightedId) {
          // Bring to top with high zIndex
          marker.setzIndex(200);
          marker.setTop(true);
          // Re-render marker to ensure it appears on top
          marker.setMap(mapInstance.current);
        } else {
          // Lower zIndex for non-highlighted markers when navigating
          marker.setzIndex(isNavigating ? 50 : 100);
        }
      }
    });
  }, [highlightedId, markersReady, isNavigating]);

  return (
    <div className="flex-1 relative flex flex-col min-w-0 h-screen overflow-hidden">
      <header className="glass-nav absolute top-0 left-0 right-0 h-20 z-40 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1 max-w-2xl">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="w-full h-12 pl-12 pr-4 bg-surface-container-highest border-none rounded-full focus:outline-none focus:ring-2 focus:ring-primary-container text-sm" placeholder="搜索校内美食、档口、菜系..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-3 ml-4">
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <div className="absolute inset-0 bg-[#e8eaed] z-0 overflow-hidden">
        {/* Gaode Map Container */}
        <div ref={mapRef} className="w-full h-full"></div>
        
        {/* Fallback if map fails to load */}
        {mapError && (
          <div className="absolute inset-0 z-10">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/OpenStreetMap_view_of_the_University_of_Washington_campus.png/1200px-OpenStreetMap_view_of_the_University_of_Washington_campus.png" 
              alt="Real Map Background Fallback" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-error-container text-on-error-container px-6 py-4 rounded-xl shadow-xl flex flex-col items-center gap-2 text-center max-w-sm">
              <span className="material-symbols-outlined text-4xl">error</span>
              <h3 className="font-bold text-lg">高德地图加载失败</h3>
              <p className="text-sm opacity-80">请在环境变量中配置有效的 VITE_AMAP_KEY 和 VITE_AMAP_SECURITY_CODE</p>
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-24 left-0 right-0 px-6 z-30 pointer-events-none">
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pointer-events-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium shadow-md whitespace-nowrap transition-colors ${
              activeFilter === 'all'
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-lowest text-on-surface hover:bg-primary-fixed'
            }`}
          >
            全部餐厅
          </button>
          <button
            onClick={() => setActiveFilter('nearest')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium shadow-md whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeFilter === 'nearest'
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-lowest text-on-surface hover:bg-primary-fixed'
            }`}
          >
            离我最近
          </button>
          <button
            onClick={() => setActiveFilter('rating')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium shadow-md whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeFilter === 'rating'
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-lowest text-on-surface hover:bg-primary-fixed'
            }`}
          >
            高分评价
          </button>
          <button
            onClick={() => setActiveFilter('open')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium shadow-md whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeFilter === 'open'
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-lowest text-on-surface hover:bg-primary-fixed'
            }`}
          >
            <span className="material-symbols-outlined text-sm">schedule</span>正在营业
          </button>
          <button
            onClick={() => setActiveFilter('cheap')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium shadow-md whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeFilter === 'cheap'
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-lowest text-on-surface hover:bg-primary-fixed'
            }`}
          >
            <span className="material-symbols-outlined text-sm">payments</span>人均 ¥20以下
          </button>
        </div>
      </div>

      <button className="absolute bottom-24 right-8 z-30 w-14 h-14 pulse-gradient text-on-primary rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all">
        <span className="material-symbols-outlined text-3xl">my_location</span>
      </button>

      <div className="absolute bottom-0 left-0 right-0 z-40 glass-nav rounded-t-3xl transition-transform duration-500 ease-in-out translate-y-[calc(100%-80px)] hover:translate-y-0 group shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pb-8 pt-10 px-6">
        {/* Drag handle area to encourage hover */}
        <div className="w-full h-10 absolute top-0 left-0 flex items-start justify-center pt-3 cursor-pointer">
          <div className="w-12 h-1.5 bg-on-surface/20 rounded-full group-hover:bg-primary/50 transition-colors"></div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="font-headline font-bold text-xl flex items-center gap-2">
            <span className="w-1.5 h-6 pulse-gradient rounded-full"></span>
            当前区域美食 ({filteredRestaurants.length})
          </h2>
          <button
            onClick={() => setActiveTab && setActiveTab('restaurant')}
            className="text-primary font-bold text-sm hover:underline cursor-pointer relative z-50"
          >
            查看全部
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          {filteredRestaurants.map((store) => (
            <div
              key={store.id}
              data-restaurant-id={store.id}
              onClick={() => handleRestaurantClick(store)}
              className={`min-w-[220px] w-[220px] shrink-0 bg-surface-container-lowest rounded-xl p-3 shadow-sm hover:scale-[1.02] transition-transform cursor-pointer relative group ${highlightedId === store.id ? 'border-2 border-primary ring-2 ring-primary/50' : ''}`}
            >
              <div className="relative h-28 mb-3 rounded-lg overflow-hidden">
                <img alt={store.name} className="w-full h-full object-cover" src={store.image} />
                <div className={`absolute top-2 left-2 ${store.statusColor} px-2 py-0.5 rounded-full text-[9px] font-bold`}>{store.status}</div>
                <div className="absolute bottom-2 right-2 bg-black/40 backdrop-blur-md text-white px-1.5 py-0.5 rounded-md text-[9px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> {store.score}
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-headline font-bold text-base truncate pr-2">{store.name}</h3>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[9px] px-1.5 py-0.5 rounded-full font-bold shrink-0">{store.tag}</span>
                </div>
                <p className="text-on-surface-variant text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">near_me</span> {store.distance} · 人均 {store.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
