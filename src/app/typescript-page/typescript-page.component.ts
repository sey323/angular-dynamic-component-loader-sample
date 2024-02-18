import { Component, Input } from '@angular/core';
import { ProgrammingLanguage } from '../enums/programming';

@Component({
  selector: 'app-typescript-page',
  standalone: true,
  imports: [],
  templateUrl: './typescript-page.component.html',
  styleUrl: './typescript-page.component.css',
})
export class TypescriptPageComponent {
  @Input() input!: string;
}
