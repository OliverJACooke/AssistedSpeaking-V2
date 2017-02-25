import { Component } from '@angular/core';

@Component({
    selector: 'as-app',
    template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent {
    public name: string = 'Angular';
}
