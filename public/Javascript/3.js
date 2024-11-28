var GLOBALJSON;

//send to parent
function requestTemplate(typeinput){
    parent.postMessage(typeinput, "*");
    }

    window.addEventListener("message", setValueOnListener);
    
function setValueOnListener(event){
    //use even.data to extract data
    var recv = event.data;
    console.log(recv, typeof recv);

    //check id in range
    if(typeof recv == "number"){
        
    }

    if(typeof recv == "object"){
        GLOBALJSON = recv;
        myRequestStatus(GLOBALJSON.username);
    }
}

myRequestStatus(6609681231);


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
            if (obj.username == username){
                populateItems("content", obj);
                //console.log(obj.username);
            }
               
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
            case 2: requestname = "ถอนรายวิชาล่าช้า"; break;
            case 3: requestname = "จดทะเบียนรายวิชานอกหลักสูตร"; break;
            case 4: requestname = "ลาออก"; break;
            case 99: requestname = "ไม่มีคำร้อง"; break;
            default: requestname = "คำร้องอื่น ๆ"
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