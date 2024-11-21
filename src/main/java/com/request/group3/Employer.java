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
	
}