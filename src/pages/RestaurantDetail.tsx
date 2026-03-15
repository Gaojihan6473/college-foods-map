import React from 'react';
import { RESTAURANTS, Review, Dish } from '../data/restaurants';

interface Restaurant {
  id: string;
  name: string;
  tag: string;
  status: string;
  statusColor: string;
  score: number;
  distance: string;
  price: string;
  image: string;
  aiSummary: string;
  tags: string[];
  aiDeepSummary: string;
  atmosphere: string;
  directions: string;
  reviews: Review[];
  mustTryDishes: Dish[];
}

interface RestaurantDetailProps {
  restaurant: Restaurant;
  onBack: () => void;
  onNavigateToMap: (restaurant: Restaurant) => void;
}

export default function RestaurantDetail({ restaurant, onBack, onNavigateToMap }: RestaurantDetailProps) {
  // Find similar restaurants for recommendations
  const similarRestaurants = RESTAURANTS
    .filter(r => r.id !== restaurant.id && r.tag === restaurant.tag)
    .slice(0, 3);

  return (
    <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto bg-background">
      {/* Header with back button */}
      <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-outline-variant/20">
        <div className="px-4 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface">arrow_back</span>
          </button>
          <h1 className="font-headline font-bold text-xl text-on-surface">商家详情</h1>
        </div>
      </header>

      {/* Two-column layout with staggered blocks - prioritized by importance */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Column - Core Content (Most Important) */}
          <div className="lg:col-span-8 space-y-4">
            {/* 1. Hero Image - First impression */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className={`inline-block ${restaurant.statusColor} px-3 py-1 rounded-full text-xs font-bold mb-3`}>
                  {restaurant.status}
                </div>
                <h2 className="text-3xl font-headline font-bold text-white mb-2">{restaurant.name}</h2>
                <div className="flex items-center gap-4 text-white/90 text-sm">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-[18px] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold">{restaurant.score}</span>
                  </div>
                  <span>·</span>
                  <span>{restaurant.price}</span>
                  <span>·</span>
                  <span>{restaurant.distance}</span>
                </div>
              </div>
            </div>

            {/* 2. Must Try Dishes - Core value: what to eat */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant_menu</span>
                必点菜品
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {restaurant.mustTryDishes.map((dish, idx) => (
                  <div key={idx} className="bg-surface-container-lowest rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-colors">
                    <div className="relative h-28">
                      <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      {dish.popularity >= 90 && (
                        <span className="absolute top-2 right-2 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full">热门</span>
                      )}
                    </div>
                    <div className="p-3">
                      <div className="font-bold text-on-surface text-sm mb-1">{dish.name}</div>
                      <div className="text-xs text-on-surface-variant mb-2 line-clamp-1">{dish.description}</div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">{dish.price}</span>
                        <div className="flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-amber-400 text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                          <span className="text-[10px] text-on-surface-variant">{dish.popularity}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Reviews - Social proof */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>rate_review</span>
                同学们真实评价
              </h3>
              <div className="space-y-4">
                {restaurant.reviews.map((review) => (
                  <div key={review.id} className="pb-4 border-b border-outline-variant/20 last:border-0">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={review.avatar} alt={review.user} className="w-10 h-10 rounded-full bg-surface-container" referrerPolicy="no-referrer" />
                      <div>
                        <div className="font-bold text-on-surface text-sm">{review.user}</div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className={`material-symbols-outlined text-[12px] ${star <= review.rating ? 'text-amber-400' : 'text-outline-variant'}`} style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          ))}
                        </div>
                      </div>
                      <div className="ml-auto text-[10px] text-on-surface-variant">{review.date}</div>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Supplementary Info */}
          <div className="lg:col-span-4 space-y-4">
            {/* Basic Info - Practical info */}
            <div className="bg-surface-container-lowest rounded-2xl p-5">
              <h3 className="font-bold text-on-surface mb-4">基本信息</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">schedule</span>
                  <span className="text-sm text-on-surface">营业时间: 10:00 - 22:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">location_on</span>
                  <span className="text-sm text-on-surface">{restaurant.distance} · 校内食堂A区1楼</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">receipt_long</span>
                  <span className="text-sm text-on-surface">人均消费: {restaurant.price}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-4 pt-4 border-t border-outline-variant/20">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-surface-container-lowest rounded-xl hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-primary text-[20px]">favorite</span>
                  <span className="text-sm text-on-surface-variant font-medium">收藏</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-surface-container-lowest rounded-xl hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-primary text-[20px]">share</span>
                  <span className="text-sm text-on-surface-variant font-medium">分享</span>
                </button>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-on-surface mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>directions_walk</span>
                如何到达
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">{restaurant.directions}</p>
              <button
                onClick={() => onNavigateToMap(restaurant)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-on-primary rounded-xl hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
                <span className="font-medium">查看地图导航</span>
              </button>
            </div>

            {/* Atmosphere */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-on-surface mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mood</span>
                店铺氛围
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {restaurant.tags.map((tag, idx) => (
                  <span
                    key={tag}
                    className={`px-3 py-1.5 text-sm rounded-full font-medium ${
                      ['bg-amber-100 text-amber-700', 'bg-blue-100 text-blue-700', 'bg-green-100 text-green-700', 'bg-purple-100 text-purple-700', 'bg-rose-100 text-rose-700', 'bg-cyan-100 text-cyan-700'][idx % 6]
                    }`}
                  >
                    {tag}
                  </span>
                ))}
                <span className="px-3 py-1.5 bg-gradient-to-r from-orange-400 to-rose-400 text-white text-sm rounded-full font-medium shadow-sm">
                  {restaurant.tag}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {restaurant.atmosphere.split('、').map((item, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 text-sm rounded-full font-medium ${
                      ['bg-emerald-50 text-emerald-600 border border-emerald-200', 'bg-sky-50 text-sky-600 border border-sky-200', 'bg-amber-50 text-amber-600 border border-amber-200', 'bg-violet-50 text-violet-600 border border-violet-200', 'bg-rose-50 text-rose-600 border border-rose-200', 'bg-teal-50 text-teal-600 border border-teal-200'][idx % 6]
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Deep Analysis - Detailed info */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-5 border border-purple-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-purple-600" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                <span className="font-bold text-on-surface">AI 深度分析</span>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-sm mb-4">
                {restaurant.aiDeepSummary}
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/60 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-purple-600">{restaurant.score}</div>
                  <div className="text-[10px] text-on-surface-variant">综合评分</div>
                </div>
                <div className="bg-white/60 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-purple-600">94%</div>
                  <div className="text-[10px] text-on-surface-variant">好评率</div>
                </div>
                <div className="bg-white/60 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-purple-600">15min</div>
                  <div className="text-[10px] text-on-surface-variant">等餐时间</div>
                </div>
                <div className="bg-white/60 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-purple-600">高</div>
                  <div className="text-[10px] text-on-surface-variant">回购意愿</div>
                </div>
              </div>
            </div>

            {/* Similar Restaurants */}
            {similarRestaurants.length > 0 && (
              <div className="bg-surface-container-low rounded-2xl p-5">
                <h3 className="font-bold text-on-surface mb-4">相似推荐</h3>
                <div className="space-y-3">
                  {similarRestaurants.map(r => (
                    <div key={r.id} className="flex gap-3 bg-surface-container-lowest p-3 rounded-xl">
                      <img src={r.image} alt={r.name} className="w-16 h-16 rounded-lg object-cover" referrerPolicy="no-referrer" />
                      <div className="flex-1">
                        <h4 className="font-bold text-on-surface text-sm">{r.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-on-surface-variant mt-1">
                          <span className="flex items-center">
                            <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            {r.score}
                          </span>
                          <span>·</span>
                          <span>{r.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
