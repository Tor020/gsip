// TweenMax.to({target being animated}, duration of animation, {css properties to animate});

//document queryselectorAll is used for target can also pass an array of objects


const cloud = document.getElementById('cloud');                

// TweenMax.to(cloud, 2, {
//   left:600,
//  backgroundColor:"#cad7e6",
//  padding:20,
//  borderColor:'orange',
//  border:3+"rem",
//  borderRadius:3+`rem`,});


// TweenMax.to(cloud, 2, {x:600, rotation:320, scale:1.5});


// TweenMax.to(cloud, 2, {x:600, ease:Bounce.easeOut});
TweenMax.from(cloud, 2, {opacity:0, scale:0, x:600, ease:Expo.easeOut});
TweenMax.staggerFrom(".emph", 2, {opacity:0, scale:0, x:600, rotation:360, scale:2, ease:Expo.easeOut, delay:0.5},.8);
TweenMax.to([cloud, ".emph"], 0.5, {opacity:0, delay:3, onComplete:complete});

function complete(){
  console.log('finished');
}