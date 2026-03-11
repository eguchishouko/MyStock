// src/data/stockOpinions.ts

export interface StockOpinion {
  symbol: string;
  name: string;
  sector: string; 
  rating: 'STRONG BUY' | 'BUY' | 'HOLD' | 'SELL' | 'STRONG SELL';
  content: string;
}

export const stockOpinions: StockOpinion[] = [
  // --- 科技 ---
  {
    symbol: 'NVDA',
    name: 'Nvidia Corporation',
    sector: '科技',
    rating: 'BUY',
    content: '英伟达，著名的显卡制造公司，也是本次AI浪潮的核心。作为现在全球市值第一的公司，GPU 软硬件生态壁垒极其深厚。同业竞争者（如 Google TPU）短期内难以撼动算力垄断地位。在“七巨头 ( Magnificent Seven )”中列为顺位第二的长期配置首选。'
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc',
    sector: '科技',
    rating: 'BUY',
    content: '字母表公司，也就是谷歌的母公司，2026 Q1财报数据还是很好看的，但 Capex 支出过大，所以财报发布后一路跌，但从长远来看，基础设施的重资产投入是押注未来的积极信号。股价差不多是近一年来首次跌破了50日均线，由于前期估值扩张过快，当前正处于良性的挤泡沫阶段，短期承压，但基本面良好，长期看涨。纳斯达克前十的巨头长期最看好 Google 。'
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc',
    sector: '科技',
    rating: 'BUY',
    content: '苹果公司，进可攻退可守，对AI泡沫风险也最小，护城河稳健，一旦进入苹果产品的圈子，最后换上苹果全家桶就是很大概率的事情。不知道买什么就买一些吧。'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp',
    sector: '科技',
    rating: 'BUY',
    content: '微软，2026 Q1财报其实并没有什么利空，各项数据都不错，Azure发展良好，Office 和 LinkedIn 增长稳健，传统业务稳定增长，但股价就这么下来了。微软这种体量的公司，$400 以下的价格基本不需要太犹豫。'
  },
  {
    symbol: 'META',
    name: 'META Platforms, Inc.',
    sector: '科技',
    rating: 'SELL',
    content: '如果说七巨头哪些公司相比其它公司有点掉队，我选 META 是其中一个。扎克伯格几年前宣布进军元宇宙，结果 ChatGPT 出现之后元宇宙就炒不起来了。LLM 做了开源模型 Llama, 第一年还能上桌，Deepseek 和 Qwen 出来之后就找不着北，开上亿年薪挖人，20亿买下 Manus，过了一周 Anthropic 就发布了 Claude Code。OpenAI 在26年要配得上万亿估值，肯定要抢广告的生意。广告市场是存量博弈，Google在广告市场最根基深厚，还有自己的大模型，Meta 是最容易被抢的。除了有巨大波动，不会考虑买入。'
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com, Inc.',
    sector: '科技',
    rating: 'SELL',
    content: '如果说七巨头有哪些公司相比其它公司有点掉队，我选Amazon是其中另一个。OpenAI要抢的另一个生意就是电商。以往要买广告、占位、竞价排名，现在AI来了，排名对它没用，AI会自己对比选品，抢的就是Amazon的生意。结果会不会赢不重要，但带来的影响和股价的下跌是真实的。Amazon主要业务电商和AWS，单一引擎难以支撑其当前的估值水平。'
  },
  {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    sector: '科技',
    rating: 'SELL',
    content: '一开始是造电动汽车，现在还有机器人业务，15000亿的市值，380倍的超高市盈率，只看这家公司的基本面，是完全无法支撑这么高的股价的。股价能有这么高完全是因为CEO是Elon Musk。Tesla比起一个造车公司，更像是“马斯克概念股”。据说2026年SpaceX要携Xai上市，可能转移流动性，抽血Tesla的存量炒作资金。不看好。'
  },
  {
    symbol: 'LITE',
    name: 'Lumentum Holdings Inc.',
    sector: '科技',
    rating: 'BUY',
    content: '鲁门特姆公司，这个名字并不好记。这家公司是专注于光学产品的光通信器件供应商。之前，数据中心的设备之间短距离的数据传输是使用铜缆。但现在 AI 时代，GPU 集群的规模从几千张卡扩展到了几十万张，铜缆的短板越来越明显，发热量大，物理体积大，极限能保证信号完整下的传输距离也只有不到2米，在物理定律面前铜缆已经基本无法满足需求。LITE 是提供激光器芯片的绝对主力,光模块要实现“电变光”，就要靠 LITE 的激光器发光。所以2026年3月2日，NVIDIA向 Lumentum (LITE) 投资 20 亿美元，基本是预告了接下来技术的方向。有了 NVIDIA 的 投资和长期订单，LITE 将直接参与 NVIDIA 下一代 AI 基础架构的研发，业绩确定性非常高。我非常看好光通信设施在未来 AI 基础设施中的地位。'
  },

  // --- 数字资产 ---
  {
    symbol: 'HOOD',
    name: 'Robinhood Markets, Inc.',
    sector: '数字资产',
    rating: 'HOLD',
    content: '交易平台Robinhood，一开始是专做meme币，注重币圈，现在也有很不错的股票生意和预测市场，总体来看不错的公司，基本面持续向好，正在拓展加密货币以外的金融业务。但股价起伏仍然跟BTC相关。目前BTC走势尚不明朗，可能继续下探。'
  },
  {
    symbol: 'COIN',
    name: 'Coinbase Global, Inc.',
    sector: '数字资产',
    rating: 'SELL',
    content: '目前唯一上市的加密货币交易所。如果想接触币股同时有更多更好的生意，选Robinhood；如果买BTC相关股票想要更大的收益，选MicroStrategy。那为什么要选择Coinbase呢？'
  },
  {
    symbol: 'CRCL',
    name: 'Circle Internet Group, Inc.',
    sector: '数字资产',
    rating: 'SELL',
    content: 'USDC的发行商，目前稳定和合规方面做的最好的公司，开盘股价60，几天后迅速涨到接近300，然后就是持续到现在漫长的下跌，一路不知道套住了多少人，这种涨了又跌的公司都会有一个问题，尤其是跌到高点五分之一的Circle, 200, 120的位置累积了不知道多少套牢盘，上涨会面临非常严重的抛压。前些天从60迅猛上涨到100+，短时间又会有人追高，不知道后续会怎么进展。个人并不是十分看好这一块的前景，稳定币现在的绝对龙头是USDT, 如果Tether也想补齐合规的短板，Circle还会进一步承压。'
  },
  {
    symbol: 'MSTR',
    name: 'MicroStrategy Inc.',
    sector: '数字资产',
    rating: 'STRONG SELL',
    content: '原本是做企业软件的公司，现在基本是带杠杆的BTC ETF。股价走势与BTC高度绑定，且波动性还大于BTC。从资产配置效率来看，直接持有 BTC 自行加杠杆显然是更优解。'
  },

  // --- 石油 ---
  {
    symbol: 'OXY',
    name: 'Occidental Petroleum',
    sector: '石油',
    rating: 'BUY',
    content: '西方石油公司，基于中东地缘政治摩擦，伊朗作为全球重要的产油国，如果Trump进攻伊朗，油价会立刻迅速上涨。所以，我需要的是弹性最大、对油价最敏感且流动性极高的股票，在石油公司里，相比Exxon Mobil  (XOM) 或Chevron  (CVX) 这种综合巨头，OXY 是纯粹的上游勘探与生产商，是巴菲特重仓股票（Berkshire Hathaway公司持有OXY约30%的股份），同时OXY也是美国二叠纪盆地的最大地主之一，资产位于美国本土，不会受中东战争影响，能享受到油价上涨和“美国能源优先”政策的红利。'
  },

  // --- 医疗保险 ---
  {
    symbol: 'UNH',
    name: 'UnitedHealth Group',
    sector: '医疗保险',
    rating: 'HOLD',
    content: '联合健康集团，医疗保险赛道的绝对龙头，市占率断层领先，过去一年两次买入，第二次买入成功抄到2025整年最底240。但是持股体验极差，一年以来涨了又跌，这种从高位跌下来的股票有一个问题就是稍微有上涨就会遇到严重的抛压。作为保险行业的龙头股票，市场占有率是第二名的两倍，一家公司的商业模式如果不可轻易替代并且市占率够高，那么就算它提升价格，也不会导致非常严重的客户流失，因为没有足够的竞争对手把它排除掉。所以就算出了枪杀CEO这种事，但该用还是要用，这就是龙头企业的优势，长期看涨，但Trump签订的医疗保险的法案又对这个公司很不利，只能说至少要等到Trump离任了，我没有那么多时间。时间成本也是很重要的成本。'
  },
  {
    symbol: 'NVO',
    name: 'Novo Nordisk A/S',
    sector: '医疗保险',
    rating: 'BUY',
    content: '诺和诺德公司，不错的减肥药公司，当然相比减肥药，更大的市场是糖尿病药物，只是这个药也可以作为减肥药。目前全世界大约有6亿人患有糖尿病，未来这个人数一定会继续增长。诺和诺德的全球糖尿病药物市场份额在三分之一左右，是全球最大的两家糖尿病护理产品供应商之一。但诺和诺德是美国上市的非美国公司，不是美国企业这是个天生劣势，一点利空就开始跳水，2025年反复横跳上不去。现在市值大概只有竞争对手礼来(LLY)的五分之一，市盈率大概只有三分之一，股价非常便宜。虽然有礼来的竞争、部分新药临床试验数据不及预期这些因素，但这个股价显然太低了。长期看涨。'
  },
  {
    symbol: 'LLY',
    name: 'Eli Lilly and Company',
    sector: '医疗保险',
    rating: 'BUY',
    content: '礼来公司，著名的制药公司，在糖尿病药物的市场中的双寡头之一，礼来的传统糖尿病药物的全球市场份额与诺和诺德旗鼓相当，同样在30%左右，但是新的GLP-1 药物替尔泊肽的发布之后，礼来在这个增量市场的份额已经超越了诺和诺德，占据大约60%的市场份额，竞争力很强。除此之外，作为美国公司还有一个不错的庄家，股价比较硬，之前的多次利空都给拉了上去。减肥药和糖尿病药物都是上升市场，我认为能容下诺和诺德和礼来两家公司。'
  },
  // --- 期货 ---
  {
    symbol: 'GOLD',
    name: 'Gold Futures',
    sector: '期货',
    rating: 'HOLD',
    content: '黄金，贯穿历史的天然货币与终极避险资产。一月涨的太多了，就算有回调，现在还是在50日均线以上。伊朗跟美伊一打，现在还在涨，快到前高了，又考虑到全球法币的信用，长期看多，适合作为投资组合的压舱石。'
  },
  {
    symbol: 'SILVER',
    name: 'Silver Futures',
    sector: '期货',
    rating: 'SELL',
    content: '白银，几乎和黄金一样出名的资产，但前段时间涨太多了。跟黄金不同，银可以是工业产品，超过100严重偏离产业基本面，后续会继续回调到适合的位置。'
  },

  // --- Crypto ---
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    sector: 'Crypto',
    rating: 'HOLD',
    content: '想象一下，因为持续不断的高通货膨胀，你的毕生积蓄几乎归零。战争要来了。你必须立刻离开。银行关门。网络瘫痪。ATM每天最多只能取20元。你有房子，却来不及卖。你有车，却带不走。你身上只有口袋里的现金，可能再加点首饰。这就是现在的伊朗。100万里亚尔只能换不到1美元。再想象一下，如果你当初持有的是比特币。没有银行。没有边境限制。没有任何政府能动它。牛市时，大家把比特币当投机。熊市时，大家说它没价值。但当银行关门、货币归零时，它才显露出真正的用途。数字货币在危机情况下是最好的藏富工具。携带黄金逃难根本不现实，只要去安全的地方之前被发现谁有黄金，最后大概率都会被抢被杀，毫无例外。真正的避险资产，必须同时逃离物理与制度。这才是电子黄金，这就是BTC。比特币的价值就在于危机时的自由与保障。只要在大脑中藏一串助记词，就能够把这笔钱带到世界任何一个地方，发生战争的时候，BTC就是还原财富的备份文件。以上是我很认可的BTC的价值。抛开这些宏观的东西，价格方面现在正处在下跌周期，目前大约6万+，如果下方5.8万守不住，可能真要深度回调到三四万左右了。但作为去中心化资产，其底层逻辑没变，长期看涨。'
  }
];

export function getTradingViewLink(symbol: string): string {
  if (symbol === 'BTC') return `https://www.tradingview.com/symbols/BTCUSD/`;
  if (symbol === 'GOLD') return `https://www.tradingview.com/symbols/TVC-GOLD/`;
  if (symbol === 'SILVER') return `https://www.tradingview.com/symbols/TVC-SILVER/`;
  return `https://www.tradingview.com/symbols/${symbol}/`;
}

export function getRatingColor(rating: string): string {
  switch (rating) {
    case 'STRONG BUY': return '#00c853';
    case 'BUY': return '#00c853';
    case 'HOLD': return '#ffab00';
    case 'SELL': return '#ff3d00';
    case 'STRONG SELL': return '#d50000';
    default: return '#888';
  }
}