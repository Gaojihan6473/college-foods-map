import React from 'react';
import TopNavBar from '../components/TopNavBar';

export default function Leaderboards() {
  return (
    <div className="flex-1 flex flex-col min-w-0 min-h-screen">
      <TopNavBar title="美食榜单" showSearch={true} />
      
      <div className="px-8 py-6 space-y-12">
        <section className="relative rounded-3xl overflow-hidden bg-surface-container-lowest shadow-sm border border-outline-variant/20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-tertiary/5 to-transparent z-0"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, var(--color-primary) 0%, transparent 60%)', filter: 'blur(40px)' }}></div>
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-primary text-on-primary text-xs font-bold rounded-full uppercase tracking-wider">Top 100</span>
                <span className="text-on-surface-variant text-sm font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">update</span> 更新于: 今日 12:00</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-4">
                校园美食风云榜
              </h1>
              <p className="text-on-surface-variant max-w-xl text-base md:text-lg">
                基于全校 30,000+ 真实就餐评价，AI 智能防刷票，为你呈现最真实的校园美味指南。
              </p>
            </div>
            <div className="flex -space-x-4">
              <img className="w-12 h-12 rounded-full border-2 border-surface object-cover" src="https://i.pravatar.cc/150?u=1" alt="user" />
              <img className="w-12 h-12 rounded-full border-2 border-surface object-cover" src="https://i.pravatar.cc/150?u=2" alt="user" />
              <img className="w-12 h-12 rounded-full border-2 border-surface object-cover" src="https://i.pravatar.cc/150?u=3" alt="user" />
              <div className="w-12 h-12 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center text-xs font-bold text-on-surface-variant">+2k</div>
            </div>
          </div>
        </section>

        <section className="flex items-center gap-3 overflow-x-auto pb-2 hide-scrollbar">
          <button className="px-6 py-3 rounded-full bg-primary text-on-primary font-bold whitespace-nowrap shadow-md flex items-center gap-2 hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[18px]">trophy</span> 全校总榜
          </button>
          <button className="px-6 py-3 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-colors font-medium whitespace-nowrap flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">savings</span> 10元吃饱
          </button>
          <button className="px-6 py-3 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-colors font-medium whitespace-nowrap flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">fitness_center</span> 减脂星人
          </button>
          <button className="px-6 py-3 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-colors font-medium whitespace-nowrap flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">dark_mode</span> 深夜食堂
          </button>
          <button className="px-6 py-3 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-colors font-medium whitespace-nowrap flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">workspace_premium</span> 导师请客
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {/* Rank 2 */}
          <div className="relative group order-2 md:order-1">
            <div className="bg-surface-container-lowest rounded-xl p-5 pt-20 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-[6px] border-surface p-1 bg-surface z-10">
                <img alt="兰州牛肉面" className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1552611052-33e04de081de?w=200&h=200&fit=crop" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-surface-dim text-on-surface font-bold w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-surface shadow-sm">2</div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold">正宗兰州牛肉面</h3>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-primary font-bold">¥12</span>
                  <span className="w-1 h-1 bg-surface-variant rounded-full"></span>
                  <span className="text-on-surface-variant text-sm">西区二食堂</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 bg-secondary-container/30 px-4 py-1.5 rounded-full">
                  <span className="material-symbols-outlined text-sm text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>thumb_up</span>
                  <span className="text-on-secondary-container text-sm font-bold">4.2k 推荐</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rank 1 */}
          <div className="relative group order-1 md:order-2">
            <div className="bg-surface-container-lowest rounded-xl p-6 pt-28 flex flex-col items-center text-center shadow-xl shadow-primary/5 ring-2 ring-primary/10 transition-transform">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full border-[8px] border-surface p-1 bg-surface z-10">
                <img alt="轻氧能量沙拉" className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 pulse-gradient text-white font-black text-2xl w-14 h-14 rounded-full flex items-center justify-center ring-8 ring-surface shadow-lg shadow-primary/40">1</div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold">轻氧能量沙拉</h3>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-primary font-bold">¥22</span>
                  <span className="w-1 h-1 bg-surface-variant rounded-full"></span>
                  <span className="text-on-surface-variant text-sm">南苑美食街</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 pulse-gradient px-5 py-2 rounded-full">
                  <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  <span className="text-white text-sm font-bold">8.9k 推荐</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rank 3 */}
          <div className="relative group order-3 md:order-3">
            <div className="bg-surface-container-lowest rounded-xl p-5 pt-20 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-[6px] border-surface p-1 bg-surface z-10">
                <img alt="阿强酸菜鱼" className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-tertiary-fixed text-on-tertiary-fixed font-bold w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-surface shadow-sm">3</div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold">阿强酸菜鱼</h3>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-primary font-bold">¥35</span>
                  <span className="w-1 h-1 bg-surface-variant rounded-full"></span>
                  <span className="text-on-surface-variant text-sm">东区商业街</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 bg-tertiary-fixed/40 px-4 py-1.5 rounded-full">
                  <span className="material-symbols-outlined text-sm text-on-tertiary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-on-tertiary-fixed text-sm font-bold">3.5k 推荐</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ranks 4-10 List */}
        <section className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 overflow-hidden">
          <div className="p-6 border-b border-outline-variant/20 bg-surface/50 flex justify-between items-center">
            <h3 className="font-headline font-bold text-xl">人气精选 Top 4-10</h3>
            <button className="text-sm text-primary font-bold hover:underline">查看完整榜单</button>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {[
              { rank: 4, name: '老北京烤鸭档', location: '东区三食堂', score: '9.2', trend: 'up', tags: ['聚餐', '地道'] },
              { rank: 5, name: '川蜀麻辣烫', location: '南苑美食街', score: '9.0', trend: 'same', tags: ['重口味', '夜宵'] },
              { rank: 6, name: '健康谷物碗', location: '西区一食堂', score: '8.9', trend: 'up', tags: ['减脂', '高蛋白'] },
              { rank: 7, name: '铁板烧肉饭', location: '北区食堂', score: '8.7', trend: 'down', tags: ['管饱', '出餐快'] },
            ].map((item) => (
              <div key={item.rank} className="p-4 sm:p-6 flex items-center gap-4 hover:bg-surface-container-low transition-colors group cursor-pointer">
                <div className="w-8 text-center font-headline font-bold text-on-surface-variant text-xl">{item.rank}</div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                  <img src={`https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop`} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base text-on-surface truncate">{item.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant mt-1">
                    <span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-0.5">location_on</span>{item.location}</span>
                    <span className="hidden sm:inline-flex gap-1">
                      {item.tags.map(tag => <span key={tag} className="px-1.5 py-0.5 bg-surface-container-high rounded text-[10px]">{tag}</span>)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1 text-primary font-bold">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    {item.score}
                  </div>
                  {item.trend === 'up' && <span className="material-symbols-outlined text-error text-[16px]">trending_up</span>}
                  {item.trend === 'down' && <span className="material-symbols-outlined text-secondary text-[16px]">trending_down</span>}
                  {item.trend === 'same' && <span className="material-symbols-outlined text-on-surface-variant text-[16px]">trending_flat</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rising Stars */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
              <h2 className="text-2xl font-bold">潜力黑马</h2>
            </div>
            <button className="text-primary font-bold text-sm hover:underline">查看更多</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Star 1 */}
            <div className="bg-surface-container-low rounded-lg p-5 flex items-center gap-6 group hover:bg-white transition-all duration-300">
              <div className="relative flex-shrink-0">
                <img className="w-24 h-24 rounded-DEFAULT object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop" alt="Pizza" />
                <div className="absolute -top-2 -left-2 bg-error text-white text-[10px] font-bold px-2 py-0.5 rounded-full">新上榜</div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-bold truncate">意式窑烤披萨 · 帕丁顿</h4>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-bold">深夜食堂</span>
                  <span className="text-on-surface-variant text-sm">北校区</span>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-on-surface-variant">增长</span>
                    <span className="text-lg font-bold text-error">↑ 156%</span>
                  </div>
                  <div className="w-px h-6 bg-outline-variant"></div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-on-surface-variant">周推荐</span>
                    <span className="text-lg font-bold">892</span>
                  </div>
                </div>
              </div>
              <button className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>

            {/* Star 2 */}
            <div className="bg-surface-container-low rounded-lg p-5 flex items-center gap-6 group hover:bg-white transition-all duration-300">
              <div className="relative flex-shrink-0">
                <img className="w-24 h-24 rounded-DEFAULT object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&h=200&fit=crop" alt="Salad" />
                <div className="absolute -top-2 -left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">最受欢迎</div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-bold truncate">维根全植轻食</h4>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-bold">减脂星人</span>
                  <span className="text-on-surface-variant text-sm">西苑</span>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-on-surface-variant">增长</span>
                    <span className="text-lg font-bold text-error">↑ 84%</span>
                  </div>
                  <div className="w-px h-6 bg-outline-variant"></div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-on-surface-variant">周推荐</span>
                    <span className="text-lg font-bold">1,024</span>
                  </div>
                </div>
              </div>
              <button className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-surface-container-highest rounded-xl p-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col gap-2 max-w-md">
              <h2 className="text-2xl font-bold">榜单统计数据</h2>
              <p className="text-on-surface-variant">本榜单完全由 CampusFoodMap 全体学生实名投票生成，每 24 小时更新一次权重。</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">本月总票数</p>
                <p className="text-3xl font-black text-primary">124.5k</p>
              </div>
              <div className="text-center border-x-0 sm:border-x border-outline-variant px-0 sm:px-12">
                <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">参与档口数</p>
                <p className="text-3xl font-black text-on-surface">542</p>
              </div>
              <div className="text-center col-span-2 sm:col-span-1">
                <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">覆盖校区</p>
                <p className="text-3xl font-black text-on-surface">6</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-auto px-8 py-6 border-t border-surface-container-high flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant">
        <p>© 2024 CampusFoodMap · 为学生味蕾而生</p>
        <div className="flex items-center gap-6">
          <a className="hover:text-primary transition-colors" href="#">隐私协议</a>
          <a className="hover:text-primary transition-colors" href="#">商家入驻</a>
          <a className="hover:text-primary transition-colors" href="#">联系我们</a>
        </div>
      </footer>
    </div>
  );
}
