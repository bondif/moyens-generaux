import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../../services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  statistics: Statistics;

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.statisticsService.getAll().then(
      statistics => this.statistics = statistics,
      err => console.log(err.message)
    );
  }

}
