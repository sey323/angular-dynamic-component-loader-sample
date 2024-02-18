import { Component, Type } from '@angular/core';
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

  // 表示したいコンポーネントのリスト
  private programmingLanguageList = [
    {
      component: JavaPageComponent,
      key: ProgrammingLanguage.JAVA,
      inputs: {
        input: 'Javaのページ',
      },
    },
    {
      component: JavascriptPageComponent,
      key: ProgrammingLanguage.JAVASCRIPT,
      inputs: {
        input: 'JavaScriptのページ',
      },
    },
    {
      component: TypescriptPageComponent,
      key: ProgrammingLanguage.TYPESCRIPT,
      inputs: {
        input: 'TypeScriptのページ',
      },
    },
  ] as {
    component: Type<any>;
    key: ProgrammingLanguage;
    inputs: Record<string, unknown>;
  }[];

  // セレクトボックスで選択された言語のコンポーネントを取得
  get currentProgrammingLanguage() {
    return this.programmingLanguageList.find(
      (language) => language.key === this.selectedLanguage
    )!;
  }
}
