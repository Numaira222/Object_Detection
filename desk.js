img = "";
status = "";
 
function preload(){
    img = loadImage("desk.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Detecting Objects";
}

function draw(){
    image(img, 0, 0, 640, 420 );
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    object_detector.detect(img, gotResults);
}

function gotResults(error, results){
if(error){
    console.log(error);
}
else{
    console.log(results);
}
}
function back(){
    window.location.replace("index.html");
}