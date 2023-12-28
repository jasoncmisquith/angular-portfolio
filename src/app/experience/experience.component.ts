import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatStepperModule, MatButtonModule, MatIconModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class ExperienceComponent {

}
