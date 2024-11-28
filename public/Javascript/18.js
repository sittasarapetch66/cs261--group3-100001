function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
    }

function exit(typeinput){
  
    if (confirm("การบันทึกที่ไม่ได้บันทึกจะหายหากคุณออกจากระบบ คุณต้องการที่จะออกจากระบบหรือไม่?") == true){
        parent.postMessage(typeinput, "*");
        location.reload();
    }
}