document.querySelector('.busca').addEventListener('submit', (event)=>{
    event.preventDefault();
    let input = document.querySelector('#searchInput').value;

    if(input !== ''){
        showWarning('Caregando...');
    }else {
        
    }
});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}