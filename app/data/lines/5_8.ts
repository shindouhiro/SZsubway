import { Line } from "../../types";

export const line5: Line = {
  id: "5",
  name: { zh: "5号线 (环中线)", en: "Line 5 (Huanzhong Line)" },
  color: "#995dd3",
  stations: [
    { id: "501", name: { zh: "赤湾", en: "Chiwan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["赤湾"], en: ["Chiwan"] }, transfer: ["2"], x: 100, y: 500 },
    { id: "502", name: { zh: "荔湾", en: "Liwan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["荔湾"], en: ["Liwan"] }, x: 100, y: 450 },
    { id: "503", name: { zh: "铁路公园", en: "Railway Park" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["铁路公园"], en: ["Railway Park"] }, x: 100, y: 420 },
    { id: "504", name: { zh: "妈湾", en: "Mawan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["妈湾"], en: ["Mawan"] }, x: 100, y: 400 },
    { id: "505", name: { zh: "前湾公园", en: "Qianwan Park" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["前湾公园"], en: ["Qianwan Park"] }, x: 100, y: 380 },
    { id: "506", name: { zh: "前湾", en: "Qianwan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["前湾"], en: ["Qianwan"] }, transfer: ["9"], x: 120, y: 350 },
    { id: "507", name: { zh: "桂湾", en: "Guiwan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["桂湾"], en: ["Guiwan"] }, x: 130, y: 330 },
    {
      id: "508",
      name: { zh: "前海湾", en: "Qianhaiwan" },
      toilet: { zh: "站厅", en: "Hall" },
      toilets: [{ location: { zh: "站厅", en: "Hall" }, exit: "A" }],
      exits: [{ id: "A", x: -30, y: -20 }, { id: "B", x: 30, y: 20 }, { id: "C", x: 20, y: -30 }],
      surroundings: { zh: ["前海"], en: ["Qianhai"] },
      transfer: ["1", "11"],
      x: 250, y: 320
    },
    { id: "509", name: { zh: "临海", en: "Linhai" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["临海"], en: ["Linhai"] }, x: 220, y: 300 },
    { id: "510", name: { zh: "宝华", en: "Baohua" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["宝华"], en: ["Baohua"] }, x: 200, y: 250 },
    {
      id: "511",
      name: { zh: "宝安中心", en: "Bao'an Center" },
      toilet: { zh: "站厅", en: "Hall" },
      toilets: [{ location: { zh: "站厅", en: "Hall" }, exit: "D" }],
      exits: [{ id: "A", x: -20, y: -20 }, { id: "B", x: 20, y: -20 }, { id: "C", x: 20, y: 20 }, { id: "D", x: -20, y: 20 }],
      surroundings: { zh: ["壹方城"], en: ["Uniwalk"] },
      transfer: ["1"],
      x: 190, y: 280
    },
    { id: "512", name: { zh: "翻身", en: "Fanshen" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["翻身"], en: ["Fanshen"] }, x: 220, y: 220 },
    { id: "513", name: { zh: "灵芝", en: "Lingzhi" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["灵芝"], en: ["Lingzhi"] }, transfer: ["12"], x: 240, y: 200 },
    { id: "514", name: { zh: "洪浪北", en: "Honglang North" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["洪浪北"], en: ["Honglang North"] }, x: 260, y: 180 },
    { id: "515", name: { zh: "兴东", en: "Xingdong" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["兴东"], en: ["Xingdong"] }, x: 280, y: 160 },
    { id: "516", name: { zh: "留仙洞", en: "Liuxiandong" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["留仙洞"], en: ["Liuxiandong"] }, transfer: ["13"], x: 300, y: 150 },
    { id: "517", name: { zh: "西丽", en: "Xili" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["动物园"], en: ["Zoo"] }, transfer: ["7"], x: 450, y: 150 },
    { id: "518", name: { zh: "大学城", en: "University Town" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["大学城"], en: ["University Town"] }, x: 480, y: 140 },
    { id: "519", name: { zh: "塘朗", en: "Tanglang" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["塘朗"], en: ["Tanglang"] }, x: 510, y: 130 },
    { id: "520", name: { zh: "长岭陂", en: "Changlingpi" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["长岭陂"], en: ["Changlingpi"] }, x: 540, y: 120 },
    {
      id: "521",
      name: { zh: "深圳北站", en: "Shenzhen North Station" },
      toilet: { zh: "站厅", en: "Hall" },
      toilets: [{ location: { zh: "站厅", en: "Hall" }, exit: "A" }],
      exits: [{ id: "A", x: -40, y: -40 }, { id: "B", x: 40, y: -40 }, { id: "C", x: 40, y: 40 }, { id: "D", x: -40, y: 40 }],
      surroundings: { zh: ["深圳北站"], en: ["Shenzhen North"] },
      transfer: ["4", "6"],
      x: 670, y: 90
    },
    { id: "522", name: { zh: "民治", en: "Minzhi" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["民治"], en: ["Minzhi"] }, x: 700, y: 100 },
    { id: "523", name: { zh: "五和", en: "Wuhe" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["五和"], en: ["Wuhe"] }, transfer: ["10"], x: 730, y: 120 },
    { id: "524", name: { zh: "坂田", en: "Bantian" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["坂田"], en: ["Bantian"] }, x: 750, y: 130 },
    { id: "525", name: { zh: "杨美", en: "Yangmei" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["杨美"], en: ["Yangmei"] }, x: 770, y: 140 },
    { id: "526", name: { zh: "上水径", en: "Shangshuijing" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["上水径"], en: ["Shangshuijing"] }, x: 790, y: 160 },
    { id: "527", name: { zh: "下水径", en: "Xiashuijing" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["下水径"], en: ["Xiashuijing"] }, x: 810, y: 180 },
    { id: "528", name: { zh: "长龙", en: "Changlong" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["长龙"], en: ["Changlong"] }, x: 830, y: 200 },
    { id: "529", name: { zh: "布吉", en: "Buji" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["布吉"], en: ["Buji"] }, transfer: ["3", "14"], x: 1000, y: 260 },
    { id: "530", name: { zh: "百鸽笼", en: "Baigelong" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["百鸽笼"], en: ["Baigelong"] }, x: 1020, y: 280 },
    { id: "531", name: { zh: "布心", en: "Buxin" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["布心"], en: ["Buxin"] }, x: 1040, y: 300 },
    { id: "532", name: { zh: "太安", en: "Tai'an" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["太安"], en: ["Tai'an"] }, transfer: ["7"], x: 900, y: 300 },
    { id: "533", name: { zh: "怡景", en: "Yijing" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["怡景"], en: ["Yijing"] }, x: 880, y: 350 },
    { id: "534", name: { zh: "黄贝岭", en: "Huangbeiling" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["黄贝岭"], en: ["Huangbeiling"] }, transfer: ["2"], x: 850, y: 400 },
    { id: "535", name: { zh: "湖贝", en: "Hubei" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["湖贝"], en: ["Hubei"] }, transfer: ["2"], x: 820, y: 380 },
    { id: "536", name: { zh: "东门", en: "Dongmen" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["东门"], en: ["Dongmen"] }, x: 830, y: 380 },
    { id: "537", name: { zh: "大剧院", en: "Grand Theater" }, toilet: { zh: "站台", en: "Platform" }, surroundings: { zh: ["大剧院"], en: ["Grand Theater"] }, transfer: ["1", "2"], x: 790, y: 370 }
  ]
};

export const line6: Line = {
  id: "6",
  name: { zh: "6号线 (光明线)", en: "Line 6 (Guangming Line)" },
  color: "#34E2E2",
  stations: [
    {
      id: "601",
      name: { zh: "科学馆", en: "Science Museum" },
      toilet: { zh: "站厅", en: "Hall" },
      toilets: [{ location: { zh: "站厅", en: "Hall" }, exit: "D" }],
      exits: [{ id: "A", x: -20, y: -30 }, { id: "B", x: 20, y: -30 }, { id: "C", x: 30, y: 10 }, { id: "D", x: -20, y: 30 }],
      surroundings: { zh: ["科学馆"], en: ["Science Museum"] },
      transfer: ["1"],
      x: 760, y: 370
    },
    { id: "602", name: { zh: "通新岭", en: "Tongxinling" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["通新岭"], en: ["Tongxinling"] }, transfer: ["3"], x: 760, y: 340 },
    { id: "603", name: { zh: "体育中心", en: "Sports Center" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["体育中心"], en: ["Sports Center"] }, x: 760, y: 310 },
    { id: "604", name: { zh: "八卦岭", en: "Bagualing" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["八卦岭"], en: ["Bagualing"] }, transfer: ["7"], x: 760, y: 280 },
    { id: "605", name: { zh: "银湖", en: "Yinhu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["银湖"], en: ["Yinhu"] }, transfer: ["9"], x: 730, y: 250 },
    { id: "606", name: { zh: "翰岭", en: "Hanling" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["翰岭"], en: ["Hanling"] }, x: 700, y: 220 },
    { id: "607", name: { zh: "梅林关", en: "Meilinguan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["梅林关"], en: ["Meilinguan"] }, x: 680, y: 200 },
    { id: "608", name: { zh: "深圳北站", en: "Shenzhen North Station" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["深圳北站"], en: ["Shenzhen North"] }, transfer: ["4", "5"], x: 670, y: 90 },
    { id: "609", name: { zh: "红山", en: "Hongshan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["红山"], en: ["Hongshan"] }, transfer: ["4"], x: 670, y: 60 },
    { id: "610", name: { zh: "上芬", en: "Shangfen" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["上芬"], en: ["Shangfen"] }, x: 630, y: 60 },
    { id: "611", name: { zh: "元芬", en: "Yuanfen" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["元芬"], en: ["Yuanfen"] }, x: 590, y: 60 },
    { id: "612", name: { zh: "阳台山东", en: "Yangtai Mountain East" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["阳台山"], en: ["Yangtai Mtn"] }, x: 550, y: 60 },
    { id: "613", name: { zh: "官田", en: "Guantian" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["官田"], en: ["Guantian"] }, x: 510, y: 60 },
    { id: "614", name: { zh: "上屋", en: "Shangwu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["上屋"], en: ["Shangwu"] }, transfer: ["13"], x: 470, y: 60 },
    { id: "615", name: { zh: "长圳", en: "Changzhen" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["长圳"], en: ["Changzhen"] }, x: 430, y: 60 },
    { id: "616", name: { zh: "凤凰城", en: "Fenghuang Town" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["凤凰城"], en: ["Fenghuang Town"] }, transfer: ["13"], x: 390, y: 60 },
    { id: "617", name: { zh: "光明大街", en: "Guangming St" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["光明大街"], en: ["Guangming St"] }, x: 350, y: 60 },
    { id: "618", name: { zh: "光明", en: "Guangming" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["光明"], en: ["Guangming"] }, transfer: ["6"], x: 310, y: 60 },
    { id: "619", name: { zh: "科学公园", en: "Science Park" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["科学公园"], en: ["Science Park"] }, x: 270, y: 60 },
    { id: "620", name: { zh: "楼村", en: "Loucun" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["楼村"], en: ["Loucun"] }, x: 230, y: 60 },
    { id: "621", name: { zh: "红花山", en: "Honghuashan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["红花山"], en: ["Honghuashan"] }, x: 190, y: 60 },
    { id: "622", name: { zh: "公明广场", en: "Gongming Square" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["公明广场"], en: ["Gongming Sq"] }, transfer: ["13"], x: 150, y: 60 },
    { id: "623", name: { zh: "合水口", en: "Heshuikou" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["合水口"], en: ["Heshuikou"] }, x: 110, y: 60 },
    { id: "624", name: { zh: "薯田埔", en: "Shutianpu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["薯田埔"], en: ["Shutianpu"] }, x: 80, y: 60 },
    { id: "625", name: { zh: "松岗公园", en: "Songgang Park" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["松岗公园"], en: ["Songgang Park"] }, x: 50, y: 60 },
    { id: "626", name: { zh: "溪头", en: "Xitou" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["溪头"], en: ["Xitou"] }, x: 50, y: 80 },
    { id: "627", name: { zh: "松岗", en: "Songgang" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["松岗"], en: ["Songgang"] }, transfer: ["11", "12"], x: 50, y: 50 }
  ]
};

export const line7: Line = {
  id: "7",
  name: { zh: "7号线 (西丽线)", en: "Line 7 (Xili Line)" },
  color: "#002e72",
  stations: [
    {
      id: "701",
      name: { zh: "西丽湖", en: "Xili Lake" },
      toilet: { zh: "站厅", en: "Hall" },
      toilets: [{ location: { zh: "站厅", en: "Hall" }, exit: "B" }],
      exits: [{ id: "A", x: -25, y: -25 }, { id: "B", x: 25, y: -25 }, { id: "C", x: 0, y: 30 }],
      surroundings: { zh: ["西丽湖"], en: ["Xili Lake"] },
      x: 400, y: 120
    },
    { id: "702", name: { zh: "西丽", en: "Xili" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["西丽"], en: ["Xili"] }, transfer: ["5"], x: 450, y: 150 },
    { id: "703", name: { zh: "茶光", en: "Chaguang" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["茶光"], en: ["Chaguang"] }, x: 450, y: 180 },
    { id: "704", name: { zh: "珠光", en: "Zhuguang" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["珠光"], en: ["Zhuguang"] }, x: 450, y: 210 },
    { id: "705", name: { zh: "龙井", en: "Longjing" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["龙井"], en: ["Longjing"] }, x: 450, y: 240 },
    { id: "706", name: { zh: "桃源村", en: "Taoyuancun" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["桃源村"], en: ["Taoyuancun"] }, x: 450, y: 270 },
    { id: "707", name: { zh: "深云", en: "Shenyun" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["深云"], en: ["Shenyun"] }, x: 480, y: 300 },
    { id: "708", name: { zh: "安托山", en: "Antuoshan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["安托山"], en: ["Antuoshan"] }, transfer: ["2"], x: 510, y: 330 },
    { id: "709", name: { zh: "农林", en: "Nonglin" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["农林"], en: ["Nonglin"] }, x: 540, y: 340 },
    { id: "710", name: { zh: "车公庙", en: "Chegongmiao" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["车公庙"], en: ["Chegongmiao"] }, transfer: ["1", "9", "11"], x: 580, y: 380 },
    { id: "711", name: { zh: "上沙", en: "Shangsha" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["上沙"], en: ["Shangsha"] }, x: 580, y: 410 },
    { id: "712", name: { zh: "沙尾", en: "Shawei" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["沙尾"], en: ["Shawei"] }, x: 580, y: 430 },
    { id: "713", name: { zh: "石厦", en: "Shixia" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["石厦"], en: ["Shixia"] }, transfer: ["3"], x: 670, y: 405 },
    { id: "714", name: { zh: "皇岗村", en: "Huanggang Village" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["皇岗村"], en: ["Huanggang Village"] }, x: 660, y: 430 },
    { id: "715", name: { zh: "福民", en: "Fumin" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["福民"], en: ["Fumin"] }, transfer: ["4", "10"], x: 670, y: 500 },
    { id: "716", name: { zh: "皇岗口岸", en: "Huanggang Checkpoint" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["皇岗口岸"], en: ["Huanggang Checkpoint"] }, x: 690, y: 520 },
    { id: "717", name: { zh: "赤尾", en: "Chiwei" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["赤尾"], en: ["Chiwei"] }, x: 710, y: 530 },
    { id: "718", name: { zh: "华强南", en: "Huaqiang South" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["华强南"], en: ["Huaqiang South"] }, x: 730, y: 530 },
    { id: "719", name: { zh: "华强北", en: "Huaqiang North" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["华强北"], en: ["Huaqiang North"] }, transfer: ["2"], x: 730, y: 350 },
    { id: "720", name: { zh: "华新", en: "Huaxin" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["华新"], en: ["Huaxin"] }, transfer: ["3"], x: 730, y: 330 },
    { id: "721", name: { zh: "黄木岗", en: "Huangmugang" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["黄木岗"], en: ["Huangmugang"] }, transfer: ["14"], x: 730, y: 300 },
    { id: "722", name: { zh: "八卦岭", en: "Bagualing" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["八卦岭"], en: ["Bagualing"] }, transfer: ["6"], x: 760, y: 280 },
    { id: "723", name: { zh: "红岭北", en: "Hongling North" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["红岭北"], en: ["Hongling North"] }, transfer: ["9"], x: 790, y: 280 },
    { id: "724", name: { zh: "笋岗", en: "Sungang" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["笋岗"], en: ["Sungang"] }, x: 820, y: 280 },
    { id: "725", name: { zh: "洪湖", en: "Honghu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["洪湖"], en: ["Honghu"] }, x: 850, y: 280 },
    { id: "726", name: { zh: "田贝", en: "Tianbei" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["田贝"], en: ["Tianbei"] }, transfer: ["3"], x: 910, y: 320 },
    { id: "727", name: { zh: "太安", en: "Tai'an" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["太安"], en: ["Tai'an"] }, transfer: ["5"], x: 900, y: 300 }
  ]
};

export const line8: Line = {
  id: "8",
  name: { zh: "8号线 (盐田线)", en: "Line 8 (Yantian Line)" },
  color: "#d6287e",
  stations: [
    {
      id: "801",
      name: { zh: "莲塘", en: "Liantang" },
      toilet: { zh: "暂无信息", en: "Info Unavailable" },
      toilets: [{ location: { zh: "站厅", en: "Hall" }, exit: "A" }],
      exits: [{ id: "A", x: -30, y: -20 }, { id: "B", x: 0, y: 30 }, { id: "C", x: 30, y: -20 }],
      surroundings: { zh: ["莲塘"], en: ["Liantang"] },
      transfer: ["2"],
      x: 970, y: 450
    },
    { id: "802", name: { zh: "梧桐山南", en: "Wutong Mountain South" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["梧桐山"], en: ["Wutong Mtn"] }, x: 1000, y: 460 },
    { id: "803", name: { zh: "沙头角", en: "Shatoujiao" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["沙头角"], en: ["Shatoujiao"] }, x: 1030, y: 470 },
    { id: "804", name: { zh: "海山", en: "Haishan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["海山"], en: ["Haishan"] }, x: 1060, y: 480 },
    { id: "805", name: { zh: "盐田港西", en: "Yantian Port West" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["盐田港"], en: ["Yantian Port"] }, x: 1090, y: 490 },
    { id: "806", name: { zh: "深外高中", en: "Shenwai Senior Campus" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["深外"], en: ["Shenwai"] }, x: 1120, y: 500 },
    { id: "807", name: { zh: "盐田路", en: "Yantian Rd" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["盐田路"], en: ["Yantian Rd"] }, x: 1150, y: 510 },
    { id: "808", name: { zh: "鸿安围", en: "Honganwei" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["鸿安围"], en: ["Honganwei"] }, x: 1180, y: 520 },
    { id: "809", name: { zh: "盐田墟", en: "Yantianxu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["盐田墟"], en: ["Yantianxu"] }, x: 1210, y: 530 },
    { id: "810", name: { zh: "大梅沙", en: "Dameisha" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["大梅沙"], en: ["Dameisha"] }, x: 1240, y: 540 },
    { id: "811", name: { zh: "小梅沙", en: "Xiaomeisha" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["小梅沙"], en: ["Xiaomeisha"] }, x: 1270, y: 550 }
  ]
};
