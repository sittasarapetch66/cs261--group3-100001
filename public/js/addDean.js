// Sample data for Deans: Replace with real data from your backend
const deans = [
    { name: 'ดร. สมพงษ์ พัฒนา', email: 'somphong@example.com' },
    { name: 'ดร. สุรีรัตน์ วิจิตร', email: 'sureerat@example.com' },
    { name: 'ดร. จิราพร ยอดใจ', email: 'jiraporn@example.com' },
];

// Function to display all deans in the table
function displayDeans(filteredDeans) {
    const tableBody = document.querySelector('.teacher-table tbody');
    tableBody.innerHTML = ''; // Clear existing table rows

    filteredDeans.forEach((dean, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${dean.name}</td>
            <td>${dean.email}</td>
            <td><button class="edit-button">แก้ไข</button></td>
            <td><button class="delete-button">ลบ</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to search deans by name
function searchDean() {
    const nameInput = document.getElementById('name').value.toLowerCase();

    // Filter deans based on the name input
    const filteredDeans = deans.filter(dean => dean.name.toLowerCase().includes(nameInput));

    // Display filtered deans
    displayDeans(filteredDeans);
}

// Function to add a new dean
function addDean() {
    const nameInput = document.getElementById('name').value.trim();
    if (nameInput === '') {
        alert('กรุณากรอกชื่อคณบดี');
        return;
    }

    const newDean = { name: nameInput, email: `${nameInput.replace(/\s/g, '').toLowerCase()}@example.com` };
    deans.push(newDean); // Add new dean to the array

    // Display updated list of deans
    displayDeans(deans);

    // Clear the input field
    document.getElementById('name').value = '';
}

// Initialize the table when the page loads
window.onload = function() {
    // Display all deans initially
    displayDeans(deans);

    // Add event listeners for search input and add dean button
    document.getElementById('name').addEventListener('input', searchDean); // When typing in name input
    document.querySelector('.add-button').addEventListener('click', addDean); // When clicking on the add dean button
};
