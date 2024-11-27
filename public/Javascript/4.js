

function onLoadFunction(){

    type01 = document.getElementById("requesttype01");
    type02 = document.getElementById("requesttype02");
    type03 = document.getElementById("requesttype03");
    
    
    input01 = document.getElementById("inputname");
    input02 = document.getElementById("inputfaculty");
    input03 = document.getElementById("inputid");
    input04 = document.getElementById("inputstudentyears");
    input05 = document.getElementById("inputnumbers");
    input06 = document.getElementById("inputparentnumbers");
    input07 = document.getElementById("inputaddrnumber");
    input08 = document.getElementById("inputsubdistrict");
    input09 = document.getElementById("inputdistrict");
    input10 = document.getElementById("inputprovince");
    input11 = document.getElementById("inputrequesttype");
    input12 = document.getElementById("inputadvisor");
    input13 = document.getElementById("inputsubjectid");
    input14 = document.getElementById("inputsubjectname");
    input15 = document.getElementById("inputmoney");
    input16 = document.getElementById("choicedebt");
    
    out01 = document.getElementById("requesttype_out");

};



function requestTemplate(rqtype, json){

    //request type section

  
    /*
    0 -> ไม่มีคำร้อง
    1 -> คำร้องประเภทจดทะเบียนล่าช้า
    2 -> คำร้องประเภทถอนรายวิชา
    3 -> จดทะเบียนรายวิชานอกหลักสูตร
    4 -> ลาออก
    99 -> คำร้องอื่น ๆ
    */

    if(rqtype == 1 || rqtype == 2 || rqtype == 3) type01.style.display = "block"; else type01.style.display = "none";
    if(rqtype == 4 ) type02.style.display = "block"; else type02.style.display = "none";
    if(rqtype == 5 ) type03.style.display = "block"; else type03.style.display = "none";
  
    /*
    if(typeinput == 1 || typeinput == 2 || typeinput == 3)var30.style.display = "block"; else var30.style.display = "none";
    if(typeinput == 4)var31.style.display = "block"; else var31.style.display = "none";
    if(typeinput == 5)var32.style.display = "block"; else var32.style.display = "none";
    if(typeinput == 6)var33.style.display = "block"; else var33.style.display = "none";
  */

    switch(rqtype){
      case 1:
        input01.value = "จดทะเบียนรายวิชาล่าช้า";
        input11.innerHTML = "รายละเอียดวิชา :";
  
      break;
  
      case 2:
        input01.value = "ถอนรายวิชาล่าช้า";
        input11.innerHTML = "วิชาที่ต้องการถอน :";
  
      break;
  
      case 3:
        input01.value = "จดทะเบียนศึกษารายวิชานอกหลักสูตร";
        input11.innerHTML = "วิชาที่ต้องการจดทะเบียน :";
  
      break;
  
      case 4:
        input01.value = "มีความจำนงลาออก";
        input11.innerHTML = "";
  
      break;
  
      case 5:
        input01.value = "คำร้องประเภทอื่น ๆ";
        input11.innerHTML = "";
  
      break;
    }
  
    input01.value = json.displayname_th;
    input02.value = json.faculty;
    input03.value = json.username;
  
    let userid = Number(json.username.slice(0, 2));
    
    if(userid >= 100 || userid < 0){
      userid = 0;
    }
  
    const currentdate = new Date();
    let CYear = currentdate.getFullYear();
    let CMonth = currentdate.getMonth();
  
    let userindate = userid - 543 + 2500;
    let studentsyears;
  
    if (CMonth >= 8){
      studentsyears = CYear - userindate + 1;
    }
    else if (CMonth < 8 && CMonth > 0){
      studentsyears = CYear - userindate;
    }
    else{
      studentsyears = "";
    }
  
    console.log(typeof studentsyears);
    console.log(studentsyears);
  
    input04.value = studentsyears;
  
  
  
  }

  function moneyDebt(){
  
    if (input16.checked == false){
        input15.disabled = true;
    }
    else{
        input15.disabled = false;
    }
  }