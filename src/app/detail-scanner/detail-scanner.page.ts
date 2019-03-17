import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {LoadingController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-scanner',
  templateUrl: './detail-scanner.page.html',
  styleUrls: ['./detail-scanner.page.scss'],
})
export class DetailScannerPage implements OnInit {
    classroom: any = {};
    detail: any = {};

    constructor(public api: RestApiService,
                public loadingController: LoadingController,
                public route: ActivatedRoute,
                public router: Router) {
    }


    ngOnInit() {
        this.getClassroom();
    }

    async getClassroom() {
        await this.api.detailProduct(this.route.snapshot.paramMap.get('id'))
            .subscribe(res => {
                console.log(res);
                this.classroom = res;
            }, err => {
                console.log(err);
            });
    }

}
