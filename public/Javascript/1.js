function requestTemplate(typeinput){
  parent.postMessage(typeinput, "*");
  }

  function reallyExit(){
    if (confirm("การบันทึกที่ไม่ได้บันทึกจะหายหากคุณออกจากระบบ คุณต้องการที่จะออกจากระบบหรือไม่?") == true){
      toggleSomething(16);
      location.reload();
    }
  }
  
  
  function showMenu(){
  //document.getElementById("menusection").style.width = "30%";
  document.getElementById("menusection").style.display = "block";
  
    variable2 = document.getElementById("overlaysection");
    variable2.style.display = "block";
  
    
  }