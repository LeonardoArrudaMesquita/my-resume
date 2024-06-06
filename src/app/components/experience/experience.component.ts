import { Component } from "@angular/core";

interface Experience {
    role: string;
    initialDate: string;
    finalDate: string;
    company: {
        name: string;
        location: string;
    };
    activities: string[]
}

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    experiences: Experience[] = [
        {
            role: 'Software Engineer',
            initialDate: 'April 2019',
            finalDate: 'Current',
            company: {
                name: 'Iteris Consultoria e Software',
                location: 'São Paulo, Brazil',
            },
            activities: [
                'Developed Systems based on Node and .Net Platform.',
                'Developed Web Sites / Apps based on React and React Native.',
                'Acted with agile methodologies such as Scrum and Kanban.',
                'Worked with Cloud & DevOps (AWS and Azure).',
                'Provided Code Review.',
                'Worked with UX designers to build user interfaces and iterations based on user feedback.',
                'Executed functional and integration testing and software delivery support.',
                'Defined and continuously improved software development best practices.',
                'Created tutorials and workshops.',
                'Collected client requirements with little assistance from Sales and translate those requirements to a non-technical language.'
            ]
        },
        {
            role: 'Software Engineer',
            initialDate: 'November 2018',
            finalDate: 'March 2019',
            company: {
                name: 'Intragroup SAP Specialists',
                location: 'São Paulo, Brazil',
            },
            activities: [
                'Developed systems based on .Net platform with SAP integration.',
                'Managed MongoDB instance.',
                'Learned technologies and adopted tools to maximize performance and contributions.',
                'Implemented proofs of concept to introduce new technologies.',
            ]
        }
    ]
}