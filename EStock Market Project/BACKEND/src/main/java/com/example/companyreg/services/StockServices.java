package com.example.companyreg.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import java.util.*;
import com.example.companyreg.entities.Stock;
import com.example.companyreg.repository.StockRepository;

@Service
public class StockServices {
	@Autowired
	private StockRepository stockRepository;
	@Autowired
	private MongoTemplate mongoTemplate;
	
	public Stock addStock(Stock stock) {
		return stockRepository.save(stock);
	}
	
	//This method needs to be changed
	public List<Stock> getStockByCompanyCode(String companyCode , String startDate , String endDate) {
		Query query = new Query();
		query.addCriteria(Criteria.where("dateAdded").lt(endDate).gt(startDate).and("companyCode").is(companyCode) );
		List<Stock> stocks = mongoTemplate.find(query,Stock.class);
		return stocks;
		
		
		
	}
	public void deleteCompanyByCode(String companyCode) {
		stockRepository.deleteById(companyCode);
	}
	
}


