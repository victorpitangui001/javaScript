//Initial Data 
let board = {
    a1:'', a2:'', a3:'',
    b1:'', b2:'', b3:'',
    c1:'', c2:'', c3:''
};
let player = '';
let warning = '';
let playing = false;

//Events
document.querySelector('.reset').addEventListener('click', reset);

//functions
function reset(){
    warning = '';

    let radom = Math.floor(Math.random() * 2);
    player = (radom === 0) ? 'x' : 'o';
}