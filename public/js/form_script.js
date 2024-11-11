// Form Script (JS) for group
// Date Created : 11/10/67

//Akawat-SKO Recommended to have other function that support


function checkRequestFormInput(){

  let errorcount = 0; //count number of blank
  let isShown = window.getComputedStyle(GlobalVar[4][1]).display

  for(i=0; i<12; i++){
    
    if(GlobalVar[5][i].value == ""){
      GlobalVar[5][i].style.border = GlobalSet[12];
      errorcount++ ;
    }

    else{
      
      GlobalVar[5][i].style.border = GlobalSet[11];
    } 

  }

  if(isShown == GlobalSet[21]){
    
    for(j=12; j<= 14; j++){

      if(GlobalVar[5][j].value == ""){
        GlobalVar[5][j].style.border = GlobalSet[12];
        errorcount++ ;
      }

      else{
        GlobalVar[5][j].style.border = GlobalSet[11];
      } 

    }
  }
  console.log(errorcount)
  if(errorcount > 0){
    alert("โปรดเช็คความถูกต้องของข้อมูลทุกช่อง")
    window.scrollTo(0, 0);
    return 0;
  }
 else{return 1;}
  
}

//กดปุ่ม Submit ใน Form แล้วรันคำสั่งนี้!
function submitRequestForm(type){

  if (type == 0){
    alert("ยังไม่สามารถบันทึกแบบร่างได้ในขณะนี้");
  }

  if (type == 1){

    if (checkRequestFormInput()){
      toggleSomething(14);
    }

  }
}
  