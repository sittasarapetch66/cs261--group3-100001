package com.request.group3;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="Person")
public class Person {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ; 
	
	@Column(name = "Date & Time", nullable = false)
	private String datetimeRequest ; 
	
	@Column(name = "Advisor Name", nullable = false)
	private String advisorNameTH ; 
	
	@Column(name = "Request Type", nullable = false)
	private String requestType ;
	
	@Column(name = "Additional Request Data", nullable = false)
	private String requestData ;
	
	@Column(name = "Adress", nullable = false)
	private String homeAdress;
	
	@Column(name = "Status", nullable = false)
	private String requestStatus;
	
	//File Columns
	@Column(name = "Base64_File1", nullable = true)
	private String storefile1 ;
	
	@Column(name = "Base64_File2", nullable = true)
	private String storefile2 ;
	
	@Column(name = "Base64_File3", nullable = true)
	private String storefile3 ;
	
	@Column(name = "Base64_File4", nullable = true)
	private String storefile4 ;

}
