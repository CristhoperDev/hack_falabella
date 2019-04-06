import {Component, OnInit} from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {AlertController, LoadingController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import {forEach} from '@angular-devkit/schematics';
import {first} from 'rxjs/operators';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
    classroom: any = {};
    recomendation: any = {};

    constructor(public api: RestApiService,
                private alertCtrl: AlertController,
                private youtube: YoutubeVideoPlayer,
                public loadingController: LoadingController,
                public route: ActivatedRoute,
                public router: Router) {
    }


    ngOnInit() {
        this.getClassroom();
    }

    ionViewWillEnter() {
        this.getClassroom();
    }
    async comprar() {
        const alert = await this.alertCtrl.create({
            message: 'SU COMPRA HA SIDO COMPLETADA',
            subHeader: 'Gracias por su compra',
            buttons: ['Ok']
        });
        await alert.present();
    }

    getSum(): number {
        let sum = 0;
        for (let i = 0; i < this.classroom.length; i++) {
            sum += this.classroom[i].precio;
        }
        return sum;
    }

    async getClassroom() {
        const data = {
            status: 1
        };
        await this.api.listaCompras(data)
            .subscribe(res => {
                console.log(res);
                this.classroom = res;
                console.log(this.classroom.precio);
                }, err => {
                console.log(err);
            });
    }
}
