import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Company, Stock, StockDetail, StockResDetail } from '../model/model.component';
import { CompanyService, StockService } from '../service/service.component'

@Component({
  selector: 'app-view-stock',
  templateUrl: './view-stock.component.html',
  styleUrls: ['./view-stock.component.css']
})
export class ViewStockComponent implements OnInit {

  cmpCode !: FormGroup;
  stockObj: Stock = new Stock();
  cmpObj: Company = new Company();
  stkDetail !: FormGroup;
  stkObj: StockDetail = new StockDetail();
  stkResObj: StockResDetail[] = [];
  stkPriceArr: Array<number> = [];

  constructor(private formBuilder: FormBuilder, private cmpService: CompanyService, private stkService: StockService) { }

  ngOnInit(): void {
    this.getCompanyByCode();

    this.cmpCode = this.formBuilder.group({
      code: [''],
    });

    this.stkDetail = this.formBuilder.group({
      code: this.cmpCode?.value.code,
      from: [''],
      to: ['']
    });
  }

  getCompanyByCode() {
    console.log(this.cmpCode);
    console.log(this.stockObj);
    this.stockObj.code = this.cmpCode?.value.code;

    this.cmpService.getCompanyByCode(this.stockObj.code).subscribe(res => {
      this.cmpObj = res;
    }, err => {
      console.log("error while fetching data.")
    });
  }
  getStockByFromAndTo() {
    this.stkObj.code = this.stkDetail?.value.code;
    this.stkObj.from = this.stkDetail?.value.from;
    this.stkObj.to = this.stkDetail?.value.to;
    console.log(this.stkObj);
    this.stkService.getStockByFromAndTo(this.stkObj).subscribe(res => {
      this.stkResObj = res;
      for (let stock of this.stkResObj) {
        this.stkPriceArr.push(stock.stockPrice);
      }
    }, err => {
      console.log("error while fetching data.")
    });
  }
  getMax() {
    return Math.max(...this.stkPriceArr);
  }
  getMin() {
    return Math.min(...this.stkPriceArr);
  }
  getAverage() {
    var sum = 0;
    for (var i = 0; i < this.stkPriceArr.length; i++) {
      sum += this.stkPriceArr[i];
    }

    var avg = sum / this.stkPriceArr.length;
    return avg;
  }

}
