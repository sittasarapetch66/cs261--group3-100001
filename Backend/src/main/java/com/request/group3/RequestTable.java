package com.request.group3;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="RequestTable")
public class RequestTable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long ID ;
	
	//Request Data
	
	@Column(name = "Status", nullable = false) //Status of the request
	private Long requestStatus ;
	
	@Column(name = "Request Type", nullable = false) //Request type code
	private Long requestType ;
	
	@Column(name = "Student Username", nullable = false) //Username of Requester
	private String username ;
	
	@Column(name = "Date & Time", nullable = false) //Date Time of the request
	private String datetimeRequest ;
	
	@Column(name = "Advisor Name", nullable = false) //Name of the Advisor
	private String advisorNameTH ;
	
	
	
	//Request Data2
	
	@Column(name = "Request Data Chunk", nullable = false, length = 2147483647) //Data Chunk Seperate by ¶
	private String requestData ;
	
	@Column(name = "Requester Adress", nullable = false, length = 2147483647) //Requester Adress Seperate by ¶
	private String homeAdress ;
	
	
	
	//File Base64 Dataset
	
	@Column(name = "Base64_File1", nullable = true, length = 2147483647)
	private String storefile1 ;
	
	@Column(name = "Base64_File2", nullable = true, length = 2147483647)
	private String storefile2 ;
	
	@Column(name = "Base64_File3", nullable = true, length = 2147483647)
	private String storefile3 ;
	
	@Column(name = "Base64_File4", nullable = true, length = 2147483647)
	private String storefile4 ;
	
	//Method to return file data
	public String returnFileData(Long file) {
		
		int cond = file.intValue();		
		
		switch (cond) {
		case 1:

			return storefile1;
			
		case 2:
			return storefile2;
			
		case 3:
			return storefile3;
			
		case 4:
			return storefile4;
			
		default:
			return "NULL";
		}
	}
	
	//Method to set file data
	public void setFileData(String word, Long file) {
		
		int cond = file.intValue();		
		
		switch (cond) {
		case 1:
			storefile1 = word;
			break;
			
		case 2:
			storefile2 = word;
			break;
			
		case 3:
			storefile3 = word;
			break;
			
		case 4:
			storefile4 = word;
			break;
			
		default:
			break;
		}
		
	}

	
	
	/*
	//Method to set Status
	public void setStatus(Long status) {
		requestStatus = status;
	}
	
	//Method to getID
	public Long getID() {
		return ID;
	}
	*/
	
	//Loads of Getter and Setter
	
	public Long getID() {return ID;}

	public void setID(Long iD) {ID = iD;}

	public Long getRequestStatus() {return requestStatus;}

	public void setRequestStatus(Long requestStatus) {this.requestStatus = requestStatus;}

	public Long getRequestType() {return requestType;}

	public void setRequestType(Long requestType) {this.requestType = requestType;}

	public String getUsername() {return username;}

	public void setUsername(String username) {this.username = username;}

	public String getDatetimeRequest() {return datetimeRequest;}

	public void setDatetimeRequest(String datetimeRequest) {this.datetimeRequest = datetimeRequest;}

	public String getAdvisorNameTH() {return advisorNameTH;}

	public void setAdvisorNameTH(String advisorNameTH) {this.advisorNameTH = advisorNameTH;}

	public String getRequestData() {return requestData;}

	public void setRequestData(String requestData) {this.requestData = requestData;}

	public String getHomeAdress() {return homeAdress;}

	public void setHomeAdress(String homeAdress) {this.homeAdress = homeAdress;}

	public String getStorefile1() {return storefile1;}

	public void setStorefile1(String storefile1) {this.storefile1 = storefile1;}

	public String getStorefile2() {return storefile2;}

	public void setStorefile2(String storefile2) {this.storefile2 = storefile2;}

	public String getStorefile3() {return storefile3;}

	public void setStorefile3(String storefile3) {this.storefile3 = storefile3;}

	public String getStorefile4() {return storefile4;}

	public void setStorefile4(String storefile4) {this.storefile4 = storefile4;}
	
	
	

}
