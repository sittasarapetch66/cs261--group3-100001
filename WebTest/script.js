
function startFunc(){
     USER = document.getElementById("Username");
     PASS = document.getElementById("Password");
     NAMETH = document.getElementById("NameTH");
     UTYPE = document.getElementById("UserType");
     STATUS = document.getElementById("RequestStatus");

     ADVNAME = document.getElementById("AdvisorName");
     ADDR1 = document.getElementById("Addr1");
     ADDR2 = document.getElementById("Addr2");
     ADDR3 = document.getElementById("Addr3");
     ADDR4 = document.getElementById("Addr4");
     RTYPE = document.getElementById("RequestType");
     DC1 = document.getElementById("DataChunk1");
     DC2 = document.getElementById("DataChunk2");
     DC3 = document.getElementById("DataChunk3");
     DC4 = document.getElementById("DataChunk4");

    FILE1 = document.getElementById("File1");
    FILE2 = document.getElementById("File2");
    FILE3 = document.getElementById("File3");
    FILE4 = document.getElementById("File4");
    
    

}


function LoginFunction(){


    fetch("https://restapi.tu.ac.th/api/v1/auth/Ad/verify", {
        method: "POST",
        body: JSON.stringify({
          "UserName": USER.value,
          "PassWord": PASS.value
        }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Application-Key" : "TUecac773883f2433fc71a4432562774ce8872bf7fc11dfa548c5808ba62166ed387af71abcc56b4f6da1014ea0197c7d6"
      }
  
      })

    .then(response => response.json())
    .then(json => {
        
        if(json.status == true){
            NAMETH.innerHTML = "Name : " + json.displayname_th;
            UTYPE.innerHTML = "User Type : " + json.type;
            STATUS.innerHTML = "Return Status : " + json.status;
        }
        else{
            STATUS.innerHTML = "Return Status : " + json.status;
        }

    })



}

function getBase64() {
    
 }



function callBackend(){
    const dateobj = new Date();
    STRINGCURRDATE = dateobj.getDate() + "-" + 
                    dateobj.getMonth() + "-" +
                    dateobj.getFullYear() + "-" + 
                    dateobj.getHours() + "-" + 
                    dateobj.getMinutes() + "-" + 
                    dateobj.getSeconds() + "-" ;
    RDATA = DC1.value + "¶" + DC2.value + "¶" + DC3.value + "¶" + DC4.value;
    HADDR = ADDR1.value + "¶" + ADDR2.value + "¶" + ADDR3.value + "¶" + ADDR4.value;

    fetch("http://localhost:8080/api/request/group3", {
        method: "POST",
        body: JSON.stringify({
            "datetimeRequest" : STRINGCURRDATE,
            "advisorNameTH" : ADVNAME.innerHTML,
            "requestType" : RTYPE.value,
            "requestData" : RDATA,
            "homeAdress" : HADDR,
            "requestStatus" : "200",
            "storefile1" : "null"
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Application-Key" : "TUecac773883f2433fc71a4432562774ce8872bf7fc11dfa548c5808ba62166ed387af71abcc56b4f6da1014ea0197c7d6"
        }
    
        })
    
    
    
}