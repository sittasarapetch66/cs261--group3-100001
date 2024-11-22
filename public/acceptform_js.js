// Example data
const tableData = [
  {
    number: 1,
    status: "รอการอนุมัติ",
    regNo: "123456",  // Student ID
    name: "สมชาย ใจดี",
    remark: "จดทะเบียนล่าช้า",  // Request Type
    fileLink: "#"
  },
  {
    number: 2,
    status: "อนุมัติ",
    regNo: "789012",  // Student ID
    name: "สมหญิง ใจงาม",
    remark: "ถอนรายวิชา",  // Request Type
    fileLink: "#"
  }
];

// Function to handle radio button clicks
function handleRadioClick(event) {
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
}

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

// Function to filter the table based on search input
function filterTable() {
  const requestType = document.getElementById("request-type").value;
  const status = document.getElementById("status").value;
  const studentId = document.getElementById("student-id").value.trim();

  const filteredData = tableData.filter((row) => {
    const matchesRequestType = requestType === "ทั้งหมด" || row.remark.includes(requestType);
    const matchesStatus = status === "ทั้งหมด" || row.status === status;

    // Exact match for Student ID
    const matchesStudentId = !studentId || row.regNo === studentId;

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
