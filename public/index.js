var inc = 0.01;

function setup() {
    createCanvas(1200, 1200);
    pixelDensity(1);
}
  
function draw() {
    var yoff = 0;

    loadPixels();
    background(51);
    for(var y=0; y < height; y++) {
        var xoff = 0;
        for(var x=0; x < width; x++) {
            var index = (x + y * width) * 4;
            var r = noise(xoff, yoff) * 100;
            
            pixels[index + 0] = r;
            pixels[index + 1] = r + 40;
            pixels[index + 2] = r + 100;
            pixels[index + 3] = r + 222;

            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels();
    noLoop();
    // var x = map(noise(xoff1), 0, 1, 0, width);
    // var y = map(noise(xoff2), 0, 1, 0, width);

    // xoff1 += 0.02;
    // xoff2 += 0.02;

    // ellipse(x, y, 24, 24);
}