import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Feeling } from '../interfaces';

@Component({
  selector: 'f-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public feelingsList: Feeling[] = [];
  constructor(
    private router: Router
  ) {
    this.feelingsList.push({
      name: 'Гнев',
      color: '#E5D1C0',
      path: 'rage',
    });
    this.feelingsList.push({
      name: null
    });
    this.feelingsList.push({
      name: 'Страх',
      color: '#4F3CC9',
      path: 'fear',
    });
    this.feelingsList.push({
      name: 'Любовь',
      color: '#F582AE'
    });
    this.feelingsList.push({
      name: null
    });
    this.feelingsList.push({
      name: 'Грусть',
      color: '#77E0B5',
      path: 'sadness',
    });
    this.feelingsList.push({
      name: null
    });
    this.feelingsList.push({
      name: 'Радость',
      color: '#B47AFE',
      path: 'joy',
    });
  }

  public goToSelector(feeling) {
    this.router.navigate([`/${feeling.path}`]);
  }
}
