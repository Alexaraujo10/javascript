function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    

    
    //validação de dados
    if (ini.value.length == 0 || fim.value.length ==0  || passo.value.length ==0){
        res.innerHTML='Impossivel contar!'
        alert('[ERRO] Esta faltando dados!')

     //começando a contar
    } else {
       res.innerHTML = 'Contando: <br> '
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)

       //caso algum inteligente coloque 0, isso evitara de fazer o navegador travar e dar erro
       if (p <= 0){
        alert('Passo Invalido Considerando PASSO 1')
        p = 1
       }
       if (i <f){
      //contagem crescente
        for(let c  = i; c <= f; c += p){
            res.innerHTML += ` ${c}  \u{1f449} `
          }
         
       } else{
        //contagem regressiva
        for(let c =i; c>=f; c-=p){
            res.innerHTML += `${c} \u{1f449}`
        }
       }
       //emoji sinalizando fim da contagem
       res.innerHTML += `\u{1f3c1}`
    }
}