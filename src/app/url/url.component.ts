import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {
  urlData;
  form;
  constructor(private URL: UrlService) {
    this.form = new FormGroup({
      'URL': new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
    this.URL.getSer().subscribe((data) => {
      this.urlData = data;
    })
  }
  postURL() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.URL.postSer(this.form.value).subscribe((url) => {
        console.log("done");
      })
    }
  }
}
