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
    constructor(public api: RestApiService,
                public loadingController: LoadingController,
                public route: ActivatedRoute,
                public router: Router) { }

    ngOnInit() {
        this.classroom = this.route.snapshot.paramMap.get('id');
       console.log(this.route.snapshot.paramMap.get('id'));
    }

}
