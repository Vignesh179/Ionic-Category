import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
categoryName:any;
categoryStatus:any;
categoryDescription:any;
  constructor() {}


save(){
name: this.categoryName;
status: this.categoryStatus;
console.log(name);
}



}
