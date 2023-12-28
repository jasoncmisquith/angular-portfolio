import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { ExperienceComponent } from '../experience/experience.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    IntroductionComponent,
    ExperienceComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
