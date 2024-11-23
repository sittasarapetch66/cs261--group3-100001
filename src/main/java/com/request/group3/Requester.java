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
	//private RequestRepository caller2;
	
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
	
	//GetMapping to Set Status
	@GetMapping("/id={id}/setstatus={status}")
	public RequestTable setStatus(@PathVariable("id") Long id, @PathVariable("status") Long status) {
		RequestTable rt1 = caller.findByID(id);
		rt1.setStatus(status);
		caller.save(rt1);
		System.out.printf("Id is %d, Status is %d \n",id, status);
		return returnDataPresent(rt1);
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
	
	//return JSON File if requested
	@GetMapping("/id={id}/file={file}")
	public String returnFileInfo(@PathVariable("id") Long id,@PathVariable("file") Long file) {
		
		//RequestTable Object
		RequestTable rt1 = caller.findByID(id);
		
		//if data is null return NULL
		if (rt1.returnFileData(file) == null)
			return "NULL";
		
		else if (rt1.returnFileData(file) == "null")
			return "NULL";
		
		//else return data
		return rt1.returnFileData(file);
	}
	
	//Just testing get mapping
	@GetMapping("/test/id={id}")
	public RequestTable testReturnValue(@PathVariable Long id){
		
		//RequestTable rt2 = new RequestTable();
		RequestTable rt2 = caller.findByID(id);
		//System.out.printf("Id Value is : %d", id);
		//System.out.printf("RT2 Value is : %s", rt2.returnFileData((long) 1));

		//System.out.printf("RT2 Value is : %s", rt2.returnFileData((long) 3));
		
		return returnDataPresent(rt2);
		
	}
	
	//method to return if data is present
	public RequestTable returnDataPresent(RequestTable RT) {
		
		for(Long i = (long) 1; i<= 4; i++) {
			String comp = RT.returnFileData(i);
			System.out.printf("Value %d is %s \n", i, comp);
			if (comp == null || comp == "null" || comp == "NULL")
				RT.setFileData("FALSE", i);
			
			else
				RT.setFileData("TRUE", i);
		}
		
		return RT;
	}
	
}




