import React from 'react';

interface TopNavBarProps {
  title?: string;
  showSearch?: boolean;
}

export default function TopNavBar({ title, showSearch = true }: TopNavBarProps) {
  return (
    <header className="glass-nav sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
      {title ? (
        <h2 className="text-on-surface font-headline font-bold text-xl">{title}</h2>
      ) : (
        <div className="flex items-center gap-4 bg-surface-container-highest px-6 py-2.5 rounded-full w-full max-w-md">
          <span className="material-symbols-outlined text-on-surface-variant">search</span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none"
            placeholder="搜索校内食堂、外卖、周边美食..."
            type="text"
          />
        </div>
      )}

      {title && showSearch && (
        <div className="hidden md:flex relative w-96 ml-auto mr-6">
          <input
            className="w-full bg-surface-container-highest border-none rounded-full py-2.5 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-primary-container text-sm"
            placeholder="寻找今天的灵感..."
            type="text"
          />
          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
            search
          </span>
        </div>
      )}

      <div className="flex items-center gap-4 ml-auto">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant">settings</span>
        </button>
      </div>
    </header>
  );
}
