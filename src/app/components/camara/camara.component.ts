import { Component, OnInit } from '@angular/core';
import { Camera , CameraOptions} from '@ionic-native/camera/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent implements OnInit {
  imagen:string;
  imagecom:string;
  message='Jugue Cranium y Gane !!!';;

  constructor(private camera: Camera,private socialSharing: SocialSharing,private webview: WebView) { }
  ngOnInit() {
  }
 
  tomarfoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.imagecom=imageData;
     this.imagen = this.webview.convertFileSrc(imageData);

    }, (err) => {
    });
  }
  compartirWhatsapp(){
    this.socialSharing.shareViaWhatsApp(this.message,this.imagecom,null)
      .then((success) =>{
          alert("Se compartio Correctamenta");
       })
        .catch(()=>{
          alert("No se pudo compartir");
        });
    }
    compartirFacebook(){
      this.socialSharing.shareViaFacebook(this.message,this.imagecom,null)
        .then((success) =>{
             alert("Se compartio Correctamenta");
         })
         .catch((err)=>{
            alert("No se pudo compartir");
          });
      }
      compartirInstagram(){
      this.socialSharing.shareViaInstagram(this.message,this.imagecom)
        .then((success) =>{
            alert("Se compartio Correctamenta");
          })
          .catch(()=>{
            alert("No se pudo compartir");
          });
      }
  
}
