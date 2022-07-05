import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Company } from '../model/model.component';
import { CompanyService } from '../service/service.component'

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  cmpDetail !: FormGroup;
  cmpObj: Company = new Company();
  cmpList: Company[] = [];

  constructor(private formBuilder: FormBuilder, private cmpService: CompanyService) { }

  ngOnInit(): void {
    this.getAllCompany();

    this.cmpDetail = this.formBuilder.group({
      code: [''],
      name: [''],
      ceo: [''],
      turnover: [''],
      website: [''],
      exchange: ['']
    });
  }

  addCompany() {
    console.log(this.cmpDetail);
    this.cmpObj.code = this.cmpDetail.value.code;
    this.cmpObj.name = this.cmpDetail.value.name;
    this.cmpObj.ceo = this.cmpDetail.value.ceo;
    this.cmpObj.turnover = this.cmpDetail.value.turnover;
    this.cmpObj.website = this.cmpDetail.value.website;
    this.cmpObj.exchange = this.cmpDetail.value.exchange;

    this.cmpService.addCompany(this.cmpObj).subscribe(res => {
      console.log(res);
      this.getAllCompany();
    }, err => {
      console.log(err);
    });

  }

  getAllCompany() {
    this.cmpService.getAllCompany().subscribe(res => {
      this.cmpList = res;
    }, err => {
      console.log("error while fetching data.")
    });
  }


}
