// Sample data: Replace with real data from your backend
const officers = [
    { name: 'นาย สมเกียรติ แก้วใส', program: 'ภาคปกติ', email: 'somkiat@example.com' },
    { name: 'นางสาว นัทธพงศ์ คันทมูล', program: 'ภาคพิเศษ', email: 'sureerat@example.com' },
    { name: 'ดร. จิราพร สร้างสุข', program: 'ภาคปกติ', email: 'jiraporn@example.com' },
];

// Function to display all officers in the table
function displayOfficers(filteredOfficers) {
    const tableBody = document.getElementById("staff-table");
    tableBody.innerHTML = ''; // Clear existing table rows

    if (filteredOfficers.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6">ไม่พบข้อมูล</td></tr>`;
        return;
    }

    filteredOfficers.forEach((officer, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${officer.program}</td>
            <td>${officer.name}</td>
            <td>${officer.email}</td>
            <td><a href="editOfficer.html" class="edit-button">แก้ไข</a></td>
            <td><button class="delete-button" data-index="${index}">ลบ</button></td>
        `;
        tableBody.appendChild(row);
    });

    // Add event listeners for delete buttons
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', () => deleteOfficer(button.dataset.index));
    });
}

// Function to delete an officer
function deleteOfficer(index) {
    if (confirm('คุณแน่ใจหรือว่าต้องการลบข้อมูลนี้?')) {
        officers.splice(index, 1); // Remove the officer at the given index
        displayOfficers(officers); // Update the table after deletion
    }
}

// Function to search officers by name or program
function searchOfficer() {
    const nameInput = document.getElementById('name2').value.toLowerCase();
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

// Function to add a new officer
function addOfficer() {
    const newName = prompt('กรุณากรอกชื่อ-นามสกุล:');
    const newProgram = prompt('ภาคการเรียน:');
    const newEmail = prompt('กรุณากรอกอีเมล:');

    if (newName && newProgram && newEmail) {
        officers.push({ name: newName, program: newProgram, email: newEmail });
        displayOfficers(officers);
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
}

// Initialize table with officers and add event listeners when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Display all officers initially
    displayOfficers(officers);

    // Add event listeners for search inputs
    document.getElementById('name2').addEventListener('input', searchOfficer);
    document.getElementById('program').addEventListener('change', searchOfficer);
});