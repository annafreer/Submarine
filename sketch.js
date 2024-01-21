let i =0;
let json_obj;
let minLongitude = -180
let maxLongitude = 180
let minLatitude = -90
let maxLatitude = 90

function preload() {
  json_obj = loadJSON('all.json'); // loading json file
}

function setup(){
  createCanvas(windowWidth, windowHeight); //creating canvas
 background(0); //background colour
}

function draw(){
  all_json = Object.values(json_obj) //turning json from object to readable json

  for (let J=0; J < all_json.length; J++){ // for loop 

    const description = JSON.parse(all_json[J].description); // parse the discription property and assigns it to a const variable



    for (let K= 0; K < description.length; K++){ // for loop for each cable
      console.log (K);
      console.log (description[K].longitude);
      console.log (description[K].latitude);
      let longitude = description[K].longitude; //gets longitude for each cable
      let latitude = description[K].latitude; // gets latitude for each cable
      let x = map(longitude, minLongitude, maxLongitude, 0, width); //maps x coordinates
      let y = map(latitude, minLatitude, maxLatitude, height, 0); // maps y coordinates

    if (K > 0) {
      let prevLongitude = description[K - 1].longitude; // gets longitude coordinate
      let prevLatitude = description[K - 1].latitude; // gets latitude coordinates
      let prevX = map(prevLongitude, minLongitude, maxLongitude, 0, width); // maps x coorindates
      let prevY = map(prevLatitude, minLatitude, maxLatitude, height, 0); // maps y coordinates

      stroke(0, 0, 255); // Blue color for lines
      line(prevX, prevY, x, y);  // Draw a line between consecutive points
    }
}
}
}
