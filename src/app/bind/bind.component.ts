import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  searchInput:FormControl = new FormControl();

  constructor() { 
    Observable.from([1,2,3,4])
      .filter( e => e%2 == 0 )
      .map( e => e*e )
      .subscribe(
          e => console.log(e),
          err => console.error(err),
          () => console.log('结束啦')
        )
    console.log('=====================')
    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe( stockCode => this.getStockInfo(stockCode) )
  }

  ngOnInit() {
  }

  onKey(value:string){
    console.log(value)
  }

  getStockInfo(value:string){
    console.log(value)
  }

}
