// ฟังก์ชันแสดงข้อมูลอาจารย์
function displayProfessors(filteredProfessors) {
    const tableBody = document.getElementById("professor-table");
    tableBody.innerHTML = ''; // Clear existing rows

    if (filteredProfessors.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5">ไม่พบข้อมูล</td></tr>`;
        return;
    }

    filteredProfessors.forEach((professor, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${professor.nameTH}</td>
            <td>${professor.email}</td>
            <td><a href="javascript:void(0);" class="edit-button" data-id="${professor.id}">แก้ไข</a></td>
            <td><button class="delete-button" data-index="${index}">ลบ</button></td>
        `;
        tableBody.appendChild(row);
    });

    // จัดการปุ่มลบ
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', () => deleteProfessor(button.dataset.index));
    });

    // จัดการปุ่มแก้ไข
    document.querySelectorAll('.edit-button').forEach(button => {
        button.addEventListener('click', function() {
            const professorId = this.getAttribute('data-id');
            editProfessor(professorId);  // เรียกฟังก์ชัน editProfessor ส่ง ID ไปที่ 14.html
        });
    });
}

// ฟังก์ชันลบอาจารย์
function deleteProfessor(index) {
    if (confirm('คุณแน่ใจหรือว่าต้องการลบข้อมูลนี้?')) {
        const professorId = professors[index].id;  // ใช้ ID ของอาจารย์ที่ต้องการลบ

        // ส่งคำขอลบข้อมูลไปยัง Backend
        fetch(`http://petchsko123.trueddns.com:56267/group3/api/group3/employee/deleteid=${professorId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) => {
            console.log('ลบอาจารย์สำเร็จ:', data);
            fetchData();  // โหลดข้อมูลใหม่
        })
        .catch(error => {
            console.error('Error deleting professor:', error);
        });
    }
}

// ฟังก์ชันค้นหาผู้ใช้ (อาจารย์)
function searchProfessor() {
    const nameInput = document.getElementById('name').value.toLowerCase();
    const filteredProfessors = professors.filter(professor => professor.name.toLowerCase().includes(nameInput));
    displayProfessors(filteredProfessors);
}

// ฟังก์ชันเพิ่มอาจารย์
function addProfessor() {
    const employeeType = 10;  // เปลี่ยนไปเป็นประเภทอาจารย์
    sessionStorage.setItem('employeeType', employeeType); // เก็บใน sessionStorage

    window.location.href = '13.html';  // ไปที่หน้า 13.html เพื่อกรอกข้อมูลเพิ่มเติม
}

// ฟังก์ชันแก้ไขอาจารย์
function editProfessor(id) {
    // ส่งไปที่หน้า 14.html โดยใช้ URL ที่มี query string
    window.location.href = '14.html?id=' + id;  // เปลี่ยนหน้าไปที่ 14.html พร้อมส่ง ID
}

document.addEventListener('DOMContentLoaded', function() {
    displayProfessors(professors); // Display professors when the page loads
    document.getElementById('name').addEventListener('input', searchProfessor);
});

// ดึงข้อมูลจาก Backend
fetchData()

function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    fetch('http://petchsko123.trueddns.com:56267/group3/api/group3/employee', options)
        .then(response => response.json())
        .then((data) => {
            // กรองข้อมูลเฉพาะ employeeType = 10 (อาจารย์)
            const filteredProfessors = data.filter(professor => professor.employeeType === 10);
            displayProfessors(filteredProfessors); // ส่งข้อมูลที่กรองแล้วไปแสดงผล
        })
        .catch(error => {
            console.error('Fetch error:', error
