// Sample data: You can replace this with real data from your backend
/*const teachers = [
    { name: 'ดร. สมพงษ์ พัฒนา', faculty: 'คณะวิทยาศาสตร์และเทคโนโลยี', department: 'คณิตศาสตร์และสถิติ', email: 'sompong@example.com' },
    { name: 'ดร. สุรีรัตน์ วิจิตร', faculty: 'คณะวิทยาศาสตร์และเทคโนโลยี', department: 'ฟิสิกส์', email: 'sureerat@example.com' },
    { name: 'ดร. จิราพร ยอดใจ', faculty: 'คณะวิทยาศาสตร์และเทคโนโลยี', department: 'วิทยาการคอมพิวเตอร์', email: 'jiraporn@example.com' },
    // Add more teacher data here...
];

// ฟังก์ชันสำหรับแสดงข้อมูลทั้งหมดในตาราง
function displayTeachers(filteredTeachers) {
    const tableBody = document.querySelector('.teacher-table tbody');
    tableBody.innerHTML = ''; // ลบข้อมูลเก่าในตาราง

     //เอาลิงก์ไฟล์แก้ไขมาใส่ที่นี่ ตรงบรรทัดที่ 22
    filteredTeachers.forEach((teacher, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${teacher.department}</td>
            <td>${teacher.name}</td>
            <td>${teacher.email}</td>
            <td><a href="IT_EditProfessorFormPage.html" class="edit-button">แก้ไข</a></td>
            <td><button class="delete-button">ลบ</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// ฟังก์ชันสำหรับค้นหาชื่ออาจารย์
function searchTeacher() {
    const nameInput = document.getElementById('name3').value.toLowerCase();
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

// Function to add a new officer
function addProf() {
    const newName = prompt('กรุณากรอกชื่อ-นามสกุล:');
    const newProgram = prompt('กรุณากรอกสาขาวิชา:');
    const newEmail = prompt('กรุณากรอกอีเมล:');

    if (newName && newProgram && newEmail) {
        teacher.push({ name: newName, program: newdepartment, email: newEmail });
        displayTeachers(teacher);
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
}

function redirectToAddPage() {
    window.location.href = 'IT_AddProfessorFormPage.html'; //เอาลิงก์มาใส่
}
    document.querySelector('.add-button3').addEventListener('click', redirectToAddPage);

// Initialize table with officers and add event listeners when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // แสดงข้อมูลทั้งหมดเมื่อหน้าโหลด
    displayTeachers(teachers);

    // ฟังการเปลี่ยนแปลงจากช่องกรอกชื่อและเลือกสาขา
    document.getElementById('name3').addEventListener('input', searchTeacher);
    document.getElementById('department').addEventListener('change', searchTeacher);
});
*/
// Sample data: Replace with real data from your backend
const teachers = [
    { name: 'ดร. สมพงษ์ พัฒนา', faculty: 'คณะวิทยาศาสตร์และเทคโนโลยี', department: 'คณิตศาสตร์และสถิติ', email: 'sompong@example.com' },
    { name: 'ดร. สุรีรัตน์ วิจิตร', faculty: 'คณะวิทยาศาสตร์และเทคโนโลยี', department: 'ฟิสิกส์', email: 'sureerat@example.com' },
    { name: 'ดร. จิราพร ยอดใจ', faculty: 'คณะวิทยาศาสตร์และเทคโนโลยี', department: 'วิทยาการคอมพิวเตอร์', email: 'jiraporn@example.com' },
];

// Function to display all teachers in the table
function displayTeachers(filteredTeachers) {
    const tableBody = document.getElementById('teacher-list'); // Select by ID
    tableBody.innerHTML = ''; // Clear existing table rows

    if (filteredTeachers.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6">ไม่พบข้อมูล</td></tr>`;
        return;
    }

    filteredTeachers.forEach((teacher, index3) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index3 + 1}</td>
            <td>${teacher.department}</td>
            <td>${teacher.name}</td>
            <td>${teacher.email}</td>
            <td><a href="IT_EditProfessorFormPage.html" class="edit-button">แก้ไข</a></td>
            <td><button class="delete-button3" data-index="${index3}">ลบ</button></td>
        `;
        tableBody.appendChild(row);
    });

    // Add event listeners for delete buttons
    document.querySelectorAll('.delete-button3').forEach(button => {
        button.addEventListener('click', () => deleteTeacher(button.dataset.index));
    });
}

// Function to delete a teacher
function deleteTeacher(index) {
    if (confirm('คุณแน่ใจหรือว่าต้องการลบข้อมูลนี้?')) {
        teachers.splice(index, 1); // Remove the teacher at the given index
        displayTeachers(teachers); // Update the table after deletion
    }
}

// Function to search teachers by name or department
function searchTeacher() {
    const nameInput = document.getElementById('name3').value.toLowerCase();
    const departmentSelect = document.getElementById('department').value;

    // Filter teachers based on input
    const filteredTeachers = teachers.filter(teacher => {
        const nameMatch = teacher.name.toLowerCase().includes(nameInput);
        const departmentMatch = departmentSelect === '' || teacher.department === departmentSelect;
        return nameMatch && departmentMatch;
    });

    // Display filtered teachers
    displayTeachers(filteredTeachers);
}

// Function to add a new teacher
function addProf() {
    const newName = prompt('กรุณากรอกชื่อ-นามสกุล:');
    const newDepartment = prompt('กรุณากรอกสาขาวิชา:');
    const newEmail = prompt('กรุณากรอกอีเมล:');

    if (newName && newDepartment && newEmail) {
        teachers.push({ name: newName, department: newDepartment, email: newEmail });
        displayTeachers(teachers);
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
}

// Initialize table with teachers and add event listeners when the page loads
document.addEventListener('DOMContentLoaded', function () {
    // Display all teachers initially
    displayTeachers(teachers);

    // Add event listeners for search inputs
    document.getElementById('name3').addEventListener('input', searchTeacher);
    document.getElementById('department').addEventListener('change', searchTeacher);

    // Add event listener for Add button
    document.querySelector('.add-button3').addEventListener('click', redirectToAddPage);
});

