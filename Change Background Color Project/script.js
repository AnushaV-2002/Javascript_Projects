let button=document.querySelector("#btn");
const colors=["CornflowerBlue","DarkMagenta","DarkSalmon","RoyalBlue","SeaGreen"];
console.log(button);

button.addEventListener('click',function(){
   
    let colorvalue=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[colorvalue];
});
