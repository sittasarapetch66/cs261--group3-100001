

function startFunction(){
  var experimental = "none";
  document.getElementById("menusection").style.display = experimental;
  document.getElementById("overlaysection").style.display = experimental;

  var setorginal = "block";
  document.getElementById("homesection").style.display = setorginal;
  document.getElementById("mylistsection").style.display = setorginal;
  document.getElementById("trackhistorysection").style.display = setorginal;
  document.getElementById("requestformtemplate").style.display = setorginal;
  document.getElementById("successend").style.display = setorginal;
  document.getElementById("checkstatus").style.display = setorginal;

  var setorginal = "2px dashed yellow";
  document.getElementById("homesection").style.border = setorginal;
  document.getElementById("mylistsection").style.border = setorginal;
  document.getElementById("trackhistorysection").style.border = setorginal;
  document.getElementById("requestformtemplate").style.border = setorginal;
  document.getElementById("successend").style.border = setorginal;
  document.getElementById("checkstatus").style.border = setorginal;
}

function toggleSomething(mode){

  var1 = document.getElementById("menusection");
  var2 = document.getElementById("overlaysection");

  var3 = document.getElementById("homesection");
  var4 = document.getElementById("mylistsection");
  var5 = document.getElementById("trackhistorysection");
  var6 = document.getElementById("requestformtemplate");
  var7 = document.getElementById("successend");
  var8 = document.getElementById("checkstatus");

  /*
  1 : show filter and the menu
  2 : hide filter and the menu

  10 : show only homesection
  11 : show only mylistsection
  12 : show only trackhistorysection
  13 : show only requestformtemplate
  14 : show only successend
  15 : show only checkstatus

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