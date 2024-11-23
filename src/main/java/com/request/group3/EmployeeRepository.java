package com.request.group3;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeTable, Long> {

	//find by name containing some part of word in TH
	List<EmployeeTable> findByNameTHContaining(String nameTH);
	
	//find by name containing some part of word in EN
	List<EmployeeTable> findByNameENContaining(String nameEN);
	
	List<EmployeeTable> findByNameTHAndFaculty(String nameTH, String faculty);
	
	//find by matching name and matching faculty name
	//List<EmployeeTable> findByNameTHAndFaculty(String nameTH, String faculty);
	
	//List<EmployeeTable> findByAdvisorName(String nameTH);
	
}
