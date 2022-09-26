const inputDate=document.querySelector("#date-input");
const checkButton=document.querySelector("#btn");
const outputBox=document.querySelector("#output");

function reverseStr(str){
    var listOfStr= str.split('');
    var reverselist=listOfStr.reverse();
    var reversedStr=reverselist.join("");
    return reversedStr;
}

function isPalindrome(str){
    var string=reverseStr(str);
    return str === reverseStr(str);
}

console.log(isPalindrome("mom"))

function convertDateToStr(date){
    var dateStr= {day:'',month:'',year:''}
    if(date.day<10){
        dateStr.day='0'+ date.day;
    }else{
        dateStr.day=date.day.toString();
    }
    if(date.month<10){
        dateStr.month='0'+date.month;
    }else{
        dateStr.month=date.month.toString();
    }
    dateStr.year=date.year.toString();

    return dateStr;
}

function getAllDateFormat(date){
    var dateStr=convertDateToStr(date);

    var ddmmyyyy=dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy=dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd=dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy= dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy=dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd= dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ ddmmyyyy,mmddyyyy, yyyymmdd,ddmmyy, mmddyy,yymmdd];
}

function checkPalindromeForAllDateFormat(date){
    var listOfPalindrome=getAllDateFormat(date);

    for(var i=0;i<listOfPalindrome.length; i++){
        if(isPalindrome(listOfPalindrome[i])){
            return true
            break;
        }return false
    }
}



var date={
    day:8,
    month:2,
    year:2080
}

console.log(checkPalindromeForAllDateFormat(date));






// checkButton.addEventListener("click");