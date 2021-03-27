//sticky tooltip exaple
function changeOpacity(elem,opacity) {
var image = document.getElementById(elem);
// For Mozilla
image.style.MozOpacity = (opacity / 100);
// For IE
image.style.filter = "alpha(opacity=" + opacity + ")";
// For others
image.style.opacity = (opacity / 100);
}

function fade(id,milli,start,end) {
var fadeTime = Math.round(milli/100);
var timeout;
var i = 0;  // Fade Timer
// Fade in
//   alert(id);  
if (start < end) {
    for(j = start; j <= end; j++) {
     // define the expression to be called in setTimeout()
      var expr = "changeOpacity('" + id + "'," + j + ")";
      timeout = i * fadeTime;
      // setTimeout will call 'expr' after 'timeout' milliseconds
      setTimeout(expr,timeout);
      i++;
    }
  }  
  // Fade out
  else if(start > end) {
    for(j = start; j >= end; j--) {
      var expr = "changeOpacity('" + id + "'," + j + ")";
      timeout = i * fadeTime;
      setTimeout(expr,timeout);
      i++;
    }
  }
}

var mapMaker = {
	offsetX: -16, // tooltip X offset
	offsetY: 16,  // tooltip Y offset
	element: null,	DLs:     false,
	DTs:     false,
	DDs:     false,
	on:      false,
	/* constructor - sets events */
	init: function(){
		var i=0;
		var ii=0;
		var Lugar = 0;
		var Cerrar = 0;
		mapMaker.DLs = document.getElementsByTagName('dl');
		mapMaker.DTs = document.getElementsByTagName('dt');
		mapMaker.DDs = document.getElementsByTagName('dd');
		// solo asigna eventos la primera vez
		if( mapMaker.on == false ){
			//loop through each DL on page
			while (mapMaker.DLs.length > i) {
				//solo aplica a DL de la clase 'mapa'
				if (mapMaker.DLs[i].className == 'mapa'){
					//change map DL class, this way map is text only without javascript enabled
					mapMaker.DLs[i].className = 'mapa on';
					//strip whitespace
					mapMaker.stripWhitespace(mapMaker.DLs[i]);
					mapMaker.stripWhitespace(mapMaker.DTs[i]);
					mapMaker.stripWhitespace(mapMaker.DDs[i]);
					// loop thru all DT elements
					while (mapMaker.DTs.length > ii){
						// DT solo contiene un link <a> de clase  lugar (bandera)
						Lugar = mapMaker.DTs[ii].firstChild;
						// asigna eventos al link de tipo lugar
						// para que sea sticky no asignar evento al MOUSEOUT
						mapMaker.addEvt(Lugar,'mouseover',mapMaker.showTooltip);//displays tooltip on mouse over
						mapMaker.addEvt(Lugar,'focus',mapMaker.showTooltip);//display tooltip on focus, for added keyboard accessibility
						mapMaker.addEvt(Lugar,'blur',mapMaker.hideTooltip);//hide tooltip on focus, for added keyboard accessibility
						ii++;
					};
					ii=0;
					//Dentro de los DD.  el boton de cerrar es el primer hijo
					//asigna al evento CLICK la accion de cerrar
					while (mapMaker.DDs.length > ii){
						Cerrar = mapMaker.DDs[ii].firstChild;
     						while(Cerrar.innerHTML == null)
     						{
           					Cerrar = Cerrar.nextSibling;
    						}
						mapMaker.addEvt(Cerrar,'click',mapMaker.hideTooltip);
						ii++;
					};
					ii=0;
				};
				i++;
			};
			mapMaker.on = true;
		};
	},
	/* SHOW TOOLTIP */
	showTooltip: function() {
		
		var evt = this;
		var i = 0;
      		//alert('entrando showtooltip'); 
		mapMaker.hideTooltip();
		//Find DD to display - based on currently hovered anchor move to parent DT then next sibling DD
   	
		var DD_resumen = evt.parentNode.nextSibling;
		mapMaker.element = DD_resumen;//set for the hideTooltip
		
		//get width and height of background map
		var mapWidth  = DD_resumen.parentNode.offsetWidth;
		var mapHeight = DD_resumen.parentNode.offsetHeight;
		//get width and height of the DD
		var toopTipWidth = DD_resumen.offsetWidth;
		var toopTipHeight = DD_resumen.offsetHeight;
		//figure out where tooltip should be places based on point location
		var newX = evt.offsetLeft + mapMaker.offsetX;
		var newY = evt.offsetTop + mapMaker.offsetY;
		//check if tooltip fits map width 
		if ((newX + toopTipWidth) > mapWidth) {
			DD_resumen.style.left = newX-toopTipWidth-24 + 'px';
		} else {
			DD_resumen.style.left = newX + 'px';
		};
		//check if tooltip fits map height 
		if ((newY + toopTipHeight) > mapHeight) {
			DD_resumen.style.top = newY-toopTipHeight-14 + 'px';
		} else {
			DD_resumen.style.top = newY + 'px';
		};
	   //	para hacer FADE de la imagen   
                var btn_cerrar = DD_resumen.firstChild;
     		while(btn_cerrar.innerHTML == null)
     		{
           		btn_cerrar = btn_cerrar.nextSibling;
    		}
                var imagen = btn_cerrar.nextSibling;
                while(imagen.innerHTML == null)
     		{
     		      imagen = imagen.nextSibling;
    		}
		fade(imagen.id, 1000, 0, 100);
	},
	/* HIDE TOOLTIP */
	hideTooltip: function() {
		//alert('entrando hidetooltip'); 		
		if (mapMaker.element != null) {
		   //fade(mapMaker.imagen.id, 500, 100, 0);				
			mapMaker.element.style.left = '-9999px';
				//alert('saliendo del if hidetooltip');
		};
     		//alert('saliendo hidetooltip'); 	
	},
	addEvt: function(element, type, handler) {
		// assign each event handler a unique ID
		if (!handler.$$guid) handler.$$guid = mapMaker.addEvt.guid++;
		// create a hash table of event types for the element
		if (!element.events) element.events = {};
		// create a hash table of event handlers for each element/event pair
		var handlers = element.events[type];
		if (!handlers) {
			handlers = element.events[type] = {};
			// store the existing event handler (if there is one)
			if (element["on" + type]) {
				handlers[0] = element["on" + type];
			};
		};
		// store the event handler in the hash table
		handlers[handler.$$guid] = handler;
		// assign a global event handler to do all the work
		element["on" + type] = mapMaker.handleEvent;
	},
	handleEvent: function(event) {
		var returnValue = true;
		// grab the event object (IE uses a global event object)
		event = event || mapMaker.fixEvent(window.event);
		// get a reference to the hash table of event handlers
		var handlers = this.events[event.type];
		// execute each event handler
		for (var i in handlers) {
			this.$$handleEvent = handlers[i];
			if (this.$$handleEvent(event) === false) {
				returnValue = false;
			};
		};
		return returnValue;
	},
	fixEvent: function(event) {
		// add W3C standard event methods
		event.preventDefault = mapMaker.fixEvent.preventDefault;
		event.stopPropagation = mapMaker.fixEvent.stopPropagation;
		return event;
	},
	stripWhitespace: function( el ){
		for(var i = 0; i < el.childNodes.length; i++){
			var node = el.childNodes[i];
			if( node.nodeType == 3 &&
				!/\S/.test(node.nodeValue) ) node.parentNode.removeChild(node);
		}
	}
};
mapMaker.fixEvent.preventDefault = function() {this.returnValue = false;};
mapMaker.fixEvent.stopPropagation = function() {this.cancelBubble = true;};
mapMaker.addEvt.guid = 1;


/* LOAD SCRIPT */
	/* for Mozilla */
		if (document.addEventListener) {
			document.addEventListener("DOMContentLoaded", mapMaker.init, null);
		};
		
	/* for Internet Explorer */
		/*@cc_on @*/
		/*@if (@_win32)
			document.write("<script defer src=ie_onload.js><"+"/script>");
		/*@end @*/
		
	/* for other browsers */
		mapMaker.addEvt( window, 'load', mapMaker.init);
