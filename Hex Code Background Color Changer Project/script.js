let text_field=document.querySelector("#text_field");
let button=document.querySelector(".btn");
const colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

button.addEventListener('click',function(){
       let hex_color="#";

       for(i=0;i<6;i++){
           let hexcode=Math.floor(Math.random()*colors.length);
           hex_color=hex_color+colors[hexcode];
       }
    text_field.value=hex_color;
    text_field.style.backgroundColor=hex_color;
    document.body.style.backgroundColor=hex_color;
});