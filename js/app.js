// (2021-01-## ##:## - 1910-01-01 00:00)
var now = new Date();
var firstDay = new Date("1910-01-01");
// 1[msecond] == (1 / 1000)[second]
// 1[second] == 1000[msecond]
// 1[minute] == 60[second]
// 1[hour] == 60[minute]
// 1[day] == 24[hour] == 24 * (60 * 60 * 1000)[msecond]
// 1,610,870,234,440[ms]
var toNow = now.getTime();
// 1,609,459,200,000[ms]
var toFirst = firstDay.getTime();
// 1,411,034,440[ms]
var passedTime = toNow - toFirst;
// 1,411,034,440[ms] == {1,411,034,440 / (24 * 60 * 60 * 1000)}[day]
var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24));

document.querySelector("#accent").innerText = passedDay + "[day]";