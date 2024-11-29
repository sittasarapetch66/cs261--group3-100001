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
            <td>${officer.department}</td>
            <td>${officer.nameTH}</td>
            <td>${officer.email}</td>
            <td><a href="editOfficer.html" class="edit-button">แก้ไข</a></td>
            <td><button class="delete-button" data-index="${index}">ลบ</button></td>
        `;
        tableBody.appendChild(row);
    });

    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', () => deleteOfficer(button.dataset.index));
    });
}

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

function searchOfficer() {
    const nameInput = document.getElementById('name').value.toLowerCase();
    const filteredOfficers = officers.filter(officer => officer.name.toLowerCase().includes(nameInput));
    displayOfficers(filteredOfficers);
}

function addOfficer() {
    const employeeType = 30; // ตัวอย่าง ID สำหรับเจ้าหน้าที่
    sessionStorage.setItem('employeeType', employeeType); // เก็บใน sessionStorage

    window.location.href = '13.html';  // ไปที่หน้า 13.html เพื่อกรอกข้อมูลเพิ่มเติม
}

document.addEventListener('DOMContentLoaded', function() {
    displayOfficers(officers); // Display officers when the page loads
    document.getElementById('name').addEventListener('input', searchOfficer);
});

function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
}

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
            // กรองเฉพาะ employeeType ที่เป็นเจ้าหน้าที่ (30-33)
            const filteredOfficers = data.filter(officer => [30, 31, 32, 33].includes(officer.employeeType));
            displayOfficers(filteredOfficers); // ส่งข้อมูลที่กรองแล้วไปแสดงในตาราง
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function deletebyID(id){
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
    };

    //fetch data
    fetch(`http://petchsko123.trueddns.com:56267/group3/api/group3/employee/deleteid=${id}`, options)
    .then(response => response.json()) 
    .then((JSON) => {
        console.log(JSON);
        displayTeachers(JSON);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    });
}
