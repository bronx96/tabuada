function contar(){
  var numero = document.getElementById('numero')
  var resposta = document.getElementById('resposta')
if(numero.value.lenght == 0){
  window.alert('coloque um numero na caixa')
}
else{
  var num = Number(numero.value)
  var cont = 1
  var re = 0
  while(cont <= 10){
    re = num * cont
    resposta.innerHTML += `<p>${num} x ${cont} = ${re}</p>`
    cont++
  }
}
}