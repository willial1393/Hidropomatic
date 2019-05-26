import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Sensores} from '../../models/sensores';
import {UIChart} from 'primeng/chart';
import {MatlabService} from '../../services/matlab.service';

@Component({
    selector: 'app-sensores',
    templateUrl: './sensores.component.html',
    styleUrls: ['./sensores.component.css']
})
export class SensoresComponent implements OnInit, OnDestroy {

    @ViewChild('chartTemperatura') chartTemperatura: UIChart;
    @ViewChild('chartHumendad') chartHumendad: UIChart;
    @ViewChild('chartNivel') chartNivel: UIChart;
    @ViewChild('chartPH') chartPH: UIChart;

    temperatura: any;
    humedad: any;
    nivel: any;
    ph: any;

    sensores: Sensores = new Sensores();
    threadVerificacion: any;
    optionsTemperatura: any;
    optionsHumedad: any;
    optionsNivel: any;
    optionsPH: any;

    constructor(private matlabService: MatlabService) {
        this.optionsTemperatura = {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        stepSize: 5,
                        max: 40
                    }
                }]
            }
        };
        this.temperatura = {
            labels: ['Grados celsius °C'],
            datasets: [
                {
                    label: 'Temperatura',
                    backgroundColor: '#f50004',
                    borderColor: '#f50004',
                    data: [0]
                }
            ]
        };
        this.optionsHumedad = {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 100
                    }
                }]
            }
        };
        this.humedad = {
            labels: ['Porcentaje (%)'],
            datasets: [
                {
                    label: 'Humedad',
                    backgroundColor: '#86f5f2',
                    borderColor: '#86f5f2',
                    data: [0]
                }
            ]
        };
        this.optionsNivel = {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 100
                    }
                }]
            }
        };
        this.nivel = {
            labels: ['Porcentaje (%)'],
            datasets: [
                {
                    label: 'Nivel 1',
                    backgroundColor: '#42A5F5',
                    borderColor: '#42A5F5',
                    data: [0]
                },
                {
                    label: 'Nivel 2',
                    backgroundColor: '#3755f5',
                    borderColor: '#3755f5',
                    data: [0]
                }
            ]
        };
        this.optionsPH = {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 14,
                        stepSize: 2
                    }
                }]
            }
        };
        this.ph = {
            labels: ['pH'],
            datasets: [
                {
                    label: 'pH',
                    backgroundColor: '#f5dc00',
                    borderColor: '#f5dc00',
                    data: [0]
                }
            ]
        };
    }

    getSensores() {
        this.matlabService.getSensores().subscribe(res => {
            Object.assign(this.sensores, res);
            this.temperatura.datasets[0].data = [this.sensores.temperatura];
            this.humedad.datasets[0].data = [this.sensores.humedad];
            this.nivel.datasets[0].data = [this.sensores.nivel1];
            this.nivel.datasets[1].data = [this.sensores.nivel2];
            this.ph.datasets[0].data = [this.sensores.ph];

            this.chartTemperatura.refresh();
            this.chartHumendad.refresh();
            this.chartNivel.refresh();
            this.chartPH.refresh();
        });
    }

    ngOnInit() {
        this.threadVerificacion = setInterval(function() {
            this.getSensores();
        }.bind(this), 1000);
    }

    ngOnDestroy() {
        clearInterval(this.threadVerificacion);
    }

}
