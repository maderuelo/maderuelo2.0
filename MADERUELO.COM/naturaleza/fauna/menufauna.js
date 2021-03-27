var MenuBarMenus = new Array()
var current = null
var popup

function DocOnLoad() {
  MenuInit();

  var avesMenu = new Menu(0,0)
  var mamiferosMenu = new Menu(0,0)
  var reptilesMenu = new Menu(0,0)
  var anfibiosMenu = new Menu(0,0)
  var pecesMenu = new Menu(0,0)
  var invertebradosMenu = new Menu(0,0)
  var insectosSubMenu = new Menu(0,0)
  var crustaceosSubMenu = new Menu(0,0)
  var aracnidosSubMenu = new Menu(0,0)
  

  
  avesMenu.addItem(new MenuItem('Alimoche','alimoche.html','../../../images/naturaleza/fauna/boton_azul.gif',null,false))
  avesMenu.addItem(new MenuItem('Buitre Leonado', 'buitre.html','../../../images/naturaleza/fauna/boton_azul.gif',null,false))
    
  mamiferosMenu.addItem(new MenuItem('Zorro',null, '../../../images/naturaleza/fauna/boton_azul.gif',null,false))
  mamiferosMenu.addItem(new MenuItem('Nutria',null, '../../../images/naturaleza/fauna/boton_azul.gif',null,false))
  mamiferosMenu.addItem(new MenuItem('Corzo', null,'../../../images/naturaleza/fauna/boton_azul.gif',null,false))


  reptilesMenu.addItem(new MenuItem('Culebra bastarda', null, '../../../images/naturaleza/fauna/boton_azul.gif',null,false))
  reptilesMenu.addItem(new MenuItem('Víbora', null, '../../../images/naturaleza/fauna/boton_azul.gif',null,false))

  anfibiosMenu.addItem(new MenuItem('sapo común',null, '../../../images/naturaleza/fauna/boton_azul.gif',null,false))
  anfibiosMenu.addItem(new MenuItem('rana', null, '../../../images/naturaleza/fauna/boton_azul.gif',null,false))

  pecesMenu.addItem(new MenuItem('Barbo',null, '../../../images/naturaleza/fauna/boton_azul.gif',null,false))
  pecesMenu.addItem(new MenuItem('Carpa', null,'../../../images/naturaleza/fauna/boton_azul.gif',null,false))
  pecesMenu.addItem(new MenuItem('Trucha',null, '../../../images/naturaleza/fauna/boton_azul.gif',null,false))

  invertebradosMenu.addItem(new MenuItem('Arácnidos', null, null, aracnidosSubMenu))
  invertebradosMenu.addItem(new MenuItem('Crustáceos', null, null, crustaceosSubMenu))
  invertebradosMenu.addItem(new MenuItem('Insectos', null, null, insectosSubMenu))
 

  aracnidosSubMenu.addItem(new MenuItem('tarántula', null,'../../../images/naturaleza/fauna/boton_azul.gif',null,false))




  avesMenu.show(true)
  mamiferosMenu.show(true)
  reptilesMenu.show(true)
  anfibiosMenu.show(true)
  invertebradosMenu.show(true)
  
  aracnidosSubMenu.show(true)
  insectosSubMenu.show(true)
  crustaceosSubMenu.show(true)


  MenuBarMenus[0] = avesMenu;
  MenuBarMenus[1] = mamiferosMenu;
  MenuBarMenus[2] = reptilesMenu;
  MenuBarMenus[3] = anfibiosMenu;
  MenuBarMenus[4] = pecesMenu;
  MenuBarMenus[5] = invertebradosMenu;

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