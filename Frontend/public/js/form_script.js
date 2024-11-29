// Form Script (JS) for group
// Date Created : 10/10/67

//Akawat-SKO Recommended to have other function that have assigned variable in seperated file.


//check form input
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

//disable input when select debt
function moneyDebt(){

  if (GlobalVar[4][10].checked == true){
    GlobalVar[5][15].disabled = false;
  }
  else{
    GlobalVar[5][15].disabled = true;
  }
}

const file = document.getElementById('checkFile');
const message = document.getElementById('message_f');

document.getElementById('checkFile').addEventListener('change', function() {
  console.log("Change!!");
  var file = event.target.files[0]; // ดึงไฟล์ที่เลือก
  var message = document.getElementById('message_f'); // เอาไว้แสดงข้อความ

  if (file) {
      var fileType = file.type; // ประเภทไฟล์ เช่น image/jpeg
      var fileSize = file.size; // ขนาดไฟล์ (หน่วยเป็นไบต์)

      // เช็คประเภทไฟล์
      var allowedTypes = ['image/jpeg', 'application/pdf']; // กำหนดประเภทไฟล์ที่อนุญาต
      if (!allowedTypes.includes(fileType)) {
          message.textContent = "ไฟล์ต้องเป็นประเภท JPG หรือ PDF เท่านั้น";
          message.style.color = 'red';
          return; // ถ้าไฟล์ไม่ตรงตามประเภทจะหยุดการทำงาน
      }

      // เช็คขนาดไฟล์
      var maxSize = 100 * 1024; // กำหนดขนาดไฟล์สูงสุด (5 MB)
      if (fileSize > maxSize) {
          message.textContent = "ขนาดไฟล์ต้องไม่เกิน 5MB";
          message.style.color = 'red';
          return; // ถ้าขนาดไฟล์เกินจะหยุดการทำงาน
      }

      // ถ้าไฟล์ตรงตามเงื่อนไข
      message.textContent = "ไฟล์ถูกต้อง!";
      message.style.color = 'green';
  }
});