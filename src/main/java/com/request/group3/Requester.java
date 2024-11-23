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
	private RequestRepository caller2;
	
	//GetMapping to Request All Data
	@GetMapping
	public List<RequestTable> getAllUsers(){
		return caller.findAll();
	}
	
	//GetMapping to Request data that match the selected ID
	@GetMapping("/id={id}")
	public RequestTable getByID(@PathVariable Long id){
		return caller.findByID(id);
	}
	
	
	@GetMapping("/count")
	public Long countAll() {
		return caller.count();
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
	
	/*
	//GetMapping of Return Data based on ID
	@GetMapping("/type={type}/fileid={base64}")
	public String getByType(@PathVariable Long type, Long fileid){
		return caller.;
	}
	*/
	
	
	//PostMapping to Insert Data to Database
	@PostMapping
	public RequestTable createUser(@RequestBody RequestTable person) {
		return caller.save(person);

	}
	
	//Just testing get mapping
	@GetMapping("/test/id={id}")
	public RequestTable testReturnValue(@PathVariable Long id){
		
		//RequestTable rt2 = new RequestTable();
		RequestTable rt2 = caller.findByID(id);
		System.out.printf("Id Value is : %d", id);
		System.out.printf("RT2 Value is : %s", rt2.returnFileData((long) 1));


		for (Long i=(long) 1; i<=4; i++) {
			if (rt2.returnFileData(i) != "NULL") {
				rt2.setFileData("TRUE", i);
			}
			else {
				rt2.setFileData("FALSE", i);
			}
		}
		
		System.out.printf("RT2 Value is : %s", rt2.returnFileData((long) 3));
		
		return rt2;
		
		
		
		
	}
	
}




