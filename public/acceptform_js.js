// JavaScript to toggle "selected" class based on the clicked radio button
document.addEventListener('click', function (event) {
    if (event.target.type === 'radio' && event.target.name === 'check') {
      // Remove "selected" class from all labels with the same group name
      document.querySelectorAll('input[name="check"]').forEach(radio => {
        radio.closest('.checkbox-style').classList.remove('selected');
      });

      // Add "selected" class to the clicked label
      event.target.closest('.checkbox-style').classList.add('selected');
    }
  });

  // Initialize styles for the default checked radio button
  document.querySelectorAll('input[name="check"]:checked').forEach(radio => {
    radio.closest('.checkbox-style').classList.add('selected');
  });