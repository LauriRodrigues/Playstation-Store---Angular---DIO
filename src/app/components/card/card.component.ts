import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() gamePhoto:string = ""
  @Input() gameName:string = ""
  @Input() gameSize:string = ""
  @Input() gamePlatform:string = ""
  @Input() gamePrice:string = ""
}
