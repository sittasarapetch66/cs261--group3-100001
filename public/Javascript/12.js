function displayProfs(filteredProfs) {
    const tableBody = document.getElementById("prof-table");
    tableBody.innerHTML = ''; // Clear existing rows

    if (filteredProfs.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6">ไม่พบข้อมูล</td></tr>`;
        return;
    }

    filteredProfs.forEach((prof, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${prof.department}</td>
            <td>${prof.nameTH}</td>
            <td>${prof.email}</td>
            <td><a href="editProf.html?id=${prof.id}" class="edit-button">แก้ไข</a></td>
            <td><button class="delete-button" data-id="${prof.id}">ลบ</button></td>
        `;
        tableBody.appendChild(row);
    });

    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', () => deleteProf(button.dataset.id));
    });
}

function deleteProf(profId) {
    if (confirm('คุณแน่ใจหรือว่าต้องการลบข้อมูลนี้?')) {
        fetch(`http://petchsko123.trueddns.com:56267/group3/api/group3/employee/deleteid=${profId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('ลบข้อมูลสำเร็จ:', data);
            fetchData(); // Reload the data after deletion
        })
        .catch(error => {
            console.error('Error deleting prof:', error);
        });
    }
}

function searchProf() {
    const nameInput = document.getElementById('name').value.toLowerCase();
    const filteredProfs = profs.filter(prof => prof.nameTH.toLowerCase().includes(nameInput));
    displayProfs(filteredProfs);
}

function addProf() {
    const employeeType = 10; // Example ID for Professors
    sessionStorage.setItem('employeeType', employeeType); // Store the type in sessionStorage

    window.location.href = '13.html'; // Redirect to the add page
}

document.addEventListener('DOMContentLoaded', function () {
    fetchData(); // Load data when the page is ready
    document.getElementById('name').addEventListener('input', searchProf);
});

function fetchData() {
    fetch('http://petchsko123.trueddns.com:56267/group3/api/group3/employee', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('ข้อมูลที่โหลด:', data);
        profs = data.filter(prof => prof.employeeType === 10); // Filter only professors
        displayProfs(profs);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}

function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
    menu(29)
    }
    function menu(mode){
      parent.postMessage(mode, "*");
  }