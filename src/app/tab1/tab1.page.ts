import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    constructor(private barcodeScanner: BarcodeScanner, public router: Router) {
    }
    scan() {
        /*this.router.navigate(['/detail-scanner', JSON.stringify(num)]);*/
        this.barcodeScanner.scan().then(barcodeData => {
            this.router.navigate(['/detail-scanner', String(barcodeData.text)]);
            console.log('Barcode data', barcodeData);
        }).catch(err => {
            console.log('Error', err);
        });
    }
    scan2() {
        /*this.router.navigate(['/detail-scanner', JSON.stringify(num)]);*/
            this.router.navigate(['/detail-scanner', String(7750182003834)]);
    }
}
