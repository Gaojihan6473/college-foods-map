import React, { useState } from 'react';
import TopNavBar from '../components/TopNavBar';
import RestaurantDetail from './RestaurantDetail';
import { RESTAURANTS } from '../data/restaurants';

interface DecisionsProps {
  setActiveTab?: (tab: string) => void;
}

export default function Decisions({ setActiveTab }: DecisionsProps) {
  const [budget, setBudget] = useState(50);
  const [distance, setDistance] = useState(2.5);
  const [speed, setSpeed] = useState(15);
  const [rating, setRating] = useState(4.5);

  const [recommendedRestaurant, setRecommendedRestaurant] = useState<any>(null);
  const [blindBoxRestaurant, setBlindBoxRestaurant] = useState<any>(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);

  const resetParams = () => {
    setBudget(50);
    setDistance(2.5);
    setSpeed(15);
    setRating(4.5);
  };

  const generateRecommendation = () => {
    const random = RESTAURANTS[Math.floor(Math.random() * RESTAURANTS.length)];
    setRecommendedRestaurant(random);
  };

  const openBlindBox = () => {
    const random = RESTAURANTS[Math.floor(Math.random() * RESTAURANTS.length)];
    setBlindBoxRestaurant(random);
  };

  const handleNavigateToMap = (restaurant: typeof RESTAURANTS[0]) => {
    if (setActiveTab) {
      localStorage.setItem('selectedRestaurant', JSON.stringify(restaurant));
      localStorage.setItem('navigateToRestaurant', JSON.stringify(restaurant));
      setActiveTab('map');
    }
  };

  if (selectedRestaurant) {
    return (
      <RestaurantDetail
        restaurant={selectedRestaurant}
        onBack={() => setSelectedRestaurant(null)}
        onNavigateToMap={handleNavigateToMap}
      />
    );
  }

  return (
    <div className="flex-1 min-h-screen flex flex-col">
      <TopNavBar title="决策中心" />
      <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-10 w-full">
        {/* Two-column layout: Decision Radar (left) and Blind Box (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Column: Hero + Decision Radar - Clean & Simple Layout */}
          <div className="lg:col-span-8 bg-white rounded-2xl overflow-hidden shadow-sm border border-orange-100">
          {/* Hero Section - Clean orange gradient */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-2 md:px-8 md:py-3 mb-2 relative overflow-hidden">
            {/* Subtle decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>

            <div className="max-w-xl relative z-10">
              <h2 className="text-lg md:text-xl font-headline font-bold mb-2 leading-tight text-white">
                今天吃什么？<br />让 AI 为你精准投喂。
              </h2>
              <p className="text-white/80 mb-3 text-sm">根据你的口味倾向、当前位置和校园实时热度，定制最优选。</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20"># 只有 500 米</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20"># 重口味爱好者</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20"># 正在排队</span>
              </div>
            </div>
          </div>

          {/* Decision Radar - Clean card design */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline font-bold text-base flex items-center gap-2 text-orange-900">
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>tune</span>
                决策雷达
              </h3>
              <button onClick={resetParams} className="text-orange-500 font-bold text-xs hover:text-orange-600 transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>restart_alt</span>
                重置
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-orange-100 mb-4"></div>

            {/* Parameters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-4">
              {/* 预算范围 */}
              <div className="bg-orange-50/50 rounded-lg p-2.5 border border-orange-100">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-orange-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-orange-500 text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                    </span>
                    <span className="font-bold text-slate-700 text-sm">预算</span>
                  </div>
                  <span className="text-sm font-bold text-orange-600">¥{budget}</span>
                </div>
                <input type="range" min="10" max="100" value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full h-1.5 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                <div className="flex justify-between mt-1 text-[9px] text-slate-400 font-medium">
                  <span>节俭</span>
                  <span>适中</span>
                  <span>奢侈</span>
                </div>
              </div>

              {/* 距离 */}
              <div className="bg-orange-50/50 rounded-lg p-2.5 border border-orange-100">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-orange-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-orange-500 text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>near_me</span>
                    </span>
                    <span className="font-bold text-slate-700 text-sm">距离</span>
                  </div>
                  <span className="text-sm font-bold text-orange-600">{distance}km</span>
                </div>
                <input type="range" min="0.5" max="5" step="0.5" value={distance} onChange={(e) => setDistance(Number(e.target.value))} className="w-full h-1.5 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                <div className="flex justify-between mt-1 text-[9px] text-slate-400 font-medium">
                  <span>楼下</span>
                  <span>步行</span>
                  <span>远点</span>
                </div>
              </div>

              {/* 出餐速度 */}
              <div className="bg-orange-50/50 rounded-lg p-2.5 border border-orange-100">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-orange-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-orange-500 text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                    </span>
                    <span className="font-bold text-slate-700 text-sm">速度</span>
                  </div>
                  <span className="text-sm font-bold text-orange-600">{speed}分</span>
                </div>
                <input type="range" min="5" max="60" step="5" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className="w-full h-1.5 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                <div className="flex justify-between mt-1 text-[9px] text-slate-400 font-medium">
                  <span>马上</span>
                  <span>稍等</span>
                  <span>可等</span>
                </div>
              </div>

              {/* 口碑权重 */}
              <div className="bg-orange-50/50 rounded-lg p-2.5 border border-orange-100">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-orange-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-orange-500 text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </span>
                    <span className="font-bold text-slate-700 text-sm">口碑</span>
                  </div>
                  <span className="text-sm font-bold text-orange-600">{rating}+</span>
                </div>
                <input type="range" min="3.0" max="5.0" step="0.1" value={rating} onChange={(e) => setRating(Number(e.target.value))} className="w-full h-1.5 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                <div className="flex justify-between mt-1 text-[9px] text-slate-400 font-medium">
                  <span>还行</span>
                  <span>好评</span>
                  <span>必吃</span>
                </div>
              </div>
            </div>

            {/* AI 推荐结果卡片 */}
            <div className="mb-4">
              {recommendedRestaurant ? (
                <div className="w-full p-0.5 rounded-xl bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
                  <span className="absolute -top-1.5 -right-1.5 px-2 py-0.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[9px] font-bold rounded-full shadow-lg z-20 border border-white flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                    AI 推荐
                  </span>
                  <div
                    className="bg-white rounded-lg p-3 cursor-pointer hover:bg-orange-50 transition-colors flex items-center gap-2.5"
                    onClick={() => setSelectedRestaurant(recommendedRestaurant)}
                  >
                    <img src={recommendedRestaurant.image} alt={recommendedRestaurant.name} className="w-12 h-12 rounded-lg object-cover shrink-0" referrerPolicy="no-referrer" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm truncate text-slate-800 mb-0.5">{recommendedRestaurant.name}</h4>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span className="flex items-center text-orange-500 font-bold"><span className="material-symbols-outlined text-[12px] mr-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>{recommendedRestaurant.score}</span>
                        <span className="truncate">{recommendedRestaurant.tag}</span>
                        <span className="flex items-center gap-0.5 px-1.5 py-0.5 bg-gradient-to-r from-orange-50 to-amber-50 rounded border border-orange-100/50 shrink-0">
                          <span className="material-symbols-outlined text-[10px] text-orange-400" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                          <span className="text-[8px] text-orange-700">距离仅{recommendedRestaurant.distance}，出餐快</span>
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                  </div>
                </div>
              ) : (
                <div className="w-full rounded-lg p-3 flex items-center justify-center min-h-[60px] border-2 border-dashed border-orange-200 bg-orange-50/30">
                  <div className="text-center">
                    <span className="flex items-center justify-center text-orange-500 font-bold text-xs mb-0.5">
                      <span className="material-symbols-outlined text-[14px] mr-1 bg-orange-100 rounded-full p-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                      点击生成专属推荐
                    </span>
                    <p className="text-[10px] text-orange-400/80">根据您的口味定制</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center mt-auto">
              <button onClick={generateRecommendation} className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-full font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                生成决策推荐
              </button>
            </div>
          </div>
        </div>

          {/* Right Column: Blind Box */}
          <div className="lg:col-span-4 bg-gradient-to-br from-yellow-50 to-sky-50 rounded-2xl shadow-sm border border-yellow-200/50 p-5 md:p-6 flex flex-col relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-0 w-24 h-24 bg-sky-200/30 rounded-full blur-2xl"></div>

            {/* Header */}
            <div className="relative z-10 text-center mb-4">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold mb-3 inline-block">今日特惠</span>
              <h3 className="text-xl font-headline font-bold text-yellow-900 mb-2">美食盲盒</h3>
              <p className="text-yellow-700/70 text-sm">随机开启一家从未尝试的<br />校园宝藏店铺</p>
            </div>

            {/* Stats Row */}
            <div className="relative z-10 grid grid-cols-3 gap-2 mb-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-2 text-center border border-yellow-100">
                <span className="text-lg">🎲</span>
                <p className="text-[10px] text-yellow-800 font-medium">今日已开</p>
                <p className="text-xs font-bold text-yellow-600">128份</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-2 text-center border border-yellow-100">
                <span className="text-lg">✨</span>
                <p className="text-[10px] text-yellow-800 font-medium">好评率</p>
                <p className="text-xs font-bold text-yellow-600">96%</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-2 text-center border border-yellow-100">
                <span className="text-lg">🎁</span>
                <p className="text-[10px] text-yellow-800 font-medium">最低价</p>
                <p className="text-xs font-bold text-yellow-600">¥12</p>
              </div>
            </div>

            {/* Restaurant Display */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full">
              {blindBoxRestaurant ? (
                <div className="w-full p-1 rounded-2xl bg-gradient-to-r from-yellow-400 to-sky-400 shadow-lg mb-3 relative animate-wiggle">
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-yellow-500 to-sky-500 text-white text-[10px] font-bold rounded-full shadow-lg z-20 border-2 border-white">盲盒惊喜</span>
                  <div
                    className="bg-white rounded-xl p-4 cursor-pointer hover:bg-yellow-50 transition-colors text-left"
                    onClick={() => setSelectedRestaurant(blindBoxRestaurant)}
                  >
                    {/* 店铺图片和基本信息 */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="relative">
                        <img src={blindBoxRestaurant.image} alt={blindBoxRestaurant.name} className="w-16 h-16 rounded-lg object-cover shrink-0" referrerPolicy="no-referrer" />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold border-2 border-white">?</div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base truncate text-yellow-900 mb-1">{blindBoxRestaurant.name}</h4>
                        <p className="text-xs text-yellow-700/70 truncate mb-1.5">{blindBoxRestaurant.tag}</p>
                        <div className="flex items-center gap-2">
                          <span className="flex items-center text-yellow-600 font-bold text-xs">
                            <span className="material-symbols-outlined text-[14px] mr-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            {blindBoxRestaurant.score}
                          </span>
                          <span className="text-yellow-600/50 text-[8px]">|</span>
                          <span className="text-yellow-700/70 text-xs">{blindBoxRestaurant.price}</span>
                        </div>
                      </div>
                    </div>

                    {/* 详细信息 */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center text-yellow-700/70">
                          <span className="material-symbols-outlined text-[14px] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                          {blindBoxRestaurant.status}
                        </span>
                        <span className="flex items-center text-yellow-700/70">
                          <span className="material-symbols-outlined text-[14px] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>near_me</span>
                          {blindBoxRestaurant.distance}
                        </span>
                      </div>

                      {/* 标签 */}
                      <div className="flex flex-wrap gap-1.5">
                        {blindBoxRestaurant.tags?.map((tag: string, idx: number) => (
                          <span key={idx} className="px-2 py-0.5 bg-yellow-50 border border-yellow-200/50 rounded-full text-[10px] text-yellow-700">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* AI 推荐语 */}
                      <div className="mt-2 p-2 bg-gradient-to-r from-yellow-50 to-sky-50 rounded-lg border border-yellow-100/50">
                        <p className="text-[10px] text-yellow-800/80 line-clamp-2">
                          <span className="font-bold">AI 推荐：</span>{blindBoxRestaurant.aiSummary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full py-8">
                  <div className="text-center">
                    <span className="text-4xl mb-3 block">🎁</span>
                    <p className="text-sm text-yellow-700/80">开启盲盒，发现隐藏美食</p>
                  </div>
                </div>
              )}
            </div>

            {/* Guarantee badges */}
            <div className="relative z-10 flex items-center justify-center gap-3 mb-3">
              <span className="flex items-center text-[10px] text-yellow-700/70">
                <span className="material-symbols-outlined text-[14px] mr-0.5">verified</span>
                品质保障
              </span>
              <span className="flex items-center text-[10px] text-yellow-700/70">
                <span className="material-symbols-outlined text-[14px] mr-0.5">support_agent</span>
                随时退款
              </span>
            </div>

            <div className="relative z-10 mt-auto w-full">
              <button onClick={openBlindBox} className="w-full bg-gradient-to-r from-yellow-400 to-sky-400 text-white py-3 rounded-full font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">casino</span>
                开启盲盒
              </button>
            </div>
          </div>
        </div>

        {/* Trending Food Trends */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-headline font-bold text-2xl">大学城美食趋势</h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold">实时更新</span>
              <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold">前 10 名</span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 h-auto md:h-[500px]">
            {/* Large Trend Card - 围炉煮茶 2.0 */}
            <div className="col-span-12 md:col-span-6 rounded-xl overflow-hidden group relative h-[280px] md:h-auto">
              <img
                alt="围炉煮茶 2.0"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1547514701-42782101795e?w=600&h=400&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary text-on-primary text-xs font-bold rounded-md">热门</span>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>local_cafe</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-bold mb-2 text-white">围炉煮茶 2.0</h4>
                <p className="text-sm text-white/80 mb-3">西区二食堂新晋网红，结合传统茶饮与现代点心，日均排队 50+。</p>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded text-xs font-bold">打卡圣地</div>
                  <div className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded text-xs font-bold">下午茶</div>
                </div>
              </div>
            </div>

            {/* Small Trend Cards Stack */}
            <div className="col-span-12 md:col-span-3 flex flex-col gap-6">
              {/* Low-fat Healthy Meal Card */}
              <div className="bg-surface-container-low flex-1 rounded-xl overflow-hidden group relative min-h-[200px]">
                <img
                  alt="低脂健身餐"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">local_fire_department</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="font-bold mb-1 text-white">低脂健身餐</h4>
                  <p className="text-xs text-white/70">体测周搜索量激增 240%</p>
                </div>
              </div>
              {/* Late Night Grilled Fish Card */}
              <div className="bg-surface-container-low flex-1 rounded-xl overflow-hidden group relative min-h-[200px]">
                <img
                  alt="深夜烤鱼"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">nightlight</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="font-bold mb-1 text-white">深夜烤鱼</h4>
                  <p className="text-xs text-white/70">最受工程学院欢迎的宵夜</p>
                </div>
              </div>
            </div>

            {/* Food Review Report Card */}
            <div className="col-span-12 md:col-span-3 rounded-xl overflow-hidden group relative min-h-[200px]">
              <img
                alt="专属食评报告"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/50 to-indigo-900/30"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div>
                  <span className="material-symbols-outlined text-amber-400 text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                  <h4 className="text-xl font-bold mb-4 text-white">专属食评报告</h4>
                  <p className="text-sm text-white/70">查看你在本周的饮食画像，探索未知的味蕾领域。</p>
                </div>
                <button className="bg-amber-400 text-indigo-900 py-2.5 rounded-full text-sm font-bold mt-4 hover:bg-amber-300 transition-colors">立即查看</button>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Floating Action for Insights */}
        <div className="bg-orange-50/50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between border border-orange-100 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-800">决策 AI 深度洞察</h4>
              <p className="text-sm text-slate-500">基于你过去 7 天的记录：你似乎更偏爱香辣口味且对等待时间敏感。</p>
            </div>
          </div>
          <button className="px-6 py-2.5 border-2 border-orange-400 text-orange-600 bg-white rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-colors whitespace-nowrap shadow-sm">
            调整我的偏好
          </button>
        </div>
      </div>
      <footer className="h-10"></footer>
    </div>
  );
}
