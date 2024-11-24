package com.request.group3;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="EmployeeTable")
public class EmployeeTable {

	//Automatic Generate ID
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ;
	
	//Request Data
	
	//Personal Geographic Data
	@Column(name = "FullName TH", nullable = false) //Thai ชื่อจริง
	private String nameTH ;
	
	@Column(name = "FullName EN", nullable = false) //Fisrt Name EN
	private String nameEN ;
	
	@Column(name = "Phone Number", nullable = false)//Phone Number
	private Long phoneNumber ;
	
	@Column(name = "Faculty", nullable = false) //Faculty
	private String faculty ;
	
	@Column(name = "Department", nullable = false) //Department
	private String department ;
	
	@Column(name = "Adress", nullable = false, length = 2147483647) //Adress of the Employee
	private String adress;
	
	//Corperate Information
	
	@Column(name = "ID of Position", nullable = true) //Position Id of employee
	private Long positionID;
	
	@Column(name = "EmployeeID", nullable = false) //ID type of employee
	private Long employeeType;
	
	//Picture
	@Column(name = "Picture Data", nullable = true, length = 2147483647) //Position Id of employee
	private String pictureData;
	
	
}