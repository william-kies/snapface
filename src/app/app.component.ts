import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit() { 
    
  }
}