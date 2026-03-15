import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: 'decisions', icon: 'lightbulb', label: '决策' },
    { id: 'map', icon: 'map', label: '地图' },
    { id: 'restaurant', icon: 'storefront', label: '餐厅' },
    { id: 'leaderboards', icon: 'leaderboard', label: '榜单' },
    { id: 'footprint', icon: 'pets', label: '足迹' },
  ];

  return (
    <aside className="w-20 lg:w-64 bg-surface-container-lowest border-r border-transparent h-screen sticky top-0 flex flex-col items-center lg:items-start py-8 px-4 z-50 shrink-0">
      <div className="mb-12 px-2 lg:px-4 flex items-center gap-3 w-full justify-center lg:justify-start">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-white text-2xl">restaurant</span>
        </div>
        <div className="hidden lg:flex flex-col">
          <h1 className="font-headline text-on-surface font-extrabold text-xl leading-tight tracking-tight">校园美食地图</h1>
          <p className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase">Solar Pulse System</p>
        </div>
      </div>

      <nav className="flex-1 w-full space-y-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-center lg:justify-start gap-4 px-4 py-3 rounded-full transition-all ${
                isActive
                  ? 'bg-primary-container text-on-primary-container shadow-lg shadow-primary/10'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span className={`hidden lg:block font-label ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto px-2 lg:px-4 flex items-center gap-3 w-full justify-center lg:justify-start bg-surface-container lg:bg-transparent rounded-2xl lg:rounded-none py-2 lg:py-0">
        <img
          alt="User Profile"
          className="w-10 h-10 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
        />
        <div className="hidden lg:block overflow-hidden">
          <p className="text-sm font-bold text-on-surface truncate">Alex Chen</p>
          <p className="text-xs text-on-surface-variant">美食探索者</p>
        </div>
      </div>
    </aside>
  );
}
