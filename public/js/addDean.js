// Sample data for Deans
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

// Function to redirect to another page when clicking "เพิ่มคณบดี"
function redirectToAddPage() {
    window.location.href = 'addNewDean.html'; // เอาลิงก์มาใส่
}
    document.querySelector('.add-button').addEventListener('click', redirectToAddPage);

// Initialize the table and event listeners when the page loads
window.onload = function() {
    // Display all deans initially
    displayDeans(deans);

    // Add event listener for search input
    document.getElementById('name').addEventListener('input', searchDean);

};
