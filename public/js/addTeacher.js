// Sample data: You can replace this with real data from your backend
const teachers = [
    { name: 'ดร. สมพงษ์ พัฒนา', faculty: 'คณะวิทยาศาสตร์และเทคโนโลยี', department: 'คณิตศาสตร์และสถิติ', email: 'sompong@example.com' },
    { name: 'ดร. สุรีรัตน์ วิจิตร', faculty: 'คณะวิทยาศาสตร์และเทคโนโลยี', department: 'ฟิสิกส์', email: 'sureerat@example.com' },
    { name: 'ดร. จิราพร ยอดใจ', faculty: 'คณะวิทยาศาสตร์และเทคโนโลยี', department: 'วิทยาการคอมพิวเตอร์', email: 'jiraporn@example.com' },
    // Add more teacher data here...
];

// ฟังก์ชันสำหรับแสดงข้อมูลทั้งหมดในตาราง
function displayTeachers(filteredTeachers) {
    const tableBody = document.querySelector('.teacher-table tbody');
    tableBody.innerHTML = ''; // ลบข้อมูลเก่าในตาราง

    filteredTeachers.forEach((teacher, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${teacher.department}</td>
            <td>${teacher.name}</td>
            <td>${teacher.email}</td>
            <td><button class="edit-button">แก้ไข</button></td>
            <td><button class="delete-button">ลบ</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// ฟังก์ชันสำหรับค้นหาชื่ออาจารย์
function searchTeacher() {
    const nameInput = document.getElementById('name').value.toLowerCase();
    const departmentSelect = document.getElementById('department').value;
    
    // กรองข้อมูลตามชื่อและสาขาที่เลือก
    const filteredTeachers = teachers.filter(teacher => {
        const nameMatch = teacher.name.toLowerCase().includes(nameInput);
        const departmentMatch = departmentSelect === '' || teacher.department === departmentSelect;
        return nameMatch && departmentMatch;
    });

    // แสดงข้อมูลที่กรอง
    displayTeachers(filteredTeachers);
}

function redirectToAddPage() {
    window.location.href = 'addNewProf.html'; //เอาลิงก์มาใส่
}
    document.querySelector('.add-button').addEventListener('click', redirectToAddPage);

// ฟังก์ชันสำหรับการเริ่มต้นเมื่อโหลดหน้าเว็บ
window.onload = function() {
    // แสดงข้อมูลทั้งหมดเมื่อหน้าโหลด
    displayTeachers(teachers);

    // ฟังการเปลี่ยนแปลงจากช่องกรอกชื่อและเลือกสาขา
    document.getElementById('name').addEventListener('input', searchTeacher);
    document.getElementById('department').addEventListener('change', searchTeacher);
}
