
function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('manha')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} Horas`
if (hora >= 0 && hora < 12){
    //Bom Dia
    img.src  = 'manhã.png.jpg'
    document.body.style.background = '#F2C89C'

} else if (hora >= 12 && hora < 18){
    //Boa Tarde
    img.src = 'tarde.png.jpg'
    document.body.style.background = '#FEB611'

}else {
    //Boa noite
    img.src = 'noite.png.jpg'
    document.body.style.background = '#07479C'
}
}


