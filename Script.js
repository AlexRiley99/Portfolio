document.addEventListener('DOMContentLoaded', () => {
//DECLARATIONS//
    //Control Buttons
    const toBeginning = document.getElementById('toBeginning');
    const playBtn = document.getElementById('play');
    const pauseBtn = document.getElementById('pause');
    const toEnd = document.getElementById('toEnd');
    const closeBtn = document.getElementById('closeBtn');
    //Audio
    const beepbeep = document.getElementById('beepbeep');
    const carRunning = document.getElementById('carRunning');
    const breakScreech = document.getElementById('break');
    //Items on the timeline
    const car = document.getElementById('car');
    const plotPoints = document.getElementsByClassName('plotPoint');
    const point1 = document.getElementById('point1');
    const point2 = document.getElementById('point2');
    const point3 = document.getElementById('point3');
    const point4 = document.getElementById('point4');
    const point5 = document.getElementById('point5');
    const point6 = document.getElementById('point6');
    const point7 = document.getElementById('point7');
    const point8 = document.getElementById('point8');
    const point9 = document.getElementById('point9');
    const point10 = document.getElementById('point10');
    //Animations
    const carRumble = 'rumble 0.2s ease-in-out infinite';
    //Projects
    const storefront1 = document.getElementById('storefront1');
    const storefront2 = document.getElementById('storefront2');
    const storefront3 = document.getElementById('storefront3');
    const storefront4 = document.getElementById('storefront4');
    const projectName = document.getElementById('projectName');
    //Other
    let message = document.getElementById('message');
    const timelineControls = document.getElementById('timelineControls');
    let controls = document.getElementById('controlsListContainer');
    const plotPointContainer = document.getElementById('plotPointContainer');
    const timeline = document.getElementById('timeline');


//CODE BEGINS//
    //Start driving
    function startDriving(){
        controls.style.display = 'none';
        timeline.style.height = '520px';
        plotPointContainer.style.height = '300px';
        point10.style.left = '100%';
        point9.style.left = '100%';
        point8.style.left = '100%';
        beepbeep.play(); //Play "beep beep" and "car running" audio when play button is clicked
        carRunning.play();
        message.textContent = "Let's go! Road trip!";
        car.style.animation = carRumble;
        car.style.animationPlayState = 'running'; //Start animation
        //Animate each plot point individually
        Array.from(plotPoints).forEach(point => {
            point.style.animation = 'scrollTimeline 60s linear 1 forwards';
        });
        point10.style.animation = 'point10Stop 18s linear 1 forwards';
        point9.style.animation = 'point9Stop 24s linear 1 forwards';
        point8.style.animation = 'point8Stop 30s linear 1 forwards';

        point1.style.animationDelay = '0s';
        point2.style.animationDelay = '6s';
        point3.style.animationDelay = '12s';
        point4.style.animationDelay = '18s';
        point5.style.animationDelay = '24s';
        point6.style.animationDelay = '30s';
        point7.style.animationDelay = '36s';
        point8.style.animationDelay = '42s';
        point9.style.animationDelay = '48s';
        point10.style.animationDelay = '54s';
    }
    //Stop driving
    function stopDriving(){
        breakScreech.play(); //Play break screech
        carRunning.pause(); //stop running
        message.textContent = "Skrrrt! Time for a rest stop."
        car.style.animationPlayState = 'paused';
        //Pause each plot point
        Array.from(plotPoints).forEach(point => {
            point.style.animationPlayState = 'paused'; 
        });
    }
    //Jump to beginning
    function jumpToBeginning(){
        message.textContent = "";
        carRunning.pause();
        car.style.animation = 'none';
        Array.from(plotPoints).forEach(point => {
            point.style.animation = 'none'; //Reset animations
        });
        point10.style.left = '100%';
        point9.style.left = '100%';
        point8.style.left = '100%';
    }
    //Jump to end
    function jumpToEnd(){
        carRunning.pause();
        car.style.animation = 'none';
        message.textContent = "We've arrived at our destination!"
        Array.from(plotPoints).forEach(point => {
            point.style.left = '100%';
            point.style.animation = 'none'; 
        });
        point10.style.left = '40%';
        point9.style.left = '20%';
        point8.style.left = '0%';
    }
    //End animation
    function endAnimation(){
        carRunning.pause();
        car.style.animationPlayState = 'paused';
        message.textContent = "We've arrived at our destination!";
    }
    //Close 
    function closeAnimation(){
        controls.style.display = 'block';
        plotPointContainer.style.height = '0px';
        timeline.style.height = '410px';
        //stop all audio
        carRunning.pause();
        //reset all animations
        car.style.animation = 'none';
        Array.from(plotPoints).forEach(point => {
            point.style.left = '100%';
            point.style.animation = 'none'; 
        });

        timelineControls.style.top = '130px';
    }


    //Project hover text
    function showHoverText(event){
        projectName.style.padding = "11px";
        if(event.target === storefront1){
            projectName.textContent = "Grocery List Maker";
        }
        else if(event.target === storefront2){
            projectName.textContent = "Sundust Photography";
        }
        else if(event.target === storefront3){
            projectName.textContent = "Jupiter Tech Studio";
        }
        else if(event.target === storefront4){
            projectName.textContent = "Variable Income Calculator"
        }
    }
    function hideHoverText(){
        projectName.style.padding = "23px";
        projectName.textContent = "";
    }

    //Event listeners
    toBeginning.addEventListener('click', jumpToBeginning)
    playBtn.addEventListener('click', startDriving);
    pauseBtn.addEventListener('click', stopDriving);
    toEnd.addEventListener('mouseup', jumpToEnd);
    point10.addEventListener('animationend', endAnimation);
    closeBtn.addEventListener('click', closeAnimation);

    storefront1.addEventListener('mouseover', showHoverText);
    storefront1.addEventListener('mouseout', hideHoverText);
    storefront2.addEventListener('mouseover', showHoverText);
    storefront2.addEventListener('mouseout', hideHoverText);
    storefront3.addEventListener('mouseover', showHoverText);
    storefront3.addEventListener('mouseout', hideHoverText);
    storefront4.addEventListener('mouseover', showHoverText);
    storefront4.addEventListener('mouseout', hideHoverText);
});