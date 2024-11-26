// ตัวอย่างข้อมูลในระบบ
const requests = [
    { id: 1, status: "รออนุมัติ", type: "ลาออก", studentId: "123456", name: "โกนับ ถวาสาร", file: "ไฟล์แนบ" },
    { id: 2, status: "อนุมัติแล้ว", type: "ถอนรายวิชา", studentId: "654321", name: "สมหญิง ใจดี", file: "ไฟล์แนบ" },
    { id: 3, status: "รออนุมัติ", type: "จดทะเบียนล่าช้า", studentId: "789012", name: "สมชาย รักดี", file: "ไฟล์แนบ" }
];

function LoadFunction(){

    fetchData()
}

async function fetchData() {
    const url = "http://petchsko123.trueddns.com:56267/group3/api/group3/request";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        data = await response.json();
        renderTable(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

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

        switch (item.requestType){
            case 0:
                requestType0 = "ไม่มีคำร้อง"; break;
            case 1:
                requestType0 = "จดทะเบียนล่าช้า"; break;
            case 2:
                requestType0 = "ถอนรายวิชา"; break;
            case 3:
                requestType0 = "จดทะเบียนรายวิชาข้ามหลักสูตร"; break;
            case 4:
                requestType0 = "ลาออก"; break;
            case 99:
                requestType0 = "คำร้องอื่น ๆ"; break;
            default:
                requestType0 = "ไม่มีคำร้องที่กำหนด"; break;

        }
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.requestStatus}</td>
            <td>${requestType0}</td>
            <td>${item.username}</td>
            <td>${item.advisorNameTH}</td>
            <td><button class="cancel-button" id=${item.id} onclick="deleteRequest(${item.id})">X</button></td>
            <td><button class="download" id=${item.id} onclick="fetchData(${item.id})">📄</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// ฟังก์ชันสำหรับค้นหาข้อมูล
function searchData() {
    const requestType = document.getElementById("request-type").value;
    const studentName = document.getElementById("student-name").value.trim();
    const studentId = document.getElementById("student-id").value.trim();

    // กรองข้อมูลตามเงื่อนไข
    const filteredRequests = data.filter((item) => {
        const matchType = requestType === '9999' || item.requestType === parseInt(requestType);
        const matchName = !studentName || item.advisorNameTH.includes(studentName);
        const matchId = !studentId || item.username.includes(studentId);

        console.log(item.requestType, requestType);
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

//


function downloadFile(id){
    const base64Input =id.trim();
    if (!base64Input) {
        alert('Please paste a valid Base64 string.');
        return;
    }

    try {
        // Check if the Base64 string contains the prefix
        const matches = base64Input.match(/^data:(.*?);base64,(.*)$/);
        if (!matches) {
            alert('Invalid Base64 format. It should include the prefix data:[type]/[subtype];base64,.');
            return;
        }

        const mimeType = matches[1];
        const base64Data = matches[2];

        // Decode Base64 to binary
        const binaryData = atob(base64Data);
        const arrayBuffer = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
            arrayBuffer[i] = binaryData.charCodeAt(i);
        }

        // Create a Blob from the ArrayBuffer
        const blob = new Blob([arrayBuffer], { type: mimeType });

        // Create a download link
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `download.${mimeType.split('/')[1]}`; // Use file extension from MIME type
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    } catch (error) {
        console.error('Error converting Base64:', error);
        alert('An error occurred while converting the Base64 string. Please ensure it is valid.');
    }

}

/*
function fetchData(id) {
    const url = "http://petchsko123.trueddns.com:56267/api/group3/request/id=" + "1" + "/file=1";
    try {
        const response = fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        data2 = response;
        downloadFile(data2);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
*/

/*
document.getElementById('convertButton').addEventListener('click', function() {
    const base64Input = document.getElementById('base64Input').value.trim();

    if (!base64Input) {
        alert('Please paste a valid Base64 string.');
        return;
    }

    try {
        // Check if the Base64 string contains the prefix
        const matches = base64Input.match(/^data:(.*?);base64,(.*)$/);
        if (!matches) {
            alert('Invalid Base64 format. It should include the prefix data:[type]/[subtype];base64,.');
            return;
        }

        const mimeType = matches[1];
        const base64Data = matches[2];

        // Decode Base64 to binary
        const binaryData = atob(base64Data);
        const arrayBuffer = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
            arrayBuffer[i] = binaryData.charCodeAt(i);
        }

        // Create a Blob from the ArrayBuffer
        const blob = new Blob([arrayBuffer], { type: mimeType });

        // Create a download link
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `download.${mimeType.split('/')[1]}`; // Use file extension from MIME type
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    } catch (error) {
        console.error('Error converting Base64:', error);
        alert('An error occurred while converting the Base64 string. Please ensure it is valid.');
    }
});
*/