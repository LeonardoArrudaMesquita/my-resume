import { Component } from "@angular/core";

interface Education {
    title: string;
    institution: string;
    location: string;
    conclusionDate: string;
}

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent {
    educations: Education[] = [
        {
            title: `Bachelor's degree in Information Systems`,
            institution: 'Anhembi Morumbi University',
            location: 'São Paulo, Brazil',
            conclusionDate: 'December 2021'
        }, 
        {
            title: 'Web Designer Technician',
            institution: 'Serrano Guardia School',
            location: 'Guarulhos, Brazil',
            conclusionDate: 'December 2016'
        },
        {
            title: 'Computer Technician',
            institution: 'Etec Prof. Horácio Augusto da Silveira',
            location: 'São Paulo, Brazil',
            conclusionDate: 'July 2016'
        }
    ]
}