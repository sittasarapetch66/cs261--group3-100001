// ตัวอย่างข้อมูลในระบบ
const requests = [
    { id: 1, status: "รออนุมัติ", type: "ลาออก", studentId: "123456", name: "โกนับ ถวาสาร", file: "ไฟล์แนบ" },
    { id: 2, status: "อนุมัติแล้ว", type: "ถอนรายวิชา", studentId: "654321", name: "สมหญิง ใจดี", file: "ไฟล์แนบ" },
    { id: 3, status: "รออนุมัติ", type: "จดทะเบียนล่าช้า", studentId: "789012", name: "สมชาย รักดี", file: "ไฟล์แนบ" }
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
            <td>${item.studentId}</td>
            <td>${item.name}</td>
            <td><button class="cancel-button" onclick="deleteRequest(${item.id})">X</button></td>
            <td><button class="download" onclick="downloadFile(${item.id})">📄</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// ฟังก์ชันสำหรับค้นหาข้อมูล
function searchData() {
    const requestType = document.getElementById("request-type").value;
    const studentName = document.getElementById("student-name").value.trim().toLowerCase();
    const studentId = document.getElementById("student-id").value.trim();

    // กรองข้อมูลตามเงื่อนไข
    const filteredRequests = requests.filter((item) => {
        const matchType = requestType === "ทั้งหมด" || item.type === requestType;
        const matchName = !studentName || item.name.toLowerCase().includes(studentName);
        const matchId = !studentId || item.studentId.includes(studentId);
        return matchType && matchName && matchId;
    });

    // แสดงข้อมูลที่กรอง
    renderTable(filteredRequests);
}

// ฟังก์ชันสำหรับลบคำร้อง
function deleteRequest(id) {
    if (confirm("คุณต้องการลบคำร้องนี้หรือไม่?")) {
        // ลบข้อมูลออกจาก Array
        const index = requests.findIndex((item) => item.id === id);
        if (index !== -1) {
            requests.splice(index, 1);
            alert("คำร้องถูกลบเรียบร้อยแล้ว!");
        } else {
            alert("ไม่พบคำร้องในระบบ");
        }

        // อัปเดตตารางใหม่
        searchData();
    }
}

// Download File
function downloadFile(id) {
    alert(`Downloading file for request ID ${id}`);
}

// เรียกฟังก์ชันแสดงข้อมูลเริ่มต้น
renderTable(requests);