function exit(typeinput){
  
    if (confirm("การบันทึกที่ไม่ได้บันทึกจะหายหากคุณออกจากระบบ คุณต้องการที่จะออกจากระบบหรือไม่?") == true){
        parent.postMessage(typeinput, "*");
        location.reload();
    }
}

function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
    }

function menu(mode){
    if(mode==1)parent.postMessage(26, "*");
    if(mode==0)parent.postMessage(27, "*");
}