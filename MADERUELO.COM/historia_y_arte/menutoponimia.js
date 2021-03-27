var MenuBarMenus = new Array()
var current = null
var popup

function DocOnLoad() {
  MenuInit();

  var generalidadesMenu = new Menu(0,0)
  var arroyoMenu = new Menu(0,0)
  var barrancoMenu = new Menu(0,0)
  var lugarMenu = new Menu(0,0)
  var llanoMenu = new Menu(0,0)
  var picoMenu = new Menu(0,0)
  var fuenteMenu = new Menu(0,0)
  var cerroMenu = new Menu(0,0)
  var valleMenu = new Menu(0,0)
  var erasMenu = new Menu(0,0)
  var lugarMenu = new Menu(0,0)


  generalidadesMenu.addItem(new MenuItem('Alfoz','./toponimia.html#Alfoz','../../images/historia_y_arte/boton_azul.gif',null,false))  
  generalidadesMenu.addItem(new MenuItem('Arroyo','./toponimia.html#Arroyo','../../images/historia_y_arte/boton_azul.gif',null,false))
  //generalidadesMenu.addItem(new MenuItem('Barranco','./toponimia.html#Barranco','../../images/historia_y_arte/boton_azul.gif',null,false))
  //generalidadesMenu.addItem(new MenuItem('Carrasca','./toponimia.html#Carrasca','../../images/historia_y_arte/boton_azul.gif',null,false))
  //generalidadesMenu.addItem(new MenuItem('Cerro','./toponimia.html#Cerro','../../images/historia_y_arte/boton_azul.gif',null,false))
  generalidadesMenu.addItem(new MenuItem('Hoya','./toponimia.html#Hoya','../../images/historia_y_arte/boton_azul.gif',null,false))
  generalidadesMenu.addItem(new MenuItem('Quintana','./toponimia.html#Quintana','../../images/historia_y_arte/boton_azul.gif',null,false))
  generalidadesMenu.addItem(new MenuItem('Valle','./toponimia.html#Valle','../../images/historia_y_arte/boton_azul.gif',null,false))

    
  arroyoMenu.addItem(new MenuItem('Arroyo del Boquerón','./toponimia.html#ArroyodelBoquerón','../../images/historia_y_arte/boton_azul.gif',null,false))
  arroyoMenu.addItem(new MenuItem('Arroyo de Cañamares','./toponimia.html#ArroyodeCañamares','../../images/historia_y_arte/boton_azul.gif',null,false))
  arroyoMenu.addItem(new MenuItem('Arroyo del Locino','./toponimia.html#ArroyodelLocino','../../images/historia_y_arte/boton_azul.gif',null,false))
  arroyoMenu.addItem(new MenuItem('Arroyo Peña Blanca','./toponimia.html#ArroyoPeñaBlanca','../../images/historia_y_arte/boton_azul.gif',null,false))
  arroyoMenu.addItem(new MenuItem('Arroyo del Pichón','./toponimia.html#ArroyodelPichón','../../images/historia_y_arte/boton_azul.gif',null,false))
  arroyoMenu.addItem(new MenuItem('Arroyo del Pocillo','./toponimia.html#ArroyodelPocillo','../../images/historia_y_arte/boton_azul.gif',null,false))
  arroyoMenu.addItem(new MenuItem('Arroyo de Vallejar','./toponimia.html#ArroyodeVallejar','../../images/historia_y_arte/boton_azul.gif',null,false))
 
  barrancoMenu.addItem(new MenuItem('Barranco de la Cueva','./toponimia.html#BarrancodelaCueva','../../images/historia_y_arte/boton_azul.gif',null,false))
  barrancoMenu.addItem(new MenuItem('Barranco de la Retuerta','./toponimia.html#BarrancodelaRetuerta','../../images/historia_y_arte/boton_azul.gif',null,false))

  valleMenu.addItem(new MenuItem('Valugar','./toponimia.html#Valugar','../../images/historia_y_arte/boton_azul.gif',null,false))

  erasMenu.addItem(new MenuItem('Eras del Rollo','./toponimia.html#ROLLO','../../images/historia_y_arte/boton_azul.gif',null,false))

  lugarMenu.addItem(new MenuItem('La Aldihuela','./toponimia.html#LaAldihuela','../../images/historia_y_arte/boton_azul.gif',null,false))
  lugarMenu.addItem(new MenuItem('Linares del Arroyo','./toponimia.html#Linares','../../images/historia_y_arte/boton_azul.gif',null,false))
  lugarMenu.addItem(new MenuItem('Maluque','./toponimia.html#Maluque','../../images/historia_y_arte/boton_azul.gif',null,false))
  lugarMenu.addItem(new MenuItem('Valdeconejos','./toponimia.html#Valdeconejos','../../images/historia_y_arte/boton_azul.gif',null,false))
  lugarMenu.addItem(new MenuItem('Valdeperal','./toponimia.html#Valdeperal','../../images/historia_y_arte/boton_azul.gif',null,false))
  lugarMenu.addItem(new MenuItem('Ventosilla','./toponimia.html#Ventosilla','../../images/historia_y_arte/boton_azul.gif',null,false))
  lugarMenu.addItem(new MenuItem('Villamayor','./toponimia.html#Villamayor','../../images/historia_y_arte/boton_azul.gif',null,false))


  picoMenu.addItem(new MenuItem('Pico Peñalara','./toponimia.html#PicoPeñalara','../../images/historia_y_arte/boton_azul.gif',null,false))
  picoMenu.addItem(new MenuItem('El Picacho','./toponimia.html#ElPicacho','../../images/historia_y_arte/boton_azul.gif',null,false))

  generalidadesMenu.show(true)
  arroyoMenu.show(true)
  barrancoMenu.show(true)
  valleMenu.show(true)
  erasMenu.show(true)
  lugarMenu.show(true)  
  

  MenuBarMenus[0] = generalidadesMenu;
  MenuBarMenus[1] = arroyoMenu;
  MenuBarMenus[2] = barrancoMenu;
  MenuBarMenus[3] = cerroMenu;
  MenuBarMenus[4] = erasMenu;
  MenuBarMenus[5] = fuenteMenu;
  MenuBarMenus[6] = llanoMenu;
  MenuBarMenus[7] = lugarMenu;
  MenuBarMenus[8] = picoMenu;
  MenuBarMenus[9] = valleMenu;
  
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
  MenuBarClose()
}

function VImagenDinamica(){
  var obj = window.event.srcElement
  window.event.cancelBubble = true;
 
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


  if (obj.className == 'MenuBarItemH1') {
    if (current != null) MenuBarClose()

    obj.style.color = 'black'
    obj.style.backgroundColor = '#0063ce'

    menu = MenuBarMenus[obj.menu]
  
    menu.top = menut.offsetTop + obj.offsetTop + (0.7 * obj.offsetHeight)
    menu.left = obj.offsetLeft  
    menu.show()
    
    current = obj;
  } else  if (obj.className == 'MenuBarItemV1') {
    if (current != null) MenuBarClose()

    obj.style.color = 'black'
    obj.style.backgroundColor = '#0063ce'

    menup = obj.offsetParent
    menu = MenuBarMenus[obj.menu]
    menu.left = menuv.offsetLeft + (0.8 * menuv.offsetWidth)
    menu.top = menut.offsetTop +(0.5 * obj.offsetHeight) + menup.offsetTop + obj.offsetTop
    menu.show()
    
    current = obj;
  }
}
//-->
//</script>