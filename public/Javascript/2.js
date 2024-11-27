
  
  
  function showMenu(){
  //document.getElementById("menusection").style.width = "30%";
  document.getElementById("menusection").style.display = "block";
  
    variable2 = document.getElementById("overlaysection");
    variable2.style.display = "block";
  
    
  }

  function toggleSomething(mode){
    //menu ด้านขวาอ่ะ
    var1 = document.getElementById("menusection");
    var2 = document.getElementById("overlaysection");
  
    //section
    var10 = document.getElementById("homesection");
    var11 = document.getElementById("mylistsection");
    var12 = document.getElementById("trackhistorysection");
    var13 = document.getElementById("requestformtemplate");
    var14 = document.getElementById("successend");
    var15 = document.getElementById("checkstatus");
    var16 = document.getElementById("loginsection");
    var17 = document.getElementById("ITstaffmenu");
    var18 = document.getElementById("ITsearch");
    var19 = document.getElementById("IToffadd");
    var20 = document.getElementById("payment");
    var21 = document.getElementById("paymenthome");
    var22 = document.getElementById("Acceptformsection");
    var23 = document.getElementById("addall");
    var24 = document.getElementById("ITprof"); 
    var25 = document.getElementById("IThistory"); //หน้า History IT
    var26 = document.getElementById("addall2");
    var27 = document.getElementById("F");
    var28 = document.getElementById("ITprof1");
    var29 = document.getElementById("adddean"); //หน้า Professor IT
  
  
    /*
    1 : show filter and the menu
    2 : hide filter and the menu
  
    10 : show only homesection
    11 : show only mylistsection
    12 : show only trackhistorysection
    13 : show only requestformtemplate
    14 : show only successend
    15 : show only checkstatus
    16 : show only login webpage
  
    */
  
    switch(mode){
      //Menu
    case 1:
      var1.style.display = "block";
      var2.style.display = "block";
  
      break;
    case 2:
      var1.style.display = "none";
      var2.style.display = "none";
  
      break;
    case 3:
      var3.style.display = "block";
      break;
  
      //Toggle แต่ละส่วน
    default:
      if(mode == 10)var10.style.display = "block"; else var10.style.display = "none";
      if(mode == 11)var11.style.display = "block"; else var11.style.display = "none";
      if(mode == 12)var12.style.display = "block"; else var12.style.display = "none";
      if(mode == 13)var13.style.display = "block"; else var13.style.display = "none";
      if(mode == 14)var14.style.display = "block"; else var14.style.display = "none";
      if(mode == 15)var15.style.display = "block"; else var15.style.display = "none";
      if(mode == 16)var16.style.display = "block"; else var16.style.display = "none";
      if(mode == 17)var17.style.display = "block"; else var17.style.display = "none";
      if(mode == 18)var18.style.display = "block"; else var18.style.display = "none";
      if(mode == 19)var19.style.display = "block"; else var19.style.display = "none";
      if(mode == 20)var20.style.display = "block"; else var20.style.display = "none";
      if(mode == 21)var21.style.display = "block"; else var21.style.display = "none";
      if(mode == 22)var22.style.display = "block"; else var22.style.display = "none";
      if(mode == 23)var23.style.display = "block"; else var23.style.display = "none";
      if(mode == 24)var24.style.display = "block"; else var24.style.display = "none";
      if(mode == 25)var25.style.display = "block"; else var25.style.display = "none";
      if(mode == 26)var26.style.display = "block"; else var26.style.display = "none";
      if(mode == 27)var27.style.display = "block"; else var27.style.display = "none";
      if(mode == 28)var28.style.display = "block"; else var28.style.display = "none";
      if(mode == 29)var29.style.display = "block"; else var29.style.display = "none";
     
  
  
      var10 = document.getElementById("homesection");
      var11 = document.getElementById("mylistsection");
      var12 = document.getElementById("trackhistorysection");
      var13 = document.getElementById("requestformtemplate");
      var14 = document.getElementById("successend");
      var15 = document.getElementById("checkstatus");
      var16 = document.getElementById("loginsection");
      var17 = document.getElementById("ITstaffmenu");
      var18 = document.getElementById("ITsearch");
      var19 = document.getElementById("IToffadd");
      var20 = document.getElementById("payment");
      var21 = document.getElementById("paymenthome");
      var22 = document.getElementById("Acceptformselection");
      var23 = document.getElementById("addall");
      var24 = document.getElementById("ITprof");
      var25 = document.getElementById("IThistory");
      var26 = document.getElementById("addall2");
      var27 = document.getElementById("F");
      var28 = document.getElementById("ITprof1");
      var29 = document.getElementById("adddean");
  
  
      var1.style.display = "none";
      var2.style.display = "none";
    
    }
  
    
  
  
  }