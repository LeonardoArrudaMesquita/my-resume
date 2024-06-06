import { Component } from "@angular/core";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
    skills: string[] = [
        'Front-end (ReactJS, React Native)',
        'Back-end (Node, C#)',
        'Cloud & DevOps (Docker and AWS)',
        'Agile frameworks (Scrum, Kanban)',
        'Microfrontend and Microservice',
        'APIs (REST, GraphQL, SOAP)',
        'Relational Databases',
        'Problem solving',
    ];
}