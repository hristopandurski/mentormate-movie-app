import { Component, OnInit, Input, EventEmitter, Output, HostBinding, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICreateList } from '../../interfaces';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import { popIn } from '../../animations';

@Component({
  selector: 'mm-add-to-list-form',
  templateUrl: './add-to-list-form.component.html',
  styleUrls: ['./add-to-list-form.component.scss'],
  animations: [popIn()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddToListFormComponent implements OnInit {
  @HostBinding('@popInAnimation')
  public popInAnimation = true;
  @Input() movies: Array<Movie> = [];
  @Output() formSubmitted: EventEmitter<ICreateList> = new EventEmitter();
  @Output() formClosed: EventEmitter<any> = new EventEmitter();
  loading = false;
  addListForm: FormGroup;
  @HostListener('@popInAnimation.done') formAnimated() {
    console.log(arguments);
  }

  constructor(private _fb: FormBuilder) {
    this.addListForm = this._fb.group({
      name: ['', Validators.required],
      description: [],
      language: []
    });
  }

  submitForm(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      this.formSubmitted.emit(this.addListForm.value as ICreateList);
    }
  }

  closeForm() {
    this.formClosed.emit();
  }

  ngOnInit() {
    /*
    ** AutoSave example
    */
    this.addListForm.valueChanges
      .filter(_ => this.addListForm.valid)
      .debounceTime(1500)
      .subscribe(
      formData => console.log(`Autosaving... ${JSON.stringify(formData)}`)
      );
  }

}
