var eduk1_demo =
[
    [ "首页信息屏", "homepage.html", [
      [ "实验介绍", "homepage.html#autotoc_md1007", [
        [ "HaaS EDU场景式应用整体介绍", "eduk1_demo.html#autotoc_md901", [
          [ "2.1 首页系统信息屏", "eduk1_demo.html#autotoc_md902", null ],
          [ "2.2 温湿度计", "eduk1_demo.html#autotoc_md903", null ],
          [ "2.3 陀螺仪小球", "eduk1_demo.html#autotoc_md904", null ],
          [ "2.4 分歧争端机", "eduk1_demo.html#autotoc_md905", null ],
          [ "2.5 电子罗盘", "eduk1_demo.html#autotoc_md906", null ],
          [ "2.6 光照信息屏", "eduk1_demo.html#autotoc_md907", null ],
          [ "2.7 大气压海拔仪", "eduk1_demo.html#autotoc_md908", null ],
          [ "2.8 复古八音盒", "eduk1_demo.html#autotoc_md909", null ],
          [ "2.9 贪吃蛇", "eduk1_demo.html#autotoc_md910", null ],
          [ "2.10 飞机大战", "eduk1_demo.html#autotoc_md911", null ]
        ] ]
      ] ],
      [ "涉及知识点", "homepage.html#autotoc_md1009", null ],
      [ "软硬件环境准备", "homepage.html#autotoc_md1010", [
        [ "硬件", "homepage.html#autotoc_md1011", null ]
      ] ],
      [ "各实验介绍", "homepage.html#autotoc_md1012", [
        [ "OLED开发与显示", "homepage.html#autotoc_md1013", [
          [ "OLED背景介绍", "homepage.html#autotoc_md1014", null ],
          [ "硬件设计", "homepage.html#autotoc_md1015", null ],
          [ "软件设计", "homepage.html#autotoc_md1016", [
            [ "显示效果", "homepage.html#autotoc_md1008", null ],
            [ "初始化", "homepage.html#autotoc_md1017", null ],
            [ "显示部分", "homepage.html#autotoc_md1018", null ]
          ] ]
        ] ],
        [ "ADC操作与电量获取", "homepage.html#autotoc_md1019", [
          [ "背景介绍", "homepage.html#autotoc_md1020", null ],
          [ "硬件设计", "homepage.html#autotoc_md1021", null ],
          [ "软件设计", "homepage.html#autotoc_md1022", [
            [ "驱动初始化", "homepage.html#autotoc_md1023", null ],
            [ "获取电压值", "homepage.html#autotoc_md1024", null ],
            [ "返回电量等级", "homepage.html#autotoc_md1025", null ],
            [ "显示图标", "homepage.html#autotoc_md1026", null ]
          ] ]
        ] ],
        [ "系统Wi-Fi以及网络对时", "homepage.html#autotoc_md1027", [
          [ "背景介绍", "homepage.html#autotoc_md1028", [
            [ "Wi-Fi", "homepage.html#autotoc_md1029", null ],
            [ "2.4GHz频段", "homepage.html#autotoc_md1030", null ],
            [ "5GHz频段", "homepage.html#autotoc_md1031", null ],
            [ "系统时钟获取（SNTP网络对时）", "homepage.html#autotoc_md1032", null ],
            [ "SNTP协议", "homepage.html#autotoc_md1033", null ]
          ] ],
          [ "硬件设计", "homepage.html#autotoc_md1034", null ],
          [ "软件设计", "homepage.html#autotoc_md1035", [
            [ "Wi-Fi模块", "homepage.html#autotoc_md1036", null ],
            [ "使用Wi-Fi", "homepage.html#autotoc_md1037", null ],
            [ "网络对时（SNTP）", "homepage.html#autotoc_md1038", null ]
          ] ]
        ] ]
      ] ]
    ] ],
    [ "温湿度计", "humiture.html", [
      [ "实验介绍", "humiture.html#autotoc_md1039", null ],
      [ "涉及知识点", "humiture.html#autotoc_md1040", null ],
      [ "软硬件环境准备", "humiture.html#autotoc_md1044", [
        [ "硬件", "humiture.html#autotoc_md1045", null ]
      ] ],
      [ "硬件设计", "humiture.html#autotoc_md1046", null ]
    ] ],
    [ "陀螺仪小球", "gyroscope.html", [
      [ "实验介绍", "gyroscope.html#autotoc_md988", null ],
      [ "涉及知识点", "gyroscope.html#autotoc_md989", null ],
      [ "软硬件环境准备", "gyroscope.html#autotoc_md990", [
        [ "硬件", "gyroscope.html#autotoc_md991", null ]
      ] ],
      [ "硬件介绍 - MPU-6050", "gyroscope.html#autotoc_md992", [
        [ "DataSheet", "gyroscope.html#autotoc_md993", null ],
        [ "硬件规格", "gyroscope.html#autotoc_md994", null ],
        [ "传感原理", "gyroscope.html#autotoc_md995", null ],
        [ "原理图", "gyroscope.html#autotoc_md996", null ],
        [ "驱动方式", "gyroscope.html#autotoc_md997", [
          [ "I2C通信原理", "humiture.html#autotoc_md1041", null ],
          [ "SI7006传感器简介", "humiture.html#autotoc_md1042", null ],
          [ "OLED绘图", "humiture.html#autotoc_md1043", null ],
          [ "软件设计", "humiture.html#autotoc_md1047", [
            [ "应用代码部分", "humiture.html#autotoc_md1048", null ],
            [ "驱动部分", "humiture.html#autotoc_md1049", null ]
          ] ],
          [ "通讯接口", "gyroscope.html#autotoc_md998", null ],
          [ "寄存器", "gyroscope.html#autotoc_md999", null ],
          [ "驱动实现", "gyroscope.html#autotoc_md1000", [
            [ "uint8_t MPU_Init(void)", "gyroscope.html#autotoc_md1001", null ],
            [ "void MPU_Get_Gyroscope(short *gx, short *gy, short *gz)", "gyroscope.html#autotoc_md1002", null ],
            [ "void MPU_Get_Accelerometer(short *ax, short *ay, short *az)", "gyroscope.html#autotoc_md1003", null ]
          ] ]
        ] ]
      ] ],
      [ "应用开发", "gyroscope.html#autotoc_md1004", null ],
      [ "更多应用", "gyroscope.html#autotoc_md1005", null ],
      [ "引用", "gyroscope.html#autotoc_md1006", null ]
    ] ],
    [ "分歧争端机", "shakeshake.html", [
      [ "实验介绍", "shakeshake.html#autotoc_md1093", null ],
      [ "涉及知识点", "shakeshake.html#autotoc_md1094", null ],
      [ "硬件介绍 - MPU-6050", "shakeshake.html#autotoc_md1095", null ],
      [ "应用开发", "shakeshake.html#autotoc_md1096", null ]
    ] ],
    [ "电子罗盘", "compass.html", [
      [ "实验介绍", "compass.html#autotoc_md948", null ],
      [ "涉及知识点", "compass.html#autotoc_md949", null ],
      [ "软硬件环境准备", "compass.html#autotoc_md950", [
        [ "硬件", "compass.html#autotoc_md951", null ]
      ] ],
      [ "硬件介绍 - QMC5883L", "compass.html#autotoc_md952", [
        [ "DataSheet", "compass.html#autotoc_md953", null ],
        [ "硬件规格", "compass.html#autotoc_md954", null ],
        [ "传感原理", "compass.html#autotoc_md955", [
          [ "autotoc_md1097", "shakeshake.html#autotoc_md1097", null ],
          [ "名词释义", "compass.html#autotoc_md956", null ]
        ] ],
        [ "驱动方式", "compass.html#autotoc_md957", [
          [ "通讯接口", "compass.html#autotoc_md958", null ],
          [ "寄存器地址", "compass.html#autotoc_md959", [
            [ "只读寄存器（输出寄存器）", "compass.html#autotoc_md960", null ],
            [ "读写寄存器（配置寄存器）", "compass.html#autotoc_md961", null ]
          ] ],
          [ "驱动实现", "compass.html#autotoc_md962", null ]
        ] ],
        [ "数据校准", "compass.html#autotoc_md963", [
          [ "原始数据采样", "compass.html#autotoc_md964", null ]
        ] ]
      ] ],
      [ "界面开发", "compass.html#autotoc_md965", null ]
    ] ],
    [ "大气压海拔仪", "barometer.html", [
      [ "实验介绍", "barometer.html#autotoc_md930", null ],
      [ "涉及知识点", "barometer.html#autotoc_md931", null ],
      [ "开发准备", "barometer.html#autotoc_md934", [
        [ "硬件", "barometer.html#autotoc_md935", null ]
      ] ],
      [ "硬件设计", "barometer.html#autotoc_md936", null ]
    ] ],
    [ "光照信息屏", "lightmeter.html", [
      [ "实验整体介绍", "lightmeter.html#autotoc_md1050", [
        [ "背景", "lightmeter.html#autotoc_md1051", null ],
        [ "涉及的知识点", "lightmeter.html#autotoc_md1052", null ]
      ] ],
      [ "实验准备工作", "lightmeter.html#autotoc_md1053", [
        [ "硬件", "lightmeter.html#autotoc_md1054", null ],
        [ "上手把玩", "lightmeter.html#autotoc_md1055", null ],
        [ "实际应用场景（产品）介绍", "lightmeter.html#autotoc_md1056", null ]
      ] ],
      [ "硬件介绍", "lightmeter.html#autotoc_md1057", [
        [ "电路原理图", "lightmeter.html#autotoc_md1058", null ],
        [ "AP3216C传感器", "lightmeter.html#autotoc_md1059", [
          [ "I2C通信原理", "barometer.html#autotoc_md932", null ],
          [ "SPL06传感器简介", "barometer.html#autotoc_md933", null ],
          [ "SPL06特性", "barometer.html#autotoc_md937", null ],
          [ "读取大气压", "barometer.html#autotoc_md938", [
            [ "压力数据寄存器", "barometer.html#autotoc_md939", null ],
            [ "校准寄存器", "barometer.html#autotoc_md940", null ],
            [ "如何计算气压", "barometer.html#autotoc_md941", null ]
          ] ],
          [ "读取温度", "barometer.html#autotoc_md942", [
            [ "温度数据寄存器", "barometer.html#autotoc_md943", null ],
            [ "如何计算温度", "barometer.html#autotoc_md944", null ]
          ] ],
          [ "软件设计", "barometer.html#autotoc_md945", [
            [ "应用代码部分", "barometer.html#autotoc_md946", null ],
            [ "驱动部分", "barometer.html#autotoc_md947", null ]
          ] ],
          [ "AP3216C外观", "lightmeter.html#autotoc_md1060", null ],
          [ "AP3216C芯片特性", "lightmeter.html#autotoc_md1061", null ],
          [ "AP3216C内部框图", "lightmeter.html#autotoc_md1062", null ],
          [ "AP3216C工作模式", "lightmeter.html#autotoc_md1063", null ],
          [ "AP3216C中断模式", "lightmeter.html#autotoc_md1064", null ],
          [ "AP3216C工作流程", "lightmeter.html#autotoc_md1065", null ],
          [ "ALS光强度解析", "lightmeter.html#autotoc_md1066", null ],
          [ "PS/IR数据解析", "lightmeter.html#autotoc_md1067", null ],
          [ "PS中断模式说明", "lightmeter.html#autotoc_md1068", null ]
        ] ],
        [ "I2C总线技术", "lightmeter.html#autotoc_md1069", null ]
      ] ],
      [ "软件介绍", "lightmeter.html#autotoc_md1070", [
        [ "软件流程", "lightmeter.html#autotoc_md1071", null ],
        [ "代码实现", "lightmeter.html#autotoc_md1072", [
          [ "光照信息屏页面", "lightmeter.html#autotoc_md1073", null ],
          [ "AP3216C驱动", "lightmeter.html#autotoc_md1074", null ]
        ] ]
      ] ]
    ] ],
    [ "复古八音盒", "musicbox.html", [
      [ "实验介绍", "musicbox.html#autotoc_md1075", null ],
      [ "涉及知识点", "musicbox.html#autotoc_md1076", null ],
      [ "实验准备工作", "musicbox.html#autotoc_md1077", [
        [ "硬件", "musicbox.html#autotoc_md1078", null ]
      ] ],
      [ "蜂鸣器", "musicbox.html#autotoc_md1079", [
        [ "驱动电路", "musicbox.html#autotoc_md1080", null ],
        [ "驱动代码", "musicbox.html#autotoc_md1081", null ]
      ] ],
      [ "从音调到音乐", "musicbox.html#autotoc_md1082", [
        [ "定义音调", "musicbox.html#autotoc_md1083", null ],
        [ "生成乐谱", "musicbox.html#autotoc_md1084", [
          [ "音符", "musicbox.html#autotoc_md1085", null ],
          [ "八度", "musicbox.html#autotoc_md1086", [
            [ "自然大调", "musicbox.html#autotoc_md1087", null ],
            [ "自然小调", "musicbox.html#autotoc_md1088", null ]
          ] ],
          [ "拍号和音长", "musicbox.html#autotoc_md1089", null ],
          [ "结构体定义", "musicbox.html#autotoc_md1090", null ]
        ] ]
      ] ],
      [ "实现播放音乐", "musicbox.html#autotoc_md1091", null ],
      [ "绘制播放器", "musicbox.html#autotoc_md1092", null ]
    ] ],
    [ "贪吃蛇", "greedy_snake.html", [
      [ "实验介绍", "greedy_snake.html#autotoc_md966", null ],
      [ "涉及知识点", "greedy_snake.html#autotoc_md967", null ],
      [ "软硬件环境准备", "greedy_snake.html#autotoc_md968", [
        [ "硬件", "greedy_snake.html#autotoc_md969", null ]
      ] ],
      [ "设计思路", "greedy_snake.html#autotoc_md970", [
        [ "游戏空间映射到逻辑空间", "greedy_snake.html#autotoc_md971", null ],
        [ "对象定义", "greedy_snake.html#autotoc_md972", [
          [ "蛇", "greedy_snake.html#autotoc_md973", null ],
          [ "食物", "greedy_snake.html#autotoc_md974", null ],
          [ "地图", "greedy_snake.html#autotoc_md975", null ],
          [ "游戏", "greedy_snake.html#autotoc_md976", null ]
        ] ],
        [ "对象初始化", "greedy_snake.html#autotoc_md977", null ],
        [ "对象绘画", "greedy_snake.html#autotoc_md978", [
          [ "蛇", "greedy_snake.html#autotoc_md979", null ],
          [ "食物", "greedy_snake.html#autotoc_md980", null ]
        ] ],
        [ "对象行为", "greedy_snake.html#autotoc_md981", [
          [ "蛇的运动", "greedy_snake.html#autotoc_md982", null ],
          [ "死亡判定", "greedy_snake.html#autotoc_md983", null ],
          [ "吃食判定", "greedy_snake.html#autotoc_md984", null ]
        ] ],
        [ "绑定用户操作", "greedy_snake.html#autotoc_md985", null ],
        [ "游戏全局控制", "greedy_snake.html#autotoc_md986", null ],
        [ "实现效果", "greedy_snake.html#autotoc_md987", null ]
      ] ]
    ] ],
    [ "飞机大战", "aircraft_battle.html", [
      [ "实验介绍", "aircraft_battle.html#autotoc_md912", null ],
      [ "涉及知识点", "aircraft_battle.html#autotoc_md913", null ],
      [ "软硬件环境准备", "aircraft_battle.html#autotoc_md914", [
        [ "硬件", "aircraft_battle.html#autotoc_md915", null ]
      ] ],
      [ "游戏设定", "aircraft_battle.html#autotoc_md916", [
        [ "角色设定", "aircraft_battle.html#autotoc_md917", null ],
        [ "行为设定", "aircraft_battle.html#autotoc_md918", null ]
      ] ],
      [ "游戏实现", "aircraft_battle.html#autotoc_md919", [
        [ "游戏流程", "aircraft_battle.html#autotoc_md920", null ],
        [ "贴图实现", "aircraft_battle.html#autotoc_md921", null ],
        [ "移动战舰", "aircraft_battle.html#autotoc_md922", null ],
        [ "加一点特效", "aircraft_battle.html#autotoc_md923", null ],
        [ "移动敌机", "aircraft_battle.html#autotoc_md924", null ],
        [ "重载敌机", "aircraft_battle.html#autotoc_md925", null ],
        [ "发射子弹", "aircraft_battle.html#autotoc_md926", null ],
        [ "撞击判定", "aircraft_battle.html#autotoc_md927", null ],
        [ "全局刷新", "aircraft_battle.html#autotoc_md928", null ]
      ] ],
      [ "实现效果", "aircraft_battle.html#autotoc_md929", null ]
    ] ]
];