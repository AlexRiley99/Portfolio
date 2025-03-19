document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('play');
    const pauseBtn = document.getElementById('pause');

    const beepbeep = document.getElementById('beepbeep');
    const idling = document.getElementById('idling');
    const breakScreech = document.getElementById('break');

    const car = document.getElementById('car');
    const plotPoints = document.getElementsByClassName('plotPoint');

    //Start driving
    function startDriving(){
        beepbeep.play(); //Play "beep beep" and "idling" audio when play button is clicked
        idling.play();
        car.classList.add('animateCar');
        car.style.animationPlayState = 'running'; //Start animation
        //Animate each plot point individually
        Array.from(plotPoints).forEach(point => {
            point.classList.add('animatePlotPoints');
            point.style.animationPlayState = 'running';
        });
    }

    //Stop driving
    function stopDriving(){
        breakScreech.play(); //Play break screech
        idling.pause(); //stop idling
        car.style.animationPlayState = 'paused';
        //Pause each plot point
        Array.from(plotPoints).forEach(point => {
            point.style.animationPlayState = 'paused'; 
        });
    }


    //Event listeners
    playBtn.addEventListener('click', startDriving);
    pauseBtn.addEventListener('click', stopDriving);
});