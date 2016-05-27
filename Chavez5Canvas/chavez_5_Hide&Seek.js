function getRandColor(){
    var colors=["red","orange","yellow","green","blue","violet"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandTheta(){
    return Math.random() * 2 * Math.PI;
}

function updateMicrobes(anim,microbes){
    var canvas = anim.getCanvas();
    var angleVariance = 0.2;
    
    for (var i = 0;i <microbes.length; i++) {
        var microbe = microbes[i];
        var angle = microbe.angle;
        
        /*
            * good numNewSegmentsPerFrame value:
            * 60fps -> 1
            *10 fps -> 10
            *
            *for a linear relationship, we can use the equation :
            *n=mf+b,where n = numNewSegmentsPerFrame and f = FPS
            *solving for m and b ,we have:
            *n = (-0.18)f +11.8
            */
        var numNewSegmmentPerFrame = Math.round(-0.18 * anim.getFPS() + 11.8);