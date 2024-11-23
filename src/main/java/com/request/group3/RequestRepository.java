package com.request.group3;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestRepository extends JpaRepository<RequestTable, Long>{

	//Query to find all match requestStatus
	List<RequestTable> findByRequestStatus(Long requestStatus);
	
	//Query to find all match requestType Code
	List<RequestTable> findByRequestType(Long requestType);
	
	//Return Repository for only that ID
	RequestTable findByID(Long ID);


	
	//Query to find...
	
}
