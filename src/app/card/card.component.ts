import { Component } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(private service: CardService) { }
  kg!: number
  cm!: number
  bmi: number = 0
  description: string ="คำอธิบาย"
  check = false;
  calculate(): void {
    this.check = false;
    const data = {
      kg: this.kg,
      m: this.cm/100,
    }
    this.service.calculatorBmi(data).subscribe(response => {
      this.bmi = response.data.bmi
      this.description = response.data.description

    })
    this.check = true;
  }
}
