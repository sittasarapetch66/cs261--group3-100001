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
	private Long ID ;
	
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
	
	@Column(name = "Email", nullable = false, unique = true)//username of employee
	private String email;
	
	@Column(name = "DataAux", nullable = false, unique = false)//password of employee
	private String auxData;
	
	//Corperate Information
	
	//deprecated
	@Column(name = "ID of Position", nullable = true) //Position Id of employee
	private Long positionID;
	
	@Column(name = "EmployeeID", nullable = false) //ID type of employee
	private Long employeeType;
	
	//Picture
	@Column(name = "Picture Data", nullable = true, length = 2147483647) //Position Id of employee
	private String pictureData;
	
	//Credentials
	@Column(name = "Username", nullable = false, unique = true)//username of employee
	private String username;
	
	@Column(name = "Password", nullable = false, unique = false)//password of employee
	private String password;
	
	
	
	
	//method to hide username and password
	
	public void hideUserPass() {
		
		username = "HIDDEN";
		password = "HIDDEN";
		
	}
	
	//Loads of Getters and Setters

	public Long getID() {return ID;}

	public void setID(Long iD) {ID = iD;}

	public String getNameTH() {return nameTH;}

	public void setNameTH(String nameTH) {this.nameTH = nameTH;}

	public String getNameEN() {return nameEN;}

	public void setNameEN(String nameEN) {this.nameEN = nameEN;}

	public Long getPhoneNumber() {return phoneNumber;}

	public void setPhoneNumber(Long phoneNumber) {this.phoneNumber = phoneNumber;}

	public String getFaculty() {return faculty;}

	public void setFaculty(String faculty) {this.faculty = faculty;}

	public String getDepartment() {return department;}

	public void setDepartment(String department) {this.department = department;}

	public String getAdress() {return adress;}

	public void setAdress(String adress) {this.adress = adress;}

	public String getEmail() {return email;}

	public void setEmail(String email) {this.email = email;}

	public String getAuxData() {return auxData;}

	public void setAuxData(String auxData) {this.auxData = auxData;}

	public Long getPositionID() {return positionID;}

	public void setPositionID(Long positionID) {this.positionID = positionID;}

	public Long getEmployeeType() {return employeeType;}

	public void setEmployeeType(Long employeeType) {this.employeeType = employeeType;}

	public String getPictureData() {return pictureData;}

	public void setPictureData(String pictureData) {this.pictureData = pictureData;}

	public String getUsername() {return username;}

	public void setUsername(String username) {this.username = username;}

	public String getPassword() {return password;}

	public void setPassword(String password) {this.password = password;}
	
	
	
	
	
}