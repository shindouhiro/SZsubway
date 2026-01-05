import { Line } from "../../types";

export const line13: Line = {
  id: "13",
  name: { zh: "13号线", en: "Line 13" },
  color: "#e4952d",
  stations: [
    {
      id: "1301",
      name: { zh: "深圳湾口岸", en: "Shenzhen Bay Port" },
      toilet: { zh: "暂无信息", en: "Info Unavailable" },
      toilets: [{ location: { zh: "站厅", en: "Hall" }, exit: "A" }],
      exits: [{ id: "A", x: -25, y: -25 }, { id: "B", x: 25, y: -25 }, { id: "C", x: 30, y: 10 }],
      surroundings: { zh: ["深圳湾口岸"], en: ["Shenzhen Bay Port"] },
      x: 300, y: 500
    },
    { id: "1302", name: { zh: "人才公园", en: "Talent Park" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["人才公园"], en: ["Talent Park"] }, x: 320, y: 480 },
    { id: "1303", name: { zh: "后海", en: "Houhai" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["海岸城"], en: ["Coastal City"] }, transfer: ["2", "11"], x: 330, y: 450 },
    { id: "1304", name: { zh: "科苑", en: "Keyuan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["科苑"], en: ["Keyuan"] }, transfer: ["2"], x: 360, y: 440 },
    { id: "1305", name: { zh: "粤海门", en: "Yuehaimen" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["粤海门"], en: ["Yuehaimen"] }, transfer: ["9"], x: 310, y: 450 },
    { id: "1306", name: { zh: "深大", en: "Shenzhen Univ." }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["深圳大学"], en: ["SZU"] }, transfer: ["1"], x: 370, y: 350 },
    { id: "1307", name: { zh: "高新中", en: "Hi-Tech Central" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["高新中"], en: ["Hi-Tech Central"] }, x: 340, y: 340 },
    { id: "1308", name: { zh: "高新北", en: "Hi-Tech North" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["高新北"], en: ["Hi-Tech North"] }, x: 340, y: 300 },
    { id: "1309", name: { zh: "西丽高铁站", en: "Xili HSR Station" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["西丽高铁站"], en: ["Xili HSR"] }, x: 410, y: 200 },
    { id: "1310", name: { zh: "石鼓", en: "Shigu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["石鼓"], en: ["Shigu"] }, x: 430, y: 180 },
    { id: "1311", name: { zh: "留仙洞", en: "Liuxiandong" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["留仙洞"], en: ["Liuxiandong"] }, transfer: ["5"], x: 300, y: 150 },
    { id: "1312", name: { zh: "百旺港大", en: "Baiwanggangda" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["百旺港大"], en: ["Baiwanggangda"] }, x: 320, y: 120 },
    { id: "1313", name: { zh: "应人石", en: "Yingrenshi" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["应人石"], en: ["Yingrenshi"] }, x: 350, y: 100 },
    { id: "1314", name: { zh: "罗租", en: "Luozu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["罗租"], en: ["Luozu"] }, x: 400, y: 80 },
    { id: "1315", name: { zh: "石岩", en: "Shiyan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["石岩"], en: ["Shiyan"] }, x: 430, y: 80 },
    { id: "1316", name: { zh: "上屋", en: "Shangwu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["上屋"], en: ["Shangwu"] }, transfer: ["6"], x: 470, y: 60 }
  ]
};

export const line14: Line = {
  id: "14",
  name: { zh: "14号线", en: "Line 14" },
  color: "#f2c64d",
  stations: [
    { id: "1401", name: { zh: "岗厦北", en: "Gangxia North" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["岗厦北"], en: ["Gangxia North"] }, transfer: ["2", "10", "11"], x: 700, y: 340 },
    { id: "1402", name: { zh: "黄木岗", en: "Huangmugang" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["黄木岗"], en: ["Huangmugang"] }, transfer: ["7"], x: 730, y: 300 },
    { id: "1403", name: { zh: "罗湖北", en: "Luohu North" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["罗湖北"], en: ["Luohu North"] }, x: 850, y: 250 },
    { id: "1404", name: { zh: "布吉", en: "Buji" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["布吉"], en: ["Buji"] }, transfer: ["3", "5"], x: 1000, y: 260 },
    { id: "1405", name: { zh: "石芽岭", en: "Shiyaling" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["石芽岭"], en: ["Shiyaling"] }, x: 1050, y: 240 },
    { id: "1406", name: { zh: "六约北", en: "Liuyue North" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["六约北"], en: ["Liuyue North"] }, x: 1100, y: 220 },
    { id: "1407", name: { zh: "四联", en: "Silian" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["四联"], en: ["Silian"] }, x: 1150, y: 200 },
    { id: "1408", name: { zh: "坳背", en: "Aobei" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["坳背"], en: ["Aobei"] }, x: 1200, y: 150 },
    { id: "1409", name: { zh: "大运", en: "Universiade" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["大运"], en: ["Universiade"] }, transfer: ["3", "16"], x: 1270, y: 80 },
    { id: "1410", name: { zh: "嶂背", en: "Zhangbei" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["嶂背"], en: ["Zhangbei"] }, x: 1300, y: 100 },
    { id: "1411", name: { zh: "南约", en: "Nanyue" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["南约"], en: ["Nanyue"] }, x: 1330, y: 120 },
    { id: "1412", name: { zh: "宝龙", en: "Baolong" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["宝龙"], en: ["Baolong"] }, x: 1360, y: 100 },
    { id: "1413", name: { zh: "锦龙", en: "Jinlong" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["锦龙"], en: ["Jinlong"] }, x: 1400, y: 80 },
    { id: "1414", name: { zh: "坪山围", en: "Pingshanwei" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["坪山围"], en: ["Pingshanwei"] }, transfer: ["16"], x: 1450, y: 50 },
    { id: "1415", name: { zh: "坪山广场", en: "Pingshan Square" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["坪山广场"], en: ["Pingshan Sq"] }, x: 1480, y: 50 },
    { id: "1416", name: { zh: "坪山中心", en: "Pingshan Center" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["坪山中心"], en: ["Pingshan Center"] }, x: 1510, y: 50 },
    { id: "1417", name: { zh: "坑梓", en: "Kengzi" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["坑梓"], en: ["Kengzi"] }, x: 1550, y: 40 },
    { id: "1418", name: { zh: "沙田", en: "Shatian" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["沙田"], en: ["Shatian"] }, x: 1600, y: 30 }
  ]
};

export const line16: Line = {
  id: "16",
  name: { zh: "16号线", en: "Line 16" },
  color: "#3f566a",
  stations: [
    {
      id: "1601",
      name: { zh: "大运", en: "Universiade" },
      toilet: { zh: "站厅", en: "Hall" },
      toilets: [{ location: { zh: "站厅", en: "Hall" }, exit: "C" }],
      exits: [{ id: "C", x: -30, y: -20 }, { id: "D", x: 30, y: -20 }, { id: "E", x: 0, y: 30 }],
      surroundings: { zh: ["大运"], en: ["Universiade"] },
      transfer: ["3", "14"],
      x: 1270, y: 80
    },
    { id: "1602", name: { zh: "大运中心", en: "Universiade Center" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["大运中心"], en: ["Universiade Ctr"] }, x: 1250, y: 60 },
    { id: "1603", name: { zh: "龙城公园", en: "Longcheng Park" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["龙城公园"], en: ["Longcheng Park"] }, x: 1230, y: 40 },
    { id: "1604", name: { zh: "黄阁坑", en: "Huanggekeng" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["黄阁坑"], en: ["Huanggekeng"] }, x: 1210, y: 20 },
    { id: "1605", name: { zh: "愉园", en: "Yuyuan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["愉园"], en: ["Yuyuan"] }, x: 1230, y: 0 },
    { id: "1606", name: { zh: "回龙埔", en: "Huilongpu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["回龙埔"], en: ["Huilongpu"] }, x: 1260, y: -20 },
    { id: "1607", name: { zh: "尚景", en: "Shangjing" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["尚景"], en: ["Shangjing"] }, x: 1290, y: -40 },
    { id: "1608", name: { zh: "盛平", en: "Shengping" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["盛平"], en: ["Shengping"] }, x: 1320, y: -50 },
    { id: "1609", name: { zh: "龙园", en: "Longyuan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["龙园"], en: ["Longyuan"] }, x: 1350, y: -60 },
    { id: "1610", name: { zh: "双龙", en: "Shuanglong" }, toilet: { zh: "站厅", en: "Hall" }, surroundings: { zh: ["双龙"], en: ["Shuanglong"] }, transfer: ["3"], x: 1420, y: -20 },
    { id: "1611", name: { zh: "新塘围", en: "Xintangwei" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["新塘围"], en: ["Xintangwei"] }, x: 1450, y: -40 },
    { id: "1612", name: { zh: "龙东", en: "Longdong" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["龙东"], en: ["Longdong"] }, x: 1480, y: -60 },
    { id: "1613", name: { zh: "宝龙同乐", en: "Baolong Tongle" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["宝龙同乐"], en: ["Baolong Tongle"] }, x: 1500, y: -80 },
    { id: "1614", name: { zh: "坪山", en: "Pingshan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["坪山"], en: ["Pingshan"] }, x: 1520, y: -100 },
    { id: "1615", name: { zh: "新和", en: "Xinhe" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["新和"], en: ["Xinhe"] }, x: 1550, y: -120 },
    { id: "1616", name: { zh: "六和", en: "Liuhe" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["六和"], en: ["Liuhe"] }, x: 1500, y: -20 },
    { id: "1617", name: { zh: "坪山围", en: "Pingshanwei" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["坪山围"], en: ["Pingshanwei"] }, transfer: ["14"], x: 1450, y: 50 },
    { id: "1618", name: { zh: "坪环", en: "Pinghuan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["坪环"], en: ["Pinghuan"] }, x: 1450, y: 80 },
    { id: "1619", name: { zh: "东纵纪念馆", en: "Dongjiang Column Memorial Hall" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["东纵纪念馆"], en: ["Memorial Hall"] }, x: 1480, y: 100 },
    { id: "1620", name: { zh: "沙壆", en: "Shabo" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["沙壆"], en: ["Shabo"] }, x: 1510, y: 120 },
    { id: "1621", name: { zh: "燕子湖", en: "Yanzihu" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["燕子湖"], en: ["Yanzihu"] }, x: 1540, y: 140 },
    { id: "1622", name: { zh: "石井", en: "Shijing" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["石井"], en: ["Shijing"] }, x: 1570, y: 160 },
    { id: "1623", name: { zh: "技术大学", en: "Technology University" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["技术大学"], en: ["Tech Univ"] }, x: 1600, y: 180 },
    { id: "1624", name: { zh: "田心", en: "Tianxin" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["田心"], en: ["Tianxin"] }, x: 1630, y: 200 }
  ]
};

export const line20: Line = {
  id: "20",
  name: { zh: "20号线", en: "Line 20" },
  color: "#88d3e6",
  stations: [
    { id: "2001", name: { zh: "机场北", en: "Airport North" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["机场北"], en: ["Airport North"] }, transfer: ["11"], x: 80, y: 230 },
    { id: "2002", name: { zh: "国展南", en: "Guozhan South" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["国展南"], en: ["Guozhan South"] }, x: 70, y: 240 },
    { id: "2003", name: { zh: "国展", en: "Guozhan" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["国展"], en: ["Guozhan"] }, transfer: ["12"], x: 60, y: 240 },
    { id: "2004", name: { zh: "国展北", en: "Guozhan North" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["国展北"], en: ["Guozhan North"] }, transfer: ["12"], x: 50, y: 250 },
    { id: "2005", name: { zh: "会展城", en: "Convention & Exhibition City" }, toilet: { zh: "暂无信息", en: "Info Unavailable" }, surroundings: { zh: ["会展城"], en: ["Convention City"] }, x: 40, y: 260 }
  ]
};
