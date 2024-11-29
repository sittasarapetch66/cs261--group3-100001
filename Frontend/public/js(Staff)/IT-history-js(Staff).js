// ตัวอย่างข้อมูลในระบบ
const requests = [
    {
        id: 1,
        status: "รออนุมัติ",
        type: "ลาออก",
        role: "Student",
        name: "โกนับ ถวาสาร",
        file: "📄",
        date: "19/11/2024",
    },
    {
        id: 2,
        status: "อนุมัติแล้ว",
        type: "ถอนรายวิชา",
        role: "Admin",
        name: "สมชาย ใจดี",
        file: "📄",
        date: "18/11/2024",
    },
    {
        id: 3,
        status: "รอดำเนินการ",
        type: "จดทะเบียนล่าช้า",
        role: "Teacher",
        name: "ดร.วิชาญ พินิจ",
        file: "📄",
        date: "17/11/2024",
    },
];

// ฟังก์ชันสำหรับแสดงข้อมูลในตาราง
function renderTable(data) {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; // ล้างข้อมูลในตารางก่อน

    if (data.length === 0) {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="7">ไม่พบข้อมูล</td>`;
        tableBody.appendChild(row);
        return;
    }

    data.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.status}</td>
            <td>${item.type}</td>
            <td>${item.role}</td>
            <td>${item.name}</td>
            <td><button class="download" onclick="downloadFile(${item.id})">📄</button></td>
            <td>${item.date}</td>
        `;
        tableBody.appendChild(row);
    });
}

// ฟังก์ชันสำหรับค้นหาข้อมูล
function searchData() {
    const requestType = document.getElementById("request-type").value;
    const studentName = document.getElementById("student-name").value.trim().toLowerCase();
    const role = document.getElementById("role").value;

    // กรองข้อมูลตามเงื่อนไข
    const filteredRequests = requests.filter((item) => {
        const matchType = requestType === "ทั้งหมด" || item.type === requestType;
        const matchName = !studentName || item.name.toLowerCase().includes(studentName);
        const matchRole = role === "ทั้งหมด" || item.role.toLowerCase() === role.toLowerCase(); // แก้ไขตรงนี้
        return matchType && matchName && matchRole;
    });

    // อัปเดตตาราง
    renderTable(filteredRequests);
}



function downloadFile(id) {
    alert(`Downloading file for request ID ${id}`);
}

// เรียกใช้งานเมื่อโหลดหน้าเพื่อแสดงข้อมูลทั้งหมด
renderTable(requests);