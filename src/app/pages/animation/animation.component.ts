import { Component, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
    animations: [
        trigger('myState', [
            state('inactive', style({
                backgroundColor: '#eea74a'
            })),
            state('active',   style({
                backgroundColor: '#cfd8dc'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})
export class AnimationComponent implements OnInit {

    animationState: string = 'inactive';

  constructor() { }

  ngOnInit() {
  }

    toggleAnimation() {
      if (this.animationState === 'inactive') {
        this.animationState = 'active';
      }

      else{
          this.animationState = 'inactive';
      }
    }

}
