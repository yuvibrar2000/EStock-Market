export class Company {
  code: string = '';
  name: string = '';
  ceo: string = '';
  turnover: number = 0;
  website: string = '';
  exchange:string = ''
}

export class Stock{
  code:string=''
}

export class StockDetail{
  code:string='';
  from:string='';
  to:string=''
}
export class StockResDetail{
  stockPrice:number = 0;
  dateAdded:string='';
  timeAdded:string=''
}