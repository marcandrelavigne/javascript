/*
	ROW WRAP
	------
  Wrap 3 columns in a row
  
  Input example: 
  <div class="_container">
    <div class="_col">Column 1</div>
    <div class="_col">Column 2</div>
    <div class="_col">Column 3</div>
  </div>
    
  Output:
  <div class="_container">
    <div class="_row">    
      <div class="_col">Column 1</div>
      <div class="_col">Column 2</div>
      <div class="_col">Column 3</div>
    </div>
   </div>
   
 */
 
;(function rowWrap($) {

  var divs = $("._container ._col");
	for(var i = 0; i < divs.length; i+=3) {
	  divs.slice(i, i+3).wrapAll("<div class='_row'></div>");
	}

})(jQuery);
