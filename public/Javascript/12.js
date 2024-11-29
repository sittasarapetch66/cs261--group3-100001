function displayProfs(filteredProfs) {
    const tableBody = document.getElementById("prof-table");
    tableBody.innerHTML = ''; // Clear existing rows

    if (filteredProfs.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5">ไม่พบข้อมูล</td></tr>`;
        return;
    }

    filteredProfs.forEach((prof, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${prof.department}</td>
            <td>${prof.name}</td>
            <td>${prof.email}</td>
            <td><a href="editProf.html" class="edit-button">แก้ไข</a></td>
            <td><button class="delete-button" data-index="${index}">ลบ</button></td>
        `;
        tableBody.appendChild(row);
    });

    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', () => deleteProf(button.dataset.index));
    });
}

function deleteProf(index) {
    if (confirm('คุณแน่ใจหรือว่าต้องการลบข้อมูลนี้?')) {
        const profId = profs[index].id;  // ใช้ ID ของ Prof ที่ต้องการลบ

        // ส่งคำขอลบข้อมูลไปยัง Backend
        fetch(`http://petchsko123.trueddns.com:56267/group3/api/group3/employee/deleteid=${profId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) => {
            console.log('ลบข้อมูลสำเร็จ:', data);
            fetchData();  // โหลดข้อมูลใหม่
        })
        .catch(error => {
            console.error('Error deleting prof:', error);
        });
    }
}

function searchProf() {
    const nameInput = document.getElementById('name').value.toLowerCase();
    const filteredProfs = profs.filter(prof => prof.name.toLowerCase().includes(nameInput));
    displayProfs(filteredProfs);
}

function addProf() {
    const employeeType = 10; // ตัวอย่าง ID สำหรับ Prof
    sessionStorage.setItem('employeeType', employeeType); // เก็บใน sessionStorage

    window.location.href = '13.html';  // ไปที่หน้า 13.html เพื่อกรอกข้อมูลเพิ่มเติม
}

document.addEventListener('DOMContentLoaded', function() {
    fetchData(); // ดึงข้อมูลจาก Database เมื่อโหลดหน้า
    document.getElementById('name').addEventListener('input', searchProf);
});

function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
    menu(29)
    }
    function menu(mode){
      parent.postMessage(mode, "*");
  }

fetchData()

function fetchData() {
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
    };

    // ดึงข้อมูล Prof
    fetch('http://petchsko123.trueddns.com:56267/group3/api/group3/employee', options)
    .then(response => response.json()) 
    .then((JSON) => {
        console.log(JSON);
        displayProfs(JSON);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}

function deletebyID(id) {
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
    };

    // ลบข้อมูลตาม ID
    fetch(`http://petchsko123.trueddns.com:56267/group3/api/group3/employee/deleteid=${id}`, options)
    .then(response => response.json()) 
    .then((JSON) => {
        console.log(JSON);
        displayProfs(JSON);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}
