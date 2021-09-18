const pesan = document.getElementById('pesan');
// pesan.style.backgroundColor = 'salmon';
pesan.style.border = '5px solid salmon';
pesan.style.padding = '1em';
pesan.style.borderRadius = '10px';
pesan.style.margin = '30px';

const js = document.getElementById('js');
pesan.addEventListener('click', function(){
    pesan.style.backgroundColor = 'rgb(251, 243, 219)';
});