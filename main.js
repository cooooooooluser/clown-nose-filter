noseX=0;
noseY=0;

function preload(){
    clown = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas= createCanvas(640, 480);
     canvas.position( 540, 250);
     video= createCapture(VIDEO);
    video.hide();

     poseNet=ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotposes);
}

function draw() {
    image(video, 0, 0, 640, 480);
    image(clown, noseX, noseY , 50, 50);
    
}

function modelLoaded() {
      console.log("model has been loaded.");
}

function gotposes(results) {
    console.log(results);
    if (results.length > 0) {
         noseX= results[0].pose.nose.x-25;
         noseY= results[0].pose.nose.y-25;
         console.log(noseX);
         console.log(noseY);
    }
}

function savedPicture() {
    save("virus.png");

}