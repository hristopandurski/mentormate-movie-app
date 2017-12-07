import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[mmValidateMaxCharacterCount][formControlName],[mmValidateMaxCharacterCount][formControl],[mmValidateMaxCharacterCount][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => MaxCharacterCountValidator), multi: true }
  ]
})
export class MaxCharacterCountValidator implements Validator {
  @Input() mmValidateMaxCharacterCount: number;
  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    return (control.value && control.value.length <= this.mmValidateMaxCharacterCount) ? null : {
      maxCharacterCountError: {
        valid: false,
      },
    };
  }
}
