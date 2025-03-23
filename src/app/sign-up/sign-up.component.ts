import { Component } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  // Handle form submission
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      // Handle the form data submission, e.g., sending it to a backend service
    } else {
      console.log('Form is not valid');
    }
  }
}
