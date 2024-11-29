
GLOBALJSON = {};

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const message = document.getElementById('message');
    const confirmButton = document.getElementById('confirm');

    if (!confirmButton) {
        console.error("Element 'confirmButton' not found in the DOM.");
        return;
    }

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        message.textContent = '';
        confirmButton.disabled = true;

        if (file) {
            const fileType = file.type;

            if (fileType === 'image/png' || fileType === 'image/jpeg' || fileType === 'application/pdf') {
                message.textContent = `The selected file is valid.`;
                message.style.color = 'green';
                confirmButton.disabled = false;
            } else {
                message.textContent = `Invalid file type. Please upload a PNG, JPEG, or PDF file.`;
                message.style.color = 'red';
            }
        } else {
            message.textContent = 'No file selected.';
            message.style.color = 'red';
        }
    });

    confirmButton.addEventListener('click', () => {
        alert('บันทึกเรียบร้อยแล้ว');
    });
    //fileInput.addEventListener('change', handleFileInputChange);

});


window.addEventListener("message", setValueOnListener);

function setValueOnListener(event){
    var recv = event.data;
    console.log(recv, typeof recv);

    const { displayname_th } = event.data;
    if (displayname_th) {
        // แสดง username ในหน้า HTML
        const usernameElement = document.getElementById("username");
        usernameElement.textContent = `ชื่อผู้ใช้: ${displayname_th}`;
    }

    //check id in range
    if(typeof recv == "number"){
    }

    if(typeof recv == "object"){
        GLOBALJSON = recv;
    }
}



// Add event listener for button click


function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
    menu(27)
    }
function menu(mode){
    parent.postMessage(typeinput, "*");
}




    function APIRequest() {
        username.innerHTML = GLOBALJSON;
    }
    
    // เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเสร็จ
    document.addEventListener("DOMContentLoaded", APIRequest);
    
    document.addEventListener('DOMContentLoaded', () => {
        const dateElement = document.querySelector('.date'); // เลือก element ที่มี class="date"
    
        // ฟังก์ชันสำหรับดึงเวลาปัจจุบันและอัปเดตใน HTML
        function updateDateTime() {
            const now = new Date(); // เวลาปัจจุบัน
            const formattedDate = now.toLocaleString('th-TH', { // รูปแบบวันที่แบบไทย
                dateStyle: 'full',   // วันที่แบบเต็ม
                timeStyle: 'medium'  // เวลาแบบมีชั่วโมง นาที และวินาที
            });
    
            // อัปเดตข้อความใน element
            dateElement.textContent = formattedDate;
        }
    
        updateDateTime(); // เรียกฟังก์ชันเพื่อแสดงเวลาทันที
        setInterval(updateDateTime, 1000); // อัปเดตทุก 1 วินาที
    });
    
