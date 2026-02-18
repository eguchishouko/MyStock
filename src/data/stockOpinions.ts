// src/data/stockOpinions.ts

export interface StockOpinion {
    symbol: string;
    name: string;
    sector: string; // 板块: 科技, 币股, 石油, 医疗, 期货, Crypto
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
      content: '现在全世界市值最高的公司，只要这波AI浪潮还在，Nvidia就还是这个时代的核心资产。七巨头里面第二看好的公司。虽然Google有TPU, 但TPU是很难动摇GPU地位的。'
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      sector: '科技',
      rating: 'BUY',
      content: '2026 Q1财报数据还是很好看的，但就一项，Capex太大，所以财报发布后一路跌。但谁还记得1年前开支大是投资多是发展的信号？股价差不多是近一年来首次跌破了50日均线，由于前段时间涨的太多，现在应该到了大回调的时候，短期看跌，但基本面良好，长期仍然看涨。纳斯达克前十的巨头长期最看好Google。'
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
      content: '如果说七巨头哪些公司相比其它公司有点掉队，我选META是其中一个。扎克伯格几年前宣布进军元宇宙，甚至把名字都改成了Meta, 结果ChatGPT出现之后元宇宙就炒不起来了。LLM的时代做了开源模型Llama, 第一年还能有位置做，Deepseek和Qwen出来之后就被打的找不着北，开过亿年薪挖人，20亿买下Manus然后过了一周Anthropic就发布了Claude Code, 所以领导人的眼光还是有影响的。除了公司内部，OpenAI带来的影响也很大。OpenAI在26年要配得上它的万亿估值，它和有跟它一样生意的公司肯定要抢两个生意，一个就是广告。广告市场是存量博弈，Google自然是最强的，如果OpenAI也来抢，那谁比较弱容易被抢呢？Meta. 虽然落后的巨头也是巨头，Facebook和ig 的影响力还很大，Threads的发展也很好。但这些或许还不够撑起Meta. 除了有巨大波动的时候，我不会考虑买入。'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com, Inc.',
      sector: '科技',
      rating: 'SELL',
      content: 'OpenAI要抢的另一个生意就是电商。以往要买广告、占位、竞价排名，现在AI来了，排名对它没用，AI会自己对比选品，抢的就是Amazon的生意。结果会不会赢不重要，但带来的影响和股价的下跌是真实的。Amazon主要的业务电商和AWS，少了任何一个都很难支撑现在的股价。'
    },
    {
      symbol: 'TSLA',
      name: 'Tesla, Inc.',
      sector: '科技',
      rating: 'SELL',
      content: '15000亿的市值，380倍的超高市盈率，只看财报中这家公司的生意，是完全无法支撑这么高的股价的。股价能有这么高完全是因为CEO是Elon Musk。Tesla比起一个造车公司，更像是“马斯克概念股”。据说2026年SpaceX要携Xai上市，对Tesla会有多少冲击还不知道。不是十分看好。'
    },
  
    // --- 币股 ---
    {
      symbol: 'HOOD',
      name: 'Robinhood Markets, Inc.',
      sector: '币股',
      rating: 'BUY',
      content: '好公司，但买的时候不是好价格。虽然有了大量除加密货币交易之外的生意，但股价起伏仍然跟BTC相关。目前BTC走势尚不明朗，个人认为已经接近底部了。'
    },
    {
      symbol: 'COIN',
      name: 'Coinbase Global, Inc.',
      sector: '币股',
      rating: 'SELL',
      content: '如果想接触币股同时有更多更好的生意，选Robinhood；如果买币股想要更大的收益，选MicroStrategy。那为什么要选择Coinbase呢？'
    },
    {
      symbol: 'CRCL',
      name: 'Circle Internet Group, Inc.',
      sector: '币股',
      rating: 'SELL',
      content: 'USDC的发行商，目前稳定和合规方面做的最好的公司，开盘股价60，几天后迅速涨到接近300，然后就是持续到现在漫长的下跌，一路不知道套住了多少人，这种涨了又跌的公司都会有一个问题，尤其是跌到高点五分之一的Circle, 200, 120, 80的价位应该套住了很多人，上涨会面临非常严重的抛压，而且个人并不是十分看好这一块的前景，现在流通最大的稳定币还是USDT, 如果Tether也想做合规，Circle很难招架。'
    },
    {
      symbol: 'MSTR',
      name: 'MicroStrategy Inc.',
      sector: '币股',
      rating: 'STRONG SELL',
      content: '没什么好说的，原本是做企业软件的公司，20年采用了所谓“BTC本位”策略，现在基本是带杠杆的BTC ETF。股价走势与BTC高度绑定，且波动性还大于BTC。我买这个公司，为什么不直接买BTC？'
    },
  
    // --- 石油 ---
    {
      symbol: 'OXY',
      name: 'Occidental Petroleum',
      sector: '石油',
      rating: 'BUY',
      content: '鉴于现在伊朗等地的局势，伊朗作为全球重要的产油国，如果Trump进攻伊朗，油价会立刻迅速上涨。所以，我需要的是弹性最大、对油价最敏感且流动性极高的股票，在石油公司里，相比Exxon Mobil  (XOM) 或Chevron  (CVX) 这种综合巨头，OXY 是纯粹的上游勘探与生产商，是巴菲特重仓股票（Berkshire Hathaway公司持有OXY约30%的股份），同时OXY 也是美国二叠纪盆地的最大地主之一，资产位于美国本土，不会受中东战火影响，能享受到油价上涨和“美国能源优先”政策的红利。但我显然没那么多时间等它慢慢上去，接下来怎么样还是要看局势什么变化。'
    },
  
    // --- 医疗 ---
    {
      symbol: 'UNH',
      name: 'UnitedHealth Group',
      sector: '医疗',
      rating: 'HOLD',
      content: '过去一年两次买入，第二次买入成功抄到2025整年最底240。但是持股体验太差了，一年以来涨了又跌，这种从高位跌下来的股票有一个问题就是稍微有上涨就会遇到严重的抛压。作为保险行业的龙头股票，市场占有率是第二名的两倍，所以就算出了枪杀CEO这种事，但该用还是要用，长期看还是看涨的，但Trump签订的医疗保险的法案又对这个公司很不利，只能说，至少要等到Trump离任了，我没有那么多时间。时间成本也是很重要的成本。'
    },
  
    // --- 期货 ---
    {
      symbol: 'GOLD',
      name: 'Gold Futures',
      sector: '期货',
      rating: 'HOLD',
      content: '一月涨的太多了，就算有回调，现在还是在50日均线以上。但长期看，黄金贯穿千古，贯通世界，天然就是货币。无论如何，持有黄金长期来看总是涨的。'
    },
    {
      symbol: 'SILVER',
      name: 'Silver Futures',
      sector: '期货',
      rating: 'SELL',
      content: '还是涨太多了，跟黄金不同，银可以是工业产品，超过100基本没道理，后续会回调到适合的位置，暂时还看不到底。'
    },
  
    // --- Crypto ---
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      sector: 'Crypto',
      rating: 'HOLD',
      content: '虽然很多人不认可，但我认可它是数字黄金。问题是波动太大，无法作为稳固的避险资产。现在正处在下跌周期，如果5.8万守不住，可能真要回调到三四万。但数字黄金相比实体黄金有一些独特优势，长期来看仍然是上涨。'
    }
  ];
  
  // 辅助函数：生成 TradingView 链接
  export function getTradingViewLink(symbol: string): string {
    // 对于期货和数字货币做特殊处理，其他默认为美股
    if (symbol === 'BTC') return `https://www.tradingview.com/symbols/BTCUSD/`;
    if (symbol === 'GOLD') return `https://www.tradingview.com/symbols/TVC-GOLD/`;
    if (symbol === 'SILVER') return `https://www.tradingview.com/symbols/TVC-SILVER/`;
    // 美股通用
    return `https://www.tradingview.com/symbols/${symbol}/`;
  }
  
  // 辅助函数：获取评级颜色
  export function getRatingColor(rating: string): string {
    switch (rating) {
      case 'STRONG BUY': return '#00c853'; // 强力买入绿
      case 'BUY': return '#00c853';
      case 'HOLD': return '#ffab00';       // 持有黄
      case 'SELL': return '#ff3d00';       // 卖出红
      case 'STRONG SELL': return '#d50000'; // 强力卖出深红
      default: return '#888';
    }
  }