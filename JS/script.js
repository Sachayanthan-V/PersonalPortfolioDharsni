window.addEventListener('scroll', ()=> {
    
    const scrolled = window.scrollY;
    const screenWidth = window.screen.width;

    const percentageMoveonSide = screenWidth/450;



    const ghost = document.getElementById('ghost');
    ghost.style.top = ""+ (scrolled + 240) + "px" ;


    if (scrolled < 400){
        ghost.style.left = "180px";
        ghost.style.right = "" + (screenWidth-500) + "px";
    }

    if (scrolled >= 400){
        ghost.style.left = "" + (screenWidth-500) + "px";
        ghost.style.right = "180px";
    }


    console.log(scrolled);

});