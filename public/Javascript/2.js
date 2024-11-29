
  
  
  function showMenu(){
  //document.getElementById("menusection").style.width = "30%";
  document.getElementById("menusection").style.display = "block";
  
    variable2 = document.getElementById("overlaysection");
    variable2.style.display = "block";
  
    
  }

  function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
    menu(27)
    }
    function menu(mode){
      parent.postMessage(mode, "*");
  }

  