/*Start vanbar*/
let  navbar = document.getElementById("nav");
document.onscroll = function (){
    if(window.pageYOffset >= 50){
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }else{
        navbar.style.backgroundColor = "rgb(0, 0, 0)";
    }
};
/*End vanbar*/
/*Start tabs*/
let  tab1     = document.getElementById("tab1"),
    tab2     = document.getElementById("tab2"),
    tab3     = document.getElementById("tab3"),
    tab1Text = document.getElementById("tab1-text"),
    tab2Text = document.getElementById("tab2-text"),
    tab3Text = document.getElementById("tab3-text");
tab1.onclick = function (){
    tab1.classList.add("active");
    tab2.classList.remove("active");
    tab3.classList.remove("active");
    tab1Text.classList.remove("hidden-text");
    tab2Text.classList.add("hidden-text");
    tab3Text.classList.add("hidden-text");
};
tab2.onclick = function (){
    tab2.classList.add("active");
    tab1.classList.remove("active");
    tab3.classList.remove("active");
    tab1Text.classList.add("hidden-text");
    tab3Text.classList.add("hidden-text");
    tab2Text.classList.remove("hidden-text");
};
tab3.onclick = function (){
    tab3.classList.add("active");
    tab2.classList.remove("active");
    tab1.classList.remove("active");
    tab3Text.classList.remove("hidden-text");
    tab2Text.classList.add("hidden-text");
    tab1Text.classList.add("hidden-text");
};
/*End tabs*/
/*Start Up*/
let  btn = document.getElementById("up");
window.onscroll = function () {
    "use strict";
    if(window.pageYOffset >= 1000){
        btn.style.display ="block";
    }else{
        btn.style.display ="none";
    }
}
btn.onclick = function () {
    "use strict";
    window.scrollTo(0,0);
}
/*End Up*/