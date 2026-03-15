import React, { useState } from 'react';
import RestaurantDetail from './RestaurantDetail';
import { RESTAURANTS } from '../data/restaurants';

interface RestaurantProps {
  setActiveTab: (tab: string) => void;
}

export default function Restaurant({ setActiveTab }: RestaurantProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('全部');
  const [activeSort, setActiveSort] = useState('智能排序');

  const handleNavigateToMap = (restaurant: typeof RESTAURANTS[0]) => {
    // Store the selected restaurant for map to use
    localStorage.setItem('selectedRestaurant', JSON.stringify(restaurant));
    localStorage.setItem('navigateToRestaurant', JSON.stringify(restaurant));
    setActiveTab('map');
  };

  if (selectedId) {
    const selectedRestaurant = RESTAURANTS.find(r => r.id === selectedId);
    if (selectedRestaurant) {
      return (
        <RestaurantDetail
          restaurant={selectedRestaurant}
          onBack={() => setSelectedId(null)}
          onNavigateToMap={handleNavigateToMap}
        />
      );
    }
  }

  return (
    <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto bg-background">
      {/* TopNavBar */}
      <header className="px-6 py-4 flex items-center justify-between bg-surface relative z-40 border-b border-outline-variant/20">
        <div className="flex items-center gap-4 bg-surface-container-highest px-6 py-2.5 rounded-full w-full max-w-md">
          <span className="material-symbols-outlined text-on-surface-variant">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none" placeholder="搜索校内食堂、外卖、周边美食..." type="text"/>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant">settings</span>
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8 w-full">
        {/* Promotional Banner */}
        <div className="w-full bg-gradient-to-r from-primary to-tertiary-container rounded-2xl p-6 md:p-8 mb-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between shadow-lg relative overflow-hidden">
          <div className="relative z-10 mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-2">春季校园美食节</h2>
            <p className="text-white/90 text-sm md:text-base">探索校园周边春季限定美味，最高享 5 折优惠</p>
          </div>
          <button className="relative z-10 bg-white text-primary px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:scale-105 transition-transform">
            立即查看
          </button>
          {/* Decorative background elements */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute right-20 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto hide-scrollbar mb-6 pb-2">
          {['全部', '简餐便当', '面食粉类', '咖啡饮品', '面包甜点', '地方菜系', '火锅烧烤'].map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-high'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort & Filters */}
        <div className="flex items-center justify-between mb-6 border-b border-outline-variant/30 pb-4">
          <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar">
            {['智能排序', '距离优先', '好评优先', '低价优先'].map(sort => (
              <button 
                key={sort}
                onClick={() => setActiveSort(sort)}
                className={`text-sm font-medium whitespace-nowrap transition-colors ${
                  activeSort === sort ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {sort}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-1 text-sm text-on-surface-variant hover:text-on-surface shrink-0 ml-4">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            筛选
          </button>
        </div>

        {/* Restaurant List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RESTAURANTS.map(restaurant => (
            <div 
              key={restaurant.id}
              onClick={() => setSelectedId(restaurant.id)}
              className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer flex gap-4 border border-transparent hover:border-primary/20 group"
            >
              <div className="relative w-32 h-32 shrink-0 rounded-xl overflow-hidden">
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className={`absolute top-2 left-2 ${restaurant.statusColor} px-2 py-0.5 rounded-full text-[9px] font-bold`}>
                  {restaurant.status}
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-headline font-bold text-lg group-hover:text-primary transition-colors">{restaurant.name}</h3>
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0">
                      {restaurant.tag}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm mb-2">
                    <div className="flex items-center text-secondary font-bold">
                      <span className="material-symbols-outlined text-[14px] mr-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      {restaurant.score}
                    </div>
                    <span className="text-on-surface-variant">·</span>
                    <span className="text-on-surface-variant">人均 {restaurant.price}</span>
                    <span className="text-on-surface-variant">·</span>
                    <span className="text-on-surface-variant">{restaurant.distance}</span>
                  </div>

                  <div className="flex gap-2 mb-3">
                    {restaurant.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 border border-outline-variant/50 text-on-surface-variant text-[10px] rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-surface-container-low rounded-lg p-2.5 flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">neurology</span>
                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-1">
                    <span className="font-bold text-on-surface mr-1">AI 总结:</span>
                    {restaurant.aiSummary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
