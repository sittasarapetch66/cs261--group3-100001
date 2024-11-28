function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
    }
myRequestStatus(1)

var myjson;


function myRequestStatus(username){

    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      };
    
    //fetch data
    fetch('http://petchsko123.trueddns.com:56267/group3/api/group3/request', options)
    .then(response => response.json()) 
    .then((json) => {
        //console.log(json);

        for(let i=0; i< json.length; i++){
            let obj = json[i];

            console.log(obj);
            populateItems("content", obj);
        }
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    });
}




    // Function to populate the divs

    // Option to fetch data


function populateItems(containerId, item) {

        let requestname;
        let lastupdate ;
        datetime = [0,0,0,0,0];

        const count = item.datetimeRequest.split("\u0014").length - 1
        console.log("this");
        
        if (count == 5){
            datetime = item.datetimeRequest.split("\u0014");
            console.log(datetime);
            

        }

        lastupdate = `แก้ไขล่าสุดวันที่ ${datetime[0]} เดือน ${datetime[1]} ปี ${datetime[2]} เวลา ${datetime[3]}:${datetime[4]}`

        switch(item.requestType){
            case 0: requestname = "ไม่มีคำร้อง"; break;
            case 1: requestname = "จดทะเบียนรายวิชาล่าช้า"; break;
            case 2: requestname = "ลาออก"; break;
            case 3: requestname = "ลาออก"; break;
            //case : requestname = "จดทะเบียนรายวิชาล่าช้า"; break;
            case 99: requestname = "ไม่มีคำร้อง"; break;
            default: requestname = "คำร้องที่ไม่ระบุ"
        }

            const container = document.getElementById(containerId);

            const itemCard = document.createElement("div");
            itemCard.className = "item-card";

            const title = document.createElement("h2");
            title.textContent = requestname;

            const lastUpdated = document.createElement("p");
            lastUpdated.textContent = lastupdate;

            const buttonDiv = document.createElement("div");
            buttonDiv.className = "buttons";

            const button = document.createElement("button");
            //button.className = item.button.class;
            //button.textContent = item.button.text;

            buttonDiv.appendChild(button);
            itemCard.appendChild(title);
            itemCard.appendChild(lastUpdated);
            itemCard.appendChild(buttonDiv);

            container.appendChild(itemCard);
    }