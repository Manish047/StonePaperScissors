const images = {
    paper: "/assets/paper.png",
    scissors: "/assets/scissors.png",
    stone: "/assets/stone.png",
};

const path = (url) => {
    return url.replace(/^.*\/\/[^\/]+/, '');
}

const paper = document.getElementById('btn_paper');
const scissors = document.getElementById('btn_scissors');
const stone = document.getElementById('btn_stone');
const result = document.querySelector('.result_tag');

const computer = document.getElementById('computer');
const user = document.getElementById('user');

paper.addEventListener('click', () => {
    user.src = images.paper;
    computer.src = Object.values(images)[Math.floor(Math.random() * 3)];
    if (path(computer.src) === images.paper) {
        result.innerHTML = "Draw";
    } else if (path(computer.src) === images.scissors) {
        result.innerHTML = "You Lose";
    } else if (path(computer.src) === images.stone) {
        result.innerHTML = "You Win";
    }
});

scissors.addEventListener('click', () => {
    user.src = images.scissors;
    computer.src = Object.values(images)[Math.floor(Math.random() * 3)];
    if (path(computer.src) === images.paper) {
        result.innerHTML = "You Win";
    } else if (path(computer.src) === images.scissors) {
        result.innerHTML = "Draw";
    } else if (path(computer.src) === images.stone) {
        result.innerHTML = "You Lose";
    }
});

stone.addEventListener('click', () => {
    user.src = images.stone;
    computer.src = Object.values(images)[Math.floor(Math.random() * 3)];
    if (path(computer.src) === images.paper) {
        result.innerHTML = "You Lose";
    } else if (path(computer.src) === images.scissors) {
        result.innerHTML = "You Win";
    } else if (path(computer.src) === images.stone) {
        result.innerHTML = "Draw";
    }
});