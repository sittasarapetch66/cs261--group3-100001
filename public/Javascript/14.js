// ฟังก์ชันสำหรับดึงข้อมูลจาก URL
function getIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');  // ดึงค่า id จาก URL เช่น ?id=22
}

// ฟังก์ชันสำหรับกรอกข้อมูลในฟอร์ม
function populateForm(employee) {
    document.getElementById('full-name').value = employee.nameTH || "";
    document.getElementById('Eng-name').value = employee.nameEN || "";
    document.getElementById('position').value = employee.positionID || "";
    document.getElementById('phone').value = employee.phoneNumber || "";
    document.getElementById('email').value = employee.email || "";
    document.getElementById('department').value = employee.department || "";

    // แยกข้อมูลที่อยู่
    const addressParts = employee.address.split('¶');
    document.getElementById('house-number').value = addressParts[0] || "";
    document.getElementById('subdistrict').value = addressParts[1] || "";
    document.getElementById('district').value = addressParts[2] || "";
    document.getElementById('province').value = addressParts[3] || "";

    document.getElementById('username').value = employee.username || "";
    document.getElementById('password').value = employee.password || "";
}

// ฟังก์ชันสำหรับดึงข้อมูลพนักงานจาก Backend
function loadEmployeeData(id) {
    fetch(`http://petchsko123.trueddns.com:56267/group3/api/group3/employee/${id}`)
        .then(response => response.json())  // แปลงข้อมูลที่ได้รับเป็น JSON
        .then(employee => {
            if (employee) {
                console.log('ข้อมูลพนักงานที่มี id ' + id + ':', employee);
                // ใช้ข้อมูลนี้เพื่อกรอกในฟอร์ม
                populateForm(employee);
            } else {
                alert('ไม่พบข้อมูลพนักงานที่มี id ' + id);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('ไม่สามารถโหลดข้อมูลได้');
        });
}

// ฟังก์ชันสำหรับการอัปเดตข้อมูลเมื่อกด submit
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
    const updatedEmployee = {
        "nameTH": fullName,
        "nameEN": engName,
        "positionID": positionID,
        "phoneNumber": phone,
        "email": email,
        "department": department,
        "address": `${houseNumber}¶${subdistrict}¶${district}¶${province}`,
        "employeeType": parseInt(employeeType),
        "faculty": department,
        "username": username,
        "password": password,
        "auxData": "¶¶¶¶¶",
    };

    // ดึง ID จาก URL หรือ sessionStorage (ถ้ามี)
    const employeeId = getIdFromUrl(); // ใช้ฟังก์ชัน getIdFromUrl เพื่อดึง ID จาก URL

    if (!employeeId) {
        alert("ไม่พบ ID ของพนักงานที่ต้องการแก้ไข");
        return;
    }

    // ส่งข้อมูลไปยัง Backend เพื่ออัปเดตข้อมูล
    fetch(`http://petchsko123.trueddns.com:56267/group3/api/group3/employee/${employeeId}`, {
        method: 'PUT', // ใช้ PUT สำหรับการอัปเดตข้อมูล
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedEmployee)
    })
        .then(response => response.json())
        .then((data) => {
            console.log('อัปเดตข้อมูลสำเร็จ:', data);
            alert('อัปเดตข้อมูลสำเร็จ');

            // เปลี่ยนหน้าไปตามประเภทพนักงานที่เลือก
            if (employeeType == 90) {
                window.location.href = '10.html';  // ถ้าคณบดี (ประเภท 90)
            } else if ([11, 12, 30, 31, 32, 33, 50].includes(parseInt(employeeType))) {
                window.location.href = '11.html';  // สำหรับเจ้าหน้าที่ หรือ อาจารย์
            } else {
                window.location.href = '12.html';  // สำหรับประเภทอื่นๆ (อาจารย์ลักษณะพิเศษ)
            }
        })
        .catch(error => {
            console.error('Error updating employee:', error);
            alert('เกิดข้อผิดพลาดในการอัปเดตข้อมูล');
        });
}

// ฟังก์ชันนี้จะถูกเรียกเมื่อโหลดหน้า เพื่อดึงข้อมูลจาก URL หรือ sessionStorage
function loadDataForEdit() {
    const employeeId = getIdFromUrl(); // ดึง ID จาก URL
    if (employeeId) {
        loadEmployeeData(employeeId); // เรียกฟังก์ชันดึงข้อมูลจาก backend
    } else {
        alert("ไม่พบข้อมูลพนักงานที่ต้องการแก้ไข");
    }
}

// เรียกฟังก์ชัน loadDataForEdit เมื่อหน้าโหลด
window.onload = loadDataForEdit;
function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
    menu(29)
    }
    function menu(mode){
      parent.postMessage(mode, "*");
  }
