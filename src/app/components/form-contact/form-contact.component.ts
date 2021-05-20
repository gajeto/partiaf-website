import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/classes/contact';
import { ContactService } from 'src/app/services/contact.service';
import { MainService } from 'src/app/services/main.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Subscription } from 'rxjs';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {
  @Output() save = new EventEmitter();
  @Output() close = new EventEmitter();
  public loading = false;
  public genders = false;
  @ViewChild("form", { read: NgForm }) form: any;
  @ViewChild("file") file: ElementRef;
  public data: Contact = new Contact();

  // recaptcha
  public recentToken: string = ''
  private singleExecutionSubscription: Subscription;

  recaptchaAvailable = false;
  isBrowser;
  constructor(@Inject(DOCUMENT) private document: Document,private recaptchaV3Service: ReCaptchaV3Service, public contactService: ContactService, public mainService: MainService, private toastr: ToastrService, public router: Router,@Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
   }

  // create function to get the recaptcha key based on event
  getRecaptchaToken(action) {

    this.singleExecutionSubscription = this.recaptchaV3Service.execute(action)
      .subscribe(response => {
        this.recentToken = response;
        this.recaptchaAvailable = true;
      }, error => {
      });
  }

  ngOnInit() {
    this.getRecaptchaToken('Contact');
    let element = this.document.getElementsByClassName('grecaptcha-badge');
    if (this.isBrowser) { 
      let element = this.document.getElementsByClassName('grecaptcha-badge');
      if(element&&element[0]){
        element[0].setAttribute('id', 'grecaptcha_badge');
        this.document.getElementById('grecaptcha_badge').style.display = 'block';
      }
    } 
  }



  send(form: NgForm) {

    // if we have recaptcha add it to registerForm
    if (this.recaptchaAvailable) {
      this.data.token = this.recentToken;
      // Muestra mensaje de error en los campos que son obligatorios
      if (form.invalid) {
        Object.values(form.controls).forEach(control => {
          control.markAsTouched();
        });
        this.toastr.warning("Por favor, completa los campos", "Guardar");
        return;
      }
      this.loading = true;
      this.contactService.send(this.data).subscribe(data => {
        if (data.success) {
          this.toastr.success(data.message, 'Partiaf');
          form.resetForm();
          this.data = new Contact();
          this.save.emit(data.data);
          this.getRecaptchaToken('Contact');
          this.data.reason="1";
        } else {
          if (data.validators) {
            Object.keys(data.validators).forEach(x => {
              this.toastr.warning(data.validators[x][0], 'Partiaf');
            });
          }
        }
        this.loading = false;
      }, error => {
        this.toastr.error("Error contacte el administrador", 'Discoteca');
        this.loading = false;
      });

      // do we have recaptcha token?
      this.data.token = this.recentToken;
    }
  }

  clear(form: NgForm) {
    this.data = new Contact();
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  ngOnDestroy() {
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
    let element = this.document.getElementsByClassName('grecaptcha-badge');
    if (this.isBrowser) { 
      if(element&&element[0]){
        element[0].setAttribute('id', 'grecaptcha_badge');
        this.document.getElementById('grecaptcha_badge').style.display = 'none';
      }
    } 
  }
}
