<<<<<<< HEAD
const deans = [
    { name: 'ดร. สมพงษ์ พัฒนา', email: 'somphong@example.com' },
    { name: 'ดร. สุรีรัตน์ วิจิตร', email: 'sureerat@example.com' },
    { name: 'ดร. จิราพร ยอดใจ', email: 'jiraporn@example.com' },
];

function displayDeans(filteredDeans) {
    const tableBody = document.querySelector('.teacher-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    if (filteredDeans.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5">ไม่พบข้อมูล</td></tr>`;
        return;
    }

    filteredDeans.forEach((dean, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${dean.name}</td>
            <td>${dean.email}</td>
            <td><a href="editDean.html" class="edit-button">แก้ไข</a></td>
            <td><button class="delete-button" data-index="${index}">ลบ</button></td>
        `;
        tableBody.appendChild(row);
    });

    // Add event listeners for delete buttons
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', () => deleteDean(button.dataset.index));
    });
}

function deleteDean(index) {
    if (confirm('คุณแน่ใจหรือว่าต้องการลบข้อมูลนี้?')) {
        deans.splice(index, 1); // Remove the dean at the given index
        displayDeans(deans); // Update the table after deletion
    }
}

function searchDean() {
    const nameInput = document.getElementById('name').value.toLowerCase();
    const filteredDeans = deans.filter(dean => dean.name.toLowerCase().includes(nameInput));
    displayDeans(filteredDeans);
}

function addDean() {
    const newName = prompt('กรุณากรอกชื่อ-นามสกุล:');
    const newEmail = prompt('กรุณากรอกอีเมล:');

    if (newName && newEmail) {
        deans.push({ name: newName, email: newEmail });
        displayDeans(deans);
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
}

// Initialize the table with all deans when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayDeans(deans); // Display deans when the page loads
    document.getElementById('name').addEventListener('input', searchDean);
});
=======
const deans = [
    { name: 'ดร. สมพงษ์ พัฒนา', email: 'somphong@example.com' },
    { name: 'ดร. สุรีรัตน์ วิจิตร', email: 'sureerat@example.com' },
    { name: 'ดร. จิราพร ยอดใจ', email: 'jiraporn@example.com' },
];

function displayDeans(filteredDeans) {
    const tableBody = document.querySelector('.teacher-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    if (filteredDeans.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5">ไม่พบข้อมูล</td></tr>`;
        return;
    }

    filteredDeans.forEach((dean, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${dean.name}</td>
            <td>${dean.email}</td>
            <td><a href="editDean.html" class="edit-button">แก้ไข</a></td>
            <td><button class="delete-button" data-index="${index}">ลบ</button></td>
        `;
        tableBody.appendChild(row);
    });

    // Add event listeners for delete buttons
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', () => deleteDean(button.dataset.index));
    });
}

function deleteDean(index) {
    if (confirm('คุณแน่ใจหรือว่าต้องการลบข้อมูลนี้?')) {
        deans.splice(index, 1); // Remove the dean at the given index
        displayDeans(deans); // Update the table after deletion
    }
}

function searchDean() {
    const nameInput = document.getElementById('name').value.toLowerCase();
    const filteredDeans = deans.filter(dean => dean.name.toLowerCase().includes(nameInput));
    displayDeans(filteredDeans);
}

function addDean() {
    const newName = prompt('กรุณากรอกชื่อ-นามสกุล:');
    const newEmail = prompt('กรุณากรอกอีเมล:');

    if (newName && newEmail) {
        deans.push({ name: newName, email: newEmail });
        displayDeans(deans);
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
}

// Initialize the table with all deans when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayDeans(deans); // Display deans when the page loads
    document.getElementById('name').addEventListener('input', searchDean);
});
>>>>>>> 46c561fcb77507d26c0fe89a88de392f0cb6cf4b
