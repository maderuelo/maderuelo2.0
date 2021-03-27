var MenuBarMenus = new Array()
var current = null
var popup

function DocOnLoad() {
  MenuInit();

  var comestibleMenu = new Menu(0,0)
  var venenosaMenu = new Menu(0,0)
  var funcionMenu = new Menu(0,0)
  

  
  comestibleMenu.addItem(new MenuItem('Seta de cardo','./micologia.html#CARDO','../../../images/naturaleza/fauna/boton_azul.gif',null,false))
  comestibleMenu.addItem(new MenuItem('Pie azul','./micologia.html#PIE AZUL','../../../images/naturaleza/fauna/boton_azul.gif',null,false))
  comestibleMenu.addItem(new MenuItem('Pie Violeta','./micologia.html#VIOLETA','../../../images/naturaleza/fauna/boton_azul.gif',null,false))
  comestibleMenu.addItem(new MenuItem('Seta de chopo','./micologia.html#CHOPO','../../../images/naturaleza/fauna/boton_azul.gif',null,false)) 
  comestibleMenu.addItem(new MenuItem('Seta anisada','./micologia.html#ANISADA','../../../images/naturaleza/fauna/boton_azul.gif',null,false))
  comestibleMenu.addItem(new MenuItem('Amanita ovoide','./micologia.html#OVOIDE','../../../images/naturaleza/fauna/boton_azul.gif',null,false))

  venenosaMenu.addItem(new MenuItem('Coprino de las casas','./micologia.html#CASAS','../../../images/naturaleza/fauna/boton_azul.gif',null,false))
  venenosaMenu.addItem(new MenuItem('Fuligo cinerea','./micologia.html#CINEREA','../../../images/naturaleza/fauna/boton_azul.gif',null,false))
  venenosaMenu.addItem(new MenuItem('Tulostoma de invierno','./micologia.html#TULOSTOMA','../../../images/naturaleza/fauna/boton_azul.gif',null,false))
  
  funcionMenu.addItem(new MenuItem('Función',null))




  comestibleMenu.show(true)
  venenosaMenu.show(true)
  funcionMenu.show(true)
  


  MenuBarMenus[0] = comestibleMenu;
  MenuBarMenus[1] = venenosaMenu;
  MenuBarMenus[2] = funcionMenu;
  

  if (document.images) {
    var imgFiles = DocOnLoad.arguments;
    if (document.preloadArray==null) document.preloadArray = new Array();
    var i = document.preloadArray.length;
    with (document) for (var j=0; j<imgFiles.length; j++){
      preloadArray[i] = new Image;
      preloadArray[i++].src = imgFiles[j];
  } }

}

function MenuBarClose() {
  if (current != null) {
    var menu = MenuBarMenus[current.menu]
    menu.hide()
    menu = null
    current.style.backgroundColor = 'transparent'
    current.style.color = 'black'
  }
}

function DocOnClick() {
  document.imagendinamica.src = 'images/mi.gif'
  MenuBarClose()
}

function VImagenDinamica(){
  var obj = window.event.srcElement
  window.event.cancelBubble = true;
  document.imagendinamica.src = 'images/mi' + obj.menu + '.gif'
  obj.style.color = 'black'
  obj.style.backgroundColor = '#0063ce'
  if (current != null) {
    var menu = MenuBarMenus[current.menu]
    menu.hide()
    menu = null
    current.style.backgroundColor = 'transparent'
    current.style.color = 'black'
  }
}

function CImagenDinamica(){
  var obj = window.event.srcElement
  document.imagendinamica.src = 'images/mi.gif'
  obj.style.color = 'black'
  obj.style.backgroundColor = 'transparent'
}

function MenuBarOnClick() {
  var obj = window.event.srcElement
  var menut = document.all['MenuT']
  var menuv = document.all['TMenu']
  var menup;
  var menu;
  window.event.cancelBubble = true;

  document.imagendinamica.src = 'images/mi' + obj.menu + '.gif'

  if (obj.className == 'MenuBarItemH1') {
    if (current != null) MenuBarClose()

    obj.style.color = 'black'
    obj.style.backgroundColor = '#0063ce'

    menu = MenuBarMenus[obj.menu]
    menu.left = obj.offsetLeft
    menu.top = menut.offsetTop + obj.offsetTop + (0.7 * obj.offsetHeight)
    menu.show()
    
    current = obj;
  } else  if (obj.className == 'MenuBarItemV1') {
    if (current != null) MenuBarClose()

    obj.style.color = 'black'
    obj.style.backgroundColor = '#0063ce'

    menup = obj.offsetParent
    menu = MenuBarMenus[obj.menu]
    menu.left = menuv.offsetLeft + menuv.offsetWidth
    menu.top = menut.offsetTop +(0.7 * obj.offsetHeight) + menup.offsetTop + obj.offsetTop
    menu.show()
    
    current = obj;
  }
}
//-->
//</script>