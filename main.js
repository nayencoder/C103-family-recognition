



Webcam.set({
    width:350,
    height:300,
    Image_format:'png',
    png_quality:90

});

    camera=document.getElementById("camera");

    Webcam.attach('#camera');

    function take_snapshot()
    {

        Webcam.snap(function(data_uri){
        document.getElementById("result").innerHtml = '<img id="captured_image src="'+data_uri+''

    });

    

    



}
console.log('m15 version:', m15.version);

    classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/OfEhei7JS/model.json',modelLoaded);

function modelLoaded()
{

    console.log('Model Loaded');

}

