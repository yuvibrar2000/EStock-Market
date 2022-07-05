package com.example.companyreg.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.companyreg.entities.Stock;
import com.example.companyreg.services.StockServices;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/stock")
public class StockController {
	@Autowired
	private StockServices stockService;
	
	@PostMapping("/add/{companyCode}")
	public Stock addStcok(@Valid @RequestBody Stock stock) {
		return stockService.addStock(stock);
	}
	//Change the method to accommodate start and end date.
	@GetMapping("/get/{companyCode}/{startDate}/{endDate}")
	public List<Stock> getStockByCodeWithStartAndEndDate(@PathVariable String companyCode ,@PathVariable String startDate ,@PathVariable String endDate) {
		return stockService.getStockByCompanyCode(companyCode , startDate, endDate);
	}
	
}
