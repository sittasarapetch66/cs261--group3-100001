var GLOBALJSON = {};

function requestTemplate(desc){
  
    parent.postMessage(desc+100, "*");
    
    parent.postMessage(4, "*");
    menu(27)
}

  function exit(typeinput){
  
    if (confirm("การบันทึกที่ไม่ได้บันทึกจะหายหากคุณออกจากระบบ คุณต้องการที่จะออกจากระบบหรือไม่?") == true){
        parent.postMessage(typeinput, "*");
    }
}
  
  
  function showMenu(){
  //document.getElementById("menusection").style.width = "30%";
  document.getElementById("menusection").style.display = "block";
  
    variable2 = document.getElementById("overlaysection");
    variable2.style.display = "block";
  
    
  }

  //ALL FILE MUST HAVE THIS FUNCTION
  function ReceiveJSON(json){

    GLOBALJSON = json;
    console.log("1", json);


  }

  window.addEventListener("message", function(event){
    var recv = event.data;

    if(typeof recv == "number"){
    }

    if(typeof recv == "object"){
      GLOBALJSON = recv
      populateText();
    }
  });

  function populateText(){
    document.getElementById("navbarname").innerHTML = `ยินดีต้อนรับ ${GLOBALJSON.displayname_th}`;
  }

  function menu(mode){
    parent.postMessage(mode, "*");
}