package com.request.group3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/group3/request")
public class Requester{

	//Caller Interface
	@Autowired
	private RequestRepository caller;
	
	//GetMapping to Request All Data
	@GetMapping
	public List<RequestTable> getAllUsers(){
		return caller.findAll();
	}
	
	//GetMapping to Request data that match input status
	@GetMapping("/status={status}")
	public List<RequestTable> getByStatus(@PathVariable Long status){
		return caller.findByRequestStatus(status);
	}
	
	//GetMapping to Request data that match input type
	@GetMapping("/type={type}")
	public List<RequestTable> getByType(@PathVariable Long type){
		return caller.findByRequestType(type);
	}
	
	
	//PostMapping to Insert Data to Database
	@PostMapping
	public RequestTable createUser(@RequestBody RequestTable person) {
		return caller.save(person);

	}
	
}


