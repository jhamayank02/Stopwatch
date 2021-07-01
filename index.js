console.log("Countdown App");

// Grab all the buttons
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

// Grab the places where we will display time
let secsDisplay = document.getElementById('secsDisplay');
let minsDisplay = document.getElementById('minsDisplay');
let hoursDisplay = document.getElementById('hoursDisplay');

// initial values
let s=0;         // second
let m=0;         // minute
let h=0;         // hour

// let a variable through which we will run clearInterval method
let i;

// will update values according to fields
hoursDisplay.innerText = `${h}`;
minsDisplay.innerText = `${m}`
secsDisplay.innerText = `${s}`;

// when start button is clicked
startBtn.addEventListener("click", ()=>{

    i = setInterval(() => {
        
        secsDisplay.innerText = `${s}`;
        minsDisplay.innerText = `${m}`
        hoursDisplay.innerText = `${h}`;

        s++;
    
        // when second = 60 will set the value of second 0 and start again and will increase the value of m with 1
        if(s==60){
            s=0;
            m++;
            // minsDisplay.innerText = `${m}:`;   // if we update min here it will be updated in 59th second like when its 0:0:0 it will show 0:1:59 so we will update all parameters above
        }

        // when minute = 60 will set the value of minute 0 and start again and will increase the value of h with 1
        if(m>=60){
                    m=0;
                    h++;
                }
    }, 1000);
})

// when stop button is clicked
stopBtn.addEventListener("click", ()=>{
    clearInterval(i);        // will stop the execution of set-interval
})

// when reset button is clicked
resetBtn.addEventListener("click", ()=>{
location.reload();        // will reload the window and set all values to zero
})