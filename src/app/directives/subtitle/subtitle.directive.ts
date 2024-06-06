import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[subtitle]',    
})
export class SubtitleDirective implements OnInit {    
    constructor(private ref: ElementRef, private renderer: Renderer2) {}

    private readonly className: string = 'subtitle-directive';

    ngOnInit(): void {
        this.renderer.addClass(this.ref.nativeElement, this.className);
    }
}