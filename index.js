let getHomeScore = document.getElementById("homeScore");

let getGuestScore = document.getElementById("guestScore");

let homeCount = 0;
let guestCount = 0;


function addone() {
    if(homeCount <= 98) {
    homeCount ++;
    getHomeScore.textContent = homeCount;
    }
};

function addtwo() {
    if(homeCount <= 97) {
    homeCount += 2;
    getHomeScore.textContent = homeCount;
    }
};

function addthree() {
    if(homeCount <= 96) {
    homeCount += 3;
    getHomeScore.textContent = homeCount;
    }
};

function addOne() {
    if(guestCount <= 98) {
    guestCount ++;
    getGuestScore.textContent = guestCount;
    }
};

function addTwo() {
     if(guestCount <= 97) {
    guestCount += 2;
    getGuestScore.textContent = guestCount;
     }
};

function addThree() {
    if(guestCount <= 96) {
    guestCount += 3;
    getGuestScore.textContent = guestCount;
    }
};