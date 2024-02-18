import { Component, Input } from '@angular/core';
import { ProgrammingLanguage } from '../enums/programming';

@Component({
  selector: 'app-javascript-page',
  standalone: true,
  imports: [],
  templateUrl: './javascript-page.component.html',
  styleUrl: './javascript-page.component.css',
})
export class JavascriptPageComponent {
  @Input() input!: string;
}
