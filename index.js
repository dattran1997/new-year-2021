let luckyNumberContent = document.getElementById('lucky-number');
let luckyBtn = document.getElementById('lucky-number-btn');
let luckySuccess = document.getElementById('lucky-number-success');
let randomNumber = null;
luckySuccess.style.display = 'none';

document.getElementById('lucky-number-btn').addEventListener( 'click',() => {
    randomNumber = Math.floor((Math.random() * 100) + 1);
    luckyNumberContent.innerHTML = randomNumber;
    luckySuccess.style.display = 'block';
    luckyBtn.style.display = 'none';
});

