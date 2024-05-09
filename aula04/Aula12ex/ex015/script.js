function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novament!')
    } else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if  (fsex[0].checked){
          genero = 'Homem'
          if(idade >=0 && idade <10){
            //criança
            img.setAttribute('src', 'foto-criança-h.jpg')
          }else if ( idade <21){
          //jovem
          img.setAttribute('src', 'foto-jovem-h.jpg')
          }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'foto-adulto-h.jpg')
          }else {
            //idoso
            img.setAttribute('src', 'foto-idoso-h.jpg')
          }

    //mulher
       }else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >=0 && idade <10){
            //criança
            img.setAttribute('src', 'foto-criança-m.jpg')
          }else if ( idade <21){
          //jovem
          img.setAttribute('src', 'foto-jovem-m.jpg')
          }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'foto-adulto-m.jpg')
          }else {
            //idoso
            img.setAttribute('src', 'foto-idoso-m.jpg')
          }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}