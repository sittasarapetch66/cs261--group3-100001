const fileInput = document.getElementById('fileInput');
const message = document.getElementById('message');
const submitButton = document.getElementById('confirm');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Get the selected file
    message.textContent = ''; 
    submitButton.disabled = true; 

    if (file) {
        const fileType = file.type; // MIME type of the file

        // Check file type
        if (fileType === 'image/png' || fileType === 'image/jpeg' || fileType === 'application/pdf') {
            message.textContent = `The selected file is valid .`;
            message.style.color = 'green';
            submitButton.disabled = false;
        } else {
            message.textContent = `Invalid file type. Please upload a PNG, JPEG, or PDF file.`;
            message.style.color = 'red';
        }
    } else {
        message.textContent = 'No file selected.';
    }
});

submitButton.addEventListener('click', () => {
    alert('บันทึกเรียบร้อยแล้ว');
});