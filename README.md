# UESTC_Daily_Body_Temperature_Report

**成电/电子科技大学每日体温上报**

**仅适用于微信“uestc 学生情况报送”小程序的学生情况报送**

**现在每天都要上报体温，这有点烦人，而且还有偶尔会忘记的情况，该项目利用 Github 的 Actions 实现每日体温自动上报**

## 项目简介

- 这个项目写的很简单，作用也不是很大，因为需要获取你的 Cookie 才能实现自动上报
- 获取 Cookie 方法可以通过抓包，作者是使用 Charles+Proxifier 抓取电脑版微信的“uestc 学生情况报送”小程序的 Cookie（一般会这步的人都可以自己写自动上报了，所以说作用不大）

## 使用方法

- 自行抓取你的`Cookie`
- `Fork`此仓库
- 在自己的项目界面，点击 `Settings`-->`Secrets`-->`New secret Secrets`
- 创建`COOKIE`，把你抓到的`Cookie`粘贴到`Value`中
- ~~同时创建`LOCATION`，输入你签到需要定位的位置~~
- 同时创建`DATA`，输入你签到的具体信息，以空格分开，格式如下：

  `你的详细位置信息 0 1 你的省份 你的市 你的区`

  具体含义可参考以下部分的 json 内容：

```JSON
{ "currentAddress":"广东省广州市越秀区东风中路", "isInSchool":0, "isLeaveChengdu":1, "province": "广东省", "city": "广州市", "county": "越秀区"}
```

- 启动 Action，运行结果在`build`的`Run Main`展示

## 注意事项

- 每日自动上报时间是早上 7 点
- 点击`Run workflow`可以手动触发 Action
- 可以设置多个 Cookie，以#隔开，如 Cookie1#Cookie2#Cookie3
- **Cookie 失效时间未知**

## 免责声明

**如有意外，后果自负**
