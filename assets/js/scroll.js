function addOnWheel(elem, handler) {
  if (elem.addEventListener) {
    if ('onwheel' in document) {
      // IE9+, FF17+
      elem.addEventListener("wheel", handler);
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      elem.addEventListener("mousewheel", handler);
    } else {
      // 3.5 <= Firefox <script 17, более старое событие DOMMouseScroll пропустим
      elem.addEventListener("MozMousePixelScroll", handler);
    }
  } else { // IE8-
    text.attachEvent("onmousewheel", handler);

  }
}

var scale = 1;

addOnWheel(text, function(e) {

  var delta = e.deltaY || e.detail || e.wheelDelta;

  // отмасштабируем при помощи CSS
  if (delta > 0){
    scale += 0.05;
     document.getElementById('myDiv').style.display = "none";
     document.getElementById('myDiv6').style.display = "none";
     document.getElementById('myDiv2').style.display = "none";
     document.getElementById('myDiv3').style.display = "none";
     document.getElementById('myDiv4').style.display = "none";
     document.getElementById('myDiv5').style.display = "none";

  } 

  
  else{ scale = 1;
   document.getElementById('myDiv').style.display = "block";
   document.getElementById('myDiv6').style.display = "block";
     document.getElementById('myDiv2').style.display = "block";
     document.getElementById('myDiv3').style.display = "block";
     document.getElementById('myDiv4').style.display = "block";
     document.getElementById('myDiv5').style.display = "block";
  }
  
 
  text.style.transform = text.style.WebkitTransform = text.style.MsTransform = 'scale(' + scale + ')';


  // отменим прокрутку
  e.preventDefault( 
    
  );
   
});



