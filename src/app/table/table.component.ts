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
  data:any = null;
  ngOnInit(): void {
    this.fetchBmiData()
}
fetchBmiData(): void {
  this.service.historyBmi().subscribe(response => {
    this.data = response.data
    this.cdr.detectChanges();
  })
}
}
