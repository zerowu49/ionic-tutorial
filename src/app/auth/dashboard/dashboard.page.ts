import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { SafeResourceUrl } from '@angular/platform-browser';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userEmail: string;
  photo: SafeResourceUrl

  constructor(
      private navCtrl: NavController,
      private storage: AngularFireStorage,
      private authService: AuthService,
      private toastCtrl: ToastController,
  ) { 
  }

  ngOnInit() {
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      // set user email and fetch profile image
      if (res !== null) {
        this.userEmail = res.email;
        const ref = this.storage.ref(`profile/${this.userEmail}.jpg`);
        ref.getDownloadURL().subscribe(res => {
          console.log('res', res);
          this.photo = res;
        });
      } else {
        this.navCtrl.navigateBack('auth/login');
      }
    }, err => {
      console.log('err', err);
    });

  }

  logout() {
    this.authService.logoutUser()
        .then(res => {
          console.log(res);
          this.navCtrl.navigateBack('auth/login');
        })
        .catch(error => {
          console.log(error);
        });
  }

  async getPicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      saveToGallery: true,
    });

    // this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    this.photo = image.dataUrl
    console.log("this.photo: ", this.photo)
  }

  dataURLtoFile(dataUrl,filename){
    const arr = dataUrl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const uBarr = new Uint8Array(n)

    while (n--) {
      uBarr[n] = bstr.charCodeAt(n)
    }

    return new File([uBarr],filename, {type:mime})
  }

  upload(){
    if(this.photo == null ){
      this.toastCtrl.create({
        message: "No image to upload. Please choose image first!",
        duration: 3000,
        color: "warning",
      }).then(toastEl => {
        toastEl.present()
      })
      return 
    }
    const file = this.dataURLtoFile(this.photo, 'file')
    console.log(file)
    const filePath = `profile/${this.userEmail}.jpg`
    const ref = this.storage.ref(filePath);
    ref.put(file).then(() => {
      this.toastCtrl.create({
        message: "Image successfully uploaded.",
        duration: 3000,
        color: "success",
      }).then(toastEl => {
        toastEl.present()
      })
    }).catch(err => {
      this.toastCtrl.create({
        message: "Failed to upload image.",
        duration: 3000,
        color: "warning",
      }).then(toastEl => {
        toastEl.present()
      })
    });
  }

}
