const inputDate=document.querySelector("#date-input");
const checkButton=document.querySelector("#btn");
const outputBox=document.querySelector("#output-line");

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

function IsLeapYear(year){
    if(year % 400 ===0){
        return true
    }
    if (year % 100 ===0){
        return true
    }
    if(year%4 ===0){
        return true
    }
    return false
}


function getTheNextDate(date){
    var day=date.day+1;
    var month=date.month;
    var year=date.year;

    var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];

    if(month===2){
       if(IsLeapYear(year)){
        if(day>29){
            day=1;
            month++;
        }
       }else{
        if(day>28){
            day=1;
            month++;
        }
       }
    }
    else{
        if(day>daysInMonth[month-1]){
            day=1;
            month++
        }
    }

    if(month>12){
        month=1;
        year++;
    }

    return {
        day:day,
        month:month,
        year:year
    };

}

function getNextPalindromeDate(date){
    var ctr=0;
    var nextDate=getTheNextDate(date);

    while(1){
        ctr++;
        var isPalindrome=checkPalindromeForAllDateFormat(nextDate);
        if(isPalindrome){
            break;
        }
        nextDate=getTheNextDate(nextDate);
    }

    return [ctr , nextDate];
}


function clickHandler(){
    var dateInput=inputDate.value;

    if(dateInput !== ''){
        var listOfDate=dateInput.split('-');
        var date={
            day:Number(listOfDate[2]),
            month:Number(listOfDate[1]),
            year:Number(listOfDate[0])
        }

        var isPalindrome=checkPalindromeForAllDateFormat(date);

        if(isPalindrome){
            outputBox.innerText="hey, your birthday is palindrome !!!!"
        }else{
            var [ctr , nextDate]=getNextPalindromeDate(date);
            outputBox.innerText="the next date is  "
        }
    }
   
}

checkButton.addEventListener("click",clickHandler);