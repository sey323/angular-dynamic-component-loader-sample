import { Component, Input } from '@angular/core';
import { ProgrammingLanguage } from '../enums/programming';
@Component({
  selector: 'app-java-page',
  standalone: true,
  imports: [],
  templateUrl: './java-page.component.html',
  styleUrl: './java-page.component.css',
})
export class JavaPageComponent {
  @Input() input!: string;
}
