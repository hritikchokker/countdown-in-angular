import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  countdownForm: FormGroup;
  constructor(private $fb: FormBuilder) {
    this.createForm();
  }
  formValues = { days: 10, hours: 12, minutes: 34, seconds: 60 };

  createForm() {
    this.countdownForm = this.$fb.group({
      days: ['10', [Validators.required]],
      hours: ['12', [Validators.required, Validators.max(24)]],
      minutes: ['34', [Validators.required, Validators.max(60)]],
      seconds: ['60', [Validators.required, Validators.max(60)]]
    });
  }

  updateValues() {
    if (this.countdownForm.valid) {
      this.countdownForm = null;
      console.log(this.countdownForm.value, 'value');
      this.formValues = this.countdownForm.value;
    }
  }
}
