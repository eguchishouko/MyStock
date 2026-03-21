// src/data/stockOpinions.ts

export interface StockOpinion {
  symbol: string;
  name: string;
  sector: string; 
  rating: 'STRONG BUY' | 'BUY' | 'HOLD' | 'SELL' | 'STRONG SELL';
  content: string;
}

export const stockOpinions: StockOpinion[] =[
  // ==========================================
  // 一、 个股：科技与通信 (US Equities: Tech & Comm)
  // ==========================================
  {
    symbol: 'NVDA',
    name: 'Nvidia Corporation',
    sector: '个股：科技与通信',
    rating: 'BUY',
    content: '英伟达，著名的显卡制造公司，也是本次AI浪潮的核心。作为现在全球市值第一的公司，GPU 软硬件生态壁垒极其深厚。同业竞争者（如 Google TPU）短期内难以撼动算力垄地位。在“七巨头 ( Magnificent Seven )”中列为顺位第二的长期配置首选。'
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc',
    sector: '个股：科技与通信',
    rating: 'BUY',
    content: '字母表公司，也就是谷歌的母公司，2026 Q1财报数据还是很好看的，但 Capex 支出过大，所以财报发布后一路跌，但从长远来看，基础设施的重资产投入是押注未来的积极信号。股价差不多是近一年来首次跌破了50日均线，由于前期估值扩张过快，当前正处于良性的挤泡沫阶段，短期承压，但基本面良好，长期看涨。纳斯达克前十的巨头长期最看好 Google 。'
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc',
    sector: '个股：科技与通信',
    rating: 'BUY',
    content: '苹果公司，进可攻退可守，对AI泡沫风险也最小，护城河稳健，一旦进入苹果产品的圈子，最后换上苹果全家桶就是很大概率的事情。不知道买什么就买一些吧。'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp',
    sector: '个股：科技与通信',
    rating: 'BUY',
    content: '微软，2026 Q1财报其实并没有什么利空，各项数据都不错，Azure发展良好，Office 和 LinkedIn 增长稳健，传统业务稳定增长，但股价就这么下来了。微软这种体量的公司，$400 以下的价格基本不需要太犹豫。'
  },
  {
    symbol: 'META',
    name: 'META Platforms, Inc.',
    sector: '个股：科技与通信',
    rating: 'SELL',
    content: '如果说七巨头哪些公司相比其它公司有点掉队，我选 META 是其中一个。扎克伯格几年前宣布进军元宇宙，结果 ChatGPT 出现之后元宇宙就炒不起来了。LLM 做了开源模型 Llama, 第一年还能上桌，Deepseek 和 Qwen 出来之后就找不着北，开上亿年薪挖人，20亿买下 Manus，过了一周 Anthropic 就发布了 Claude Code。OpenAI 在26年要配得上万亿估值，肯定要抢广告的生意。广告市场是存量博弈，Google在广告市场最根基深厚，还有自己的大模型，Meta 是最容易被抢的。除了有巨大波动，不会考虑买入。'
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com, Inc.',
    sector: '个股：科技与通信',
    rating: 'SELL',
    content: '如果说七巨头有哪些公司相比其它公司有点掉队，我选Amazon是其中另一个。OpenAI要抢的另一个生意就是电商。以往要买广告、占位、竞价排名，现在AI来了，排名对它没用，AI会自己对比选品，抢的就是Amazon的生意。结果会不会赢不重要，但带来的影响和股价的下跌是真实的。Amazon主要业务电商和AWS，单一引擎难以支撑其当前的估值水平。'
  },
  {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    sector: '个股：科技与通信',
    rating: 'SELL',
    content: '特斯拉，一开始是造电动汽车，现在还有机器人业务，15000亿的市值，380倍的超高市盈率，只看这家公司的基本面，是完全无法支撑这么高的股价的。股价能有这么高完全是因为CEO是Elon Musk。Tesla比起一个造车公司，更像是“马斯克概念股”。据说2026年SpaceX要携Xai上市，可能转移流动性，抽血Tesla的存量炒作资金。不看好。'
  },
  {
    symbol: 'LITE',
    name: 'Lumentum Holdings Inc.',
    sector: '个股：科技与通信',
    rating: 'BUY',
    content: '鲁门特姆公司，这个名字并不好记。这家公司是专注于光学产品的光通信器件供应商。之前，数据中心的设备之间短距离的数据传输是使用铜缆。但现在 AI 时代，GPU 集群的规模从几千张卡扩展到了几十万张，铜缆的短板越来越明显，发热量大，物理体积大，极限能保证信号完整下的传输距离也只有不到2米，在物理定律面前铜缆已经基本无法满足需求。LITE 是提供激光器芯片的绝对主力,光模块要实现“电变光”，就要靠 LITE 的激光器发光。所以2026年3月2日，NVIDIA向 Lumentum (LITE) 投资 20 亿美元，基本是预告了接下来技术的方向。有了 NVIDIA 的 投资和长期订单，LITE 将直接参与 NVIDIA 下一代 AI 基础架构的研发，业绩确定性非常高。我非常看好光通信设施在未来 AI 基础设施中的地位。'
  },

  // ==========================================
  // 二、 个股：传统价值与周期 (US Equities: Value & Cyclical)
  // ==========================================
  {
    symbol: 'OXY',
    name: 'Occidental Petroleum Corporation',
    sector: '个股：传统价值与周期',
    rating: 'BUY',
    content: '西方石油公司，在石油公司里，相比 XOM (Exxon Mobil Corporation, 埃克森美孚) 或 CVX (Chevron Corporation, 雪佛龙) 这种综合巨头，OXY 是纯粹的上游勘探与生产商，股价对油价非常敏感。是巴菲特重仓股票（Berkshire Hathaway公司持有OXY约30%的股份），同时 OXY 也是Permian Basin 最大生产商，这个油田也是全球最赚钱的油田之一，公司也大量投资新技术例如空气捕碳，碳封存等等，如果未来碳市场发展，这会是新的利润来源。是个值得中短期持有的周期股。'
  },
  {
    symbol: 'UNH',
    name: 'UnitedHealth Group',
    sector: '个股：传统价值与周期',
    rating: 'HOLD',
    content: '联合健康集团，医疗保险赛道的绝对龙头，市占率断层领先，过去一年两次买入，第二次买入成功抄到2025整年最底240。但是持股体验极差，一年以来涨了又跌，这种从高位跌下来的股票有一个问题就是稍微有上涨就会遇到严重的抛压。作为保险行业的龙头股票，市场占有率是第二名的两倍，一家公司的商业模式如果不可轻易替代并且市占率够高，那么就算它提升价格，也不会导致非常严重的客户流失，因为没有足够的竞争对手把它排除掉。所以就算出了枪杀CEO这种事，但该用还是要用，这就是龙头企业的优势，长期看涨，但Trump签订的医疗保险的法案又对这个公司很不利，只能说至少要等到Trump离任了，我没有那么多时间。时间成本也是很重要的成本。'
  },
  {
    symbol: 'NVO',
    name: 'Novo Nordisk A/S',
    sector: '个股：传统价值与周期',
    rating: 'BUY',
    content: '诺和诺德公司，不错的减肥药公司，当然相比减肥药，更大的市场是糖尿病药物，只是这个药也可以作为减肥药。目前全世界大约有6亿人患有糖尿病，未来这个人数一定会继续增长。诺和诺德的全球糖尿病药物市场份额在三分之一左右，是全球最大的两家糖尿病护理产品供应商之一。但诺和诺德是美国上市的非美国公司，不是美国企业这是个天生劣势，一点利空就开始跳水，2025年反复横跳上不去。现在市值大概只有竞争对手礼来(LLY)的五分之一，市盈率大概只有三分之一，股价非常便宜。虽然有礼来的竞争、部分新药临床试验数据不及预期这些因素，但这个股价显然太低了。长期看涨。'
  },
  {
    symbol: 'LLY',
    name: 'Eli Lilly and Company',
    sector: '个股：传统价值与周期',
    rating: 'BUY',
    content: '礼来公司，著名的制药公司，在糖尿病药物的市场中的双寡头之一，礼来的传统糖尿病药物的全球市场份额与诺和诺德旗鼓相当，同样在30%左右，但是新的GLP-1 药物替尔泊肽的发布之后，礼来在这个增量市场的份额已经超越了诺和诺德，占据大约60%的市场份额，竞争力很强。除此之外，作为美国公司还有一个不错的庄家，股价比较硬，之前的多次利空都给拉了上去。减肥药和糖尿病药物都是上升市场，我认为能容下诺和诺德和礼来两家公司。'
  },

  // ==========================================
  // 三、 指数：宽基与杠杆 (Indices: Broad Market & Leveraged)
  // ==========================================
  {
    symbol: 'QQQ',
    name: 'Invesco QQQ Trust',
    sector: '指数：宽基与杠杆',
    rating: 'BUY',
    content: '最经典的直接追踪纳斯达克100指数的宽基 ETF ，规模最大、流动性最好、期权交易活跃，适合买入并持有。'
  },
  {
    symbol: 'QQQM',
    name: 'Invesco NASDAQ 100 ETF',
    sector: '指数：宽基与杠杆',
    rating: 'BUY',
    content: '直接追踪纳斯达克100指数的宽基 ETF ，被称为“小 QQQ”，跟QQQ不同的是管理费率更低（0.15%， QQQ 是 0.20%），单股市值更小。如果打算长期定投纳指并且不频繁交易，QQQM 是比 QQQ 更好的平替选择。'
  },
  {
    symbol: 'QLD',
    name: 'ProShares Ultra QQQ',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '杠杆纳斯达克100指数 ETF，2倍做多纳斯达克100指数。所有杠杆产品都带有波动率损耗，不适合长期持有。'
  },
  {
    symbol: 'TQQQ',
    name: 'ProShares UltraPro QQQ',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '杠杆纳斯达克100指数 ETF，3倍做多纳斯达克100指数。'
  },
  {
    symbol: 'PSQ',
    name: 'ProShares Short QQQ',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '反向杠杆纳斯达克100指数ETF，1倍做空纳斯达克100指数。适合预判纳指将跌的时候买入。'
  },
  {
    symbol: 'QID',
    name: 'ProShares UltraShort QQQ',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '反向杠杆纳斯达克100指数ETF，2倍做空纳斯达克100指数。'
  },
  {
    symbol: 'SQQQ',
    name: 'ProShares UltraPro Short QQQ',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '反向杠杆纳斯达克100指数ETF，3倍做空纳斯达克100指数。'
  },
  {
    symbol: 'QYLD',
    name: 'Global X NASDAQ 100 Covered Call ETF',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '最经典的备兑期权策略 ETF ，这类ETF的特点是每个月都有分红，年化派息率通常在10% 左右。缺点是在单边上涨的大牛市中，它的涨幅会落后于 QQQ。'
  },
  {
    symbol: 'JEPQ',
    name: 'JPMorgan Nasdaq Equity Premium Income',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: 'JPMorgan Chase (JPM, 摩根大通) 推出的主动管理型备兑 ETF。基金经理会主动选择卖出哪些期权，尝试在“高分红”和“资本增值”之间找到比 QYLD 更好的平衡。'
  },
  {
    symbol: 'QQQE',
    name: 'Direxion NASDAQ-100 Equal Weighted',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '权重变体 ETF ，因为纳斯达克100指数是“市值加权”的，意思是AAPL、MSFT、NVDA 等几家科技巨头占据了极大的比重。如果看好美国科技和创新行业整体，但又担心纳指的集中度过高，可以使用这类产品。QQQE 是纳指100的等权重版本。它将资金平均分配给指数内的100家公司，每家公司占比 1%。当二三线科技股表现优于超级巨头时，QQQE 的表现会强于常规的 QQQ。'
  },
  {
    symbol: 'NQ',
    name: 'E-mini Nasdaq 100',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '迷你纳指期货，自带杠杆，可以几乎24小时交易。适合资金量较大或对操作频繁的投资者。但我个人并不推荐过于频繁的交易。'
  },
  {
    symbol: 'MNQ',
    name: 'Micro E-mini Nasdaq 100',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '微型纳指期货，合约价值是 NQ 的十分之一。MNQ的优点是极大降低了散户参与期货交易的门槛，适合用来做日内的精准对冲或投机。同样，我不推荐过于频繁的进行交易。'
  },
  {
    symbol: 'SPY',
    name: 'SPDR S&P 500 ETF',
    sector: '指数：宽基与杠杆',
    rating: 'BUY',
    content: '最经典的直接追踪标准普尔500指数的宽基ETF, 也是全市场第一支ETF，规模最大，期权活跃。适合机构大资金进出和频繁期权交易等。'
  },
  {
    symbol: 'VOO',
    name: 'Vanguard S&P 500 ETF',
    sector: '指数：宽基与杠杆',
    rating: 'BUY',
    content: 'The Vanguard Group （先锋领航集团）发行的宽基ETF, 因为费率低，只有0.03% ，相比费率为0.09%的SPY更适合散户和长期投资者长期持有并赚取复利。'
  },
  {
    symbol: 'IVV',
    name: 'iShares Core S&P 500 ETF',
    sector: '指数：宽基与杠杆',
    rating: 'BUY',
    content: 'BlackRock Inc (BLK，贝莱德集团) 旗下产品，费率和VOO相同是0.03%，表现也跟VOO几乎无异，同样适合散户和长期投资者长期持有并赚取复利。'
  },
  {
    symbol: 'SSO',
    name: 'ProShares Ultra S&P500',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '杠杆标准普尔500指数 ETF，2倍做多标普500。所有杠杆产品都带有波动率损耗，不适合长期持有。'
  },
  {
    symbol: 'UPRO',
    name: 'ProShares UltraPro S&P500',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '杠杆标准普尔500指数 ETF，3倍做多标普500。'
  },
  {
    symbol: 'SH',
    name: 'ProShares Short S&P500',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '反向杠杆标准普尔500指数 ETF，1倍做空标普500。适合预判标普将跌的时候买入。'
  },
  {
    symbol: 'SDS',
    name: 'ProShares UltraShort S&P500',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '反向杠杆标准普尔500指数 ETF，2倍做空标普500。'
  },
  {
    symbol: 'SPXU',
    name: 'ProShares UltraPro Short S&P500',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '反向杠杆标准普尔500指数 ETF，3倍做空标普500。'
  },
  {
    symbol: 'RSP',
    name: 'Invesco S&P 500 Equal Weight ETF',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '标普500等权重ETF。它将500家公司的权重强制均分为0.2%。标普500虽然行业分散，但科技巨头（例如 Magnificent 7）的权重依然很大。当宏观环境利好传统实体经济，科技巨头承压时，RSP 的表现通常会优于 SPY。'
  },
  {
    symbol: 'JEPI',
    name: 'JPMorgan Equity Premium Income',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '主动型红利标普500 ETF产品。它主要持有标普500中的低波动蓝筹股，并结合卖出期权策略（ELNs），提供每月约 7%-9% 的年化派息，抗跌能力比 SPY 强，牛市表现可能略差。'
  },
  {
    symbol: 'XYLD',
    name: 'Global X S&P 500 Covered Call',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '备兑期权ETF，机械地卖出平值看涨期权，适合纯粹为了收息的投资者。'
  },
  {
    symbol: 'ES',
    name: 'E-mini S&P 500',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '迷你标普期货，对于追求极高资金利用率的日内交易者等人来说，衍生品是绕不开的，ES是华尔街交易量最大的宏观对冲工具，适合高阶风控，杠杆交易等。我个人不建议进行过于频繁的操作。'
  },
  {
    symbol: 'MES',
    name: 'Micro E-mini S&P 500',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '微型标普期货，合约价值是 ES 的十分之一。它的初始保证金要求相对较低，适合用来做精准的跨资产对冲。但如果持有过夜，券商的隔夜保证金要求通常会大幅提高，需要严格控制仓位以防爆仓。同样，我个人不建议进行过于频繁的操作。'
  },
  {
    symbol: 'DIA',
    name: 'SPDR Dow Jones Industrial Average',
    sector: '指数：宽基与杠杆',
    rating: 'BUY',
    content: '道琼斯指数的核心现货 ETF ，与纳指和标普有多家基金公司激烈竞争不同，道指的核心现货 ETF 一家独大，DIA是追踪道指最准确和流动性最好的 ETF。它还是市场上少有的按月派息（Monthly Dividend）的宽基 ETF。因为道指的30家企业基本都是盈利稳定、分红慷慨的成熟老牌巨头，所以 DIA 非常适合作为稳健收息的底仓。'
  },
  {
    symbol: 'DDM',
    name: 'ProShares Ultra Dow30',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '杠杆道琼斯指数 ETF，2倍做多道琼斯指数。所有杠杆产品都带有波动率损耗，不适合长期持有。'
  },
  {
    symbol: 'UDOW',
    name: 'ProShares UltraPro Dow30',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '杠杆道琼斯指数 ETF，3倍做多道琼斯指数。'
  },
  {
    symbol: 'DOG',
    name: 'ProShares Short Dow30',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '反向杠杆道琼斯指数 ETF，1倍做空道琼斯指数。'
  },
  {
    symbol: 'DXD',
    name: 'ProShares UltraShort Dow30',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '反向杠杆道琼斯指数 ETF，2倍做空道琼斯指数。'
  },
  {
    symbol: 'SDOW',
    name: 'ProShares UltraPro Short Dow30',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '反向杠杆道琼斯指数 ETF，3倍做空道琼斯指数。'
  },
  {
    symbol: 'DJD',
    name: 'Invesco Dow Jones Dividend ETF',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '优化权重与收益的变体 ETF ，因为道指采用“价格加权”，导致股价近500美元时候的UNH对指数的影响力，远大于股价100多美元时候的AAPL，一些产品试图优化这种略显老派的编制方式。DJD就是其中的代表，它提取了道指中的30家公司，但不再按股价给它们排座次，而是按股息率（Dividend Yield）加权。派息越慷慨的公司权重越大，非常适合纯价值和红利投资者。'
  },
  {
    symbol: 'YM',
    name: 'E-mini Dow',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '迷你道指期货。'
  },
  {
    symbol: 'MYM',
    name: 'Micro E-mini Dow',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '微型道指期货。合约价值是 YM 的十分之一，保证金门槛低。'
  },
  {
    symbol: 'IWM',
    name: 'iShares Russell 2000 ETF',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '罗素 2000 指数 ETF。不同于被跨国巨头主导的标普500，罗素2000主要由美国本土的中小企业组成。这些企业大多没有海外业务，因此对美联储的利率周期和美国国内信贷环境非常敏感。在降息周期或经济复苏初期，它的爆发力比较强；在高息环境下压力更大。'
  },
  {
    symbol: 'TNA',
    name: 'Direxion Daily Small Cap Bull 3X',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '3倍杠杆做多罗素 2000 指数。'
  },
  {
    symbol: 'TZA',
    name: 'Direxion Daily Small Cap Bear 3X',
    sector: '指数：宽基与杠杆',
    rating: 'HOLD',
    content: '3倍杠杆做空罗素 2000 指数。在宏观衰退预期升温时，做空中小盘的胜率和空间往往高于做空大盘。'
  },

  // ==========================================
  // 四、 指数：行业主题 (Indices: Sectors)
  // ==========================================
  {
    symbol: 'XL_Series',
    name: 'Sector SPDRs',
    sector: '指数：行业主题',
    rating: 'HOLD',
    content: '这是将标普500按行业拆分出的一系列ETF，一共有11支。例如如果特别看好科技（XLK）、能源（XLE）或工业（XLI）板块，可以直接交易这些特定的行业 ETF，相比交易大盘，可以精准地押注一个的特定行业。11支ETF分别是XLK（科技），XLE（能源），XLI（工业），XLF（金融），XLV（医疗保健），XLY（非必需消费），XLP（必需消费），XLU（公用事业），XLB（材料），XLRE（房地产），XLC（通信服务）。'
  },
  {
    symbol: 'SOXX',
    name: 'iShares Semiconductor ETF',
    sector: '指数：行业主题',
    rating: 'HOLD',
    content: '费城半导体指数 (SOX) ETF。费城半导体指数指数涵盖了NVDA（Nvidia Corporation，英伟达）、TSM（Taiwan Semiconductor Manufacturing Company，台积电）、ASML（ASML Holding，阿斯麦）等全球芯片产业链的核心公司。相关产品的波动率远大于一般的纳指宽基。'
  },
  {
    symbol: 'SMH',
    name: 'VanEck Semiconductor ETF',
    sector: '指数：行业主题',
    rating: 'HOLD',
    content: '费城半导体指数 (SOX) ETF。基本同上，不同之处在于权重更集中于头部巨头。'
  },
  {
    symbol: 'SOXL',
    name: 'Daily Semiconductor Bull 3X',
    sector: '指数：行业主题',
    rating: 'HOLD',
    content: '3倍杠杆做多费城半导体指数。涨跌幅惊人。'
  },
  {
    symbol: 'SOXS',
    name: 'Daily Semiconductor Bear 3X',
    sector: '指数：行业主题',
    rating: 'HOLD',
    content: '3倍杠杆做空费城半导体指数。'
  },

  // ==========================================
  // 五、 衍生品：波动率与尾部对冲 (Derivatives: Volatility)
  // ==========================================
  {
    symbol: 'VXX',
    name: 'iPath S&P 500 VIX ST Futures ETN',
    sector: '衍生品：波动率与尾部对冲',
    rating: 'STRONG SELL',
    content: 'VXX是现在市场知名度最高、流动性也很好的 VIX 恐慌指数产品。它是一个 ETN，发行商是Barclays (巴克莱银行)。因为无法直接买入 VIX 指数本身的现货，所以所有 VIX 相关的 ETF 和 ETN，底层资产都是 VIX 期货合约。又因为 VIX 产品背后是不断到期的期货合约，所以在绝大多数没有股灾的正常时间里，VIX 期货常年处于“远期升水（Contango）”状态，基金经理每个月必须“卖出便宜的近期合约，买入昂贵的远期合约”来维持仓位。这种不断的“高买低卖”会像抽血一样，每个月稳定消耗本金。这种机制导致所有做多 VIX 的产品，在长期来看价值都会趋近于零。VIX指数的相关产品绝对不适合长期持有。'
  },
  {
    symbol: 'VIXY',
    name: 'ProShares VIX Short-Term Futures',
    sector: '衍生品：波动率与尾部对冲',
    rating: 'STRONG SELL',
    content: '机制与 VXX 类似，但它是一个 ETF，没有单一银行的信用风险。'
  },
  {
    symbol: 'VIXM',
    name: 'ProShares VIX Mid-Term Futures',
    sector: '衍生品：波动率与尾部对冲',
    rating: 'SELL',
    content: '追踪 VIX 中期期货（4-7个月）的ETF指数。它的爆发力远不如 VXX，但因为中期期货的“展期损耗”较小，所以它随着时间流逝，衰减速度比 VXX 慢一些。'
  },
  {
    symbol: 'UVXY',
    name: 'Ultra VIX Short-Term Futures',
    sector: '衍生品：波动率与尾部对冲',
    rating: 'STRONG SELL',
    content: '1.5倍杠杆做多 VIX 短期期货。所有VIX杠杆产品都有更高风险。它们不仅承受期货展期的损耗，还要承受杠杆带来的数学损耗。'
  },
  {
    symbol: 'UVIX',
    name: '2x Long VIX Futures ETF',
    sector: '衍生品：波动率与尾部对冲',
    rating: 'STRONG SELL',
    content: '2倍杠杆做多 VIX 短期期货，短期爆发力强，危险系数更高。如果没有百分百把握，不要交易这类产品。'
  },
  {
    symbol: 'SVXY',
    name: 'Short VIX Short-Term Futures',
    sector: '衍生品：波动率与尾部对冲',
    rating: 'HOLD',
    content: '-0.5倍做空 VIX 短期期货。既然做多 VIX 会因为“展期损耗”而长期亏钱，那么反过来，做空 VIX 就能把这种损耗变成自己的利润。在平稳的牛市中，这类产品表现很不错。但在 2018 年著名的“波动率末日（Volmageddon）”中，曾经的做空 VIX 的明星产品 XIV 一夜归零。所以现在的反向产品降低了杠杆。'
  },
  {
    symbol: 'SVIX',
    name: 'Short VIX Short-Term Futures ETF',
    sector: '衍生品：波动率与尾部对冲',
    rating: 'HOLD',
    content: '-1倍做空 VIX 短期期货。风险比 SVXY 更高。适合在恐慌情绪达到顶峰、预期市场即将修复时买入。我个人不建议在任何市场风平浪静的时候买入任何做空VIX产品，因为任何黑天鹅事件都会急速拉升VIX指数。'
  },
  {
    symbol: 'VX',
    name: 'VIX Futures',
    sector: '衍生品：波动率与尾部对冲',
    rating: 'HOLD',
    content: 'VIX 期货本身。这是所有 VIX ETF 的底层资产。对于对市场波动理解非常好的部分交易者有时会避开 ETF，直接交易衍生品，因为这能避开 ETF 管理费和部分结构性损耗，直接交易VIX期货也可以直接表达对特定月份波动率的看法，支持几乎24小时交易。'
  },
  {
    symbol: 'VIX_OPT',
    name: 'VIX Options',
    sector: '衍生品：波动率与尾部对冲',
    rating: 'HOLD',
    content: '期货和期权是高阶机构与专业交易员的主战场。VIX期权适合对冲风险。'
  },

  // ==========================================
  // 六、 大宗商品与固收 (Commodities & Fixed Income)
  // ==========================================
  {
    symbol: 'GOLD',
    name: 'Gold Futures',
    sector: '大宗商品与固收',
    rating: 'HOLD',
    content: '黄金，贯穿历史的天然货币与终极避险资产。现在宏观形式并不好，伊朗跟美以一打，至少跌不下去，就算跌，黄金是有底的，因为地缘政治问题比以前多的多。再考虑到全球法币的信用，长期看多，适合作为投资组合的压舱石。'
  },
  {
    symbol: 'SILVER',
    name: 'Silver Futures',
    sector: '大宗商品与固收',
    rating: 'SELL',
    content: '白银，几乎和黄金一样出名的资产。但白银跟黄金不同，银可以是工业产品，前段时间涨太多了。超过100严重偏离产业基本面，后续会继续回调到适合的位置。当然不是说涨不动，只是不太可能回前高了，即使回前高估计也数不清多少年过去了。'
  },
  {
    symbol: 'GLD',
    name: 'SPDR Gold Trust',
    sector: '大宗商品与固收',
    rating: 'HOLD',
    content: '全球最大的实物黄金 ETF。'
  },
  {
    symbol: 'GDX',
    name: 'VanEck Gold Miners ETF',
    sector: '大宗商品与固收',
    rating: 'HOLD',
    content: '金矿股指数。金矿股自带杠杆属性，黄金价格上涨时，金矿股的利润增速也通常很高。'
  },
  {
    symbol: 'USO',
    name: 'United States Oil Fund',
    sector: '大宗商品与固收',
    rating: 'HOLD',
    content: '无杠杆追踪 WTI 原油短期期货。应对地缘冲突、能源危机等情况的适合，股市有时候反应存在滞后性，大宗商品则是最直接的交易战场。'
  },
  {
    symbol: 'UCO',
    name: 'Ultra Bloomberg Crude Oil',
    sector: '大宗商品与固收',
    rating: 'HOLD',
    content: '2倍杠杆做多彭博原油指数。'
  },
  {
    symbol: 'SCO',
    name: 'UltraShort Bloomberg Crude Oil',
    sector: '大宗商品与固收',
    rating: 'HOLD',
    content: '2倍杠杆做空彭博原油指数。'
  },
  {
    symbol: 'TLT',
    name: 'iShares 20+ Year Treasury Bond',
    sector: '大宗商品与固收',
    rating: 'HOLD',
    content: '追踪20年期以上美国长期国债。宏观经济预判的尽头是“通胀走势”“美联储加息/降息”。国债收益率的变动，直接决定了所有股票的估值天花板。直接交易美国国债指数是表达利率观点最高效的方式。'
  },
  {
    symbol: 'TMF',
    name: 'Daily 20+ Year Treasury Bull 3X',
    sector: '大宗商品与固收',
    rating: 'HOLD',
    content: '3倍杠杆做多长期国债，押注美联储大幅降息或经济陷入严重衰退，债券价格暴涨。'
  },
  {
    symbol: 'TMV',
    name: 'Daily 20+ Year Treasury Bear 3X',
    sector: '大宗商品与固收',
    rating: 'HOLD',
    content: '3倍杠杆做空长期国债，押注通胀反弹或利率长时间维持高位，债券价格大跌。'
  },

  // ==========================================
  // 七、 加密资产与概念股 (Crypto Assets & Concept)
  // ==========================================
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    sector: '加密资产与概念股',
    rating: 'HOLD',
    content: '想象一下，因为持续不断的高通货膨胀，你的毕生积蓄几乎归零。战争要来了。你必须立刻离开。银行关门。网络瘫痪。ATM每天最多只能取20元。你有房子，却来不及卖。你有车，却带不走。你身上只有口袋里的现金，可能再加点首饰。这就是现在的伊朗。100万里亚尔只能换不到1美元。再想象一下，如果你当初持有的是比特币。没有银行。没有边境限制。没有任何政府能动它。牛市时，大家把比特币当投机。熊市时，大家说它没价值。但当银行关门、货币归零时，它才显露出真正的用途。数字货币在危机情况下是最好的藏富工具。携带黄金逃难根本不现实，只要去安全的地方之前被发现谁有黄金，最后大概率都会被抢被杀，毫无例外。真正的避险资产，必须同时逃离物理与制度。这才是电子黄金，这就是BTC。比特币的价值就在于危机时的自由与保障。只要在大脑中藏一串助记词，就能够把这笔钱带到世界任何一个地方，发生战争的时候，BTC就是还原财富的备份文件。以上是我很认可的BTC的价值。抛开这些宏观的东西，价格方面现在正处在下跌周期，目前大约6万+，如果下方5.8万守不住，可能真要深度回调到三四万左右了。但作为去中心化资产，其底层逻辑没变，长期看涨。'
  },
  {
    symbol: 'HOOD',
    name: 'Robinhood Markets, Inc.',
    sector: '加密资产与概念股',
    rating: 'HOLD',
    content: '交易平台Robinhood，一开始是专做meme币，注重币圈，现在也有很不错的股票生意和预测市场，总体来看不错的公司，基本面持续向好，正在拓展加密货币以外的金融业务。但股价起伏仍然跟BTC相关。目前BTC走势尚不明朗，可能继续下探。'
  },
  {
    symbol: 'COIN',
    name: 'Coinbase Global, Inc.',
    sector: '加密资产与概念股',
    rating: 'SELL',
    content: '目前唯一上市的加密货币交易所。如果想接触币股同时有更多更好的生意，选Robinhood；如果买BTC相关股票想要更大的收益，选MicroStrategy。那为什么要选择Coinbase呢？'
  },
  {
    symbol: 'CRCL',
    name: 'Circle Internet Group, Inc.',
    sector: '加密资产与概念股',
    rating: 'SELL',
    content: 'USDC的发行商，目前稳定和合规方面做的最好的公司，开盘股价60，几天后迅速涨到接近300，然后就是持续到现在漫长的下跌，一路不知道套住了多少人，这种涨了又跌的公司都会有一个问题，尤其是跌到高点五分之一的Circle, 200, 120的位置累积了不知道多少套牢盘，上涨会面临非常严重的抛压。前些天从60迅猛上涨到100+，短时间又会有人追高，不知道后续会怎么进展。个人并不是十分看好这一块的前景，稳定币现在的绝对龙头是USDT, 如果Tether也想补齐合规的短板，Circle还会进一步承压。'
  },
  {
    symbol: 'MSTR',
    name: 'MicroStrategy Inc.',
    sector: '加密资产与概念股',
    rating: 'STRONG SELL',
    content: '原本是做企业软件的公司，现在基本是带杠杆的 BTC ETF。股价走势与 BTC 高度绑定，且波动性还大于 BTC。从资产配置效率来看，直接持有 BTC 自行加杠杆显然是更优解。'
  }
];

export function getTradingViewLink(symbol: string): string {
  // 特殊符号处理
  if (symbol === 'BTC') return `https://www.tradingview.com/symbols/BTCUSD/`;
  if (symbol === 'GOLD') return `https://www.tradingview.com/symbols/TVC-GOLD/`;
  if (symbol === 'SILVER') return `https://www.tradingview.com/symbols/TVC-SILVER/`;
  if (symbol === 'VIX_OPT') return `https://www.tradingview.com/symbols/CBOE-VIX/`; // 宽泛指向VIX
  if (symbol === 'XL_Series') return `https://www.tradingview.com/symbols/AMEX-SPY/`; // 宽泛指向大盘
  
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