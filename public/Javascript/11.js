// Sample data: Replace with real data from your backend
const officers = [
    { name: 'นาย สมเกียรติ แก้วใส', program: 'ภาคปกติ', email: 'somkiat@example.com' },
    { name: 'นางสาว นัทธพงศ์ คันทมูล', program: 'ภาคพิเศษ', email: 'sureerat@example.com' },
    { name: 'ดร. จิราพร สร้างสุข', program: 'ภาคปกติ', email: 'jiraporn@example.com' },
];

// Function to display all officers in the table
function displayOfficers(filteredOfficers) {
    const tableBody = document.querySelector('.teacher-table tbody');
    tableBody.innerHTML = ''; // Clear existing table rows

    //เอาลิงก์ไฟล์แก้ไขมาใส่ที่นี่ ตรงบรรทัดที่ 21
    filteredOfficers.forEach((officer, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${officer.program}</td>
            <td>${officer.name}</td>
            <td>${officer.email}</td>
            <td><a href="editOfficer.html" class="edit-button">แก้ไข</a></td>
            <td><button class="delete-button">ลบ</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to search officers by name or program
function searchOfficer() {
    const nameInput = document.getElementById('name').value.toLowerCase();
    const programSelect = document.getElementById('program').value;

    // Filter officers based on input
    const filteredOfficers = officers.filter(officer => {
        const nameMatch = officer.name.toLowerCase().includes(nameInput);
        const programMatch = programSelect === '' || officer.program === programSelect;
        return nameMatch && programMatch;
    });

    // Display filtered officers
    displayOfficers(filteredOfficers);
}

// Initialize table on page load
window.onload = function() {
    // Display all officers initially
    //displayOfficers(officers);

    // Function to redirect to another page when clicking "เพิ่มคณบดี"
function redirectToAddPage() {
    window.location.href = 'addNewOfficer.html'; //เอาลิงก์มาใส่
}
    document.querySelector('.add-button').addEventListener('click', redirectToAddPage);

    // Add event listeners for search inputs
    document.getElementById('name').addEventListener('input', searchOfficer);
    document.getElementById('program').addEventListener('change', searchOfficer);
};

function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
}


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
            <td>${teacher.id}</td>
            <td>${teacher.department}</td>
            <td>${teacher.nameTH}</td>
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
        //teachers.splice(index, 1); // Remove the teacher at the given index
        //displayTeachers(teachers); // Update the table after deletion

        deletebyID(index);
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

fetchData()

function fetchData(id){

    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      };
    
      //fetch data
    fetch('http://petchsko123.trueddns.com:56267/group3/api/group3/employee', options)
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
