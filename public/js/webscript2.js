

function startFunction(){
  document.getElementById("homesection").style.display = "block";
  //document.getElementById("menusection").style.width = "0px";
}

function toggleSomething(mode){

  var1 = document.getElementById("menusection");
  var2 = document.getElementById("overlaysection");

  var3 = document.getElementById("homesection");

  /*
  1 : show filter and the menu
  2 : hide filter and the menu

  10 : show only homesection
  11 : 
  12 :
  


  */

  switch(mode){
  case 1:
    var1.style.display = "block";
    var2.style.display = "block";

    break;
  case 2:
    var1.style.display = "none";
    var2.style.display = "none";

    break;
  case 3:
    var3.style.display = "block";
    break;
  
  }


}

function showMenu(){
//document.getElementById("menusection").style.width = "30%";
document.getElementById("menusection").style.display = "block";

  variable2 = document.getElementById("overlaysection");
  variable2.style.display = "block";

  
}

function hideMenu(){
  //document.getElementById("menusection").style.width = "0px";
  document.getElementById("menusection").style.display = "none";

  variable2 = document.getElementById("overlaysection");
  variable2.style.display = "none";
}

function showMyListSection(){
  hideMenu();
  document.getElementById("menusection").style.display = "none";
  document.getElementById("overlaysection").style.display = "none";
  document.getElementById("homesection").style.display = "none";
  document.getElementById("mylistsection").style.display = "block";
  document.getElementById("trackhistorysection").style.display = "none";
}

function showHomeSection(){
  document.getElementById("menusection").style.display = "none";
  document.getElementById("overlaysection").style.display = "none";
  document.getElementById("homesection").style.display = "block";
  document.getElementById("mylistsection").style.display = "none";
  document.getElementById("trackhistorysection").style.display = "none";
}

function showHistorySection(){
  document.getElementById("menusection").style.display = "none";
  document.getElementById("overlaysection").style.display = "none";
  document.getElementById("homesection").style.display = "none";
  document.getElementById("mylistsection").style.display = "none";
  document.getElementById("trackhistorysection").style.display = "block";
}


function toggleSection(number){

}

function whatAlert(){
  alert("คุณไม่สามารถออกได้ในอีก 98454578763423 วัน เนื่องด้วยปัญหา @*#^*&%*#(7 ");
}