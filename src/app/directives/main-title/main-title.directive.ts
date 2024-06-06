import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[main-title]',    
})
export class MainTitleDirective implements OnInit {    
    constructor(private ref: ElementRef, private renderer: Renderer2) {}

    private readonly className: string = 'main-title-directive';

    ngOnInit(): void {
        this.renderer.addClass(this.ref.nativeElement, this.className);
    }
}