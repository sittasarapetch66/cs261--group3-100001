// Example data
const tableData = [
  {
    number: 1,
    status: "รอการอนุมัติ",
    type: "จดทะเบียนล่าช้า",
    regNo: "123456",  // Student ID
    name: "สมชาย ใจดี",
    remark: "",  // Request Type
    fileLink: "#"
  },
  {
    number: 2,
    status: "รอการอนุมัติ",
    type: "ถอนรายวิชา",
    regNo: "789012",  // Student ID
    name: "สมหญิง ใจงาม",
    remark: "",  // Request Type
    fileLink: "#"
  }
];

// Function to handle radio button clicks
/*function handleRadioClick(event) {
  const row = event.target.closest("tr");
  const checkbox1 = row.querySelector(".checkbox-style1");
  const checkbox2 = row.querySelector(".checkbox-style2");

  if (event.target.closest(".checkbox-style1")) {
    checkbox1.classList.add("selected");
    checkbox2.classList.remove("selected");
  } else if (event.target.closest(".checkbox-style2")) {
    checkbox2.classList.add("selected");
    checkbox1.classList.remove("selected");
  }
}*/

// Function to populate the table dynamically
function populateTable(data) {
  const tbody = document.getElementById("dynamic-table-body");
  tbody.innerHTML = ""; // Clear existing rows

  data.forEach((row) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><label>${row.number}</label></td>
      <td><label>${row.type}</label></td>
      <td><label>${row.status}</label></td>
      <td><label>${row.regNo}</label></td>
      <td><label>${row.name}</label></td>
      <td><label>${row.remark}</label></td>
      <td>
        <button class="checkbox-style1" onclick="handleButtonClick(event, 'Approved', ${row.number})">
          <span class="check-icon">✔</span>
        </button>
      </td>
      <td>
        <button class="checkbox-style2" onclick="handleButtonClick(event, 'Not Approved', ${row.number})">
          <span class="check-icon">✖</span>
        </button>
      </td>
      <td>
        <a href="${row.fileLink}" class="file-icon" aria-label="Attached File">
          <span class="check-icon">📄</span>
        </a>
      </td>
    `;
    tbody.appendChild(tr);
  });
}
// Function to handle radio button clicks
function handleButtonClick(event, status, rowNumber) {
  const button = event.currentTarget;

  // Confirmation dialog
  const confirmation = confirm(`Are you sure you want to mark this as "${status}"?`);
  if (!confirmation) {
    // User canceled the action
    return;
  }

  // Lock both buttons in the row
  const rowButtons = document.querySelectorAll(`[onclick*="${rowNumber}"]`);
  rowButtons.forEach((btn) => {
    btn.disabled = true; // Disable button
    btn.style.cursor = "not-allowed"; // Change cursor to indicate non-clickable
  });

  // Apply selected styles to the clicked button
  if (status === "Approved") {
    button.classList.add("approved");
    updateStatusColumn(rowNumber, "อนุมัติ"); // Update status column to "Approved"
  } else if (status === "Not Approved") {
    button.classList.add("not-approved");
    updateStatusColumn(rowNumber, "ไม่อนุมัติ"); // Update status column to "Not Approved"
  }

  // Log the selection for debugging or further processing
  console.log(`Row ${rowNumber}: ${status}`);
}

// Function to update the status column in the table
function updateStatusColumn(rowNumber, newStatus) {
  const tableRows = document.querySelectorAll("#dynamic-table-body tr");
  const row = Array.from(tableRows).find(
    (tr) => tr.querySelector("label")?.innerText == rowNumber
  );

  if (row) {
    const statusCell = row.querySelector("td:nth-child(3) label"); // 3rd column for status
    if (statusCell) {
      statusCell.innerText = newStatus;
    }
  }
}

// Function to filter the table based on search input
function filterTable() {
  const requestType = document.getElementById("request-type").value;
  const status = document.getElementById("status").value;
  const studentId = document.getElementById("student-id").value.trim();

  const filteredData = tableData.filter((row) => {
    const matchesRequestType = requestType === "ทั้งหมด" || row.type.includes(requestType);
    const matchesStatus = status === "ทั้งหมด" || row.status === status;

    // Match Student ID
    const matchesStudentId = !studentId || row.regNo.includes(studentId);

    return matchesRequestType && matchesStatus && matchesStudentId;
  });

  // Log the filtered data to check if it's correct
  console.log(filteredData);

  // Populate table with filtered data
  populateTable(filteredData);
}

// Populate the table on load
document.addEventListener("DOMContentLoaded", function () {
  populateTable(tableData);

  // Attach event listeners to search elements
  document.getElementById("request-type").addEventListener("change", filterTable);
  document.getElementById("status").addEventListener("change", filterTable);
  document.getElementById("student-id").addEventListener("input", filterTable);
});
