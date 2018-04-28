import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ImageService} from "../image.service";

@Component({
  selector: 'app-formdata-upload',
  templateUrl: './formdata-upload.component.html',
  styleUrls: ['./formdata-upload.component.css']
})

export class FormdataUploadComponent{

  title='app';
  fileData:File;
  imgform=new FormGroup({
    fname:new FormControl(),
    avtar:new FormControl()
  });

  constructor(private imservice:ImageService) {
    this.imservice.viewImage();
  }

  FileChange(event1:any)
  {
    this.fileData=event1.target.files[0];
    console.log(event1.target.files);
  }

  onSubmit() {
    let iform=new FormData();
    iform.append("fname",this.imgform.get('fname').value);
    iform.append("avtar",this.fileData);
    //console.log(iform);
    // console.log(this.imgform.get('fname').value);
    // console.log(this.fileData);
    this.imservice.saveImage(iform);
  }

  clearFile()
  {
    this.imgform.get('avtar').setValue(null);

  }

  fetchImage(data)
  {
    this.imservice.fetchImage(data).subscribe((result)=>{
      console.log(data);
     // this.imgform.setValue({fname:result.});
    });
  }
}
