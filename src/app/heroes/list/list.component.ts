import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public deteledHero?: string;

  removeLastHero():void {
    this.deteledHero = this.heroNames.pop();
}

}
