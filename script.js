const container = document.getElementById('container');
const text = document.getElementById('text');

//declaring time variables
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2; //totals 3 seconds
const holdTime = totalTime / 5; //totals 1.5 seconds

//animation function
function breatheAnimation()
{
    text.innerText = 'Breathe In';
    container.className = 'container grow'; //growth animation class name
    // console.log('breath in');


 //timeout for hold function
 setTimeout( () => {
     text.innerText = 'Hold';
     // console.log('hold')

     //timeout for breath out
     setTimeout( () => {
         text.innerText = 'Breathe Out';
         container.className = 'container shrink';
         // console.log('hold')
     }, holdTime);
 }, breatheTime);

}

//interval to repeat breath animation

setInterval(breatheAnimation, totalTime);
