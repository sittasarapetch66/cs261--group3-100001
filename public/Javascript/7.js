
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const message = document.getElementById('message');
    const confirmButton = document.getElementById('confirm');

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
});



// Add event listener for button click
confirmButton.addEventListener('click', () => {
    alert('บันทึกเรียบร้อยแล้ว');
});

fileInput.addEventListener('change', handleFileInputChange);
