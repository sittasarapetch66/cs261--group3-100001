// Function to handle radio button clicks
function handleRadioClick(event) {
  const row = event.target.closest("tr");
  if (!row) return;

  const checkbox1 = row.querySelector(".checkbox-style1");
  const checkbox2 = row.querySelector(".checkbox-style2");

  if (!checkbox1 || !checkbox2) return;

  if (event.target.closest(".checkbox-style1")) {
    checkbox1.classList.add("selected");
    checkbox2.classList.remove("selected");
  } else if (event.target.closest(".checkbox-style2")) {
    checkbox2.classList.add("selected");
    checkbox1.classList.remove("selected");
  }
}

// Example table data
const tableData = [
  {
    number: 1,
    status: "รออนุมัติ",
    regNo: "123456",
    name: "สมชาย ใจดี",
    remark: "จดทะเบียนล่าช้า",
    fileLink: "#"
  },
  {
    number: 2,
    status: "อนุมัติ",
    regNo: "789012",
    name: "สมหญิง ใจงาม",
    remark: "ถอนรายวิชา",
    fileLink: "#"
  }
];

// Function to dynamically populate the table
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
    const matchesStudentId = !studentId || row.regNo.includes(studentId);

    return matchesRequestType && matchesStatus && matchesStudentId;
  });

  populateTable(filteredData);
}

// Populate the table on page load
document.addEventListener("DOMContentLoaded", function () {
  populateTable(tableData);

  // Add event listener to the search button
  document.getElementById("search-btn").addEventListener("click", filterTable);
});
