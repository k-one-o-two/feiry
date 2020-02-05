import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Feeling} from '../interfaces';

@Component({
  selector: 'f-selector',
  templateUrl: './feel-selector.component.html',
  styleUrls: ['./feel-selector.component.scss']
})

export class FeelingSelectorComponent {
  public feelingsList: Feeling[] = [];
  private rageFeelings: Feeling[] = [{

  }];

  constructor(private activatedRoute: ActivatedRoute) {
    this.feelingsList = this.rageFeelings;
    const feelType: string = this.activatedRoute.snapshot.routeConfig.path;
    console.info(this.activatedRoute.snapshot.routeConfig.path);
  }
}
