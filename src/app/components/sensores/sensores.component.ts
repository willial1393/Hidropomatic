import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sensores',
    templateUrl: './sensores.component.html',
    styleUrls: ['./sensores.component.css']
})
export class SensoresComponent implements OnInit {
    value = 10;
    temperatura: any;
    humedad: any;
    nivel: any;
    ph: any;

    constructor() {
        this.temperatura = {
            labels: ['Grados celsius °C'],
            datasets: [
                {
                    label: 'Temperatura',
                    backgroundColor: '#f50004',
                    borderColor: '#f50004',
                    data: [100]
                }
            ]
        };
        this.humedad = {
            labels: ['Porcentaje (%)'],
            datasets: [
                {
                    label: 'Humedad',
                    backgroundColor: '#86f5f2',
                    borderColor: '#86f5f2',
                    data: [80]
                }
            ]
        };
        this.nivel = {
            labels: ['Porcentaje (%)'],
            datasets: [
                {
                    label: 'Nivel 1',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65]
                },
                {
                    label: 'Nivel 2',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [30]
                }
            ]
        };

        this.ph = {
            labels: ['pH'],
            datasets: [
                {
                    label: 'pH',
                    backgroundColor: '#f5dc00',
                    borderColor: '#f5dc00',
                    data: [8]
                }
            ]
        };
    }

    ngOnInit() {
    }

}
