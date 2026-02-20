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
    content: '作为现在全球市值第一的公司，GPU软硬件生态壁垒极其深厚。同业竞争者（如 Google TPU）短期内难以撼动算力垄断地位。在“七巨头 (Magnificent Seven)”中列为顺位第二的长期配置首选。'
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    sector: '科技',
    rating: 'BUY',
    content: '2026 Q1财报数据还是很好看的，但Capex支出过大，所以财报发布后一路跌，但从长远来看，基础设施的重资产投入是押注未来的积极信号。股价差不多是近一年来首次跌破了50日均线，由于前期估值扩张过快，当前正处于良性的挤泡沫阶段，短期承压，但基本面良好，长期看涨。纳斯达克前十的巨头长期最看好Google。'
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc',
    sector: '科技',
    rating: 'BUY',
    content: '进可攻退可守，对AI泡沫风险也最小，护城河稳健。不知道买什么就买一些吧。'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp',
    sector: '科技',
    rating: 'STRONG BUY',
    content: '2026 Q1财报其实并没有什么利空，各项数据都不错，Azure发展良好，Office和LinkedIn增长稳健，传统业务稳定增长，但股价就这么下来了。微软这种体量的公司，400以下的价格基本不需要太犹豫。'
  },
  {
    symbol: 'META',
    name: 'META Platforms, Inc.',
    sector: '科技',
    rating: 'SELL',
    content: '如果说七巨头哪些公司相比其它公司有点掉队，我选META是其中一个。扎克伯格几年前宣布进军元宇宙，结果ChatGPT出现之后元宇宙就炒不起来了。LLM做了开源模型Llama, 第一年还能上桌，Deepseek和Qwen出来之后就找不着北，开上亿年薪挖人，20亿买下Manus，过了一周Anthropic就发布了Claude Code。OpenAI在26年要配得上万亿估值，肯定要抢广告的生意。广告市场存量博弈，Google最强，Meta最容易被抢。除了有巨大波动，不会考虑买入。'
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com, Inc.',
    sector: '科技',
    rating: 'SELL',
    content: 'OpenAI要抢的另一个生意就是电商。以往要买广告、占位、竞价排名，现在AI来了，排名对它没用，AI会自己对比选品，抢的就是Amazon的生意。结果会不会赢不重要，但带来的影响和股价的下跌是真实的。Amazon主要业务电商和AWS，单一引擎难以支撑其当前的估值水平。'
  },
  {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    sector: '科技',
    rating: 'SELL',
    content: '15000亿的市值，380倍的超高市盈率，只看这家公司的基本面，是完全无法支撑这么高的股价的。股价能有这么高完全是因为CEO是Elon Musk。Tesla比起一个造车公司，更像是“马斯克概念股”。据说2026年SpaceX要携Xai上市，可能转移流动性，抽血Tesla的存量炒作资金。不是很看好。'
  },

  // --- 数字资产 ---
  {
    symbol: 'HOOD',
    name: 'Robinhood Markets, Inc.',
    sector: '数字资产',
    rating: 'HOLD',
    content: '基本面持续向好的优质公司，正在拓展加密货币以外的多元化金融业务，但股价起伏仍然跟BTC相关。目前BTC走势尚不明朗，可能继续下探。'
  },
  {
    symbol: 'COIN',
    name: 'Coinbase Global, Inc.',
    sector: '数字资产',
    rating: 'SELL',
    content: '如果想接触币股同时有更多更好的生意，选Robinhood；如果买BTC相关股票想要更大的收益，选MicroStrategy。那为什么要选择Coinbase呢？'
  },
  {
    symbol: 'CRCL',
    name: 'Circle Internet Group, Inc.',
    sector: '数字资产',
    rating: 'SELL',
    content: 'USDC的发行商，目前稳定和合规方面做的最好的公司，开盘股价60，几天后迅速涨到接近300，然后就是持续到现在漫长的下跌，一路不知道套住了多少人，这种涨了又跌的公司都会有一个问题，尤其是跌到高点五分之一的Circle, 200, 120, 80的累积了不知道多少套牢盘，上涨会面临非常严重的抛压，而且个人并不是十分看好这一块的前景，稳定币现在的绝对龙头是USDT, 如果Tether也想补齐合规的短板，Circle还会进一步承压。'
  },
  {
    symbol: 'MSTR',
    name: 'MicroStrategy Inc.',
    sector: '数字资产',
    rating: 'STRONG SELL',
    content: '原本是做企业软件的公司，现在基本是带杠杆的BTC ETF。股价走势与BTC高度绑定，且波动性还大于BTC。从资产配置效率来看，直接持有 BTC 显然是更优解。'
  },

  // --- 石油 ---
  {
    symbol: 'OXY',
    name: 'Occidental Petroleum',
    sector: '石油',
    rating: 'BUY',
    content: '基于中东地缘政治摩擦，伊朗作为全球重要的产油国，如果Trump进攻伊朗，油价会立刻迅速上涨。所以，我需要的是弹性最大、对油价最敏感且流动性极高的股票，在石油公司里，相比Exxon Mobil  (XOM) 或Chevron  (CVX) 这种综合巨头，OXY 是纯粹的上游勘探与生产商，是巴菲特重仓股票（Berkshire Hathaway公司持有OXY约30%的股份），同时OXY 也是美国二叠纪盆地的最大地主之一，资产位于美国本土，不会受中东战争影响，能享受到油价上涨和“美国能源优先”政策的红利。'
  },

  // --- 医疗保险 ---
  {
    symbol: 'UNH',
    name: 'UnitedHealth Group',
    sector: '医疗保险',
    rating: 'HOLD',
    content: '医疗保险赛道的绝对龙头，市占率断层领先。过去一年两次买入，第二次抄到2025整年大底240。但持股体验极差，上方抛压严重。作为龙头，就算出了枪杀CEO的事，该用还是要用，长期看涨。但Trump签订的医疗保险法案对公司不利，至少要等到他离任，时间成本太高。'
  },

  // --- 期货 ---
  {
    symbol: 'GOLD',
    name: 'Gold Futures',
    sector: '期货',
    rating: 'HOLD',
    content: '贯穿历史的天然货币与终极避险资产。一月涨的太多了，就算有回调，现在还是在50日均线以上。考虑到全球法币的信用，长期看多，适合作为投资组合的压舱石。'
  },
  {
    symbol: 'SILVER',
    name: 'Silver Futures',
    sector: '期货',
    rating: 'SELL',
    content: '还是涨太多了。跟黄金不同，银可以是工业产品，超过100严重偏离产业基本面，后续会继续回调到适合的位置，暂时还看不到底。'
  },

  // --- Crypto ---
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    sector: 'Crypto',
    rating: 'HOLD',
    content: '认可它是数字黄金，但波动太大，无法作为稳固的避险资产。现在正处在下跌周期，价格大约6万+，如果下方5.8万守不住，可能真要深度回调到三四万左右了。但作为去中心化资产，其底层逻辑没变，长期看涨。'
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