import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JavaPageComponent } from './java-page/java-page.component';
import { JavascriptPageComponent } from './javascript-page/javascript-page.component';
import { TypescriptPageComponent } from './typescript-page/typescript-page.component';
import { CommonModule } from '@angular/common';
import { ProgrammingLanguage } from './enums/programming';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    JavaPageComponent,
    JavascriptPageComponent,
    TypescriptPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'component-di-sample';
  selectedLanguage = 'Java';

  programmingLanguageEnum = ProgrammingLanguage;
}
