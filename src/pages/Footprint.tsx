import React from 'react';

export default function Footprint() {
  return (
    <div className="flex-1 p-10 overflow-y-auto min-h-screen">
      <header className="mb-10 relative rounded-3xl overflow-hidden bg-surface-container-lowest shadow-sm border border-outline-variant/20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-surface to-primary/5 z-0"></div>
        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-surface shadow-lg overflow-hidden">
              <img src="https://i.pravatar.cc/150?u=1" alt="User Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-on-primary text-xs font-bold px-2 py-1 rounded-full shadow-md border-2 border-surface">Lv.5</div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight text-on-surface mb-2">我的美食足迹</h2>
            <p className="text-on-surface-variant text-base md:text-lg mb-4">记录你的每一次味蕾冒险，你已经超越了 <span className="text-primary font-bold">85%</span> 的校友！</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_month</span> 加入 342 天</span>
              <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">restaurant</span> 累计打卡 128 家</span>
            </div>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-primary-container to-primary/80 p-6 rounded-2xl flex flex-col justify-between text-on-primary-container min-h-[160px] relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
          <div className="relative z-10">
            <p className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">本月到店</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-5xl font-headline font-black">18</h3>
              <span className="text-sm font-medium opacity-80">家</span>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-20 group-hover:scale-110 transition-transform duration-500">
            <span className="material-symbols-outlined text-8xl">celebration</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-secondary-container to-secondary/80 p-6 rounded-2xl flex flex-col justify-between text-on-secondary-container min-h-[160px] relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
          <div className="relative z-10">
            <p className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">最爱品类</p>
            <h3 className="text-4xl font-headline font-black mt-1">面食</h3>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-20 group-hover:rotate-12 transition-transform duration-500">
            <span className="material-symbols-outlined text-8xl">ramen_dining</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-tertiary-container to-tertiary/80 p-6 rounded-2xl flex flex-col justify-between text-on-tertiary-container min-h-[160px] relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
          <div className="relative z-10">
            <p className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">撰写评价</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-5xl font-headline font-black">12</h3>
              <span className="text-sm font-medium opacity-80">条</span>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-20 group-hover:-translate-y-2 transition-transform duration-500">
            <span className="material-symbols-outlined text-8xl">rate_review</span>
          </div>
        </div>
      </section>

      {/* Taste Profile & Badges */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {/* Taste Profile */}
        <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-sm border border-outline-variant/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-headline font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">pie_chart</span>
              我的口味画像
            </h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold">无辣不欢</span>
                <span className="text-on-surface-variant">45%</span>
              </div>
              <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-error rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold">碳水狂魔</span>
                <span className="text-on-surface-variant">30%</span>
              </div>
              <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold">健康轻食</span>
                <span className="text-on-surface-variant">15%</span>
              </div>
              <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold">甜品续命</span>
                <span className="text-on-surface-variant">10%</span>
              </div>
              <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-tertiary rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-sm border border-outline-variant/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-headline font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">military_tech</span>
              获得徽章
            </h3>
            <span className="text-sm text-primary font-bold cursor-pointer hover:underline">全部 12 个</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-error-container text-on-error-container flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-3xl">local_fire_department</span>
              </div>
              <span className="text-sm font-bold">辣妹子</span>
              <span className="text-[10px] text-on-surface-variant">吃辣达人</span>
            </div>
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-3xl">dark_mode</span>
              </div>
              <span className="text-sm font-bold">夜猫子</span>
              <span className="text-[10px] text-on-surface-variant">深夜食堂常客</span>
            </div>
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-sm opacity-50 grayscale">
                <span className="material-symbols-outlined text-3xl">eco</span>
              </div>
              <span className="text-sm font-bold text-on-surface-variant">素食主义</span>
              <span className="text-[10px] text-on-surface-variant">未解锁</span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Timeline Column */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">用餐时光轴</h3>
            <div className="bg-surface-container-high px-4 py-2 rounded-full text-sm font-medium">最近 30 天</div>
          </div>
          <div className="space-y-12 relative before:content-[''] before:absolute before:left-[23px] before:top-0 before:bottom-0 before:w-px before:bg-outline-variant/50">
            {/* Month Separator */}
            <div className="relative pl-16">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-8 bg-surface flex items-center justify-center z-10">
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold text-on-surface-variant">10月</span>
              </div>
            </div>

            {/* Timeline Item 1 */}
            <div className="relative pl-16 group">
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary-container flex items-center justify-center border-4 border-surface z-10">
                <span className="material-symbols-outlined text-on-primary text-xl">restaurant</span>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 relative">
                    <img alt="Delicious ramen bowl" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUCG4JTmjiZJDUGuVzalBdkTxyfvVyIVOUKPLNdgaU65Dc04hZvgkaUMNbECsFaUOjD-f_D3XiCHmo3Spj15XCehWFYnWolDwZqHIrOJjwo6Cekw-Kbd0nfHoDCWJSLcaq4pAwuAvIbm1_oAwO5GFydVGTplm95JSmR2lFU0KkcWaLMeuL2ofbOT-FBhNmWMviUiMiSor0P25PqAhTnnJKOY8BqmiLGwxpK-S50E0gCiPahikhlzGsSPLgo5j83fIFCkzMdtaJb9o" />
                    <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-md">已评价</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold">一兰拉面</h4>
                        <p className="text-sm text-on-surface-variant">2023年10月24日 · 午餐</p>
                      </div>
                      <div className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
                        快餐小吃
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                    </div>
                    <p className="text-on-surface-variant italic font-medium leading-relaxed">“汤头浓郁，面条筋道，在忙碌的学习间隙来一碗真的很治愈。”</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-16 group">
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center border-4 border-surface z-10">
                <span className="material-symbols-outlined text-on-secondary-container text-xl">local_cafe</span>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 relative">
                    <img alt="Coffee and cake" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe_NrZlgnz_wIADpkSIu9DiRKXpo9yv9ukCvmZ3Lt7XeOZ2HA9qQA96MPYOJN9sYNprqTV7B8CrsTUdQvwipGMSnx9pyY9lHY3he8Sw2_c9k2aHr8L_LyqN16w7st3QRtstFB25eBMYmX8ZI9Q4cySYhOqKxW0bD-sj9XX3_cHRiv6sbjsQV6azqKjMoj1FKhniC4W73z5s0YRaI8vw3BwqSLSmY8TJgGIUu07b_otclivovKr59zpNoit9xBgGm-Sa-9s_v1p-EI" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold">晨曦咖啡馆</h4>
                        <p className="text-sm text-on-surface-variant">2023年10月22日 · 下午茶</p>
                      </div>
                      <div className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
                        自习圣地
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
                    </div>
                    <p className="text-on-surface-variant italic font-medium leading-relaxed">“燕麦拿铁非常顺滑，Wi-Fi也很给力，适合刷题一下午。”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="lg:col-span-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">我的收藏</h3>
            <button className="text-primary font-bold text-sm">查看全部</button>
          </div>
          <div className="space-y-6">
            <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 overflow-hidden group cursor-pointer">
              <div className="h-32 overflow-hidden relative">
                <img alt="Korean BBQ" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ2YcYePdLY-RnKE5kqTxBsmiUS7dF4q5aFOltHku3DIdW009cWvhAmUixc9wZ9hTtP8S_cQ_x-XsZeDDQ1hEAXXHyonlt1pR0S6c3aaS8pdov6bgdVN2NMcMf6yhBaX506DpirdQtV5GNqdiltnmxqHxMrHySJ6dGRPsZAGChdsQmVojPdV0HCJeRUym1GUJTX3jaa_Qa9a1IfMv6k5c8C-tyY5n-aPsplweLypPzaQRTLQsW-HQLu0OBc0yAIRPLRGwyeOy_414" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                </div>
              </div>
              <div className="p-5">
                <h5 className="font-bold text-lg mb-1">首尔味蕾烧烤</h5>
                <div className="flex items-center text-on-surface-variant text-xs space-x-2">
                  <span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">location_on</span>距离 800m</span>
                  <span>•</span>
                  <span className="flex items-center text-secondary font-bold">4.8</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 overflow-hidden group cursor-pointer">
              <div className="h-32 overflow-hidden relative">
                <img alt="Burger shop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY1WNa7KeXJWM8SAZJcKNQ4wOTHalt6GcT-8MDKu_wReR3yroCDbzCRhy-Hi3Lr4cIwP7SQyZ9bXiP-LCZuNVH4qpsLQSyk2N3eWEdPZWfP8NSwJcdz4w7VszxDgZD6OP_XtcHZDksBaoCUIe2Pi1E-p78_HVwp46srOV71jaPwAO38bPNiW1BWwv36VRcMq-27PZhMh_GOcOrN9OrUu61Qfi3lEbVMoPg99ZLQ3d18ychVcvqdKWIGcqusyTPgaUVpDTjgG2Dzx0" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                </div>
              </div>
              <div className="p-5">
                <h5 className="font-bold text-lg mb-1">动力美式汉堡</h5>
                <div className="flex items-center text-on-surface-variant text-xs space-x-2">
                  <span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">location_on</span>距离 1.2km</span>
                  <span>•</span>
                  <span className="flex items-center text-secondary font-bold">4.5</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 overflow-hidden group cursor-pointer">
              <div className="h-32 overflow-hidden relative">
                <img alt="Healthy bowl" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwtYyYH1Lqdafp6WhihJTGJ-H_qS2XL2IuHQ2Xn7OhLiMSP7R8OJbhbtmnUzOLYnGooOK7IiahGjdjaF1E-Sq50BN37mZizW_rcy2mJHAB_pv-DSM9rr1JoUduPT-O4f0qvMj7o2eTBSdDLn9sTedknzGHUB3TyggsOlWtyttkSso4YGZafKEmQtsG1qwf-6e0lnheO9OUdaYzx--tphQxK999nkld6ckrHU7fsuXfIulpzOP5-fzk1FeziU2JS-d55wTw7Dtrbkc" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                </div>
              </div>
              <div className="p-5">
                <h5 className="font-bold text-lg mb-1">轻食工厂</h5>
                <div className="flex items-center text-on-surface-variant text-xs space-x-2">
                  <span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">location_on</span>距离 500m</span>
                  <span>•</span>
                  <span className="flex items-center text-secondary font-bold">4.9</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 pulse-gradient rounded-2xl text-on-primary shadow-md relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
            <h4 className="font-bold text-xl mb-2 relative z-10">想去点新地方？</h4>
            <p className="text-sm opacity-90 mb-4 relative z-10">基于你的足迹，我们为你准备了 5 个新的美食推荐。</p>
            <button className="bg-white text-primary font-bold px-6 py-3 rounded-full text-sm hover:scale-105 transition-transform w-full relative z-10 shadow-sm">
              查看每日推荐
            </button>
          </div>
        </div>
      </div>

      <button className="fixed bottom-10 right-10 pulse-gradient w-16 h-16 rounded-full flex items-center justify-center text-white shadow-[0_20px_40px_rgba(159,66,0,0.25)] hover:scale-110 transition-transform z-50">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
}
