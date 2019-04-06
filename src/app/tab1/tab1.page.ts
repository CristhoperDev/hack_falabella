import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';
import {RestApiService} from '../rest-api.service';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    constructor(public api: RestApiService, private barcodeScanner: BarcodeScanner, public router: Router) {
    }
    scan() {
        this.barcodeScanner.scan().then(barcodeData => {
            //this.router.navigate(['/detail-scanner', String(barcodeData.text)]);
            console.log(barcodeData);
            console.log('Barcode data', barcodeData);
            let data = {
                barCode: parseFloat(barcodeData.text),
                status: 1
            };
            console.log(data);
            this.api.insertProduct(data).subscribe(() => {
                //this.router.navigate(['/tab3']);
            });
        }).catch(err => {
            console.log('Error', err);
        });
    }
}
