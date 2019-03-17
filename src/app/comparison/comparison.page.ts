import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {LoadingController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.page.html',
  styleUrls: ['./comparison.page.scss'],
})
export class ComparisonPage implements OnInit {
    constructor(public api: RestApiService,
                public loadingController: LoadingController,
                public route: ActivatedRoute,
                public router: Router) {
    }

    ngOnInit() {
    }

}
