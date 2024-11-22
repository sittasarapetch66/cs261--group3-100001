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
		return caller.save(emp);

	}
	
	@GetMapping
	public List<EmployeeTable> getAllUsers(){
		return caller.findAll();
	}
	
	@GetMapping("/nameTH={nameTH}")
	public List<EmployeeTable> getByNameTH(@PathVariable String nameTH){
		return caller.findByNameTHContaining(nameTH);
	}
	
	@GetMapping("/nameEN={nameEN}")
	public List<EmployeeTable> getByNameEN(@PathVariable String nameEN){
		return caller.findByNameENContaining(nameEN);
	}
	
	@GetMapping("/nameTH={nameTH}/faculty={faculty}")
	public List<EmployeeTable> getByNameTHAndFaculty(@PathVariable String nameTH, String faculty){
		return caller.findByNameTHAndFaculty(String nameTH, String faculty);
	}
}