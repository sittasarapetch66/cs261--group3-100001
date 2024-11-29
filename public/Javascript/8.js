function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
    menu(27)
    }
    function menu(mode){
      parent.postMessage(mode, "*");
  }