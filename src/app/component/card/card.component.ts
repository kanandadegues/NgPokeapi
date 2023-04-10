import { Component, Input } from '@angular/core';

export interface cardInfo {
  nome: string;
  imagem: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() infos: cardInfo = {
    nome: '',
    imagem: ''
  }
}
