status = "";
Objects = [];
function preload(){
    img = loadImage('jardin.jpeg');
}
function setup(){
    canvas = createCanvas(640, 420)
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd, modelLoaded');
    document.getElementById("status").innerHTML = "Estado: detectado objetos";
}
function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){

    }
    fill("#FF0000");
    text("Jardin", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );
    fill("#FF0000");
}
function modelLoaded(){
    console,log("Modelo esta cargado")
    status ="true";
    objectDetector(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log("results");
    Objects = results;
}