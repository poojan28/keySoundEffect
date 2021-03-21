
function playMuisc(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}" ]`);
    var key = document.querySelectorAll(`.key[data-key = "${e.keyCode}" ]`);
    console.log(audio);
    console.log(key);      
    if(!audio) return;  //stop the function 
       console.log(audio.currentTime = 0);
       audio.play();
      
       key.forEach(key => {
           key.classList.add('playing');
       });
       console.log("played")
     
      

       /* method 1 to remove the class */
      /* setTimeout(function(){
           key.forEach.call(key,function(el){
               el.classList.remove('playing');
           });
      },100); */
}

window.addEventListener('keydown',playMuisc);


function removeTranstion(e){
   /*  e.classList.remove('playing'); */
   if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
 }



function ClickPlaymusic(e){
    const audio = document.querySelector(`audio[data-key="${this.attributes['data-key'].value}"]`);
  
    if(!audio) return;  //stop the function 
    console.log(audio.currentTime = 0);
    audio.play();
    this.classList.add('playing');       
    
}
var Clickkeys = document.querySelectorAll('.key'); 
Clickkeys.forEach(ClickId => ClickId.addEventListener('click',ClickPlaymusic));

Clickkeys.forEach(key => key.addEventListener('transitionend',removeTranstion));
