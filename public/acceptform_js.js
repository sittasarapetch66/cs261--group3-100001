function handleRadioClick(event) {
    // Get the two checkboxes
    const checkbox1 = document.querySelector('.checkbox-style1');
    const checkbox2 = document.querySelector('.checkbox-style2');
  
    // Toggle the 'selected' class based on which checkbox was clicked
    if (event.target.closest('.checkbox-style1')) {
      checkbox1.classList.add('selected');
      checkbox2.classList.remove('selected');
    } else if (event.target.closest('.checkbox-style2')) {
      checkbox2.classList.add('selected');
      checkbox1.classList.remove('selected');
    }
  }
  