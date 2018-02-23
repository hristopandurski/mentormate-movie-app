import { Directive, HostListener, EventEmitter, Output, ElementRef, HostBinding } from '@angular/core';
import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';

export interface Colors {
  DarkVibrant: string;
  Vibrant: string;
}

@Directive({
  selector: '[mmColorExtractor]'
})
export class ColorExtractorDirective {

  @Output() extractColors: EventEmitter<Colors> = new EventEmitter();
  @HostListener('load') imageLoadSuccess() {
    this._getColors(this._elementRef.nativeElement)
      .then((colors: Colors) => {
        this.extractColors.emit(colors);
      });
  }
  @HostListener('error') imageLoadFailed(error) {
  }

  private _getColors(img: HTMLImageElement) {
    const vibrant = new Vibrant(img);
    return vibrant.getPalette()
      .then(palette => {
        return {
          DarkVibrant: palette.DarkVibrant.getHex(),
          Vibrant: palette.Vibrant.getHex()
        };
      });

  }
  constructor(private _elementRef: ElementRef) { }


}
