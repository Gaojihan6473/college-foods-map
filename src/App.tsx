import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Decisions from './pages/Decisions';
import Map from './pages/Map';
import Leaderboards from './pages/Leaderboards';
import Footprint from './pages/Footprint';
import Restaurant from './pages/Restaurant';
import RestaurantDetail from './pages/RestaurantDetail';
import { Restaurant as RestaurantType } from './data/restaurants';

export default function App() {
  const [activeTab, setActiveTab] = useState('decisions');
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantType | null>(null);
  const [navigateToRestaurant, setNavigateToRestaurant] = useState<RestaurantType | null>(null);

  const handleNavigateToMap = (restaurant: RestaurantType) => {
    // Clear selected restaurant first to prevent rendering issues
    setSelectedRestaurant(null);
    localStorage.setItem('selectedRestaurant', JSON.stringify(restaurant));
    localStorage.setItem('navigateToRestaurant', JSON.stringify(restaurant));
    setNavigateToRestaurant(restaurant);
    // Use setTimeout to ensure state is cleared before switching tab
    setTimeout(() => {
      setActiveTab('map');
    }, 0);
  };

  const renderContent = () => {
    // If a restaurant is selected, show detail view on top of current page
    if (selectedRestaurant) {
      return (
        <RestaurantDetail
          restaurant={selectedRestaurant}
          onBack={() => setSelectedRestaurant(null)}
          onNavigateToMap={handleNavigateToMap}
        />
      );
    }

    switch (activeTab) {
      case 'decisions':
        return <Decisions setActiveTab={setActiveTab} />;
      case 'map':
        return <Map setActiveTab={setActiveTab} onRestaurantSelect={setSelectedRestaurant} navigateToRestaurant={navigateToRestaurant} onNavigateComplete={() => setNavigateToRestaurant(null)} />;
      case 'leaderboards':
        return <Leaderboards />;
      case 'footprint':
        return <Footprint />;
      case 'restaurant':
        return <Restaurant setActiveTab={setActiveTab} />;
      default:
        return <Decisions />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background text-on-surface">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
}
