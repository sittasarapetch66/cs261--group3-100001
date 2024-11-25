// Get references to elements
const fileInput = document.getElementById('fileInput');
const message = document.getElementById('message');
const confirmButton = document.getElementById('confirm');

// Add event listener for file input changes
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Get the selected file
    message.textContent = ''; // Clear any previous messages
    confirmButton.disabled = true; // Disable the button by default

    if (file) {
        const fileType = file.type; // MIME type of the file

        // Check file type
        if (fileType === 'image/png' || fileType === 'image/jpeg' || fileType === 'application/pdf') {
            message.textContent = `The selected file is valid.`;
            message.style.color = 'green';
            confirmButton.disabled = false; // Enable the button
        } else {
            message.textContent = `Invalid file type. Please upload a PNG, JPEG, or PDF file.`;
            message.style.color = 'red';
        }
    } else {
        message.textContent = 'No file selected.';
    }
});

// Add event listener for button click
confirmButton.addEventListener('click', () => {
    alert('บันทึกเรียบร้อยแล้ว');
});