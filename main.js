const axios = require("axios");

// 获取输入的cookie
let cookies = process.argv[2];
result = cookies.split("#");

// 输入获取的data
let data = process.argv.slice(3);
let dataObject = {
    currentAddress: data[0],
    isInSchool: parseInt(data[1]),
    isLeaveChengdu: parseInt(data[2]),
    province: data[3],
    city: data[4],
    county: data[5],
}

console.log(dataObject);
// 获取输入的location
// let location = process.argv[3];
// if (typeof (location) === "undefined") {
//     location = "四川省成都市郫都区银杏大道";
// }


for (let userNum in result) {
    console.log(`第${parseInt(userNum)+1}位学生：准备上报`);
    checkReport(result[userNum], userNum);
}


function checkReport(cookie, userNum) {
    axios({
        url: "https://jzsz.uestc.edu.cn/wxvacation/checkRegisterNew",
        method: "get",
        data: {},
        headers: {
            "Host": "jzsz.uestc.edu.cn",
            "content-type": "application/json",
            "User-Agent": "Mozilla / 5.0(Linux; Android 10; LIO-AN00 Build/HUAWEILIO-AN00; wv) AppleWebKit / 537.36(KHTML, like Gecko) Version / 4.0 Chrome / 66.0 .3359 .158 Mobile Safari / 537.36 MicroMessenger / 7.0 .13 .1640(0x27000D39) Process / appbrand3 NetType / WIFI Language / zh_CN ABI / arm64 WeChat / arm64",
            "Accept-Encoding": "gzip, deflate, br",
            "encode": false,
            "Connection": "keep-alive",
            "X-Tag": "flyio",
            "charset": "utf-8",
            "Cookie": cookie,
            "Referer": "https://servicewechat.com/wx521c0c16b77041a0/29/page-frame.html"
        }
    }).then((res) => {
        if (res.data.data.appliedTimes === 0) {
            // reportBodyTemperature(cookie, userNum);
            reportBodyTemperatureVersion2(cookie, userNum);
        } else {
            console.log(`第${parseInt(userNum)+1}位学生：今日体温已上报`);
        }
    }).catch((err) => {
        console.log("获取信息失败");
        console.log("err", err);
    })
}


function reportBodyTemperatureVersion2(cookie, userNum) {
    axios({
        url: "https://jzsz.uestc.edu.cn/wxvacation/monitorRegister",
        method: "post",
        data: {
            "currentAddress": dataObject.currentAddress,
            "remark": "",
            "healthInfo": "正常",
            "isContactWuhan": 0,
            "isFever": 0,
            "isInSchool": dataObject.isInSchool,
            "isLeaveChengdu": dataObject.isLeaveChengdu,
            "isSymptom": 0,
            "temperature": "36°C~36.5°C",
            "province": dataObject.province,
            "city": dataObject.city,
            "county": dataObject.county,
        },
        headers: {
            "Host": "jzsz.uestc.edu.cn",
            "content-type": "application/json",
            "User-Agent": "Mozilla / 5.0(Linux; Android 10; LIO-AN00 Build/HUAWEILIO-AN00; wv) AppleWebKit / 537.36(KHTML, like Gecko) Version / 4.0 Chrome / 66.0 .3359 .158 Mobile Safari / 537.36 MicroMessenger / 7.0 .13 .1640(0x27000D39) Process / appbrand3 NetType / WIFI Language / zh_CN ABI / arm64 WeChat / arm64",
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Length": "279",
            "encode": false,
            "Connection": "keep-alive",
            "X-Tag": "flyio",
            "Cookie": cookie,
            "Referer": "https://servicewechat.com/wx521c0c16b77041a0/30/page-frame.html"
        }
    }).then(function (res) {
        console.log(`第${parseInt(userNum)+1}位学生：已成功上报体温`);
    }).catch((err) => {
        console.log(`第${parseInt(userNum)+1}位学生：上报体温失败`);
        console.log("err", err);
    })
}




function reportBodyTemperature(cookie, userNum) {
    axios({
        url: "https://jzsz.uestc.edu.cn/wxvacation/monitorRegisterForReturned",
        method: "post",
        data: {
            "healthCondition": "正常",
            "todayMorningTemperature": "36°C~36.5°C",
            "yesterdayEveningTemperature": "36°C~36.5°C",
            "yesterdayMiddayTemperature": "36°C~36.5°C",
            "location": location
        },
        headers: {
            "content-type": "application/json",
            "User-Agent": "Mozilla / 5.0(Linux; Android 10; LIO-AN00 Build/HUAWEILIO-AN00; wv) AppleWebKit / 537.36(KHTML, like Gecko) Version / 4.0 Chrome / 66.0 .3359 .158 Mobile Safari / 537.36 MicroMessenger / 7.0 .13 .1640(0x27000D39) Process / appbrand3 NetType / WIFI Language / zh_CN ABI / arm64 WeChat / arm64",
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Length": "220",
            "encode": false,
            "Connection": "keep-alive",
            "X-Tag": "flyio",
            "charset": "utf-8",
            "Cookie": cookie,
            "Referer": "https://servicewechat.com/wx521c0c16b77041a0/29/page-frame.html"
        }
    }).then(function (res) {
        console.log(`第${parseInt(userNum)+1}位学生：已成功上报体温`);
    }).catch((err) => {
        console.log(`第${parseInt(userNum)+1}位学生：上报体温失败`);
        console.log("err", err);
    })
}