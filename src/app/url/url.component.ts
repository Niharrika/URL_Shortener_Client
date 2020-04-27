import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {
  userForm;
  urlData;
  constructor(private posturl : UrlService) {
    this.userForm = new FormGroup
      ({
        'longurl': new FormControl()
      })
  }

  ngOnInit(): void {
    this.posturl.getSer().subscribe((data) => {
      this.urlData = data;
    })
  }

  sendData() {
    this.posturl.postSer(this.userForm.value).subscribe((data2) => {
      alert("Done")
    })
  }

}
