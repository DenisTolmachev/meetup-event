function fulltime ()   {
    var time=new Date();
    var newTime=new Date("02,01,2019,00:00:00");
    var totalRemains=(newTime.getTime()-time.getTime());
    var RemainsSec = (parseInt(totalRemains/1000));
    var RemainsFullDays=(parseInt(RemainsSec/(24*60*60)));
    var secInLastDay=RemainsSec-RemainsFullDays*24*3600;
    var RemainsFullHours=(parseInt(secInLastDay/3600));
    if (RemainsFullHours<10){RemainsFullHours="0"+RemainsFullHours};
    var secInLastHour=secInLastDay-RemainsFullHours*3600;
    var RemainsMinutes=(parseInt(secInLastHour/60));
    if (RemainsMinutes<10){RemainsMinutes="0"+RemainsMinutes};
    var lastSec=secInLastHour-RemainsMinutes*60;
    if (lastSec<10){lastSec="0"+lastSec};
    document.getElementById("RemainsFullDays").innerHTML=RemainsFullDays;
    document.getElementById("RemainsFullHours").innerHTML=RemainsFullHours;
    document.getElementById("RemainsMinutes").innerHTML=RemainsMinutes;
    document.getElementById("lastSec").innerHTML=lastSec;
    setTimeout('fulltime()',10)
}
window.onload = function() {
    fulltime();
}
