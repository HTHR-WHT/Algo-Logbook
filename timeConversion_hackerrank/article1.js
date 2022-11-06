/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
//Initial thoughts:
//PM hh times start at 12 
//AM hh times start at 00 
//determine if the string includes a "P" or "A"
//alter the hh number accordingly
//remove "PM" or "AM" from string

function timeConversion(s) {
    //grab the HH chars
    let currHH = s.slice(0, 2);
    //make a string copy of JUST the numbers, removing "AM" or "PM"
    let currTime = s.slice(0, (s.length - 2));
    //for 12 AM times 
    if(s.charAt(s.length - 2) === "A" && currHH === "12") {
        //change 12 to 00 and return
        return currTime.replace('12', '00');
    } 
    //for all non-12 PM times, adjust HH accordingly
    else if(s.charAt(s.length - 2) === "P" && currHH !== "12"){
        let pmHH = Number(currHH);
        let sumHH = pmHH + 12;
        return currTime.replace(`${currHH}`, `${sumHH}`);
    }
    //for all other AM times & 12 PM times
    return currTime;
}