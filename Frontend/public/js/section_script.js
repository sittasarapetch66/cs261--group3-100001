// Section Script (JS) for group
// Date Created : 11/10/67

function showSection(sectionID){
  let isMode = new Array(20).fill(null);

  /*
  Info about sectionID (int)
    1 -> Show Menu and Activate filter1
    2 -> Hide Menu and Hide filter1

    10 -> Show homesection only
    11 -> Show mylistsection only
    12 : show only trackhistorysection
    13 : show only requestformtemplate
    14 : show only successend
    15 : show only checkstatus
    16 : show only login webpage

  
  */

  //set variable to each id

  for(i=0; isMode.length; i++)
    isMode[i] = (sectionID == i);

  if (isMode[1]){
    GlobalVar[1][0].style.display = GlobalSet[21];
  }

  if (isMode[2]){
    GlobalVar[1][0].style.display = GlobalSet[20];
  }



}