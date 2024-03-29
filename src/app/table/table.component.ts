import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { TableService } from './table.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  constructor(private service:TableService, private cdr: ChangeDetectorRef, private location: Location){}
  @Input() check:boolean  = false
  data:any;
  ngOnInit(): void {
    this.fetchBmiData()
}

ngDoCheck(): void {
  console.log(this.check);

  if(this.check){
    this.fetchBmiData()
  }
}
fetchBmiData(): void {
  this.check = false
  this.service.historyBmi().subscribe(response => {
    this.data = response.data
    console.log(this.data);

    this.cdr.detectChanges();

  })
}
}
