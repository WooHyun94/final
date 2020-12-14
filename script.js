'use strict';
var id_date = document.getElementById('date');

var database = firebase.database();
    let today = new Date();   
    var week = new Array('월', '화', '수', '목', '금');
    hour = today.getHours();   
    
    if((hour+"").length < 2){
      hour="0"+hour;      
    }  
    
    function check_vision() {
      if ((week[today.getDay()] == 1) && (eval(hour) >= 9 && eval(hour) <= 12)){
        document.write("<img src='vision_dan.png'");
      }else if((week[today.getDay()] == 1) && (eval(hour) >= 8 && eval(hour) < 9)){
        document.write("<img src='vision_warn.png'");
      }else{
        document.write("<img src='vision_succ.png'");
      }
    } 
    function check_PnC() {
      if ((week[today.getDay()] == 0) && (eval(hour) >= 12 && eval(hour) <= 15)){
        document.write("<img src='PnC_dan.png'");
      }else if((week[today.getDay()] == 0) && (eval(hour) >= 11 && eval(hour) < 12)){
        document.write("<img src='PnC_warn.png'");
      }else{
        document.write("<img src='PnC_succ.png'");
      }
    } 
    function check_AMan() {
      if ((week[today.getDay()] == 1) && (eval(hour) >= 13 && eval(hour) <= 15)){
        document.write("<img src='AMan_dan.png'");
      }else if((week[today.getDay()] == 1) && (eval(hour) >= 12 && eval(hour) < 13)){
        document.write("<img src='AMan_warn.png'");
      }else{
        document.write("<img src='AMan_succ.png'");
      }
    } 
    function check_Employment() {
      if ((week[today.getDay()] == 4) && (eval(hour) >= 12 && eval(hour) <= 14)){
        document.write("<img src='Employment_dan.png'");
      }else if((week[today.getDay()] == 4) && (eval(hour) >= 11 && eval(hour) < 12)){
        document.write("<img src='Employment_warn.png'");
      }else{
        document.write("<img src='Employment_succ.png'");
      }
    } 
    function check_javaWeb() {
      if ((week[today.getDay()] == 0) && (eval(hour) >= 15 && eval(hour) <= 17)){
        document.write("<img src='javaWeb_dan.png'");
      }else if((week[today.getDay()] == 0) && (eval(hour) >= 14 && eval(hour) < 15)){
        document.write("<img src='javaWeb_warn.png'");
      }else{
        document.write("<img src='javaWeb_succ.png'");
      }
    } 
    function check_game() {
      if ((week[today.getDay()] == 1) && (eval(hour) >= 15 && eval(hour) <= 17)){
        document.write("<img src='game_dan.png'");
      }else if((week[today.getDay()] == 1) && (eval(hour) >= 14 && eval(hour) < 15)){
        document.write("<img src='game_warn.png'");
      }else{
        document.write("<img src='game_succ.png'");
      }
    } 
    function check_DB() {
      if ((week[today.getDay()] == 2) && (eval(hour) >= 15 && eval(hour) <= 17)){
        document.write("<img src='DB_dan.png'");
      }else if((week[today.getDay()] == 2) && (eval(hour) >= 14 && eval(hour) < 15)){
        document.write("<img src='DB_warn.png'");
      }else{
        document.write("<img src='DB_succ.png'");
      }
    }      

function isLeap(year) {
    if (year % 400 == 0) return true;
    if (year % 100 == 0) return false;
    if (year % 4 == 0) return true;
    return false;
}

function pYear(year) {
    return (year + Math.floor(year / 4)
                 - Math.floor(year / 100)
                 + Math.floor(year / 400)) % 7;
}

function lastWeek(year) {
    if (pYear(year) == 4 || pYear(year - 1) == 3)
        return 53;
    return 52;
}

function ordinalDay(date) {
    var ordinal_table = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

    if (isLeap(date.getFullYear()))
        for (var i = 2; i < ordinal_table.length; i++)
            ordinal_table[i] += 1;

    return ordinal_table[date.getMonth()] + date.getDate();
}

function weekNumber(date) {
    var ordinal_day = ordinalDay(date);
    var current_year = date.getFullYear();
    var weekday = date.getDay();
    var week = Math.floor((ordinal_day - weekday + 10) / 7);

    if (week < 1) return lastWeek(current_year- 1);
    if (week > lastWeek(current_year)) return 1;
    return week;
}

function renderPage(date) {      
    id_date.innerText = date.toLocaleString();
}

document.addEventListener('DOMContentLoaded', function() {
    var date = new Date();
    renderPage(date);
    setInterval(function() {
        var now = new Date();
        id_date.innerText = now.toLocaleString();

        if (now.getDate != date.getDate) {
            date = now;
            renderPage(date);
        }
    }, 1000);
});