// ฟังก์ชันสำหรับแสดงข้อความ
function showNotification(message) {
    const notificationBox = document.getElementById('notificationBox');

    // ตั้งค่าข้อความและแสดงกล่องข้อความ
    notificationBox.innerText = message;
    notificationBox.style.display = 'block';

    // ซ่อนข้อความหลัง 3 วินาที
    setTimeout(() => {
        notificationBox.style.display = 'none';
    }, 3000);
}

// ฟังก์ชันสำหรับปุ่ม "ยกเลิก"
function handleCancel() {
    showNotification('ระบบบันทึกการทำรายการยกเลิกเรียบร้อย');
}

// ฟังก์ชันสำหรับปุ่ม "ยืนยัน"
function handleSubmit() {
    showNotification('ระบบบันทึกการทำรายการเรียบร้อย');
}

function navigateTo(page) {
    window.location.href = page;
}