import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Platform, ToastController } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('filePicker',{static: false}) filePickerRef: ElementRef<HTMLInputElement>
  photo: SafeResourceUrl
  isDesktop: boolean

  constructor(
    private platform: Platform,
    private storage: AngularFireStorage,
    private toastCtrl: ToastController,
  ) {
    const ref = this.storage.ref('photos/latestPhoto.jpg');
    ref.getDownloadURL().subscribe(res => {
      console.log('res', res);
      this.photo = res;
    });
  }

  ngOnInit() {
    if((this.platform.is('mobile') && this.platform.is('hybrid')) || 
      this.platform.is('desktop')){
        this.isDesktop = true
    }
  }

  async getPicture(type: string) {
    if (!Capacitor.isPluginAvailable('Camera') || (this.isDesktop && type === 'gallery')) {
      this.filePickerRef.nativeElement.click();
      return;
    }

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

  onFileChoose(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const pattern = /image-*/;
    const reader = new FileReader();

    if (!file.type.match(pattern)) {
      console.log('File format not supported');
      return;
    }

    reader.onload = () => {
      this.photo = reader.result.toString();
    };

    reader.readAsDataURL(file);
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
    const filePath = 'photos/latestPhoto.jng'
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
