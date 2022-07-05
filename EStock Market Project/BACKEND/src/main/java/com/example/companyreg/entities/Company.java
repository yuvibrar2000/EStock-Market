package com.example.companyreg.entities;

import org.hibernate.validator.constraints.URL;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;


@Document(collection = "companies")
public class Company {

	@Id
	private String companyCode;

	@NotBlank(message = "This field is mandatory!")
	private String companyName;

	@NotBlank(message = "This field is mandatory!")
	private String companyCEO;

	@Min(value=10 , message = "Company Turnover must be greater than 10Cr." )
	private double companyTurnover;

	@URL(message = "Enter a valid URL.")
	@NotBlank(message = "This field is mandatory!")
	private String companyWebsite;

	@NotBlank(message = "This field is mandatory!")
	private String stockExchange;

	public String getCompanyCode() {
		return companyCode;
	}

	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCompanyCEO() {
		return companyCEO;
	}

	public void setCompanyCEO(String companyCEO) {
		this.companyCEO = companyCEO;
	}

	public double getCompanyTurnover() {
		return companyTurnover;
	}

	public void setCompanyTurnover(double companyTurnover) {
		this.companyTurnover = companyTurnover;
	}

	public String getCompanyWebsite() {
		return companyWebsite;
	}

	public void setCompanyWebsite(String companyWebsite) {
		this.companyWebsite = companyWebsite;
	}

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

}
