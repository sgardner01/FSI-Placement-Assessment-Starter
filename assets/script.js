

// First, tell us your name
let yourName = "Seth Gardner" // HINT: Replace this with your own name!





// We'll use these variables to track the counts of each cookie type
let gbVotes = 0;
if (gbVotes === null) {
    gbVotes = 0;
} else {
    gbVotes = parseInt(gbVotes)
}
let ccVotes = 0;
if (ccVotes === null) {
    ccVotes = 0;
} else {
    ccVotes = parseInt(ccVotes)
}

let sugarVotes = 0;
if (sugarVotes === null) {
    sugarVotes = 0;
} else {
    sugarVotes = parseInt(sugarVotes)
}
let totalVotes = 0;
if (totalVotes === null) {
    totalVotes = 0;
} else {
    totalVotes = parseInt(totalVotes)
}


let gbMinusVote = document.querySelector("#minus-gb");
document.getElementById('minus-gb').addEventListener('click', function() {
    gbVotes = gbVotes - 1;
    document.querySelector("#qty-gb").textContent = gbVotes;
    console.log('Gingerbread - button was clicked!')
    document.querySelector("#qty-total").textContent = sugarVotes + ccVotes + gbVotes
})
let gbAddVote = document.querySelector("#add-gb");
document.getElementById('add-gb').addEventListener('click', function() {
    gbVotes = gbVotes + 1;
    document.querySelector("#qty-gb").textContent = gbVotes;
    console.log('Gingerbread + button was clicked!')
    document.querySelector("#qty-total").textContent = sugarVotes + ccVotes + gbVotes
})




let ccMinusVote = document.querySelector("#minus-cc");
document.getElementById('minus-cc').addEventListener('click', function() {
    ccVotes = ccVotes - 1;
    document.querySelector("#qty-cc").textContent = ccVotes;
    console.log('Chocale Cook - button was clicked!')
    document.querySelector("#qty-total").textContent = sugarVotes + ccVotes + gbVotes
})
let ccAddVote = document.querySelector("#add-cc");
document.getElementById('add-cc').addEventListener('click', function() {
    ccVotes = ccVotes + 1;
    document.querySelector("#qty-cc").textContent = ccVotes;
    console.log('Chocolate Cook + button was clicked!')
    document.querySelector("#qty-total").textContent = sugarVotes + ccVotes + gbVotes
})



let ssMinusVote = document.querySelector("#minus-sugar");
document.getElementById('minus-sugar').addEventListener('click', function() {
    sugarVotes = sugarVotes - 1;
    document.querySelector("#qty-sugar").textContent = sugarVotes;
    console.log('Sprinkle Cook - button was clicked!')
    document.querySelector("#qty-total").textContent = sugarVotes + ccVotes + gbVotes
})

let ssAddVote = document.querySelector("#add-sugar");
document.getElementById('add-sugar').addEventListener('click', function() {
    sugarVotes = sugarVotes + 1;
    document.querySelector("#qty-sugar").textContent = sugarVotes;
    console.log('Sprinkle Cook + button was clicked!')
    document.querySelector("#qty-total").textContent = sugarVotes + ccVotes + gbVotes
})
















// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`






// Event listener for clicks on the "+" button for Gingerbread cookies

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked