import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-actuadores',
    templateUrl: './actuadores.component.html',
    styleUrls: ['./actuadores.component.css']
})
export class ActuadoresComponent implements OnInit {
    selectedValue = 'Enraizamiento';
    aire = '1';
    motor = '1';
    start = false;
    calefactor = '1';
    ventilador: any;
    alertaTemperatura: any;
    alertaHumedad: any;
    deshumificador: any;
    humificador = '1';
    alertaNivel = '1';
    bomba: any;
    phElevado: any;
    phBajo: any;
    alertaPh = '1';

    constructor() {
    }

    ngOnInit() {
    }

}
