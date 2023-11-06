var today = new Date();
var day = today.getDay();
var daylist = ["sunday","monday","tuesday","wednesday","thursday","friday"."saturday"];
console.log("today is :" + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >=12)? hour -12: hour;
hour = (hour===0 && prepand==='PM');
if()