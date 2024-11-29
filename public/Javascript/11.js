// ฟังก์ชันแสดงข้อมูลเจ้าหน้าที่
function displayOfficers(filteredOfficers) {
    const tableBody = document.getElementById("officer-table");
    tableBody.innerHTML = ''; // Clear existing rows

    if (filteredOfficers.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5">ไม่พบข้อมูล</td></tr>`;
        return;
    }

    filteredOfficers.forEach((officer, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${officer.nameTH}</td>
            <td>${officer.email}</td>
            <td><a href="javascript:void(0);" class="edit-button" data-id="${officer.id}">แก้ไข</a></td>
            <td><button class="delete-button" data-index="${index}">ลบ</button></td>
        `;
        tableBody.appendChild(row);
    });

    // จัดการปุ่มลบ
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', () => deleteOfficer(button.dataset.index));
    });

    // จัดการปุ่มแก้ไข
    document.querySelectorAll('.edit-button').forEach(button => {
        button.addEventListener('click', function() {
            const officerId = this.getAttribute('data-id');
            editOfficer(officerId);  // เรียกฟังก์ชัน editOfficer ส่ง ID ไปที่ 14.html
        });
    });
}

// ฟังก์ชันลบเจ้าหน้าที่
function deleteOfficer(index) {
    if (confirm('คุณแน่ใจหรือว่าต้องการลบข้อมูลนี้?')) {
        const officerId = officers[index].id;  // ใช้ ID ของเจ้าหน้าที่ที่ต้องการลบ

        // ส่งคำขอลบข้อมูลไปยัง Backend
        fetch(`http://petchsko123.trueddns.com:56267/group3/api/group3/employee/deleteid=${officerId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) => {
            console.log('ลบเจ้าหน้าที่สำเร็จ:', data);
            fetchData();  // โหลดข้อมูลใหม่
        })
        .catch(error => {
            console.error('Error deleting officer:', error);
        });
    }
}

// ฟังก์ชันค้นหาผู้ใช้ (เจ้าหน้าที่)
function searchOfficer() {
    const nameInput = document.getElementById('name').value.toLowerCase();
    const filteredOfficers = officers.filter(officer => officer.name.toLowerCase().includes(nameInput));
    displayOfficers(filteredOfficers);
}

// ฟังก์ชันเพิ่มเจ้าหน้าที่
function addOfficer() {
    const employeeType = 30;  // เปลี่ยนไปเป็นประเภทเจ้าหน้าที่
    sessionStorage.setItem('employeeType', employeeType); // เก็บใน sessionStorage

    window.location.href = '13.html';  // ไปที่หน้า 13.html เพื่อกรอกข้อมูลเพิ่มเติม
}

// ฟังก์ชันแก้ไขเจ้าหน้าที่
function editOfficer(id) {
    // ส่งไปที่หน้า 14.html โดยใช้ URL ที่มี query string
    window.location.href = '14.html?id=' + id;  // เปลี่ยนหน้าไปที่ 14.html พร้อมส่ง ID
}

document.addEventListener('DOMContentLoaded', function() {
    displayOfficers(officers); // Display officers when the page loads
    document.getElementById('name').addEventListener('input', searchOfficer);
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
            // กรองข้อมูลเฉพาะ employeeType = 30 (เจ้าหน้าที่)
            const filteredOfficers = data.filter(officer => officer.employeeType === 30);
            displayOfficers(filteredOfficers); // ส่งข้อมูลที่กรองแล้วไปแสดงผล
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
