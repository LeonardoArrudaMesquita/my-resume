import { Component } from "@angular/core";

interface Certification {
    institution: string;
    course: string;
}

@Component({
    selector: 'app-certifications',
    templateUrl: './certifications.component.html',
    styleUrls: ['./certifications.component.scss'] 
})
export class CertificationComponent {
    certifications: Certification[] = [
        {
            institution: 'Cambridge English: First',
            course: 'Level B1'
        },
        {
            institution: 'AWS Academy Graduate',
            course: 'AWS Academy Cloud Foundations'
        }
    ]
}