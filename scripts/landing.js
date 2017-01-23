var animatePoints = function() {

  var points = document.getElementsByClassName('point');
     
       
    //scaleX changed from 1 to 2   
   var revealPoint = function(index) {
      points[index].style.opacity = 1;
      points[index].style.transform = "scaleX(2) translateY(0)";
      points[index].style.msTransform = "scaleX(2) translateY(0)";
      points[index].style.WebkitTransform = "scaleX(2) translateY(0)";
     }
       
    for (var i = 0; i < points.length; i++) {
      revealPoint(i);    
    }
    
 };