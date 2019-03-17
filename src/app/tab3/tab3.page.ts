import {Component, OnInit} from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {LoadingController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
    classroom: any = {};
    recomendation: any = {};

    constructor(public api: RestApiService,
                private youtube: YoutubeVideoPlayer,
                public loadingController: LoadingController,
                public route: ActivatedRoute,
                public router: Router) {
    }


    ngOnInit() {
        this.getClassroom();
    }

    async getClassroom() {
        await this.api.rankingProduct()
            .subscribe(res => {
                console.log(res);
                this.classroom = res;
            }, err => {
                console.log(err);
            });
    }
    video_youtube() {
        this.youtube.openVideo('https://www.youtube.com/embed/AHtKYCv-DYI');
    }
}
