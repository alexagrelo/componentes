import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {

    this.presentLoadingWithOptions('Espere por favor');
    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);

  }

  async presentLoadingWithOptions(message: string) {
    this.loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      /* duration: 2000, */
      message,
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: false
    });
    this.loading.present();
  }

}
