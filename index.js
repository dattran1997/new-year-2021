let luckyNumberContent = document.getElementById('lucky-number');
let randomNumber = null;

document.getElementById('lucky-number-btn').addEventListener( 'click',() => {
    randomNumber = Math.floor((Math.random() * 100) + 1);
    luckyNumberContent.innerHTML = randomNumber;
});

