import {Directive, ElementRef, EventEmitter, HostListener, Inject, Output} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Directive({
  selector: '[mmClickOutside]'
})
export class ClickOutsideDirective {
    @Output()
    mmClickOutside = new EventEmitter();

    constructor(private _elementRef: ElementRef, @Inject(DOCUMENT) private _document: any) { }

    @HostListener('document:click', ['$event.target'])
    onClick(targetElement) {
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.mmClickOutside.emit(null);
        }
    }
}
