// Function to populate the table dynamically with API data
async function fetchAndPopulateTable() {
  try {
    const response = await fetch("Domain Name/api/group3/request", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    // Transform data into the expected format
    const formattedData = data.map((item, index) => ({
      number: index + 1,
      status: item.requestStatus === 1 ? "รอการอนุมัติ" : item.requestStatus === 2 ? "อนุมัติ" : "ไม่อนุมัติ",
      type: item.requestType, // Assuming requestType is descriptive in the response
      regNo: item.username, // Assuming username represents Student ID
      name: item.advisorNameTH,
      remark: item.requestData || "",
      fileLink: `Domain Name/api/group3/request/id=${item.id}/file=1` // Example file link
    }));

    populateTable(formattedData);
  } catch (error) {
    console.error("Failed to fetch table data:", error);
    alert("Error fetching data. Please try again later.");
  }
}

// Function to update request status via API
async function updateRequestStatus(rowNumber, status) {
  try {
    const tableRows = document.querySelectorAll("#dynamic-table-body tr");
    const row = Array.from(tableRows).find(
      (tr) => tr.querySelector("label")?.innerText == rowNumber
    );

    if (!row) return;

    const id = row.querySelector("td:nth-child(4) label")?.innerText; // Assuming regNo is in 4th column

    // Determine the new status ID based on the selected status
    const newStatusId = status === "Approved" ? 2 : 3;

    const response = await fetch(`Domain Name/api/group3/request/id=${id}/status=${newStatusId}`, {
      method: "GET", // Change method as needed (e.g., POST or PATCH if supported by your API)
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    // Update the status in the table UI
    updateStatusColumn(rowNumber, status === "Approved" ? "อนุมัติ" : "ไม่อนุมัติ");
  } catch (error) {
    console.error("Failed to update request status:", error);
    alert("Error updating status. Please try again later.");
  }
}

// Update handleButtonClick to call the API
function handleButtonClick(event, status, rowNumber) {
  const confirmation = confirm(`Are you sure you want to mark this as "${status}"?`);
  if (!confirmation) return;

  updateRequestStatus(rowNumber, status);

  const button = event.currentTarget;
  const rowButtons = document.querySelectorAll(`[onclick*="${rowNumber}"]`);
  rowButtons.forEach((btn) => {
    btn.disabled = true;
    btn.style.cursor = "not-allowed";
  });

  if (status === "Approved") {
    button.classList.add("approved");
  } else if (status === "Not Approved") {
    button.classList.add("not-approved");
  }

  console.log(`Row ${rowNumber}: ${status}`);
}

// Filter the table and fetch filtered data
async function filterTable() {
  const requestType = document.getElementById("request-type").value;
  const status = document.getElementById("status").value;
  const studentId = document.getElementById("student-id").value.trim();

  const queryParams = [];
  if (requestType !== "ทั้งหมด") queryParams.push(`type=${encodeURIComponent(requestType)}`);
  if (status !== "ทั้งหมด") queryParams.push(`status=${encodeURIComponent(status)}`);
  if (studentId) queryParams.push(`studentId=${encodeURIComponent(studentId)}`);

  const queryString = queryParams.length ? `?${queryParams.join("&")}` : "";

  try {
    const response = await fetch(`Domain Name/api/group3/request${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const filteredData = await response.json();
    populateTable(filteredData.map((item, index) => ({
      number: index + 1,
      status: item.requestStatus === 1 ? "รอการอนุมัติ" : item.requestStatus === 2 ? "อนุมัติ" : "ไม่อนุมัติ",
      type: item.requestType,
      regNo: item.username,
      name: item.advisorNameTH,
      remark: item.requestData || "",
      fileLink: `Domain Name/api/group3/request/id=${item.id}/file=1`
    })));
  } catch (error) {
    console.error("Failed to fetch filtered data:", error);
    alert("Error fetching filtered data. Please try again later.");
  }
}

// Initialize the table on load
document.addEventListener("DOMContentLoaded", function () {
  fetchAndPopulateTable();

  document.getElementById("request-type").addEventListener("change", filterTable);
  document.getElementById("status").addEventListener("change", filterTable);
  document.getElementById("student-id").addEventListener("input", filterTable);
});
