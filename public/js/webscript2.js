

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
  document.getElementById("loginsection").style.display = setorginal;

  var setorginal = "2px dashed yellow";
  document.getElementById("homesection").style.border = setorginal;
  document.getElementById("mylistsection").style.border = setorginal;
  document.getElementById("trackhistorysection").style.border = setorginal;
  document.getElementById("requestformtemplate").style.border = setorginal;
  document.getElementById("successend").style.border = setorginal;
  document.getElementById("checkstatus").style.border = setorginal;
  document.getElementById("loginsection").style.border = setorginal;
}


function toggleSomething(mode){

  var1 = document.getElementById("menusection");
  var2 = document.getElementById("overlaysection");

  var10 = document.getElementById("homesection");
  var11 = document.getElementById("mylistsection");
  var12 = document.getElementById("trackhistorysection");
  var13 = document.getElementById("requestformtemplate");
  var14 = document.getElementById("successend");
  var15 = document.getElementById("checkstatus");
  var16 = document.getElementById("loginsection");

  /*
  1 : show filter and the menu
  2 : hide filter and the menu

  10 : show only homesection
  11 : show only mylistsection
  12 : show only trackhistorysection
  13 : show only requestformtemplate
  14 : show only successend
  15 : show only checkstatus
  20 : show only login webpage

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

  default:
    if(mode == 10)var10.style.display = "block"; else var10.style.display = "none";
    if(mode == 11)var11.style.display = "block"; else var11.style.display = "none";
    if(mode == 12)var12.style.display = "block"; else var12.style.display = "none";
    if(mode == 13)var13.style.display = "block"; else var13.style.display = "none";
    if(mode == 14)var14.style.display = "block"; else var14.style.display = "none";
    if(mode == 15)var15.style.display = "block"; else var15.style.display = "none";
    if(mode == 16)var16.style.display = "block"; else var16.style.display = "none";

    var1.style.display = "none";
    var2.style.display = "none";
  
  }

  


}

function reallyExit(){
  if (confirm("การบันทึกที่ไม่ได้บันทึกจะหายหากคุณออกจากระบบ คุณต้องการที่จะออกจากระบบหรือไม่?") == true)
    location.reload();
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

function toggleSection(number){

}

function whatAlert(){
  alert("คุณไม่สามารถออกได้ในอีก 98454578763423 วัน เนื่องด้วยปัญหา @*#^*&%*#(7 ");
}