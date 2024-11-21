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
	@Column(name = "Name_th", nullable = false) //Thai ชื่อจริง
	private String nameTH ;
	
	@Column(name = "First Name", nullable = false) //Fisrt Name EN
	private String firstName ;
	
	@Column(name = "Last Name", nullable = false) //last Name EN
	private String lastName ;
	
	@Column(name = "Phone Number", nullable = false)//Phone Number
	private Long phoneNumber ;
	
	@Column(name = "Faculty", nullable = false) //Faculty
	private String faculty ;
	
	@Column(name = "Adress", nullable = false) //Adress of the Employee
	private String adress;
	
	//Corperate Information
	
	@Column(name = "ID of Position", nullable = false) //Position Id of employee
	private int positionID;
	
	@Column(name = "EmployeeID", nullable = false) //ID type of employee
	private int employeeType;
	
	
}