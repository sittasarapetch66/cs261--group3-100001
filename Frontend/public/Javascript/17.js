function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
    menu(29)
    }
    function menu(mode){
      parent.postMessage(mode, "*");
  }