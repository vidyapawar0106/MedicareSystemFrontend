import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  url:string="http://localhost:8084/product/add-bulk-products"
 

  constructor(public http:HttpClient,public rout:Router) { }

  ngOnInit(): void {
  }
  file:any
  
  selectFile(event:any){
    console.log(event)
    this.file=event.target.files[0]
    console.log(this.file)


  }
  uploadFile(){

    let formData = new FormData()
    formData.append("file",this.file)
    this.http.post(this.url,formData).subscribe(res=>{
      console.log(res)
      alert("file uploaded")
      this.rout.navigate(["admin-home"]);

    },(err)=>{
      console.log(err)

    })


  }
  home()
  {
    this.rout.navigate(["admin-home"]);
  }

}
