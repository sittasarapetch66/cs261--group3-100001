
function startFunction(){

  assignElementsVariable(); // Assign Variable to every element
  assignDataVariable();
  onloadSetup();


}

function assignElementsVariable(){

  //Array Variable -> GlobalVar[Function][Subfunction]
  GlobalVar = new Array(50).fill(null).map(()=>new Array(20).fill(null));


  //Function 1 : Menu and Full Scrren Layer Section
  GlobalVar[1][0] = document.getElementById("menusection");
  GlobalVar[1][1] = document.getElementById("overlaysection");

  //Function 2 : Request Website User Operation Section
  GlobalVar[2][0] = document.getElementById("homesection");
  GlobalVar[2][1] = document.getElementById("mylistsection");
  GlobalVar[2][2] = document.getElementById("trackhistorysection");
  GlobalVar[2][3] = document.getElementById("requestformtemplate");
  GlobalVar[2][4] = document.getElementById("successend");
  GlobalVar[2][5] = document.getElementById("checkstatus");
  GlobalVar[2][6] = document.getElementById("loginsection");

  //Function 3 : Variable on Login Pages
  
  GlobalVar[3][0] = document.getElementById("username"); //username
  GlobalVar[3][1] = document.getElementById("password"); //password
  GlobalVar[3][2] = document.getElementById("utype"); //usertype

  GlobalVar[3][5] = document.getElementById("hideicon"); //closed fa-eye
  GlobalVar[3][6] = document.getElementById("showicon"); //open fa-eye

  //Function 4 : Request Form Template opeation / Toggle type
  GlobalVar[4][0] = document.getElementById("requesttype01");
  GlobalVar[4][1] = document.getElementById("requesttype02");
  GlobalVar[4][2] = document.getElementById("requesttype03");

  GlobalVar[4][10] = document.getElementById("choicedebt"); //Choice of Debt Selection
  GlobalVar[4][11] = document.getElementById("requesttype_out");

  //Function 5 : Request Form Template input
  GlobalVar[5][0] = document.getElementById("inputname");
  GlobalVar[5][1] = document.getElementById("inputfaculty");
  GlobalVar[5][2] = document.getElementById("inputid");
  GlobalVar[5][3] = document.getElementById("inputstudentyears");
  GlobalVar[5][4] = document.getElementById("inputnumbers");
  GlobalVar[5][5] = document.getElementById("inputparentnumbers");
  GlobalVar[5][6] = document.getElementById("inputaddrnumber");
  GlobalVar[5][7] = document.getElementById("inputsubdistrict");
  GlobalVar[5][8] = document.getElementById("inputdistrict");
  GlobalVar[5][9] = document.getElementById("inputprovince");
  GlobalVar[5][10] = document.getElementById("inputrequesttype"); //Text Output of Below Advisor
  GlobalVar[5][11] = document.getElementById("inputadvisor");
  GlobalVar[5][12] = document.getElementById("inputsubjectid");
  GlobalVar[5][13] = document.getElementById("inputsubjectname");
  GlobalVar[5][14] = document.getElementById("inputsection");
  GlobalVar[5][15] = document.getElementById("inputmoney");

  //Function 40 : Json Global
  GlobalVar[40][1]; //Json Login Store


  //Function 6 : Request Form Choice selected

  //Request Form Template input
}

function assignDataVariable(){

  GlobalSet = new Array(100).fill(null);
  console.log(GlobalSet)

  //Border Style Setting
  GlobalSet[10] = "5px solid rgba(0, 0, 0, 0.3)";
  GlobalSet[11] = "1px solid black" ;
  GlobalSet[12] = "5px solid red";
  GlobalSet[19] = "2px dashed yellow"; //Debug Border to show every elements

  //Display setting
  GlobalSet[20] = "none"; //Toggle Visibility to not show of Display style
  GlobalSet[21] = "block"; //Toggle Visibility to show of Display style
  GlobalSet[22] = "flex"; //Toggle Visibility to show of Display style
  GlobalSet[23] = "inline"; //Toggle Visibility to show of Display style

  //input setting
  GlobalSet[30] = "text"; //text input
  GlobalSet[31] = "password"; //password input (not show text)
  GlobalSet[32] = "number"; //Toggle Visibility to not show of Display style
  GlobalSet[33] = ""; //Toggle Visibility to show of Display style

}

function returnWordVariable(wordID){

  //Error Code Name
  const error1 = "Error 1 : Username or Password can't be empty!";
  const error2 = "Error 2 : User Role isn't selected, please select your role"
  const error3 = "Error 3 : User Role mismatch with the user credential"
  const error4 = "Error 4 : Password is invalid! Please Re-enter Password"
  const error5 = "Error 5 : Cannot Request API"
  const error6 = "Error 6 : Username is invaild! Please Re-enter Username & Password"
  const error7 = "Error 7 : API Key Invalid! Please check API Key"
  const error8 = "Error 8 : Request header is wrongly define! Cannot Continue"

  //Generic Error Alert
  const erroralert1 = "คุณไม่สามารถล็อกอินเข้าสู่ระบบได้เนื่องด้วยคุณกรอกข้อมูลผิดพลาด โปรดเช็คข้อผิดพลาดอีกครั้ง"
  const erroralert2 = "คุณไม่สามารถล็อกอินเข้าสู่ระบบได้เนื่องด้วยระบบมีข้อผิดพลาด ต้องขออภัยในความไม่สะดวก"

  //Warning Code Name
  const warning1 = "Warning 1 : User Role is mismatch with current user credential, but can allowed on"

  //Generic Text
  const normal1 = "Welcome "
  const normal2 = "ยินดีต้อนรับ "
  const normal3 = "ยินดีต้อนรับคุณ"
  const normal4 = " จากคณะ"
  const normal6 = " รหัส"
  const normal5 = "ระบบยังไม่ได้ Implement เนื่องด้วยเกินขอบเขตที่ได้บอกไว้ใน User Story"

  //Generic Text Alert
  const systemout1 = "โปรดรอสักครู่ กำลังรอการตอบกลับจาก TU API"
  
  //Generic Form
  const form01 = "เหตุผลในการ"


}

//Set up element when page load
function onloadSetup(){

  //hidden every section
  /*
  for(i=0; GlobalVar[2][i] != null ; i++){
    GlobalVar[2][i].style.display = GlobalSet[20];
  }*/
  //hidden menu and layers
  for(i=0; GlobalVar[1][i] != null ; i++){
    GlobalVar[1][i].style.display = GlobalSet[20];
  }

  //Show default section
  GlobalVar[2][6].style.display = GlobalSet[21];

}


function textInput(){


}