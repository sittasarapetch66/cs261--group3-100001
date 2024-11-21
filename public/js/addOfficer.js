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

    filteredOfficers.forEach((officer, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${officer.program}</td>
            <td>${officer.name}</td>
            <td>${officer.email}</td>
            <td><button class="edit-button">แก้ไข</button></td>
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
    displayOfficers(officers);

    // Add event listeners for search inputs
    document.getElementById('name').addEventListener('input', searchOfficer);
    document.getElementById('program').addEventListener('change', searchOfficer);
};
