noseX:0;
noseY:0;

function preload(){
     
}

function setup () {
    canvas= createCanvas(640, 480);
     canvas.position( 540, 250);
     video= createCapture(VIDEO);
    video.hide();


}

function draw () {
    image(video, 0, 0, 640, 480)
}

function savedPicture () {
    //hi
}