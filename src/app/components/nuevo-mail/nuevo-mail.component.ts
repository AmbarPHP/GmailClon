import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email.model';
import {MailService} from '../../services/mail.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'



@Component({
  selector: 'app-nuevo-mail',
  templateUrl: './nuevo-mail.component.html',
  styleUrls: ['./nuevo-mail.component.scss']
})
export class NuevoMailComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private service:MailService) {
  }
  //private mailForm:FormGroup;


  ngOnInit(): void {
    //this.nuevo_email = new Email(1, "from", "subject", "date");
   
    // this.createMailForm();
    // this.url="http:localhost:4001/email/post";
  }

//   public createMailForm() {
//      this.mailForm = new FormGroup({
//        from :new FormControl(this.mailForm.from),
//        subject: new FormControl(this.mailForm.subject),
//        date: new FormControl(this.mailForm.date)
//      });
   
// }

//   onClickSubmit(data) {
//     this.nuevo_email=data;
//     alert("Entered  : " + data.from+" "+data.subject);
//     this.add_email(this.nuevo_email);
//   }

//   public add_email(){
//     this.service.addEmail(this.mailForm,this.url ).subscribe(res=>{
//       console.log("succes");
//     },
//     err=>{
//       console.log("error");
//     });
//   }

  


}
