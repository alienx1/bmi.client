import { Component, Input, SimpleChanges } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  {
  constructor(private service:TableService){}
  @Input() public check:boolean  = false
  data:any
  ngOnInit(): void {
  this.service.historyBmi().subscribe(response => {
    this.data = response.data
  })
}
ngOnChanges(changes: SimpleChanges): void {
  if(changes["check"]){
    this.service.historyBmi().subscribe(response => {
      this.data = response.data
    })
  }
}
}
