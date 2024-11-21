package com.request.group3;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeTable, Long> {

	
	//List<EmployeeTable> findByAdvisorName(String nameTH);
	
}
