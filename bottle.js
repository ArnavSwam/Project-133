img = "";
status = "";
objects = [];

function setup()
{
    canvas = createCanvas(640, 375);
    canvas.center();
    
    
}

function modelLoaded()
{
    console.log("hey you yes you only don't hide, because I am telling most importance thing the world that MODEL IS LOADED !!!!!!!!!!!!!");
    status = true;

}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }

    console.log(results);
}

function preload()
{
    img = loadImage("bottle.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 420);

    if (status != "")
    {
        objectDetecor.detect(img, gotResult);

        r = ramdom(255);
        g = ramdom(255);
        b = ramdom(255);

        for(i = 0; i  < object.lenght; i++)
        {

          document.getElementById("status").innerHTML = "Status : Object Detected";
          document.getElementById("number_of_objects").innerHTML = "Number of objects detected are " + objects.length;
    
          fill(r, g, b);
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke(r, g, b);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }   
    }  
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status :- Detecting Objects";
}