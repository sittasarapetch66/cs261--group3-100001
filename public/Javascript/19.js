// JavaScript
        // ฟังก์ชันยกเลิก
        function cancelForm() {
            if (confirm("คุณต้องการยกเลิกการกรอกข้อมูลหรือไม่?")) {
                window.location.href = 'thankyou.html';
            }
        }

        function clearForm() {
        // ลบค่าทั้งหมดในฟิลด์ input
        document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
        alert("ข้อมูลในฟอร์มถูกล้างแล้ว!");
    }

        function submitForm() {
        // ตรวจสอบหรือบันทึกข้อมูลได้หากจำเป็น
        alert("ข้อมูลได้รับการยืนยันแล้ว!");

        window.location.href = 'thankyou.html';
    }
    function requestTemplate(typeinput){
        parent.postMessage(typeinput, "*");
        }