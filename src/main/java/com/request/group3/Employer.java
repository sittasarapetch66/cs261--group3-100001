package com.request.group3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/group3/employee")
public class Employer {

	@Autowired
	private EmployeeRepository caller;
	
	@PostMapping
	public EmployeeTable createUser(@RequestBody EmployeeTable emp) {
		return hiddenEmployeeCred(caller.save(emp));

	}
	
	@GetMapping
	public List<EmployeeTable> getAllUsers(){
		return hiddenListEmployeeCred(caller.findAll());
				
	}
	
	@GetMapping("/nameTH={nameTH}")
	public List<EmployeeTable> getByNameTH(@PathVariable String nameTH){
		return hiddenListEmployeeCred(caller.findByNameTHContaining(nameTH));
				
	}
	
	@GetMapping("/nameEN={nameEN}")
	public List<EmployeeTable> getByNameEN(@PathVariable String nameEN){
		return hiddenListEmployeeCred(caller.findByNameENContaining(nameEN));
	}
	
	@GetMapping("/nameth={nameTH}/faculty={faculty}")
	public List<EmployeeTable> getByNameTHAndFaculty(@PathVariable("nameTH") String nameTH,@PathVariable("faculty") String faculty){
		return hiddenListEmployeeCred(caller.findByNameTHAndFaculty(nameTH, faculty));
	}
	
	@GetMapping("/user={user}/pass={pass}")
	public boolean getCredentialCorrect(@PathVariable("user") String user, @PathVariable("pass") String pass) {
		EmployeeTable em1 = caller.findByUsernameAndPassword(user, pass);
		if (em1 != null) {
			return true;
		}
		
		else return false;
	}
	
	@GetMapping("/deleteid={id}")
	public String toDeleteID(@PathVariable("id") Long id) {
		EmployeeTable et1 = caller.findByID(id);
		
		if (et1 == null)
			return Long.toString(id) + " is not found!";
		
		else {
			caller.delete(et1);
			return Long.toString(id) + " is removed!";
		}
		
	}
	
	public EmployeeTable hiddenEmployeeCred(EmployeeTable em1) {
		em1.hideUserPass();
		return em1;
	}
	
	public List<EmployeeTable> hiddenListEmployeeCred(List<EmployeeTable> em1) {
		
		for (EmployeeTable et1 : em1)
			et1.hideUserPass();
		
		return em1;
	}
	
	/*
	@GetMapping("/nameTH={nameTH}")
	public List<EmployeeTable> getByNameTHAndFaculty(@PathVariable String nameTH){
		return caller.findByNameTHAndFaculty(String nameTH, "none");
	}*/
}