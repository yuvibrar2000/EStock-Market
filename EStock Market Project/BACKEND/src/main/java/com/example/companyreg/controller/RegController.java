package com.example.companyreg.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.companyreg.entities.Company;
import com.example.companyreg.services.RegServices;
import com.example.companyreg.services.StockServices;
@RestController
@RequestMapping("/company")

public class RegController {
	@Autowired
	private RegServices regService;
	
	@Autowired
	private StockServices stockService;
	
	@PostMapping("/register")
	public Company addCompany(@Valid @RequestBody Company company) {
		return regService.addCompany(company);
	}

	@PostMapping("/addCompanies")
	public List<Company> addAllCompanies(@RequestBody List<Company> companies) {
		return regService.addAllCompanies(companies);
	}

	@GetMapping("/info/{companyCode}")
	public Company getCompanyByCode(@PathVariable String companyCode) {
		return regService.getCompanyByCode(companyCode);
	}

	@GetMapping("/getAll")
	public List<Company> getAllCompanies() {
		return regService.getAllCompanies();
	}

	@DeleteMapping("/deleteCompanyByCode/{companyCode}")
	public void deleteCompanyByCode(@PathVariable String companyCode) {
		regService.deleteCompanyByCode(companyCode);
		stockService.deleteCompanyByCode(companyCode);
		
	}


}
