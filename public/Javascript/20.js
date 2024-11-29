// ฟังก์ชันยกเลิก
function cancelForm() {
    if (confirm("คุณต้องการยกเลิกการกรอกข้อมูลหรือไม่?")) {
        window.location.href = 'thankyou.html';
    }
}

// ฟังก์ชันล้างข้อมูลในฟอร์ม
function clearForm() {
    document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
    alert("ข้อมูลในฟอร์มถูกล้างแล้ว!");
}

// ฟังก์ชันยืนยันและเปลี่ยนหน้า
function submitForm() {
    alert("ข้อมูลได้รับการยืนยันแล้ว!");
    window.location.href = 'thankyou.html';
}

function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
    }
