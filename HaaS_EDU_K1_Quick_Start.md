



具体操作分为三步：


- 环境搭建
- 创建工程
- 开发及调试



# 1. 搭建开发环境
## 1.1 安装工具


### Visual Studio Code


Visual Studio Code(下称VSC) 是一款广泛使用的IDE工具。AliOS-Things 3.3的开发环境是主要基于VSC搭建的。

安装VSC:
下载链接: [https://code.visualstudio.com/docs/?dv=osx](https://code.visualstudio.com/docs/?dv=osx)



alios-studio是开发AliOS Things所需的核心插件。
请手动安装此插件（插件版本号须高于1.0.0, 插件安装方法请参考附录）


**如果已安装alios-studio** , 需要先卸载掉原有插件, 卸载参考如下方式:
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/105385/1616582010457-1fd80f31-f1ed-418e-8aac-f6dacc7a1321.png#align=left&display=inline&height=225&margin=%5Bobject%20Object%5D&name=image.png&originHeight=450&originWidth=1504&size=479488&status=done&style=none&width=752)


- **aos-tools**



aos-tools主要于编译AliOS-Things代码和镜像烧录。alios-studio安装成功后，VSC会自动在窗口的右下角提示安装aos-tools, 请点击“是”确认安装：
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/239768/1616552898421-940ce01a-5ca5-4dbe-ac51-afc3bb060f3f.png#align=left&display=inline&height=161&margin=%5Bobject%20Object%5D&name=image.png&originHeight=321&originWidth=785&size=22589&status=done&style=none&width=392.5#align=left&display=inline&height=321&margin=%5Bobject%20Object%5D&originHeight=321&originWidth=785&status=done&style=none&width=785)


等待几分钟后，aos-tools安装完毕。窗口右下角会显示“成功安装aos-tools”字样。已安装(INSTALLED)插件列表中会显示"alios-studio"和"C/C++"两个插件：
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/239768/1616553120481-4b54ca89-fbd6-49ac-9990-9ba3c17e6cdf.png#align=left&display=inline&height=401&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1015&originWidth=1707&size=303706&status=done&style=none&width=674#align=left&display=inline&height=1015&margin=%5Bobject%20Object%5D&originHeight=1015&originWidth=1707&status=done&style=none&width=1707)


# 2. 创建工程


创建工程会自动拉取AliOS-Things的核心组件代码，并配置好相关编译选项。


## 2.1 开始创建


点击左下角的"+"图标开始创建工程
![image.png](https://img.alicdn.com/imgextra/i2/O1CN01QIJaDh1Qj59taTq8f_!!6000000002011-2-tps-2774-2044.png)


## 2.2 选择解决方案和开发板


随后VSC会依次提示“请选择解决方案”和“请选择开发板”:


- 选择解决方案，即选择什么功能的示例程序，如eduk1_demo, hal demo等
- 选择开发板，即选择在哪块开发板上运行这套示例程序，如HaaS EDU等



用鼠标选择意向的解决方案（本文以 eduk1_demo为例，当开发者在这步不知道如何选择，建议选择此demo）
![image.png](hhttps://img.alicdn.com/imgextra/i2/O1CN01QIJaDh1Qj59taTq8f_!!6000000002011-2-tps-2774-2044.png)
选择解决方案，之后用鼠标选择开发板（本文以 HaaS EDU为例）
![image.png](https://img.alicdn.com/imgextra/i4/O1CN01ILyVQd1ERQUv5PF9f_!!6000000000348-2-tps-2604-382.png)


## 2.3 输入项目名称和路径

<div align=center>
    <img src="https://intranetproxy.alipay.com/skylark/lark/0/2021/png/239768/1616555086842-c8102060-19b1-4f97-a295-fe906a1e6f6a.png#align=left&display=inline&height=94&margin=%5Bobject%20Object%5D&name=image.png&originHeight=188&originWidth=1067&size=20601&status=done&style=none&width=533.5#align=left&display=inline&height=188&margin=%5Bobject%20Object%5D&originHeight=188&originWidth=1067&status=done&style=none" />

工作区路径即为源码路径(此目录名称必须为连续的英文字符, 关联bug：[https://work.aone.alibaba-inc.com/issue/33613526](https://work.aone.alibaba-inc.com/issue/33613526))
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/105385/1616577889344-5e49f406-63a8-4885-b0fc-d5daf1a82188.png#align=left&display=inline&height=457&margin=%5Bobject%20Object%5D&name=image.png&originHeight=914&originWidth=2702&size=890759&status=done&style=none&width=1351)
经过上述几步，VSC会自动下载AliOS-Things代码，稍等几分钟即可看到整份源码：
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/239768/1616565846774-59f81dcf-b0c9-4825-a768-59950f97a51d.png#align=left&display=inline&height=211&margin=%5Bobject%20Object%5D&name=image.png&originHeight=422&originWidth=689&size=34659&status=done&style=none&width=344.5#align=left&display=inline&height=422&margin=%5Bobject%20Object%5D&originHeight=422&originWidth=689&status=done&style=none&width=689)


# 3. 开发及调试


## 3.1 编译工程


点击状态栏的编译图标，稍等片刻（由于需要安装编译器，第一次编译耗时稍久）就能看到编译成功的提示。
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/105385/1616582584918-979ca39a-e01d-4766-90cc-3855a999e013.png#align=left&display=inline&height=441&margin=%5Bobject%20Object%5D&name=image.png&originHeight=882&originWidth=2814&size=689908&status=done&style=none&width=1407)
## 3.2 烧录镜像


- 如下图，用数据线把HaaS开发板和电脑连起来，同时断开HaaS开发板的电源。



![image.png](https://img.alicdn.com/imgextra/i1/O1CN01hFIvG81xtxtF7B5kb_!!6000000006502-0-tps-3648-2736.jpg)


- 启动烧录
   - 点击VSC下方状态栏中的烧录图标，随后VSC会显示电脑已识别到的串口的列表(Avaliable ports)
   - 根据HaaS开发板的端口号，输入相对应的串口序号



![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/105385/1616582826949-2f1fa7ed-150b-445a-b5ac-9f98f8d25251.png#align=left&display=inline&height=724&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1448&originWidth=2402&size=886426&status=done&style=none&width=1201)

- 接上HaaS开发板的电源，稍等两分钟就可以看到VSC提示“成功烧录”

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/105385/1616582874803-1949ae11-1e85-4929-97b6-639e1f0ea7b2.png#align=left&display=inline&height=350&margin=%5Bobject%20Object%5D&name=image.png&originHeight=700&originWidth=2328&size=355853&status=done&style=none&width=1164)


## 3.3 查看日志
使用aos monitor工具查看串口日志

![](https://img.alicdn.com/imgextra/i3/O1CN01aG5qNC1GvJZsy5419_!!6000000000684-2-tps-2376-1948.png)

设置波特率为1500000
![](https://img.alicdn.com/imgextra/i4/O1CN012NSRfk1OxcV1BVOsg_!!6000000001772-2-tps-3002-1280.png)

# 4. 附录
## 如何安装VSC插件

- 点击左侧活动栏的插件图标

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/239768/1616468934868-115d9a85-cbe2-4f54-8be0-bd2b46869f9c.png#align=left&display=inline&height=263&margin=%5Bobject%20Object%5D&name=image.png&originHeight=526&originWidth=1089&size=61292&status=done&style=none&width=544.5)

- 在搜索框中输入插件名称

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/239768/1616469212362-c8eed2c1-b86c-4f3b-8419-dc3f8ecbb862.png#align=left&display=inline&height=246&margin=%5Bobject%20Object%5D&name=image.png&originHeight=491&originWidth=1079&size=79565&status=done&style=none&width=539.5)

- 搜索到意向插件后点击安装(install)

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/239768/1616469336695-fd076d14-d116-491d-86ff-2e384a7b3d30.png#align=left&display=inline&height=240&margin=%5Bobject%20Object%5D&name=image.png&originHeight=479&originWidth=818&size=67644&status=done&style=none&width=409)
#  5. FAQ
    参见[https://yuque.antfin-inc.com/gfe27h/gxsk5b/al9gq7](https://yuque.antfin-inc.com/gfe27h/gxsk5b/al9gq7) ChangeLog部分
