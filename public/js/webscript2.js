

function startFunction(){
  document.getElementById("homesection").style.display = "block";
}

function toggleSomething(mode){

  var1 = document.getElementById("menusection");
  var2 = document.getElementById("overlaysection");
  var3 = document.getElementById("homesection");

  var1.style.display = "none";
  var2.style.display = "none";
  var3.style.display = "none";


  switch(mode){
  case 1:
    var1.style.display = "block"
    break;
  case 2:
    var2.style.display = "block"
    break;
  case 3:
    var3.style.display = "block"
    break;
  
  }


}

function showMenu(){

  variable = document.getElementById("menusection");
  variable.style.display = "block";
  variable2 = document.getElementById("overlaysection");
  variable2.style.display = "block";
}

function hideMenu(){

  variable = document.getElementById("menusection");
  variable.style.display = "none";
  variable2 = document.getElementById("overlaysection");
  variable2.style.display = "none";
}

function showMyListSection(){

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