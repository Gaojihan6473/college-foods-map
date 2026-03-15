export interface Review {
  id: string;
  user: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
}

export interface Dish {
  name: string;
  price: string;
  image: string;
  description: string;
  popularity: number;
}

export interface Restaurant {
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
  // Map related fields
  position?: [number, number]; // [lng, lat] for map marker
  markerColor?: string;
}

export const RESTAURANTS: Restaurant[] = [
  {
    id: '1',
    name: '落日食堂 Sunset Kitchen',
    tag: '融合川菜',
    status: '正在营业',
    statusColor: 'bg-secondary-container text-on-secondary-container',
    score: 4.8,
    distance: '步行 5 分钟',
    price: '¥35-50',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=400&h=400&fit=crop',
    aiSummary: '藤椒鸡肉面yyds，出餐快，环境干净，但下午茶供应较少。',
    tags: ['高分推荐', '适合聚餐'],
    aiDeepSummary: '基于 256 条评论分析：口味评分 4.7 分，服务评价 4.5 分，性价比 4.8 分。关键词：出餐快、味道好、性价比高、干净整洁。情感倾向正面占比 94%，适合快餐和日常用餐。',
    atmosphere: '明亮整洁、适合聚餐、休闲舒适',
    directions: '从东门进入，左转步行 200 米，右手边即是。校内骑行 2 分钟，公交站（校医院站）步行 3 分钟。',
    reviews: [
      { id: '1', user: '小明同学', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1', content: '藤椒鸡肉面超级好吃！每次来都要排队，但值得等待~', rating: 5, date: '2024-01-15' },
      { id: '2', user: '美食探险家', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2', content: '性价比很高，学生党友好，就是人有时候太多了', rating: 4, date: '2024-01-12' },
      { id: '3', user: '减脂小达人', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3', content: '环境很干净，吃完不会觉得油腻，爱了爱了', rating: 5, date: '2024-01-10' }
    ],
    mustTryDishes: [
      { name: '藤椒鸡肉面', price: '¥18', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200&h=200&fit=crop', description: '招牌必点，藤椒麻香浓郁', popularity: 98 },
      { name: '金牌牛肉饭', price: '¥22', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=200&fit=crop', description: '牛肉软烂入味，分量十足', popularity: 85 },
      { name: '小酥肉', price: '¥12', image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=200&h=200&fit=crop', description: '外酥内嫩，追剧必备', popularity: 78 }
    ],
    position: [116.3240, 40.0020],
    markerColor: 'bg-primary'
  },
  {
    id: '2',
    name: '第一食堂 · 悦享沙拉',
    tag: '健康轻食',
    status: '开放中',
    statusColor: 'bg-secondary-container text-on-secondary-container',
    score: 4.8,
    distance: '步行 3 分钟',
    price: '¥25',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    aiSummary: '减脂期首选，食材新鲜，分量足。',
    tags: ['减脂', '高蛋白'],
    aiDeepSummary: '基于 128 条评论分析：口味评分 4.6 分，健康评价 4.9 分，性价比 4.7 分。关键词：新鲜、健康、分量足、减脂首选。情感倾向正面占比 92%，适合健身人群和健康饮食者。',
    atmosphere: '清新自然、健康时尚、安静舒适',
    directions: '第一食堂二楼右手边，从宿舍区步行 3 分钟即到。骑行 1 分钟，校园巴士第一食堂站。',
    reviews: [
      { id: '1', user: '健身教练', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4', content: '蛋白质含量很高，非常适合健身后补充', rating: 5, date: '2024-01-14' },
      { id: '2', user: '轻食爱好者', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5', content: '蔬菜很新鲜，酱料口味选择也多', rating: 4, date: '2024-01-11' },
      { id: '3', user: '早起鸟', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=6', content: '早餐选择丰富，吃完一上午都不饿', rating: 5, date: '2024-01-08' }
    ],
    mustTryDishes: [
      { name: '藜麦鸡肉沙拉', price: '¥25', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop', description: '高蛋白低脂肪，健身首选', popularity: 95 },
      { name: '牛油果吐司', price: '¥18', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=200&h=200&fit=crop', description: '绵密牛油果，早餐绝配', popularity: 88 },
      { name: '鲜榨橙汁', price: '¥8', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=200&h=200&fit=crop', description: '鲜榨无添加，清爽解腻', popularity: 72 }
    ],
    position: [116.3160, 39.9980],
    markerColor: 'bg-primary'
  },
  {
    id: '3',
    name: '西门 · 一番拉面',
    tag: '暖心汤面',
    status: '即将排队',
    statusColor: 'bg-error-container text-on-error-container',
    score: 4.5,
    distance: '步行 8 分钟',
    price: '¥18',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop',
    aiSummary: '汤底浓郁，面条劲道，饭点需要排队。',
    tags: ['平价', '出餐快'],
    aiDeepSummary: '基于 189 条评论分析：口味评分 4.8 分，出餐速度 4.7 分，性价比 4.9 分。关键词：汤浓、面劲道、便宜、管饱。情感倾向正面占比 89%，饭点需排队15-20分钟。',
    atmosphere: '日式风格、温暖实惠、烟火气息',
    directions: '西门商业街内，从西门右转步行 150 米。骑行 4 分钟，公交站（西门站）步行 2 分钟。',
    reviews: [
      { id: '1', user: '拉面控', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=7', content: '汤底太浓郁了！每次吃完面都要把汤喝光', rating: 5, date: '2024-01-13' },
      { id: '2', user: '穷鬼大学生', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=8', content: '18块钱这么大一碗，还要什么自行车', rating: 5, date: '2024-01-10' },
      { id: '3', user: '赶课党', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=9', content: '出餐确实快，适合赶时间的时候来一碗', rating: 4, date: '2024-01-07' }
    ],
    mustTryDishes: [
      { name: '豚骨拉面', price: '¥18', image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=200&h=200&fit=crop', description: '经典款，汤白如雪浓郁醇厚', popularity: 96 },
      { name: '味增拉面', price: '¥16', image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=200&h=200&fit=crop', description: '日式风味，咸香可口', popularity: 82 },
      { name: '溏心蛋', price: '¥3', image: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=200&h=200&fit=crop', description: '必加配料，流心超好吃', popularity: 90 }
    ],
    position: [116.2990, 39.9930],
    markerColor: 'bg-error'
  },
  {
    id: '4',
    name: '博雅塔 · 甜品工坊',
    tag: '精致甜点',
    status: '21:00 打烊',
    statusColor: 'bg-surface-container text-on-surface-variant',
    score: 4.9,
    distance: '步行 5 分钟',
    price: '¥15',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=400&fit=crop',
    aiSummary: '甜品种类多，味道不甜腻，适合下午茶。',
    tags: ['高颜值', '适合拍照'],
    aiDeepSummary: '基于 312 条评论分析：口味评分 4.9 分，颜值评价 4.8 分，性价比 4.6 分。关键词：颜值高、不甜腻、适合拍照、选择多。情感倾向正面占比 97%，下午茶时段人气最高。',
    atmosphere: '少女心爆棚、适合拍照、精致温馨',
    directions: '博雅塔一楼，从图书馆侧门出来即是。骑行 2 分钟，教学楼步行 5 分钟。',
    reviews: [
      { id: '1', user: '甜妹纸', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=10', content: '草莓蛋糕颜值太高了！朋友圈点赞收到手软', rating: 5, date: '2024-01-14' },
      { id: '2', user: '下午茶达人', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=11', content: '不甜不腻刚刚好，水果也很新鲜', rating: 5, date: '2024-01-12' },
      { id: '3', user: '抹茶控', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=12', content: '抹茶系列 yyds！味道超级浓郁', rating: 5, date: '2024-01-09' }
    ],
    mustTryDishes: [
      { name: '草莓奶油蛋糕', price: '¥18', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=200&fit=crop', description: '颜值担当，少女心必备', popularity: 99 },
      { name: '抹茶千层', price: '¥22', image: 'https://images.unsplash.com/photo-1558324603-6bf4d7f3eb91?w=200&h=200&fit=crop', description: '层层叠加，苦涩回甘', popularity: 91 },
      { name: '芝士蛋挞', price: '¥6', image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=200&h=200&fit=crop', description: '外酥内嫩，芝士浓郁', popularity: 85 }
    ],
    position: [116.3100, 40.0010],
    markerColor: 'bg-secondary'
  },
  {
    id: '5',
    name: '湖畔咖啡',
    tag: '咖啡/甜点',
    status: '空闲',
    statusColor: 'bg-secondary-container text-on-secondary-container',
    score: 4.9,
    distance: '步行 12 分钟',
    price: '¥35',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
    aiSummary: '环境安静，适合自习和讨论，咖啡品质在线。',
    tags: ['适合自习', '充电位充足'],
    aiDeepSummary: '基于 203 条评论分析：咖啡品质 4.8 分，环境评价 4.9 分，适合学习 4.9 分。关键词：安静、适合自习、充电位、咖啡好喝。情感倾向正面占比 96%，是学习和工作首选。',
    atmosphere: '安静舒适、适合自习、文艺小资',
    directions: '湖畔旁，从教学楼穿过小树林步行 12 分钟。骑行 5 分钟，校园巴士湖畔站直达。',
    reviews: [
      { id: '1', user: '考研er', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=13', content: '这里太适合学习了！安静有氛围，插座还多', rating: 5, date: '2024-01-15' },
      { id: '2', user: '咖啡爱好者', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=14', content: '手冲咖啡味道很正，豆子品质不错', rating: 5, date: '2024-01-13' },
      { id: '3', user: '小组讨论', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=15', content: '有独立讨论区，团队作业首选', rating: 4, date: '2024-01-10' }
    ],
    mustTryDishes: [
      { name: '拿铁', price: '¥25', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=200&h=200&fit=crop', description: '奶香浓郁，咖啡醇厚', popularity: 94 },
      { name: '手冲单品', price: '¥30', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop', description: '单品豆，品味不同产区风味', popularity: 87 },
      { name: '提拉米苏', price: '¥28', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&h=200&fit=crop', description: '层次丰富，甜而不腻', popularity: 83 }
    ],
    position: [116.3060, 39.9940],
    markerColor: 'bg-secondary'
  }
];
