var globaljson;

// function to show or hide password field
function togglePass(){
  var hideicon = document.getElementById("hideicon");
  var showicon = document.getElementById("showicon");
  var passfield = document.getElementById("password");

  if (passfield.type == "password"){
    passfield.type = "text";
    hideicon.style.display = "none";
    showicon.style.display = "inline";
  }
  else{
    passfield.type = "password";
    hideicon.style.display = "inline";
    showicon.style.display = "none";
  }

}

// function to print message on to the screen
function printMessage(errorcode, messageinput){
  var name = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  const utype = document.getElementById("utype").value;
  var output = document.getElementById("output");
  var output2 = document.getElementById("message2");
  var output3 = document.getElementById("message3");

  const error1 = "Error 1 : Username or Password can't be empty!";
  const error2 = "Error 2 : User Role isn't selected, please select your role"
  const error3 = "Error 3 : User Role mismatch with the user credential"
  const error4 = "Error 4 : Password is invalid! Please Re-enter Password"
  const error5 = "Error 5 : Cannot Request API"
  const error6 = "Error 6 : Username is invaild! Please Re-enter Username & Password"
  const error7 = "Error 7 : API Key Invalid! Please check API Key"
  const error8 = "Error 8 : Request header is wrongly define! Cannot Continue"

  const erroralert1 = "คุณไม่สามารถล็อกอินเข้าสู่ระบบได้เนื่องด้วยคุณกรอกข้อมูลผิดพลาด โปรดเช็คข้อผิดพลาดอีกครั้ง"
  const erroralert2 = "คุณไม่สามารถล็อกอินเข้าสู่ระบบได้เนื่องด้วยระบบมีข้อผิดพลาด ต้องขออภัยในความไม่สะดวก"


  const warning1 = "Warning 1 : User Role is mismatch with current user credential, but can allowed on"

  const normal1 = "Welcome "
  const normal2 = "ยินดีต้อนรับ "
  const normal3 = "ยินดีต้อนรับคุณ"
  const normal4 = " จากคณะ"
  const normal6 = " รหัส"
  const normal5 = "ระบบยังไม่ได้ Implement เนื่องด้วยเกินขอบเขตที่ได้บอกไว้ใน User Story"

  const systemout1 = "โปรดรอสักครู่ กำลังรอการตอบกลับจาก TU API"
  
  const form01 = "เหตุผลในการ"

  /* Input Error Code
  0X - 1X : Error ->
  1 : Username or password cannot be empty
  2 : User role isn't selected
  3 :
  4 :
  5 :

  2X : Warning ->
  1 :

  5X : Normal Message ->
  0 : {messageinput print}
  1 : ยินดีต้อนรับ {messageinput print}
  2 : Welcome {messageinput print}
  3 : ยินดีต้อนรับคุณ{messageinput print}
  5 : ระบบยังไม่ได้ Implement เนื่องด้วยเกินขอบเขตที่ได้บอกไว้

  */



  switch (errorcode){
    case 1:
      console.error(error1)
      output.innerText = error1;
      output.style.color = "red";

      break;
    case 2:
      console.error(error2);
      output.innerText = error2;
      output.style.color = "red";

      break;

    case 3:
      console.error(error3);
      output.innerText = error3;
      output.style.color = "red";
  
      break;

    case 4:
      console.error(error4);
      output.innerText = error4;
      output.style.color = "red";
  
      break;

    case 5:
      console.error(error5);
      output.innerText = error5;
      output.style.color = "red";
  
      break;

    case 6:
      console.error(error6);
      output.innerText = error6;
      output.style.color = "red";
  
      break;

    case 7:
      console.error(error7);
      output.innerText = error7;
      output.style.color = "red";
  
      break;

    case 8:
      console.error(error8);
      output.innerText = error8;
      output.style.color = "red";
  
      break;

    case 51:
      var messagefunc = normal2 + messageinput;
      console.log(messagefunc);
      output.innerText = messagefunc;
      output.style.color = "black";

      break;
    case 52:
      var messagefunc = normal1 + messageinput;
      console.log(messagefunc);
      output.innerText = messagefunc;
        output.style.color = "black";
  
      break;
    case 53:
      var messagefunc = normal3 + messageinput;
      console.log(messagefunc);
      output.innerText = messagefunc;
      output.style.color = "black";
    
      break;
    case 55:
      var messagefunc = normal5;
      console.log(messagefunc);
      output2.innerText = messagefunc;
      output2.style.color = "red";
      output2.style.fontSize = "24px";
      output3.innerText = messagefunc;
      output3.style.color = "red";
      output3.style.fontSize = "24px";
      break;

    case 60:
      var messagefunc = systemout1;
      console.log(messagefunc);
      output.innerText = messagefunc;
      output.style.color = "black";
      break;

    case 96:
      var messagefunc = normal3 + messageinput;
      alert(messagefunc)
      break;

    case 97:
      var messagefunc = normal2 + messageinput;
      alert(messagefunc)
      break;

    case 98:
      alert(erroralert2);
      break;

    case 99:
      alert(erroralert1);

  }

  if (errorcode >= 1 && errorcode <= 19){
  }


}

