import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ImageService{
  constructor(private http:HttpClient) {}
  data;
  saveImage(data){
    return this.http.post("http://localhost/phpapi/image_api.php",data).subscribe((res)=> {
      //console.log(res);
      this.viewImage();
    }
    )
  }

  viewImage(){
    return this.http.get("http://localhost/phpapi/image_view.php").subscribe((res)=>{
      this.data=res;
    })
  }

  fetchImage(data){
    console.log(data)
    return this.http.get("http://localhost/phpapi/image_fetch.php?&id="+data);
  }
}
