document.getElementById("form.e").addEventListener("submit", function(event){
event.preventDefault();

const A = parseFloat(document.getElementById('A').value);
const B = parseFloat(document.getElementById('B').value);

const result = document.getElementById('result');

if (A < B) {
    result.textContent= 'Erro: o valor B deve ser maior que o valor A'
    result.classList.remove('sucess');
    result.classList.add('erro');
}
else {
    result.textContent= 'sucesso'
    result.classList.remove('erro');
    result.classList.add('sucess');


}

});

