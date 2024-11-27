function requestTemplate(typeinput){
    var30 = document.getElementById("requesttype01");
    var31 = document.getElementById("requesttype02");
    var32 = document.getElementById("requesttype03");
    var33 = document.getElementById("ITsearch");
    
  
    var40 = document.getElementById("inputname");
    var41 = document.getElementById("inputfaculty");
    var42 = document.getElementById("inputid");
    var43 = document.getElementById("inputstudentyears");
    var44 = document.getElementById("inputnumbers");
    var45 = document.getElementById("inputparentnumbers");
    var46 = document.getElementById("inputaddrnumber");
    var47 = document.getElementById("inputsubdistrict");
    var48 = document.getElementById("inputdistrict");
    var49 = document.getElementById("inputprovince");
  
    var50 = document.getElementById("inputrequesttype");
    var51 = document.getElementById("requesttype_out");
  
    
  
  
    /*
    1 -> คำร้องประเภทจดทะเบียนล่าช้า
    2 -> คำร้องประเภทถอนรายวิชา
    */
    toggleSomething(13);
  
    if(typeinput == 1 || typeinput == 2 || typeinput == 3)var30.style.display = "block"; else var30.style.display = "none";
    if(typeinput == 4)var31.style.display = "block"; else var31.style.display = "none";
    if(typeinput == 5)var32.style.display = "block"; else var32.style.display = "none";
    if(typeinput == 6)var33.style.display = "block"; else var33.style.display = "none";
  
    switch(typeinput){
      case 1:
        var50.value = "จดทะเบียนรายวิชาล่าช้า";
        var51.innerHTML = "รายละเอียดวิชา :";
  
      break;
  
      case 2:
        var50.value = "ถอนรายวิชาล่าช้า";
        var51.innerHTML = "วิชาที่ต้องการถอน :";
  
      break;
  
      case 3:
        var50.value = "จดทะเบียนศึกษารายวิชานอกหลักสูตร";
        var51.innerHTML = "วิชาที่ต้องการจดทะเบียน :";
  
      break;
  
      case 4:
        var50.value = "มีความจำนงลาออก";
        var51.innerHTML = "";
  
      break;
  
      case 5:
        var50.value = "คำร้องประเภทอื่น ๆ";
        var51.innerHTML = "";
  
      break;
    }
  
    var40.value = globaljson.displayname_th;
    var41.value = globaljson.faculty;
    var42.value = globaljson.username;
  
    let userid = Number(globaljson.username.slice(0, 2));
    
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
  
    var43.value = studentsyears;
  
  
  
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