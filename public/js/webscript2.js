

function startFunction(){
  document.getElementById("homesection").style.display = "block";
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