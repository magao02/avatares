window.addEventListener ? 
window.addEventListener("load",main(),false) : 
window.attachEvent && window.attachEvent("onload",main());
document.createElement

function main(){
   setTimeout(() => {
    avatares();
   }, 4000);

   function avatares() {
    if (document.getElementById('button') != null) {
        document.getElementById('button').classList.add('apagar')
    }
    var avatares = document.querySelectorAll('.x');
    let avatar= 4
    var avatarInterval =setInterval(() => {
        if (avatar < 0) {
            clearInterval(avatarInterval)
            playAudio()

        }
        if(avatar < 4){
            avatares[avatar+1].classList.remove("show")
        }
       
        let positionNumber = Math.random() * 80
        let position = positionNumber + "vw"
        avatares[avatar].style.left = position
        avatares[avatar].classList.add("show")
        avatares[avatar].classList.add("fly")   
        
        avatar--
    }, 2000);
   }

   function playAudio(){
    var audio = new Audio("https://b.mokaly.com/audios/matrix_room_enter.mp3")
    audio.play()
    createButton()
   }

   function createButton(){
    if (document.getElementById('button') == null) {
        let div = document.createElement('div');
    div.classList.add('button');
    div.setAttribute('id','button')
    let button = document.createElement('button');
    let text = document.createTextNode('Repetir animação');
    button.appendChild(text)
    div.appendChild(button)
    document.getElementById("main").appendChild(div)
    document.getElementById('button').addEventListener('click', avatares)
    }else{
        document.getElementById('button').classList.add('show')
    }
    

   }
}


