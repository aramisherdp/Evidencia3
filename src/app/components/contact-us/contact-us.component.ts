// import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public contactForm!: FormGroup;
  public isLoading: boolean = false;
  public invalid: boolean = false;
  public invalidFlag: string = '';

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.formBuilder.group({
      company: ['', Validators.required],
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,6}$")]],
      phone: ['', Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    })
  }

  ngOnInit(): void {
  }

  formValidation(){
    if (this.contactForm.controls['company'].errors){
      this.invalidFlag = 'invalid-company';
      this.invalid = true
    };
    if (this.contactForm.controls['name'].errors){
      this.invalidFlag = 'invalid-name';
      this.invalid = true
    };
    if (this.contactForm.controls['position'].errors){
      this.invalidFlag = 'invalid-position';
      this.invalid = true
    };
    if (this.contactForm.controls['email'].errors){
      this.invalidFlag = 'invalid-email';
      this.invalid = true
    };
    if (this.contactForm.controls['phone'].errors){
      this.invalidFlag = 'invalid-phone';
      this.invalid = true
    };
    if (this.contactForm.invalid){
      this.invalidFlag = 'invalid-all';
      return
    }
    this.submit(this.contactForm.value)
  }

  resetValidations(flag?: string){
    this.invalid = false
    this.invalidFlag = ''
  }

  async submit(formValue: any) {
    console.log('form', formValue);
    this.isLoading = true;
    Swal.showLoading();
    try {
      await this.contactService.sendFormContact(formValue)
      Swal.fire({
        text: 'We will contact you as soon as possible',
        icon: 'success',
        title: 'Contact details sent successfully!',
        confirmButtonText: 'Accept',
        confirmButtonColor: 'var(--primary)'
      })
      this.isLoading = false;
    } catch (error) {
      console.log(error);
      this.isLoading = false;
      Swal.fire({
        text: 'Oops!',
        icon: 'error',
        title: 'Something went wrong while sending the details',
        confirmButtonText: 'Accept',
        confirmButtonColor: 'var(--primary)'
      })
      throw error
    }
  }

  errorMessage(formControl: string): any {
    if (this.contactForm.get(formControl)?.hasError('required')) {
      return `* Required`
    }else{
      if (this.contactForm.get(formControl)?.hasError('pattern')){
        return `Invalid Email.`
      }else{
        return `* Invalid.`
      }
    }
  }

  onPhoneInput(event: any) {
    const input = event.target;
    if (input.value.length > 10) {
        input.value = input.value.slice(0, 10); // Limitar a 10 caracteres
        this.contactForm.get('phone')?.setValue(input.value); // Actualizar el valor en el FormGroup
    }
}


}
