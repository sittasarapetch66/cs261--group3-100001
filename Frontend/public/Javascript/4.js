
//Add Function by AKAWAT-SKO
//Version 1.0.1


//Section VAR

function onloadFunction(){
  chdebt_mon = document.getElementById("inputmoney");
  chdebt = document.getElementById("choicedebt");
}



//Global JSON
GLOBALJSON = {};
RTYPE = -1;

//ReceiveData
window.addEventListener("message", function(event){
  var recv = event.data;
  console.log("4 Recv ",recv);

  if(typeof recv == "number"){
    RTYPE = recv;
  }

  if(typeof recv == "object"){
    GLOBALJSON = recv;

    populateData();

  }
});

function requestTemplate(typeinput){
  parent.postMessage(typeinput, "*");
  menu(27)
  }
  function menu(mode){
    parent.postMessage(mode, "*");
}


function populateData(){

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


  if(RTYPE >= 1 && RTYPE <= 3 )var30.style.display = "block";else var30.style.display = "none";

  if(RTYPE == 4)var31.style.display = "block"; else var31.style.display = "none";
  if(RTYPE == 5)var32.style.display = "block"; else var32.style.display = "none";

  switch(RTYPE){
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

  
  var40.value = GLOBALJSON.displayname_th;
  var41.value = GLOBALJSON.faculty;
  var42.value = GLOBALJSON.username;

  let userid = Number(GLOBALJSON.username.slice(0, 2));
  
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


function moneyDebt(){

  chdebt_mon = document.getElementById("inputmoney");
  chdebt = document.getElementById("choicedebt");

  if (chdebt.checked == false){
    chdebt_mon.disabled = true;
  }
  else{
    chdebt_mon.disabled = false;
  }
}

function requestFormcheckField(){

  const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "image/heif"];

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
  var56 = document.getElementById("inputsection");

  var55 = document.getElementById("inputmoney");
  var57 = document.getElementById("choicedebt");




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
  if(var50.value == ""){countcheck++; var50.style.border = rightstyle;} else{var50.style.border = wrongstyle;}
  if(var52.value == ""){countcheck++; var52.style.border = rightstyle;} else{var52.style.border = wrongstyle;}
  

  console.log(RTYPE);
  switch (RTYPE){
    

    case 0:break;
    case 1:
    case 2:
    case 3:
      if(var53.value == ""){countcheck++; var53.style.border = rightstyle;} else{var53.style.border = wrongstyle;}
      if(var54.value == ""){countcheck++; var54.style.border = rightstyle;} else{var54.style.border = wrongstyle;}
      if(var56.value == ""){countcheck++; var56.style.border = rightstyle;} else{var56.style.border = wrongstyle;}
    break;
    case 4:
      if (var55.checked == true){
        if(var57.value == ""){countcheck++; var57.style.border = rightstyle;} else{var57.style.border = wrongstyle;}
      }
    break;
    case 99: break;

  }

  const fileInput = document.getElementById("checkFile");
  const file = fileInput.files[0];

  if (!file) {
    alert("โปรดแนบไฟล์");
    countcheck++;
  }

  else if (!allowedTypes.includes(file.type)) {
    alert("โปรดอัพโหลดไฟล์ PDF, JPEG, PNG หรือ HEIF เท่านั้น");
    countcheck++;
  }

  console.log(countcheck)

  if(countcheck > 0){
    alert("โปรดเช็คความถูกต้องของข้อมูลทุกช่อง")
    window.scrollTo(0, 0);
    return 0;
  }
  else{return 1;}

}

function submitRequestForm(type){
  if(requestFormcheckField()){
            const fileInput = document.getElementById("checkFile");
            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = function (event) {
                const base64String = event.target.result.split(",")[1]; // Remove the prefix
                sendAPI();
            };

            reader.onerror = function () {
            };

            reader.readAsDataURL(file);

  }
}

function sendAPI(){

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "requestStatus": 200,
      "requestType": RTYPE,
      "username": GLOBALJSON.username,
      "datetimeRequest": "Datetime",
      "advisorNameTH": "None",
      "requestData": "test\u0014test\u0014",
      "homeAdress": "None",
      "storefile1": ""
    }),
  };

  //fetch data
  fetch("http://petchsko123.trueddns.com:56267/group3/api/group3/request", options)
  .then(response => response.text()) 
  .then((dataStr) => {
      console.log("Send Successful");
      parent.postMessage(5, "*");
  })
  .catch(error => {
      // Handle any errors that occurred during the fetch
      console.error('Cannot send Error : ', error);
     alert("ไม่สามารถส่งได้ โปรดติดต่อผู้ดูแลระบบหรือลองอีกครั้ง");
  });

}