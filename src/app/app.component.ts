import { Component } from '@angular/core';
import { Etudiant } from './entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ams';
  trainer = "Amine Mezghich";
  course = "Angular";
  tab: string[] = ["Rado", "Amine", "Seif"];
  candidates: Etudiant[] = [
    {nom:"ali",email:"ali@gmail.com",age:25},
    {nom:"med",email:"med@gmail.com",age:26},
    {nom:"jean",email:"jean@gmail.com",age:22}
  ];
/*
  public function display()
  {
    alert('Un clic');
  }*/
}
