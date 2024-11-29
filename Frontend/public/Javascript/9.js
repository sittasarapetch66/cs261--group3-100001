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
  const FileMimeType = {
    'audio/x-m4a': 'm4a',
    'audio/x-mpeg': 'mpega',
    'application/postscript': 'ps',
    'audio/x-aiff': 'aiff',
    'application/x-aim': 'aim',
    'image/x-jg': 'art',
    'video/x-ms-asf': 'asx',
    'audio/basic': 'ulw',
    'video/x-msvideo': 'avi',
    'video/x-rad-screenplay': 'avx',
    'application/x-bcpio': 'bcpio',
    'application/octet-stream': 'exe',
    'image/bmp': 'dib',
    'text/html': 'html',
    'application/x-cdf': 'cdf',
    'application/pkix-cert': 'cer',
    'application/java': 'class',
    'application/x-cpio': 'cpio',
    'application/x-csh': 'csh',
    'text/css': 'css',
    'application/msword': 'doc',
    'application/xml-dtd': 'dtd',
    'video/x-dv': 'dv',
    'application/x-dvi': 'dvi',
    'application/vnd.ms-fontobject': 'eot',
    'text/x-setext': 'etx',
    'image/gif': 'gif',
    'application/x-gtar': 'gtar',
    'application/x-gzip': 'gz',
    'application/x-hdf': 'hdf',
    'application/mac-binhex40': 'hqx',
    'text/x-component': 'htc',
    'image/ief': 'ief',
    'text/vnd.sun.j2me.app-descriptor': 'jad',
    'application/java-archive': 'jar',
    'text/x-java-source': 'java',
    'application/x-java-jnlp-file': 'jnlp',
    'image/jpeg': 'jpg',
    'application/javascript': 'js',
    'text/plain': 'txt',
    'application/json': 'json',
    'audio/midi': 'midi',
    'application/x-latex': 'latex',
    'audio/x-mpegurl': 'm3u',
    'image/x-macpaint': 'pnt',
    'text/troff': 'tr',
    'application/mathml+xml': 'mathml',
    'application/x-mif': 'mif',
    'video/quicktime': 'qt',
    'video/x-sgi-movie': 'movie',
    'audio/mpeg': 'mpa',
    'video/mp4': 'mp4',
    'video/mpeg': 'mpg',
    'video/mpeg2': 'mpv2',
    'application/x-wais-source': 'src',
    'application/x-netcdf': 'nc',
    'application/oda': 'oda',
    'application/vnd.oasis.opendocument.database': 'odb',
    'application/vnd.oasis.opendocument.chart': 'odc',
    'application/vnd.oasis.opendocument.formula': 'odf',
    'application/vnd.oasis.opendocument.graphics': 'odg',
    'application/vnd.oasis.opendocument.image': 'odi',
    'application/vnd.oasis.opendocument.text-master': 'odm',
    'application/vnd.oasis.opendocument.presentation': 'odp',
    'application/vnd.oasis.opendocument.spreadsheet': 'ods',
    'application/vnd.oasis.opendocument.text': 'odt',
    'application/vnd.oasis.opendocument.graphics-template': 'otg',
    'application/vnd.oasis.opendocument.text-web': 'oth',
    'application/vnd.oasis.opendocument.presentation-template': 'otp',
    'application/vnd.oasis.opendocument.spreadsheet-template': 'ots',
    'application/vnd.oasis.opendocument.text-template': 'ott',
    'application/ogg': 'ogx',
    'video/ogg': 'ogv',
    'audio/ogg': 'spx',
    'application/x-font-opentype': 'otf',
    'audio/flac': 'flac',
    'application/annodex': 'anx',
    'audio/annodex': 'axa',
    'video/annodex': 'axv',
    'application/xspf+xml': 'xspf',
    'image/x-portable-bitmap': 'pbm',
    'image/pict': 'pict',
    'application/pdf': 'pdf',
    'image/x-portable-graymap': 'pgm',
    'audio/x-scpls': 'pls',
    'image/png': 'png',
    'image/x-portable-anymap': 'pnm',
    'image/x-portable-pixmap': 'ppm',
    'application/vnd.ms-powerpoint': 'pps',
    'image/vnd.adobe.photoshop': 'psd',
    'image/x-quicktime': 'qtif',
    'image/x-cmu-raster': 'ras',
    'application/rdf+xml': 'rdf',
    'image/x-rgb': 'rgb',
    'application/vnd.rn-realmedia': 'rm',
    'application/rtf': 'rtf',
    'text/richtext': 'rtx',
    'application/font-sfnt': 'sfnt',
    'application/x-sh': 'sh',
    'application/x-shar': 'shar',
    'application/x-stuffit': 'sit',
    'application/x-sv4cpio': 'sv4cpio',
    'application/x-sv4crc': 'sv4crc',
    'image/svg+xml': 'svgz',
    'application/x-shockwave-flash': 'swf',
    'application/x-tar': 'tar',
    'application/x-tcl': 'tcl',
    'application/x-tex': 'tex',
    'application/x-texinfo': 'texinfo',
    'image/tiff': 'tiff',
    'text/tab-separated-values': 'tsv',
    'application/x-font-ttf': 'ttf',
    'application/x-ustar': 'ustar',
    'application/voicexml+xml': 'vxml',
    'image/x-xbitmap': 'xbm',
    'application/xhtml+xml': 'xhtml',
    'application/vnd.ms-excel': 'xls',
    'application/xml': 'xsl',
    'image/x-xpixmap': 'xpm',
    'application/xslt+xml': 'xslt',
    'application/vnd.mozilla.xul+xml': 'xul',
    'image/x-xwindowdump': 'xwd',
    'application/vnd.visio': 'vsd',
    'audio/x-wav': 'wav',
    'image/vnd.wap.wbmp': 'wbmp',
    'text/vnd.wap.wml': 'wml',
    'application/vnd.wap.wmlc': 'wmlc',
    'text/vnd.wap.wmlsc': 'wmls',
    'application/vnd.wap.wmlscriptc': 'wmlscriptc',
    'video/x-ms-wmv': 'wmv',
    'application/font-woff': 'woff',
    'application/font-woff2': 'woff2',
    'model/vrml': 'wrl',
    'application/wspolicy+xml': 'wspolicy',
    'application/x-compress': 'z',
    'application/zip': 'zip'
  };

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
  /*
    function getAPI(){

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "requestStatus": 200,
          "requestType": RTYPE,
          "username": GLOBALJSON.username,
          "datetimeRequest": "Datetime",
          "advisorNameTH": "None",
          "requestData": "test\u0014test\u0014",
          "homeAdress": "None",
          "storefile1": ""
        }),
      };
    
      //fetch data
      fetch("http://petchsko123.trueddns.com:56267/group3/api/group3/request", options)
      .then(response => response.text()) 
      .then((dataStr) => {
          console.log("Load Successful");
      })
      .catch(error => {
          // Handle any errors that occurred during the fetch
          console.error('Cannot send Error : ', error);
         alert("ไม่สามารถส่งได้ โปรดติดต่อผู้ดูแลระบบหรือลองอีกครั้ง");
      });
    
    }*/






  // Function to populate the table dynamically
  function populateTable(data) {
    const tbody = document.getElementById("dynamic-table-body");
    tbody.innerHTML = ""; // Clear existing rows
  
    if (data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9">ไม่พบข้อมูล</td></tr>`;
      return;
  }

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
  
 // Fetch data from the backend API
/*async function fetchData() {
  const url = "http://petchsko123.trueddns.com:56267/group3/api/group3/request";
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      renderTable(data);
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

// Render data in the table
function renderTable(data) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = ""; // Clear table before rendering new data

  if (data.length === 0) {
      const row = document.createElement("tr");
      row.innerHTML = `<td colspan="7">ไม่พบข้อมูล</td>`;
      tableBody.appendChild(row);
      return;
  }

  data.forEach((item) => {
      let requestType0;
      switch (item.requestType) {
          case 0: requestType0 = "ไม่มีคำร้อง"; break;
          case 1: requestType0 = "จดทะเบียนล่าช้า"; break;
          case 2: requestType0 = "ถอนรายวิชา"; break;
          case 3: requestType0 = "จดทะเบียนรายวิชาข้ามหลักสูตร"; break;
          case 4: requestType0 = "ลาออก"; break;
          case 99: requestType0 = "คำร้องอื่น ๆ"; break;
          default: requestType0 = "ไม่มีคำร้องที่กำหนด"; break;
      }

      const row = document.createElement("tr");
      const itemId = item.id;

      row.innerHTML = `
          <td>${itemId}</td>
          <td>${item.requestStatus}</td>
          <td>${requestType0}</td>
          <td>${item.username}</td>
          <td>${item.advisorNameTH}</td>
          <td><button class="cancel-button" id=${item.id} onclick="deleteRequest(${itemId})">X</button></td>
          <td><button class="download" id=${item.id} onclick="fetchDataToDownload(${itemId})">📄</button></td>
      `;
      tableBody.appendChild(row);
  });
}

// Search function for filtering data
function searchData() {
  const requestType = document.getElementById("request-type").value;
  const studentName = document.getElementById("student-name").value.trim();
  const studentId = document.getElementById("student-id").value.trim();

  // Filter data based on search criteria
  const filteredRequests = data.filter((item) => {
      const matchType = requestType === '9999' || item.requestType === parseInt(requestType);
      const matchName = !studentName || item.advisorNameTH.toLowerCase().includes(studentName);
      const matchId = !studentId || item.username.toLowerCase().includes(studentId);

      return matchType && matchName && matchId;
  });

  renderTable(filteredRequests); // Render the filtered data
}

// Delete request
function deleteRequest(id) {
  if (confirm("คุณต้องการลบคำร้องนี้หรือไม่?")) {
      toDeleteData(id); // Send request to delete the data
      alert("คำร้องถูกลบเรียบร้อยแล้ว!");
  }
  fetchData(); // Re-fetch the data and update the table
}

// Fetch data to download as a file
function fetchDataToDownload(id) {
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
  };

  fetch('http://petchsko123.trueddns.com:56267/group3/api/group3/request/id=' + id.toString() + '/file=1', options)
      .then(response => response.text())
      .then((dataStr) => {
          if (dataStr == "NULL" || dataStr == "NULLSTR" || dataStr == "null" || dataStr == null || dataStr == "") {
              alert("ไม่มีไฟล์ให้ดาวน์โหลด เนื่องจากผู้ร้องไม่ได้แนบไฟล์");
          } else {
              convertAndDownloadBase64(dataStr); // Convert Base64 data and trigger download
          }
      })
      .catch(error => {
          console.error('Fetch error:', error);
      });
}

// Convert Base64 string and download the file
function convertAndDownloadBase64(base64Input) {
  if (!base64Input) {
      alert('Please paste a valid Base64 string.');
      return;
  }

  try {
      const matches = base64Input.match(/^data:(.*?);base64,(.*)$/);
      if (!matches) {
          alert('Invalid Base64 format. It should include the prefix data:[type]/[subtype];base64,.');
          return;
      }

      const mimeType = matches[1];
      const base64Data = matches[2];
      const binaryData = atob(base64Data);
      const arrayBuffer = new Uint8Array(binaryData.length);
      for (let i = 0; i < binaryData.length; i++) {
          arrayBuffer[i] = binaryData.charCodeAt(i);
      }

      const blob = new Blob([arrayBuffer], { type: mimeType });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `download.${mimeType.split('/')[1]}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert("ดาวน์โหลดไฟล์สำเร็จ !");
  } catch (error) {
      console.error('Error converting Base64:', error);
      alert('An error occurred while converting the Base64 string. Please ensure it is valid.');
  }
}

// Call the function to fetch data when the page loads
fetchData();*/

  




















  function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
    menu(27)
    }
    function menu(mode){
      parent.postMessage(mode, "*");
  }

    function exit(typeinput){
  
      if (confirm("การบันทึกที่ไม่ได้บันทึกจะหายหากคุณออกจากระบบ คุณต้องการที่จะออกจากระบบหรือไม่?") == true){
          parent.postMessage(typeinput, "*");
      }
  }