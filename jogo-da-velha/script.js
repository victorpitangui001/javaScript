//Initial Data 
let board = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};
let player = '';
let warning = '';
let playing = false;

//Events
document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick);
});

//functions
function itemClick(event) {
    let item = event.target.getAttribute('data-item');
    if (board[item] === '') {
        board[item] = player;
        renderBoard();
    }

}

function reset() {
    warning = '';

    let radom = Math.floor(Math.random() * 2);
    player = (radom === 0) ? 'x' : 'o';

    for (let i in board) {
        board[i] = '';
    }

    playing = true;

    renderBoard();
    renderinfo();
}

function renderBoard() {
    for (let i in board) {
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = board[i];
    }
}

function renderinfo() {
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}