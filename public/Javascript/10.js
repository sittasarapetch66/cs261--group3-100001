function displayDeans(filteredDeans) {
    const tableBody = document.getElementById("dean-table");
    tableBody.innerHTML = ''; // Clear existing rows

    if (filteredDeans.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5">ไม่พบข้อมูล</td></tr>`;
        return;
    }

    filteredDeans.forEach((dean, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${dean.nameTH}</td>
            <td>${dean.email}</td>
            <td><a href="editDean.html" class="edit-button">แก้ไข</a></td>
            <td><button class="delete-button" data-index="${index}">ลบ</button></td>
        `;
        tableBody.appendChild(row);
    });

    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', () => deleteDean(button.dataset.index));
    });
}

function deleteDean(index) {
    if (confirm('คุณแน่ใจหรือว่าต้องการลบข้อมูลนี้?')) {
        const deanId = deans[index].id;  // ใช้ ID ของคณบดีที่ต้องการลบ

        // ส่งคำขอลบข้อมูลไปยัง Backend
        fetch(`http://petchsko123.trueddns.com:56267/group3/api/group3/employee/deleteid=${deanId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) => {
            console.log('ลบคณบดีสำเร็จ:', data);
            fetchData();  // โหลดข้อมูลใหม่
        })
        .catch(error => {
            console.error('Error deleting dean:', error);
        });
    }
}

function searchDean() {
    const nameInput = document.getElementById('name').value.toLowerCase();
    const filteredDeans = deans.filter(dean => dean.name.toLowerCase().includes(nameInput));
    displayDeans(filteredDeans);
}

function addDean() {
    const employeeType = 90;
    sessionStorage.setItem('employeeType', employeeType); // เก็บใน sessionStorage

    window.location.href = '13.html';  // ไปที่หน้า 13.html เพื่อกรอกข้อมูลเพิ่มเติม
}

document.addEventListener('DOMContentLoaded', function() {
    displayDeans(deans); // Display deans when the page loads
    document.getElementById('name').addEventListener('input', searchDean);
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
    
        fetch('http://petchsko123.trueddns.com:56267/group3/api/group3/employee', options)
            .then(response => response.json())
            .then((data) => {
                // กรองข้อมูลเฉพาะ employeeType = 90 (คณบดี)
                const filteredDeans = data.filter(dean => dean.employeeType === 90);
                displayDeans(filteredDeans); // ส่งข้อมูลที่กรองแล้วไปแสดงผล
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
    