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
	/*
	public String returnFileData(int file) {
		switch (file) {
		case 1:
			return storefile1;
			
		case 2:
			return storefile2;
			
		case 3:
			return storefile3;
			
		case 4:
			return storefile4;
			
		default:
			return null;
		}
	}
	*/

}
