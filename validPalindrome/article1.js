const isPalindrome = (s) => {
    //create regExp to check for and remove non-alphanumeric chars
    //replace all char except a-z(lower & upper case) & numbers, globally
    //convert string to lowercase
    let string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    //use two pointers, one at start, one at end
    let left = 0;
    for(let right = string.length -1; right > left; right--) {
        if(string[left] !== string[right]) {
            return false;
        }
        left++;
    }
    return true;
};