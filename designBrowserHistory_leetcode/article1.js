/*
create two stacks to track our back history and forward history seperately
track the current URL
calculate the allowed number of steps for the back and forward methods
 */

class BrowserHistory {
    constructor(homepage) {
        this.currentURL = homepage;
        this.backStack = [homepage];
        this.forwardStack = [];
    }
};


BrowserHistory.prototype.visit = function(url) {
    this.currentURL = url;
    this.backStack.push(url);
    this.forwardStack = [];
};


BrowserHistory.prototype.back = function(steps) {
    //calculate allowed steps:
    //we can only go back as far as the homepage, aka the "bottom" or 
    //zero-ith element of our back stack
    if(steps >= this.backStack.length) {
        steps = this.backStack.length -1;
    }
    while(steps > 0) {
        let forwardURL = this.backStack.pop();
        this.forwardStack.push(forwardURL);
        steps--
    };
    this.currentURL = this.backStack[this.backStack.length - 1];
    return this.currentURL;
};


BrowserHistory.prototype.forward = function(steps) {
    //calculate allowed steps:
    //we can only go forward as far as the number of pages we've already 
    //visited, aka the full length of our forward stack
    if(steps > this.forwardStack.length){
        steps = this.forwardStack.length;
    }
    while(steps > 0) {
        let backURL = this.forwardStack.pop();
        this.backStack.push(backURL);
        steps--;
    }
    this.currentURL = this.backStack[this.backStack.length -1];
    return this.currentURL;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */