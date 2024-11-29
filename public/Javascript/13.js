function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
    menu(29)
    }
    function menu(mode){
      parent.postMessage(mode, "*");
  }

function handleSubmit() {
    // ดึงข้อมูลจากฟอร์ม
    const fullName = document.getElementById('full-name').value;
    const engName = document.getElementById('Eng-name').value;
    const positionID = document.getElementById('position').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const houseNumber = document.getElementById('house-number').value;
    const subdistrict = document.getElementById('subdistrict').value;
    const district = document.getElementById('district').value;
    const province = document.getElementById('province').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ดึงประเภทพนักงานจาก sessionStorage
    const employeeType = sessionStorage.getItem('employeeType'); // เช่น 90 (ฝ่ายอธิการบดี)

    if (!employeeType) {
        alert("ไม่พบข้อมูลประเภทพนักงาน");
        return;
    }

    // สร้างข้อมูลที่จะส่งไปยัง API
    const newEmployee = {
        "nameTH" : fullName,
        "nameEN" : engName,
        "positionID" : positionID,
        "phoneNumber" : phone,
        "email" : email,
        "department" :department,
        "adress" : `${houseNumber}¶${subdistrict}¶${district}¶${province}` ,
        "employeeType" : parseInt(employeeType),
        "faculty" : department ,
        "username": username,
        "password": password,
        "auxData": "¶¶¶¶¶",
    };

    // ส่งข้อมูลไปยัง Backend
    fetch('http://petchsko123.trueddns.com:56267/group3/api/group3/employee', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEmployee)
    })
    .then(response => response.json())
    .then((data) => {
        console.log('เพิ่มข้อมูลสำเร็จ:', data);
        alert('เพิ่มข้อมูลสำเร็จ');

        // เปลี่ยนหน้าไปตามประเภทพนักงานที่เลือก
        if (employeeType == 90) {
            window.location.href = '10.html';  // ถ้าคณบดี (ประเภท 90)
        } else if (employeeType == 11 || employeeType == 12 || employeeType == 30 || employeeType == 31 || employeeType == 32 || employeeType == 33 || employeeType == 50) {
            window.location.href = '11.html';  // สำหรับเจ้าหน้าที่ หรือ อาจารย์
        } else {
            window.location.href = '12.html';  // สำหรับประเภทอื่นๆ (อาจารย์ลักษณะพิเศษ)
        }
    })
    .catch(error => {
        console.error('Error adding employee:', error);
        alert('เกิดข้อผิดพลาดในการเพิ่มข้อมูล');
    });
}
