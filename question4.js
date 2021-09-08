/*
1- Create Function sumObjectValues() that will sum all
values of the fields that contain numbers . ensure
that iteration is done only over own property of the
object
*/
function sumobjectvalues(obj) {
var sum =0 ;
for (var a in obj )
if( typeof (obj[a])==="number"){
sum+=obj[a] ;
}
console.log(sum) ;
    }
    let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  test : "hi" 
}
sumobjectvalues(salaries) ;
/*
2 - Show the execution of 3 asynchronous block of code,
one after the other in sequence
*/
doSomething();
doSomethingElse();
doSomethingUsefulThisTime();
/*
3-Write a function which can convert the time input
given in 12 hours format to 24 hours format [8
points]
*/
$(document).ready(function () {
    function am_pm_to_hours(time) {
        console.log(time);
        var hours = Number(time.match(/^(\d+)/)[1]);
        var minutes = Number(time.match(/:(\d+)/)[1]);
        var AMPM = time.match(/\s(.*)$/)[1];
        if (AMPM == "pm" && hours < 12) hours = hours + 12;
        if (AMPM == "am" && hours == 12) hours = hours - 12;
        var sHours = hours.toString();
        var sMinutes = minutes.toString();
        if (hours < 10) sHours = "0" + sHours;
        if (minutes < 10) sMinutes = "0" + sMinutes;
        return (sHours +':'+sMinutes);
    }

    function hours_am_pm(time) {
        var hours = time[0] + time[1];
        var min = time[2] + time[3];
        if (hours < 12) {
            return hours + ':' + min + ' AM';
        } else {
            hours=hours - 12;
            hours=(hours.length < 10) ? '0'+hours:hours;
            return hours+ ':' + min + ' PM';
        }
    }
    $('#b1').click(function(){
         var n = $('#textbox1').val();
         var n1 =n.split('_');
         var time = hours_am_pm(n1[0]+n1[1]);
        $('#result').text(time);
    }); 
    $('#b2').click(function(){
        var n = $('#textbox1').val();
         var n1 =n.split('_');
        var time = am_pm_to_hours(n1[0]+':'+n1[1]+' '+n1[2]);
        $('#result').text(time);
    });

});
/*
4 - Write a function which accepts two valid dates and
	returns the difference between them as number of
	days
*/ 
function datediff(a,b) {;
    one= Date.parse((a)) ;
   var minutes1 = 1000 * 60;
var hours1 = minutes1 * 60;
var days1 = hours1 * 24;
var date1 = Math.round(one / days1);
var two= Date.parse((b)) ;
   var minutes2 = 1000 * 60;
var hours2 = minutes2 * 60;
var days2 = hours2 * 24;
var date2 = Math.round(two / days2);
var newdate ;
if (date1>date2){
newdate=date1-date2 ; 
console.log(newdate);
}
else if  (date1<date2){

    newdate=date2-date1 ;   
    console.log(newdate);
}
else if  (date1===date2){

newdate=0 ;   
console.log(newdate);
}

   }
var x=prompt("enter the first date in the format YYYY-MM-DD : ")
var y=prompt("enter the second date in the format YYYY-MM-DD :")
datediff(x,y) ;
/*5- Get the maximum value from a numbers array along
	 with its index
*/ 
var arr=[] ;
arr.push(1) ;
arr.push(2) ;
arr.push(3) ;
arr.push(4) ;
arr.push(5) ;
var x=0
var index ;
for (let i=0 ; i<=arr.length;i++){
if (arr[i]>x)
{
    x=arr[i] ;
    index=i ;
}
}
console.log("the maximum value is"+x+"& INDEX ="+index) ;

