import { Component, OnInit } from '@angular/core';
import { Camera , CameraOptions} from '@ionic-native/camera/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent implements OnInit {
  imagen:string;
  imagecom:string;

  constructor(private camera: Camera,private socialSharing: SocialSharing) { }
  ngOnInit() {
  }
 
  compartir(){
    const optionss: CameraOptions = {
      destinationType: this.camera.DestinationType.FILE_URI,
    }
    this.camera.getPicture(optionss).then((imageDatas) => {
      this.imagecom=imageDatas;
    }, (err) => {
    });
  }
  whasp(){
    this.socialSharing.shareViaWhatsApp('',this.imagecom,null)
  .then((success) =>{
      alert("Success");
   })
    .catch(()=>{
      alert("Could not share information");
    });
    
  }tomarfoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     this.imagen = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
    });
  }
  
  
}
