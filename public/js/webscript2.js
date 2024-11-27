
function startFunction(){



}


function toggleSomething(mode){
  //menu ด้านขวาอ่ะ
  var1 = document.getElementById("menusection");
  var2 = document.getElementById("overlaysection");

  //section
  var10 = document.getElementById("homesection");
  var11 = document.getElementById("mylistsection");
  var12 = document.getElementById("trackhistorysection");
  var13 = document.getElementById("requestformtemplate");
  var14 = document.getElementById("successend");
  var15 = document.getElementById("checkstatus");
  var16 = document.getElementById("loginsection");



  /*
  1 : show filter and the menu
  2 : hide filter and the menu

  10 : show only homesection
  11 : show only mylistsection
  12 : show only trackhistorysection
  13 : show only requestformtemplate
  14 : show only successend
  15 : show only checkstatus
  16 : show only login webpage

  */

  switch(mode){
    //Menu
  case 1:
    var1.style.display = "block";
    var2.style.display = "block";

    break;
  case 2:
    var1.style.display = "none";
    var2.style.display = "none";

    break;
  case 3:
    var3.style.display = "block";
    break;

    //Toggle แต่ละส่วน
  default:
    if(mode == 10)var10.style.display = "block"; else var10.style.display = "none";
    if(mode == 11)var11.style.display = "block"; else var11.style.display = "none";
    if(mode == 12)var12.style.display = "block"; else var12.style.display = "none";
    if(mode == 13)var13.style.display = "block"; else var13.style.display = "none";
    if(mode == 14)var14.style.display = "block"; else var14.style.display = "none";
    if(mode == 15)var15.style.display = "block"; else var15.style.display = "none";
    if(mode == 16)var16.style.display = "block"; else var16.style.display = "none";

    var10 = document.getElementById("homesection");
    var11 = document.getElementById("mylistsection");
    var12 = document.getElementById("trackhistorysection");
    var13 = document.getElementById("requestformtemplate");
    var14 = document.getElementById("successend");
    var15 = document.getElementById("checkstatus");
    var16 = document.getElementById("loginsection");

    var1.style.display = "none";
    var2.style.display = "none";
  
  }

  


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

function hideMenu(){
  //document.getElementById("menusection").style.width = "0px";
  document.getElementById("menusection").style.display = "none";

  variable2 = document.getElementById("overlaysection");
  variable2.style.display = "none";
}

function toggleSection(number){

}

function whatAlert(){
  alert("คุณไม่สามารถออกได้ในอีก 98454578763423 วัน เนื่องด้วยปัญหา @*#^*&%*#(7 ");
}

function requestTemplate(typeinput){
  var30 = document.getElementById("requesttype01");
  var31 = document.getElementById("requesttype02");
  var32 = document.getElementById("requesttype03");

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



function requestFormcheckField(){

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
  var52 = document.getElementById("inputadvisor");
  var53 = document.getElementById("inputsubjectid");
  var54 = document.getElementById("inputsubjectname");
  var55 = document.getElementById("inputmoney");



  let countcheck = 0;
  let wrongstyle = "1px solid black" ;
  let rightstyle = "5px solid red";
  if(var40.value == ""){countcheck++; var40.style.border = rightstyle;} else{var40.style.border = wrongstyle;}
  if(var41.value == ""){countcheck++; var41.style.border = rightstyle;} else{var41.style.border = wrongstyle;}
  if(var42.value == ""){countcheck++; var42.style.border = rightstyle;} else{var42.style.border = wrongstyle;}
  if(var43.value == ""){countcheck++; var43.style.border = rightstyle;} else{var43.style.border = wrongstyle;}
  if(var44.value == ""){countcheck++; var44.style.border = rightstyle;} else{var44.style.border = wrongstyle;}
  if(var45.value == ""){countcheck++; var45.style.border = rightstyle;} else{var45.style.border = wrongstyle;}
  if(var46.value == ""){countcheck++; var46.style.border = rightstyle;} else{var46.style.border = wrongstyle;}
  if(var47.value == ""){countcheck++; var47.style.border = rightstyle;} else{var47.style.border = wrongstyle;}
  if(var48.value == ""){countcheck++; var48.style.border = rightstyle;} else{var48.style.border = wrongstyle;}
  if(var49.value == ""){countcheck++; var49.style.border = rightstyle;} else{var49.style.border = wrongstyle;}

  console.log(countcheck)

  if(countcheck > 0){
    alert("โปรดเช็คความถูกต้องของข้อมูลทุกช่อง")
    window.scrollTo(0, 0);
    return 0;
  }
  else{return 1;}

}

function moneyDebt(){

  var50 = document.getElementById("inputrequesttype");
  var51 = document.getElementById("requesttype_out");
  var52 = document.getElementById("inputadvisor");
  var53 = document.getElementById("inputsubjectid");
  var54 = document.getElementById("inputsubjectname");
  var55 = document.getElementById("inputmoney");
  var56 = document.getElementById("choicedebt");


  if (var56.checked == false){
    var55.disabled = false;
  }
  else{
    var55.disabled = true;
  }
}