import { Component, OnInit, Input } from '@angular/core';
import { ICurrentWeather } from '../interfaces'
import { WeatherService } from "../weather/weather.service";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  @Input()current: ICurrentWeather;

  constructor(private  weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.currentWeather.subscribe(data => (this.current = data));
    this.weatherService.getCurrentWeather('kingstown', 'VC')
      .subscribe((data) => this.current = data)
  }

  getOrdinal(date: number) {
    const n = new Date(date).getDate();
    return 'th';
    // return n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 &amp;&amp; n < 21) || n % 10 > 3 ? 0 : n % 10]: '';
  }

}
