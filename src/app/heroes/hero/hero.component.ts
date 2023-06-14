import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  //propiedad getter
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  //método de concatenado
  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 26;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }


}
