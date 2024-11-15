package com.request.group3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/request/group3")
public class Caller {

	@Autowired
	private CallerRepository caller;
	
	@GetMapping
	public List<Person> getAllUsers(){
		return caller.findAll();
	}
	
	@PostMapping
	public Person createUser(@RequestBody Person person) {
		return caller.save(person);

	}
	
}
