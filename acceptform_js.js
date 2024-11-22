// Function to handle radio button clicks
function handleRadioClick(event) {
  // Find the parent row of the clicked radio button
  const row = event.target.closest("tr");
  
  // Get the two radio button containers in the same row
  const checkbox1 = row.querySelector(".checkbox-style1");
  const checkbox2 = row.querySelector(".checkbox-style2");

  // Toggle 'selected' class based on which was clicked
  if (event.target.closest(".checkbox-style1")) {
    checkbox1.classList.add("selected");
    checkbox2.classList.remove("selected");
  } else if (event.target.closest(".checkbox-style2")) {
    checkbox2.classList.add("selected");
    checkbox1.classList.remove("selected");
  }
}

// Example data
const tableData = [
  {
    number: 1,
    status: "รอการอนุมัติ",
    regNo: "123456",
    name: "สมชาย ใจดี",
    remark: "",
    fileLink: "#"
  },
  {
    number: 2,
    status: "รอนุมัติ",
    regNo: "789012",
    name: "สมหญิง ใจงาม",
    remark: "",
    fileLink: "#"
  }
];

// Function to populate the table dynamically
function populateTable(data) {
  const tbody = document.getElementById("dynamic-table-body");
  tbody.innerHTML = ""; // Clear existing rows

  data.forEach((row) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><label>${row.number}</label></td>
      <td><label>${row.status}</label></td>
      <td><label>${row.regNo}</label></td>
      <td><label>${row.name}</label></td>
      <td><label>${row.remark}</label></td>
      <td>
        <label class="checkbox-style1" onclick="handleRadioClick(event)">
          <input type="radio" aria-label="Approved" value="Approved" name="check-${row.number}" />
          <span class="check-icon">&#9745;</span>
        </label>
      </td>
      <td>
        <label class="checkbox-style2" onclick="handleRadioClick(event)">
          <input type="radio" aria-label="Not Approved" value="Not Approved" name="check-${row.number}" />
          <span class="check-icon">&#9746;</span>
        </label>
      </td>
      <td>
        <a href="${row.fileLink}" class="file-icon" aria-label="Attached File">
          <span class="check-icon">&#128193;</span>
        </a>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Populate the table on load
document.addEventListener("DOMContentLoaded", function () {
  populateTable(tableData);
});
