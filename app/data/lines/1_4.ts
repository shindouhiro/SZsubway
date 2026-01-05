import { Line } from "../../types";

export const line1: Line = {
  id: "1",
  name: { zh: "1号线 (罗宝线)", en: "Line 1 (Luobao Line)" },
  color: "#00ab38",
  stations: [
    {
      id: "101",
      name: { zh: "罗湖", en: "Luohu" },
      toilet: { zh: "C出口通道旁", en: "Near Exit C" },
      toilets: [
        { location: { zh: "C出口通道旁", en: "Near Exit C" }, exit: "C" }
      ],
      exits: [
        { id: "A", x: -30, y: -20 },
        { id: "B", x: -20, y: 30 },
        { id: "C", x: 30, y: 20 },
        { id: "D", x: 20, y: -30 },
        { id: "E", x: 40, y: -10 }
      ],
      surroundings: { zh: ["罗湖火车站", "罗湖商业城"], en: ["Luohu Railway Station", "Luohu Commercial City"] },
      x: 880, y: 400
    },
    {
      id: "102",
      name: { zh: "国贸", en: "Guomao" },
      toilet: { zh: "站厅B端近B出口", en: "Near Exit B" },
      toilets: [
        { location: { zh: "站厅B端", en: "Hall End B" }, exit: "B" }
      ],
      exits: [
        { id: "A", x: -25, y: -25 },
        { id: "B", x: 25, y: -25 },
        { id: "C", x: 25, y: 25 },
        { id: "D", x: -25, y: 25 },
        { id: "E", x: 0, y: 35 }
      ],
      surroundings: { zh: ["金光华广场"], en: ["King Glory Plaza"] },
      x: 850, y: 390
    },
    {
      id: "103",
      name: { zh: "老街", en: "Laojie" },
      toilet: { zh: "站厅中部", en: "Hall Center" },
      toilets: [
        { location: { zh: "站厅中部", en: "Hall Center" }, exit: "C" }
      ],
      exits: [
        { id: "A", x: -30, y: -20 },
        { id: "B", x: -10, y: -35 },
        { id: "C", x: 30, y: -20 },
        { id: "D", x: 30, y: 20 },
        { id: "E", x: 0, y: 35 },
        { id: "F", x: -30, y: 20 },
        { id: "G", x: -40, y: 0 },
        { id: "H", x: 40, y: 0 }
      ],
      surroundings: { zh: ["东门步行街"], en: ["Dongmen St"] },
      transfer: ["3"],
      x: 820, y: 380
    },
    {
      id: "104",
      name: { zh: "大剧院", en: "Grand Theater" },
      toilet: { zh: "站台东端", en: "Platform East" },
      toilets: [
        { location: { zh: "站台东端", en: "Platform East" }, exit: "B" }
      ],
      exits: [
        { id: "A", x: -30, y: -25 },
        { id: "B", x: 10, y: -35 },
        { id: "C", x: 30, y: -10 },
        { id: "D", x: 20, y: 30 },
        { id: "E", x: -20, y: 30 },
        { id: "F", x: -35, y: 10 }
      ],
      surroundings: { zh: ["万象城", "京基100"], en: ["The MixC", "KK100"] },
      transfer: ["2", "5", "8"],
      x: 790, y: 370
    },
    { id: "105", name: { zh: "科学馆", en: "Science Museum" }, toilet: { zh: "站厅西端", en: "Hall West" }, surroundings: { zh: ["中信广场"], en: ["CITIC Plaza"] }, transfer: ["6"], x: 760, y: 370 },
    { id: "106", name: { zh: "华强路", en: "Huaqiang Rd" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["华强北电子世界"], en: ["Huaqiangbei Electronics"] }, x: 730, y: 370 },
    { id: "107", name: { zh: "岗厦", en: "Gangxia" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["卓悦中心"], en: ["One Avenue"] }, transfer: ["10"], x: 700, y: 380 },
    { id: "108", name: { zh: "会展中心", en: "Convention & Exhibition Center" }, toilet: { zh: "站台西端", en: "Platform West" }, surroundings: { zh: ["会展中心"], en: ["Convention Center"] }, transfer: ["4"], x: 670, y: 400 },
    { id: "109", name: { zh: "购物公园", en: "Shopping Park" }, toilet: { zh: "站厅C出口", en: "Hall Exit C" }, surroundings: { zh: ["COCO Park"], en: ["COCO Park"] }, transfer: ["3"], x: 640, y: 390 },
    { id: "110", name: { zh: "香蜜湖", en: "Xiangmihu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["香蜜湖度假村"], en: ["Xiangmihu Resort"] }, x: 610, y: 380 },
    { id: "111", name: { zh: "车公庙", en: "Chegongmiao" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["招商银行大厦"], en: ["CMB Tower"] }, transfer: ["7", "9", "11"], x: 580, y: 380 },
    { id: "112", name: { zh: "竹子林", en: "Zhuzilin" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["福田交通枢纽"], en: ["Futian Transport Hub"] }, x: 550, y: 380 },
    { id: "113", name: { zh: "侨城东", en: "Qiaocheng East" }, toilet: { zh: "站台", en: "Platform" }, surroundings: { zh: ["锦绣中华"], en: ["Splendid China"] }, x: 520, y: 380 },
    { id: "114", name: { zh: "华侨城", en: "Overseas Chinese Town" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["华侨城"], en: ["OCT"] }, x: 490, y: 370 },
    { id: "115", name: { zh: "世界之窗", en: "Window of the World" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["世界之窗"], en: ["Window of the World"] }, transfer: ["2"], x: 460, y: 370 },
    { id: "116", name: { zh: "白石洲", en: "Baishizhou" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["白石洲"], en: ["Baishizhou"] }, x: 430, y: 365 },
    { id: "117", name: { zh: "高新园", en: "Hi-Tech Park" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["万象天地"], en: ["MixC World"] }, x: 400, y: 360 },
    { id: "118", name: { zh: "深大", en: "Shenzhen Univ." }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["深圳大学"], en: ["Shenzhen University"] }, transfer: ["13"], x: 370, y: 350 },
    { id: "119", name: { zh: "桃园", en: "Taoyuan" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["南山区政府"], en: ["Nanshan Gov"] }, transfer: ["12"], x: 340, y: 350 },
    { id: "120", name: { zh: "大新", en: "Daxin" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["前海商业中心"], en: ["Qianhai Commercial"] }, x: 310, y: 330 },
    { id: "121", name: { zh: "鲤鱼门", en: "Liyumen" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["前海"], en: ["Qianhai"] }, x: 280, y: 320 },
    { id: "122", name: { zh: "前海湾", en: "Qianhaiwan" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["前海石公园"], en: ["Qianhai Stone Park"] }, transfer: ["5", "11"], x: 250, y: 320 },
    { id: "123", name: { zh: "新安", en: "Xin'an" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["新安"], en: ["Xin'an"] }, x: 220, y: 300 },
    { id: "124", name: { zh: "宝安中心", en: "Bao'an Center" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["壹方城"], en: ["Uniwalk"] }, transfer: ["5"], x: 190, y: 280 },
    { id: "125", name: { zh: "宝体", en: "Bao'an Stadium" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["宝安体育馆"], en: ["Bao'an Stadium"] }, x: 160, y: 260 },
    { id: "126", name: { zh: "坪洲", en: "Pingzhou" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["大仟里"], en: ["DaQianLi Mall"] }, x: 130, y: 240 },
    { id: "127", name: { zh: "西乡", en: "Xixiang" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["天虹"], en: ["Rainbow Mall"] }, x: 100, y: 220 },
    { id: "128", name: { zh: "固戍", en: "Gushu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["固戍"], en: ["Gushu"] }, x: 70, y: 200 },
    { id: "129", name: { zh: "后瑞", en: "Hourui" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["T3航站楼附近"], en: ["Near T3"] }, x: 50, y: 180 },
    { id: "130", name: { zh: "机场东", en: "Airport East" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["T3航站楼（旧）"], en: ["Terminal 3 (Old)"] }, transfer: ["12"], x: 30, y: 160 }
  ]
};

export const line2: Line = {
  id: "2",
  name: { zh: "2号线 (赤湾线)", en: "Line 2 (Chiwan Line)" },
  color: "#b76428",
  stations: [
    {
      id: "201",
      name: { zh: "赤湾", en: "Chiwan" },
      toilet: { zh: "站厅", en: "Hall" },
      toilets: [{ location: { zh: "站厅", en: "Hall" }, exit: "C" }],
      exits: [{ id: "A", x: -25, y: -25 }, { id: "B", x: 25, y: -25 }, { id: "C", x: 25, y: 25 }, { id: "D", x: -25, y: 25 }],
      surroundings: { zh: ["赤湾"], en: ["Chiwan"] },
      transfer: ["5"],
      x: 100, y: 500
    },
    { id: "202", name: { zh: "蛇口港", en: "Shekou Port" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["蛇口客运码头"], en: ["Shekou Ferry"] }, x: 120, y: 490 },
    { id: "203", name: { zh: "海上世界", en: "Sea World" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["海上世界"], en: ["Sea World"] }, transfer: ["12"], x: 150, y: 480 },
    { id: "204", name: { zh: "水湾", en: "Shuiwan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["水湾1979"], en: ["Shuiwan 1979"] }, x: 180, y: 470 },
    { id: "205", name: { zh: "东角头", en: "Dongjiaotou" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["蛇口广场"], en: ["Shekou Plaza"] }, x: 210, y: 460 },
    { id: "206", name: { zh: "湾厦", en: "Wanxia" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["湾厦村"], en: ["Wanxia Village"] }, x: 240, y: 460 },
    { id: "207", name: { zh: "海月", en: "Haiyue" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["宝能太古城"], en: ["All City"] }, x: 270, y: 460 },
    { id: "208", name: { zh: "登良", en: "Dengliang" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["南山小学"], en: ["Nanshan Primary School"] }, x: 300, y: 460 },
    { id: "209", name: { zh: "后海", en: "Houhai" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["海岸城"], en: ["Coastal City"] }, transfer: ["11", "13"], x: 330, y: 450 },
    { id: "210", name: { zh: "科苑", en: "Keyuan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["深港产学研基地"], en: ["IER Base"] }, x: 360, y: 440 },
    { id: "211", name: { zh: "红树湾", en: "Hongshuwan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["红树西岸"], en: ["Mangrove West Coast"] }, x: 390, y: 430 },
    { id: "212", name: { zh: "世界之窗", en: "Window of the World" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["益田假日广场"], en: ["Yitian Holiday Plaza"] }, transfer: ["1"], x: 460, y: 370 },
    { id: "213", name: { zh: "侨香", en: "Qiaoxiang" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["华侨城中学"], en: ["OCT High School"] }, x: 500, y: 350 },
    { id: "214", name: { zh: "香蜜", en: "Xiangmi" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["香蜜公园"], en: ["Xiangmi Park"] }, x: 530, y: 340 },
    { id: "215", name: { zh: "香梅北", en: "Xiangmei North" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["沃尔玛"], en: ["Walmart"] }, x: 560, y: 330 },
    { id: "216", name: { zh: "景田", en: "Jingtian" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["妇儿大厦"], en: ["Women & Children Tower"] }, transfer: ["9"], x: 590, y: 320 },
    { id: "217", name: { zh: "莲花西", en: "Lianhua West" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["莲花山公园"], en: ["Lianhuashan Park"] }, x: 620, y: 330 },
    { id: "218", name: { zh: "福田", en: "Futian" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["深圳证券交易所"], en: ["SZSE"] }, transfer: ["3", "11"], x: 650, y: 340 },
    { id: "219", name: { zh: "市民中心", en: "Civic Center" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["博物馆"], en: ["Museum"] }, transfer: ["4"], x: 670, y: 350 },
    { id: "220", name: { zh: "岗厦北", en: "Gangxia North" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["中心公园"], en: ["Central Park"] }, transfer: ["10", "11", "14"], x: 700, y: 340 },
    { id: "221", name: { zh: "华强北", en: "Huaqiang North" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["茂业天地"], en: ["Moi Dept Store"] }, transfer: ["7"], x: 730, y: 350 },
    { id: "222", name: { zh: "燕南", en: "Yannan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["沃尔玛"], en: ["Walmart"] }, x: 760, y: 350 },
    { id: "223", name: { zh: "大剧院", en: "Grand Theater" }, toilet: { zh: "站台", en: "Platform" }, surroundings: { zh: ["荔枝公园"], en: ["Lizhi Park"] }, transfer: ["1", "5", "8"], x: 790, y: 370 },
    { id: "224", name: { zh: "湖贝", en: "Hubei" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["东门老街"], en: ["Dongmen Old St"] }, transfer: ["5"], x: 820, y: 380 },
    { id: "225", name: { zh: "黄贝岭", en: "Huangbeiling" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["深南东路"], en: ["Shennan East Rd"] }, transfer: ["5"], x: 850, y: 400 },
    { id: "226", name: { zh: "新秀", en: "Xinxiu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["古玩城"], en: ["Antique City"] }, x: 880, y: 420 },
    { id: "227", name: { zh: "莲塘口岸", en: "Liantang Checkpoint" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["莲塘口岸"], en: ["Liantang Checkpoint"] }, x: 910, y: 430 },
    { id: "228", name: { zh: "仙湖路", en: "Xianhu Rd" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["仙湖植物园"], en: ["Botanical Garden"] }, x: 940, y: 440 },
    { id: "229", name: { zh: "莲塘", en: "Liantang" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["梧桐山"], en: ["Wutong Mtn"] }, transfer: ["8"], x: 970, y: 450 }
  ]
};

export const line3: Line = {
  id: "3",
  name: { zh: "3号线 (龙岗线)", en: "Line 3 (Longgang Line)" },
  color: "#00a1e3",
  stations: [
    { id: "301", name: { zh: "福保", en: "Futian Bonded Area" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["保税区"], en: ["Bonded Area"] }, x: 670, y: 450 },
    { id: "302", name: { zh: "益田", en: "Yitian" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["益田村"], en: ["Yitian Village"] }, x: 670, y: 420 },
    { id: "303", name: { zh: "石厦", en: "Shixia" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["石厦"], en: ["Shixia"] }, transfer: ["7"], x: 670, y: 405 },
    { id: "109a", name: { zh: "购物公园", en: "Shopping Park" }, toilet: { zh: "站厅C出口", en: "Hall Exit C" }, surroundings: { zh: ["君子广场"], en: ["Junzi Plaza"] }, transfer: ["1"], x: 640, y: 390 },
    { id: "304", name: { zh: "福田", en: "Futian" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["中心四路"], en: ["Zhongxin 4th Rd"] }, transfer: ["2", "11"], x: 650, y: 340 },
    { id: "404a", name: { zh: "少年宫", en: "Children's Palace" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["音乐厅"], en: ["Concert Hall"] }, transfer: ["4"], x: 670, y: 300 },
    { id: "305", name: { zh: "莲花村", en: "Lianhuacun" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["中心公园"], en: ["Central Park"] }, transfer: ["10"], x: 700, y: 320 },
    { id: "306", name: { zh: "华新", en: "Huaxin" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["华强北"], en: ["Huaqiangbei"] }, transfer: ["7"], x: 730, y: 330 },
    { id: "307", name: { zh: "通新岭", en: "Tongxinling" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["四川大厦"], en: ["Sichuan Tower"] }, transfer: ["6"], x: 760, y: 340 },
    { id: "308", name: { zh: "红岭", en: "Hongling" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["红岭"], en: ["Hongling"] }, transfer: ["9"], x: 790, y: 350 },
    { id: "103a", name: { zh: "老街", en: "Laojie" }, toilet: { zh: "站厅中部", en: "Hall Center" }, surroundings: { zh: ["步行街"], en: ["Pedestrian Street"] }, transfer: ["1"], x: 820, y: 380 },
    { id: "309", name: { zh: "晒布", en: "Shaibu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["东门"], en: ["Dongmen"] }, x: 850, y: 360 },
    { id: "310", name: { zh: "翠竹", en: "Cuizhu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["人民医院"], en: ["People's Hospital"] }, x: 880, y: 340 },
    { id: "311", name: { zh: "田贝", en: "Tianbei" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["田贝"], en: ["Tianbei"] }, transfer: ["7"], x: 910, y: 320 },
    { id: "312", name: { zh: "水贝", en: "Shuibei" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["水贝国际珠宝交易中心"], en: ["Jewelry Center"] }, x: 940, y: 300 },
    { id: "313", name: { zh: "草埔", en: "Caopu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["草埔"], en: ["Caopu"] }, x: 970, y: 280 },
    { id: "314", name: { zh: "布吉", en: "Buji" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["深圳东站"], en: ["Shenzhen East Station"] }, transfer: ["5", "14"], x: 1000, y: 260 },
    { id: "315", name: { zh: "木棉湾", en: "Mumianwan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["木棉湾"], en: ["Mumianwan"] }, x: 1030, y: 240 },
    { id: "316", name: { zh: "大芬", en: "Dafen" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["大芬油画村"], en: ["Dafen Oil Painting Village"] }, x: 1060, y: 220 },
    { id: "317", name: { zh: "丹竹头", en: "Danzhutou" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["丹竹头"], en: ["Danzhutou"] }, x: 1090, y: 200 },
    { id: "318", name: { zh: "六约", en: "Liuyue" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["六约"], en: ["Liuyue"] }, x: 1120, y: 180 },
    { id: "319", name: { zh: "塘坑", en: "Tangkeng" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["塘坑"], en: ["Tangkeng"] }, x: 1150, y: 160 },
    { id: "320", name: { zh: "横岗", en: "Henggang" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["横岗"], en: ["Henggang"] }, x: 1180, y: 140 },
    { id: "321", name: { zh: "永湖", en: "Yonghu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["永湖"], en: ["Yonghu"] }, x: 1210, y: 120 },
    { id: "322", name: { zh: "荷坳", en: "He'ao" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["荷坳"], en: ["He'ao"] }, x: 1240, y: 100 },
    { id: "323", name: { zh: "大运", en: "Universiade" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["大运中心"], en: ["Universiade Center"] }, transfer: ["14", "16"], x: 1270, y: 80 },
    { id: "324", name: { zh: "爱联", en: "Ailian" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["爱联"], en: ["Ailian"] }, x: 1300, y: 60 },
    { id: "325", name: { zh: "吉祥", en: "Jixiang" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["龙岗中心城"], en: ["Longgang Center"] }, x: 1330, y: 40 },
    { id: "326", name: { zh: "龙城广场", en: "Longcheng Square" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["龙城广场"], en: ["Longcheng Square"] }, x: 1360, y: 20 },
    { id: "327", name: { zh: "南联", en: "Nanlian" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["南联"], en: ["Nanlian"] }, x: 1390, y: 0 },
    { id: "328", name: { zh: "双龙", en: "Shuanglong" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["天虹"], en: ["Rainbow Mall"] }, transfer: ["16"], x: 1420, y: -20 }
  ]
};

export const line4: Line = {
  id: "4",
  name: { zh: "4号线 (龙华线)", en: "Line 4 (Longhua Line)" },
  color: "#bd0026",
  stations: [
    { id: "401", name: { zh: "福田口岸", en: "Futian Checkpoint" }, toilet: { zh: "站厅付费区", en: "Hall Paid Area" }, surroundings: { zh: ["福田口岸"], en: ["Checkpoint"] }, transfer: ["10"], x: 670, y: 550 },
    { id: "402", name: { zh: "福民", en: "Fumin" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["皇岗村"], en: ["Huanggang Village"] }, transfer: ["7", "10"], x: 670, y: 500 },
    { id: "108a", name: { zh: "会展中心", en: "Convention & Exhibition Center" }, toilet: { zh: "站台西端", en: "Platform West" }, surroundings: { zh: ["皇庭广场"], en: ["Wongtee Plaza"] }, transfer: ["1"], x: 670, y: 400 },
    { id: "403", name: { zh: "市民中心", en: "Civic Center" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["中心书城"], en: ["Book City"] }, transfer: ["2"], x: 670, y: 350 },
    { id: "404", name: { zh: "少年宫", en: "Children's Palace" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["少年宫"], en: ["Children's Palace"] }, transfer: ["3"], x: 670, y: 300 },
    { id: "405", name: { zh: "莲花北", en: "Lianhua North" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["莲花山公园北门"], en: ["Lianhuashan Park North Gate"] }, x: 670, y: 250 },
    { id: "406", name: { zh: "上梅林", en: "Shangmeilin" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["卓悦汇"], en: ["Injoy Mall"] }, transfer: ["9"], x: 670, y: 200 },
    { id: "407", name: { zh: "民乐", en: "Minle" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["星河COCO City"], en: ["COCO City"] }, x: 670, y: 150 },
    { id: "408", name: { zh: "白石龙", en: "Baishilong" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["星河盛世"], en: ["Galaxy World"] }, x: 670, y: 120 },
    { id: "409", name: { zh: "深圳北站", en: "Shenzhen North Station" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["深圳北站"], en: ["Shenzhen North Railway Station"] }, transfer: ["5", "6"], x: 670, y: 90 },
    { id: "410", name: { zh: "红山", en: "Hongshan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["红山6979"], en: ["Hongshan 6979"] }, transfer: ["6"], x: 670, y: 60 },
    { id: "411", name: { zh: "上塘", en: "Shangtang" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["AT MALL"], en: ["AT MALL"] }, x: 670, y: 30 },
    { id: "412", name: { zh: "龙胜", en: "Longsheng" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["港铁天颂"], en: ["MTR Tiara"] }, x: 670, y: 0 },
    { id: "413", name: { zh: "龙华", en: "Longhua" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["龙华文化广场"], en: ["Longhua Cultural Plaza"] }, x: 670, y: -30 },
    { id: "414", name: { zh: "清湖", en: "Qinghu" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["龙华汽车站"], en: ["Longhua Bus Station"] }, x: 670, y: -60 },
    { id: "415", name: { zh: "清湖北", en: "Qinghu North" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["富士康"], en: ["Foxconn"] }, x: 670, y: -90 },
    { id: "416", name: { zh: "竹村", en: "Zhucun" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["竹村"], en: ["Zhucun"] }, x: 670, y: -120 },
    { id: "417", name: { zh: "茜坑", en: "Xikeng" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["福城天虹"], en: ["Fucheng Rainbow"] }, x: 670, y: -150 },
    { id: "418", name: { zh: "长湖", en: "Changhu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["观澜大道"], en: ["Guanlan Blvd"] }, x: 670, y: -180 },
    { id: "419", name: { zh: "观澜", en: "Guanlan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["观澜老街"], en: ["Guanlan Old Street"] }, x: 670, y: -210 },
    { id: "420", name: { zh: "松元厦", en: "Songyuanxia" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["松元公园"], en: ["Songyuan Park"] }, x: 670, y: -240 },
    { id: "421", name: { zh: "观澜湖", en: "Mission Hills" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["观澜湖新城"], en: ["MH Mall"] }, x: 670, y: -270 },
    { id: "422", name: { zh: "牛湖", en: "Niuhu" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["版画基地"], en: ["Printmaking Base"] }, x: 670, y: -300 }
  ]
};
