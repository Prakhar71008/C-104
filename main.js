Webcam.attach(camera);
camera=document.getElementById("webcam");
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});

function take_photo(){
    Webcam.snap(function(data_uri){
        document.getElementById("objects").innerHTML='<img id="selfie" src="'+data_uri+'">';
    });
}

console.log("ml5 version:" ,ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/m8Hbn_gU-/model.json",modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}