const handleOnMouseMove = e => {
    const {currentTarget : target} = e;

    const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
    
    // console.log(x, y);
    
    let mColor = '';
    let look_x = "0deg";
    let look_y = "0deg";
    let look_z = "45deg";

    let scalex = 0;
    let scaley = 0;
    let scalez = 0;

    measureScreenwidth= screen.width;

    // if (x < measureScreenwidth/3){
    //     mColor = "blue";
    //     mColor = "rgb(145, 98, 220)";
    //     mColor = "white";
    // } else if (x > measureScreenwidth/3  && x< 2*(measureScreenwidth/3)){
    //     mColor = "blueviolet";
    // } else {
    //     // mColor = "rgb(201, 24, 145)";
    //     mColor = "rgb(145, 98, 220)";
    //     mColor = "blue";
    // }
    
    mColor = "white";
    // mColor = "blueviolet";

    if (x < measureScreenwidth/2) {
        scaley = 45 - ((x)/45) ;
        scalez = 0;
        scalez = 45;
    }
    else if (x == measureScreenwidth/2){
        scalex , scaley, scalez = 0;
    }
    else {
        scalex = ((x)/45) + 10;
        scaley = 0;
        scalez = 45;
    }
    // scalex , scaley, scalez = 0;
    look_x = `${scalex}deg`;
    look_y = `${scaley}deg`;
    look_z = `${scalez}deg`;

    target.style.setProperty("--mouse-color", mColor);
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
    target.style.setProperty("--look-z", look_z);
    target.style.setProperty("--look-y", look_y);
    target.style.setProperty("--look-x", look_x);

}

const body = document.querySelector('body');
body.onmousemove = e => handleOnMouseMove(e);


// add parallax effect...

const parallax = document.querySelector('.parallax');
const parallaxContent = document.querySelector('.parallax-content');

parallax.addEventListener('mousemove', (eve) => {
    const width = parallax.offsetWidth;
    const height = parallax.offsetHeight;
    const mouseX = (eve.clientX / width) * 2 - 1;
    const mouseY = (eve.clientY / height) * 2 - 1;

    // Adjust these values to control the intensity of the parallax effect
    const moveX = 15 * mouseX;
    const moveY = 15 * mouseY;

    parallaxContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

parallax.addEventListener('mouseleave', () => {
    // Reset the parallax content when the mouse leaves the element
    parallaxContent.style.transform = 'translate(0, 0)';
});