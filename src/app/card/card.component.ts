import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  constructor(private service: CardService,private location: Location)  { }
  kg!: number
  cm!: number
  bmi!: number
  description!: string

  ngOnInit(): void {
    if(localStorage.getItem('local') != null){
      const storage =  localStorage.getItem('local') as string
      var local =  JSON.parse(storage)

      this.kg = local.kg as number
      this.cm = local.cm as number
      this. bmi = local.bmi as number
      this.description = local.description
      localStorage.removeItem('local');
    } else {
      this. bmi = 0
      this.description = 'คำอธิบาย'
    }
  }

  calculate(): void {
    const data = {
      kg: this.kg,
      m: this.cm/100,
    }
    this.service.calculatorBmi(data).subscribe(response => {
      this.bmi = response.data.bmi
      this.description = response.data.description
      const local  = {
        kg: this.kg,
        cm: this.cm,
        bmi: this.bmi,
        description: this.description
      }
      localStorage.setItem('local', JSON.stringify(local))
      location.reload();

    })
  }
}
