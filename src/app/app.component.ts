import { Component } from '@angular/core';
import {ICurrentWeather} from "./interfaces";
import {WeatherService} from "./weather/weather.service";

@Component({
  selector: 'app-root',
  template: `
    <div >
      <mat-toolbar color="primary">
        <span>SVG Weather</span>
      </mat-toolbar>
      <div fxLayoutAlign="center">
        <div class="mat-caption vertical-margin">Your city, your forecast, right now!</div>
      </div>
      <div fxLayoutAlign="center">
        <app-city-search (searchEvent)="doSearch($event)"></app-city-search>
      </div>
      <div fxLayout="row">
        <div fxFlex></div>
        <mat-card fxFlex="300px">
          <mat-card-header>
            <mat-card-title><div class="mat-headline">Current Weather</div></mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <app-current-weather [current]="currentWeather"></app-current-weather>
          </mat-card-content>
        </mat-card>
        <div fxFlex></div>
      </div>
    </div>
  `
})
export class AppComponent {
  currentWeather: ICurrentWeather;
  title = 'svg-weather-app';
  constructor(private weatherService: WeatherService) { }

  doSearch(searchValue) {
    const userInput = searchValue.split(',').map(s => s.trim())
    this.weatherService
      .getCurrentWeather(userInput[0], userInput.length > 1 ? userInput[1] : undefined)
      .subscribe(data => this.currentWeather = data)
  }
}
