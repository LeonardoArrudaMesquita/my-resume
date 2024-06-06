import { Component } from "@angular/core";

interface Language {
    language: string;
    level: string;
}

@Component({
    selector: 'app-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['languages.component.scss']
})
export class LanguagesComponent {
    languages: Language[] = [
        {
            language: 'Portuguese',
            level: 'Native'
        },
        {
            language: 'English',
            level: 'Advanced'
        }
    ]
}