function exit(typeinput){
  
    if (confirm("การบันทึกที่ไม่ได้บันทึกจะหายหากคุณออกจากระบบ คุณต้องการที่จะออกจากระบบหรือไม่?") == true){
        parent.postMessage(typeinput, "*");
        location.reload();
    }
}

function menu(mode){
    if(mode==1)parent.postMessage(26, "*");
    if(mode==0)parent.postMessage(27, "*");
}

function requestTemplate(desc){
  
    parent.postMessage(desc, "*");
    parent.postMessage(27, "*");
  }