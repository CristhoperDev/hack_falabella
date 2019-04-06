import {Component, OnInit} from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player/ngx';
import {LoadingController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  classroom: any = {};
  recomendation: any = {};

  constructor(public api: RestApiService,
              private youtube: YoutubeVideoPlayer,
              public loadingController: LoadingController,
              public route: ActivatedRoute,
              public router: Router) {
  }
  ngOnInit() {
    setInterval(() => {
      this.getClassroom();
    }, 1000);
  }

  async getClassroom() {
      let data = {
          status: 1
      };
    await this.api.listaCompras(data)
        .subscribe(res => {
          console.log(res);
          this.classroom = res;
        }, err => {
          console.log(err);
        });
  }
}
