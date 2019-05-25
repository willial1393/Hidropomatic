import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Hidropomatic';

    display = false;

    showDialog() {
        this.display = true;
    }

    showLoading() {
        document.getElementById('openLoading').click();
    }

    hiddenLoading() {
        document.getElementById('closeLoading').click();
    }
}
