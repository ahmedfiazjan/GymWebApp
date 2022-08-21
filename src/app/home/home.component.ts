import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {MatTabChangeEvent} from "@angular/material/tabs";
import {GetNutritionInfoService} from "../get-nutrition-info.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedTab = '';
  exercisePromise: any;
  exercises: any;
  articlesPromise: any;
  articles: any;
  nutritionPromise: any;
  nutrition: any = [];
  query: any;
  tableData: any = [];
  displayedColumns: string[] = ['num', 'name', 'value'];
  dataSource = this.tableData;

  constructor(private nutritionService: GetNutritionInfoService, private http: HttpClient, public auth: AngularFireAuth, private router: Router) {
  }


  login() {
    this.router.navigate(["/login"]);
  }

  logout() {
    this.auth.signOut().then(r => {
      console.log(r);
      this.router.navigate(['/login']);
    }).catch(e => {
      console.log(e);
    });
  }

  getNutritionInfo() {
    var test = this.nutritionService.getNutritionInfo(this.query);
    test.subscribe((r: any) => {
      this.nutrition = r;
      let arr: any = [];
      this.nutrition = this.nutrition.items[0];
      this.nutrition = Object.keys(this.nutrition).forEach(key => {
        var obj = {num: arr.length, name: key, value: this.nutrition[key]};
        this.tableData.push(obj);
        console.log(this.tableData);
      });
    });

    // this.nutritionPromise = this.http.get('https://calorieninjas.p.rapidapi.com/v1/nutrition', {
    //   headers: {
    //     'X-RapidAPI-Key': '31dff45e66msh445e423d1eddceap11d000jsn7ee9bada567f',
    //     'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
    //   },
    //   params:{
    //     query: this.query
    //   }
    // }).subscribe((r: any) => {
    //   this.nutritiion = r;
    //   this.nutritiion = this.nutritiion.items[0];
    //   console.log(this.nutritiion);
    // });
  }

  ngOnInit(): void {
    this.selectedTab = 'workouts';
    this.exercisePromise = this.http.get('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', {
      headers: {
        'X-RapidAPI-Key': '31dff45e66msh445e423d1eddceap11d000jsn7ee9bada567f',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      },
    }).subscribe((r: any) => {
      this.exercises = r;
      console.log(this.exercises)
    });

    this.articlesPromise = this.http.get('https://live-fitness-and-health-news.p.rapidapi.com/news/Harvard%20Health%20Publishing', {
      headers: {
        'X-RapidAPI-Key': '31dff45e66msh445e423d1eddceap11d000jsn7ee9bada567f',
        'X-RapidAPI-Host': 'live-fitness-and-health-news.p.rapidapi.com'
      },
    }).subscribe((r: any) => {
      this.articles = r;
      console.log(this.articles)
    });

    // console.log(this.exercisePromise.subscribe);
  }

  selectedTabChange(matTabChangeEvent: MatTabChangeEvent) {
    // console.log(matTabChangeEvent.tab);
    this.selectedTab = matTabChangeEvent.tab.textLabel;
    // this.tabName.emit(matTabChangeEvent.tab.textLabel);
    console.log(matTabChangeEvent.tab.textLabel);
  }

}
