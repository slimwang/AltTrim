> 当我们阅读 pdf 文件时, 经常需要复制一段英文当浏览器 (谷歌翻译 搜狗翻译 有道翻译之类),
而我们复制时会把 pdf 中的换行符也复制下来, 这样就需要手动把换行删掉, 再插入空格, 否则就会被逐行翻译, 效果很差  
于是便有了 AltTrim

# AltTrim - Chrome Extension
一键删除剪贴板内的换行符

# 安装
通过 chrome web store 安装:  
[chrome web store](https://chrome.google.com/webstore/detail/alttrim/degegfodgkcbiplngnpdajicbbcklgcd)

或者手动安装:  
*因为最新版本 Chrome 禁用了拖拽式安装, 所以通过拖拽来安装 crx 文件的方式现在并不适用*  

而是应该:  
(1) 点击右上角的 clone or download 克隆或者下载源代码  
(2) Chrome 浏览器点击 [更多] -> [扩展程序]  
(3) 右上角开启[开发者模式]  
(4) 左上角[加载已解压的扩展程序]  
(5) 关闭开发者模式  

现在当你按下 Alt + T 时, 浏览器会自动调用插件

### 使用方法
在浏览器界面按 Alt + T

### 预览图

#### pdf 中复制一段英文
<img src="https://raw.githubusercontent.com/slimwang/imgFolder/master/AltTrim/1.png" width="400" />

#### 直接复制过来翻译, 会被逐行翻译, 效果很差
<img src="https://raw.githubusercontent.com/slimwang/imgFolder/master/AltTrim/2.png" width="400" />

#### 删去换行符后的效果
<img src="https://raw.githubusercontent.com/slimwang/imgFolder/master/AltTrim/3.png" width="400" />
