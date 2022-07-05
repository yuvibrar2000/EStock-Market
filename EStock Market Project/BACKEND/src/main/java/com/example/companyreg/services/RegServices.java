package com.example.companyreg.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.companyreg.entities.Company;
import com.example.companyreg.repository.CompanyRepository;

@Service
public class RegServices {

	@Autowired
	private CompanyRepository companyRepository;

	public Company addCompany(Company company) {
		return companyRepository.save(company);
	}

	public List<Company> addAllCompanies(List<Company> companies) {
		return companyRepository.saveAll(companies);
	}

	public Company getCompanyByCode(String companyCode) {
		return companyRepository.findById(companyCode).orElse(null);
	}

	public List<Company> getAllCompanies() {
		return companyRepository.findAll();
	}

	public void deleteCompanyByCode(String companyCode) {
		companyRepository.deleteById(companyCode);
	}

}
