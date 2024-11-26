// ตัวอย่างข้อมูลในระบบ
// เป็นแค่ตัวย่างเด้อ เราดึงข้อมูลจาก Backend
const requests = [
    { id: 1, status: "รออนุมัติ", type: "ลาออก", studentId: "123456", name: "โกนับ ถวาสาร", file: "ไฟล์แนบ" },
    { id: 2, status: "อนุมัติแล้ว", type: "ถอนรายวิชา", studentId: "654321", name: "สมหญิง ใจดี", file: "ไฟล์แนบ" },
    { id: 3, status: "รออนุมัติ", type: "จดทะเบียนล่าช้า", studentId: "789012", name: "สมชาย รักดี", file: "ไฟล์แนบ" }
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



function LoadFunction(){

    fetchData()
}

async function fetchData() {
    const url = "http://petchsko123.trueddns.com:56267/group3/api/group3/request";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        data = await response.json();
        renderTable(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// ฟังก์ชันสำหรับแสดงข้อมูลในตาราง
function renderTable(data) {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; // ล้างข้อมูลในตารางก่อน

    if (data.length === 0) {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="7">ไม่พบข้อมูล</td>`;
        tableBody.appendChild(row);
        return;
    }
    
    data.forEach((item, index) => {

        switch (item.requestType){
            case 0:
                requestType0 = "ไม่มีคำร้อง"; break;
            case 1:
                requestType0 = "จดทะเบียนล่าช้า"; break;
            case 2:
                requestType0 = "ถอนรายวิชา"; break;
            case 3:
                requestType0 = "จดทะเบียนรายวิชาข้ามหลักสูตร"; break;
            case 4:
                requestType0 = "ลาออก"; break;
            case 99:
                requestType0 = "คำร้องอื่น ๆ"; break;
            default:
                requestType0 = "ไม่มีคำร้องที่กำหนด"; break;

        }
        const row = document.createElement("tr");
        
        var itemid = item.id;
        console.log("ID rows is ",itemid)

        row.innerHTML = `
            <td>${itemid}</td>
            <td>${item.requestStatus}</td>
            <td>${requestType0}</td>
            <td>${item.username}</td>
            <td>${item.advisorNameTH}</td>
            <td><button class="cancel-button" id=${item.id} onclick="deleteRequest(${itemid})">X</button></td>
            <td><button class="download" id=${item.id} onclick="fetchDataToDownload(${itemid})">📄</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// ฟังก์ชันสำหรับค้นหาข้อมูล
function searchData() {
    const requestType = document.getElementById("request-type").value;
    const studentName = document.getElementById("student-name").value.trim();
    const studentId = document.getElementById("student-id").value.trim();

    // กรองข้อมูลตามเงื่อนไข
    const filteredRequests = data.filter((item) => {
        const matchType = requestType === '9999' || item.requestType === parseInt(requestType);
        const matchName = !studentName || item.advisorNameTH.includes(studentName);
        const matchId = !studentId || item.username.includes(studentId);

        console.log(item.requestType, requestType);
        return matchType && matchName && matchId;
    });

    // แสดงข้อมูลที่กรอง
    renderTable(filteredRequests);
}

// ฟังก์ชันสำหรับลบคำร้อง
function deleteRequest(id) {
    console.log("Id is ", id);
    if (confirm("คุณต้องการลบคำร้องนี้หรือไม่?")) {
        // ลบข้อมูลออกจาก Array
            toDeleteData(id);
            alert("คำร้องถูกลบเรียบร้อยแล้ว!");
        }

        // อัปเดตตารางใหม่
        fetchData();
}

// Download File
function downloadFile(id) {
    alert(`Downloading file for request ID ${id}`);
}

// เรียกฟังก์ชันแสดงข้อมูลเริ่มต้น
//renderTable(requests);

//ส่ง Request ไปลบข้อมูล
function toDeleteData(id){

    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      };
    
      //fetch data
    fetch('http://petchsko123.trueddns.com:56267/group3/api/group3/request/deleteid=' + id.toString(), options)
    .then(response => response.text()) 
    .then((dataStr) => {
        console.log(dataStr);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    });

}

//ส่ง Request ไปดึงข้อมูล
function downloadFile(id){
    const base64Input =id.trim();
    if (!base64Input) {
        alert('Please paste a valid Base64 string.');
        return;
    }

    try {
        // Check if the Base64 string contains the prefix
        const matches = base64Input.match(/^data:(.*?);base64,(.*)$/);
        if (!matches) {
            alert('Invalid Base64 format. It should include the prefix data:[type]/[subtype];base64,.');
            return;
        }

        const mimeType = matches[1];
        const base64Data = matches[2];

        // Decode Base64 to binary
        const binaryData = atob(base64Data);
        const arrayBuffer = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
            arrayBuffer[i] = binaryData.charCodeAt(i);
        }

        // Create a Blob from the ArrayBuffer
        const blob = new Blob([arrayBuffer], { type: mimeType });

        // Create a download link
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `download.${mimeType.split('/')[1]}`; // Use file extension from MIME type
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    } catch (error) {
        console.error('Error converting Base64:', error);
        alert('An error occurred while converting the Base64 string. Please ensure it is valid.');
    }

}

//ดึงข้อมูลจาก Backend มาเป็นไฟล์
function fetchDataToDownload(id) {
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      };
    
      //fetch data
    fetch('http://petchsko123.trueddns.com:56267/group3/api/group3/request/id=' + id.toString() + '/file=1' , options)
    .then(response => response.text()) 
    .then((dataStr) => {
        //console.log(dataStr);
        if (dataStr == "NULL" || dataStr == "NULLSTR" ||dataStr == "null" || dataStr == null || dataStr == ""){
            console.log("No string!");
            alert("ไม่มีไฟล์ให้ดาวน์โหลด เนื่องจากผู้ร้องไม่ได้แนบไฟล์")
        }

        else{
            convertAndDownloadBase64(dataStr);
        }
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    });
}

//เอาข้อมูล Base64 แปลงเป็นไฟล์
function convertAndDownloadBase64(base64Input) {
    //const base64Input = document.getElementById('base64Input').value.trim();

    if (!base64Input) {
        alert('Please paste a valid Base64 string.');
        return;
    }

    try {
        // Check if the Base64 string contains the prefix
        const matches = base64Input.match(/^data:(.*?);base64,(.*)$/);
        if (!matches) {
            alert('Invalid Base64 format. It should include the prefix data:[type]/[subtype];base64,.');
            return;
        }

        const mimeType = matches[1];
        const base64Data = matches[2];

        // Decode Base64 to binary
        const binaryData = atob(base64Data);
        const arrayBuffer = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
            arrayBuffer[i] = binaryData.charCodeAt(i);
        }

        // Create a Blob from the ArrayBuffer
        const blob = new Blob([arrayBuffer], { type: mimeType });

        // Create a download link
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);

        console.log("File Extension : ",FileMimeType[mimeType],mimeType);
        link.download = `download.${FileMimeType[mimeType]}`; // Use file extension from MIME type
        //link.download = `download.${mimeType.split('/')[1]}`; // Use file extension from MIME type


        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        alert("ดาวน์โหลดไฟล์สำเร็จ !");

        
        

    } catch (error) {
        console.error('Error converting Base64:', error);
        alert('An error occurred while converting the Base64 string. Please ensure it is valid.');
    }
}