//function to validate user by tu api
function APIRequest(){
  const name = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const utype = document.getElementById("utype").value;
  var name1 = document.getElementById("username");
  var pass1 = document.getElementById("password");
  var utype1 = document.getElementById("utype");


  if(checkField()){

    printMessage(60,null);

    fetch("https://restapi.tu.ac.th/api/v1/auth/Ad/verify", {
      method: "POST",
      body: JSON.stringify({
        "UserName": name,
        "PassWord": pass
      }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Application-Key" : "TUecac773883f2433fc71a4432562774ce8872bf7fc11dfa548c5808ba62166ed387af71abcc56b4f6da1014ea0197c7d6"
    }

    })
    .then(response => response.json())
    .then(json => {
    console.log(json);

    // can be request api without error
    if (json.status == true){

      // if type is the same
      if(json.type == utype){
        namenew = json.displayname_th + " จาก " + json.faculty 
        printMessage(53,namenew);
        printMessage(96,json.displayname_th);
        globaljson = json;

        if (utype == "student"){
          toggleSomething(10);
          document.getElementById("navbarname").innerText = "คุณ" + json.displayname_th + " (นักศึกษา)";
        }

        if (utype == "employee"){
          toggleSomething(10);
          document.getElementById("navbarname").innerText = "คุณ" + json.displayname_th + " (บุคลากร)";
        }
        
      }

      else{
        utype1.style.border = "5px solid rgba(256, 96, 0, 1)";
        printMessage(3,null);
        printMessage(99,null);
      }

    }

    // cannot be requested api (Wrong name)
    else{
      
      if (json.message == "Password Invalid!"){
      printMessage(4,null);
      pass1.style.border = "5px solid rgba(256, 96, 0, 1)";
      printMessage(99,null);

      }

      else if (json.message == "Users or Password Invalid!"){
      printMessage(6,null);
      pass1.style.border = "5px solid rgba(256, 96, 0, 1)";
      name1.style.border = "5px solid rgba(256, 96, 0, 1)";
      printMessage(99,null);


      }

      
      else if (json.error == "Authentication failed due to the following reason: invalid token. Confirm that the access token in the authorization header is valid."){
        printMessage(7,null);
        printMessage(98,null);
      }
      

    }

    })
    // catch other error
    .catch(error => {
      console.error("Error : ",error);
      printMessage(8,null);
      printMessage(98,null);
    });
    

  }
  else{
    printMessage(99,null);
  }

  }


//check field that user input correct data
function checkField(){
  const name = document.getElementById("username").value == "";
  const pass = document.getElementById("password").value == "";
  const usertype = document.getElementById("utype").value == "none";

  if (name){
    document.getElementById("username").style.border = "5px solid red";
    printMessage(1,null);


  }
  else{
    document.getElementById("username").style.border = "5px solid rgba(0, 0, 0, 0.3)";
  }

  if (pass){
    document.getElementById("password").style.border = "5px solid red";
    printMessage(1,null);
  }
  else{
    document.getElementById("password").style.border = "5px solid rgba(0, 0, 0, 0.3)";
  }

  if (usertype){
    document.getElementById("utype").style.border = "5px solid red";
    printMessage(2,null);

  }
  else{
    document.getElementById("utype").style.border = "5px solid rgba(0, 0, 0, 0.3)";
  }

  return (name+pass+usertype) == 0;

}