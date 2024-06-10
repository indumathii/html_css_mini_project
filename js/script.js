document.getElementById("menu").addEventListener("click",function(event){
    var menubutton=document.getElementById("menu")
    var menulist = document.getElementById("container2"); 
console.log(menubutton)
console.log(menulist)
    if(event.target === menubutton || event.target === menulist) 
        menulist.classList.toggle('show');
    else
        menulist.classList.toggle('none');
        console.log(event.target)
})

var scrollContainer = document.querySelector('.welcomebanner');
console.log(scrollContainer)
function scrollRight() {
  scrollContainer.scrollLeft += scrollContainer.clientWidth;
  console.log(scrollContainer)
  if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
    scrollContainer.scrollLeft = 0;
    console.log(scrollContainer.clientWidth)
  }
  
}


setInterval(scrollRight, 4000);

var leftbutton=document.querySelector(".button-left");
var rightbutton=document.querySelector(".button-right");
leftbutton.addEventListener("click",function(){
    var container = document.querySelector(".welcomebanner");
    container.scrollLeft -= container.clientWidth;
    console.log(container.clientWidth);
    
});

rightbutton.addEventListener("click",function(){
    var container = document.querySelector(".welcomebanner");
    console.log(container.clientWidth);
    container.scrollLeft += container.clientWidth;
    
});


var option1 = document.querySelector(".onewayclass");
var option2 = document.querySelector(".returnclass");
var oneway_options=document.querySelector(".oneway-options");
var return_options = document.querySelector(".return-options");
console.log(option2);
console.log(oneway_options);
console.log(return_options);
option1.addEventListener("change", function() {
    if (this.checked) {
        oneway_options.style.dispaly='flex';
        return_options.style.display='none';
       }
    });
option2.addEventListener("change", function() {
    if (this.checked) {
        return_options.style.display='flex';
        oneway_options.style.dispaly='none'
       }
    
});

