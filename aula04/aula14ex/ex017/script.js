function tabuada(){
    let num = document.getElementById('txtn')
    let tab  = document.getElementById('seltab')

    //Evita deixar o campo em branco
    if (num.value.length === 0){
        alert('Por favor digite um numero')
      //apartir do numero que colocar faz a tabuada do mesmo ate  10
    } else {
        let n = Number(num.value)
        let c = 1
        //apos  fazer a tabuada do numero desejado e queira de um novo numero deixa o campo select em branco novamente
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            tab.appendChild(item)
            c++
        }
    }
    
}