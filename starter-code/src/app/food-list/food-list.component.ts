import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object [];
  newFood: any = {};
  todaysFoods: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood(){
    console.log("Add food has been called");
    
    const addFood = {name: this.newFood.name, calories: this.newFood.calories, image: this.newFood.image}
      this.foods.push(addFood);
    // clear inputs
    this.newFood.name = "";
    this.newFood.calories = "";
    this.newFood.image = "";
  }


  selectFood(foodItem) {
    this.todaysFoods.push(foodItem);
  }





}
