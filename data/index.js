const sampleImages = [
  {
    id: 1,
    title: "牙体解剖图",
    description: "展示牙体的内部结构，包括牙釉质、牙本质、牙髓等",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=human%20tooth%20anatomy%20structure%20maxilla%20mandible%20medical&image_size=landscape_16_9"
  },
  {
    id: 2,
    title: "口腔全景图",
    description: "展示完整的口腔结构，包括牙齿、牙龈、颌骨等",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=human%20oral%20cavity%20teeth%20structure%20maxilla%20mandible%20medical&image_size=landscape_16_9"
  },
  {
    id: 3,
    title: "颌骨结构图",
    description: "展示上下颌骨的形态结构和解剖关系",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=jaw%20bone%20structure%20maxilla%20mandible%20medical&image_size=landscape_16_9"
  }
];

const advantages = [
  {
    id: 1,
    title: "权威内容",
    description: "基于第八版口腔解剖生理学教材，内容权威可靠",
    icon: "📚"
  },
  {
    id: 2,
    title: "3D模型",
    description: "交互式3D模型展示，直观理解解剖结构",
    icon: "3️⃣"
  },
  {
    id: 3,
    title: "笔记功能",
    description: "支持图文笔记，随时记录学习心得",
    icon: "📝"
  },
  {
    id: 4,
    title: "多端适配",
    description: "支持手机、平板、电脑等多种设备",
    icon: "📱"
  }
];

const universities = [
  { id: 1, name: "北京大学口腔医学院", logo: "🏥" },
  { id: 2, name: "四川大学华西口腔医学院", logo: "🏥" },
  { id: 3, name: "上海交通大学口腔医学院", logo: "🏥" },
  { id: 4, name: "武汉大学口腔医学院", logo: "🏥" },
  { id: 5, name: "中山大学光华口腔医学院", logo: "🏥" },
  { id: 6, name: "南京医科大学口腔医学院", logo: "🏥" }
];

window.indexData = { sampleImages, advantages, universities };
