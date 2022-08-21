import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetNutritionInfoService {
  private nutritionPromise: any;
  private nutritiion: any;

  constructor(private http: HttpClient) { }

  getNutritionInfo(query: string){
    this.nutritionPromise = this.http.get('https://calorieninjas.p.rapidapi.com/v1/nutrition', {
      headers: {
        'X-RapidAPI-Key': '31dff45e66msh445e423d1eddceap11d000jsn7ee9bada567f',
        'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
      },
      params:{
        query: query
      }
    })
    return this.nutritionPromise;
  }
}
