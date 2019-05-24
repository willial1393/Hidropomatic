import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MessageService} from 'primeng/api';
import {MatlabService} from '../../services/matlab.service';
import {Graficas} from '../../models/graficas';
import {UIChart} from 'primeng/chart';

@Component({
    selector: 'app-graficas',
    templateUrl: './graficas.component.html',
    styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit, OnDestroy {

    @ViewChild('charTemperatura') chartTemperatura: UIChart;
    @ViewChild('charVentilador') chartVentilador: UIChart;

    graficas: Graficas = new Graficas();
    threadVerificacion: any;

    temperatura: any;
    ventilador: any;

    constructor(private messageService: MessageService,
                private matlabService: MatlabService) {
        this.temperatura = {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [
                {
                    label: 'Grados celsius (°C)',
                    data: [],
                    fill: true,
                    borderColor: '#4bc0c0'
                }
            ]
        };
        this.ventilador = {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [
                {
                    label: 'Voltaje (V)',
                    data: [],
                    fill: true,
                    borderColor: '#565656'
                }
            ]
        };
    }

    getGraficas() {
        this.matlabService.getGraficas().subscribe(res => {
            Object.assign(this.graficas, res);
            const datosTemperatura = this.graficas.temperatura.map(x => {
                return x.dato;
            });
            const datosVentilador = this.graficas.ventilador.map(x => {
                return x.dato;
            });
            this.temperatura.datasets[0].data = datosTemperatura;
            this.ventilador.datasets[0].data = datosVentilador;
            this.chartTemperatura.refresh();
            this.chartVentilador.refresh();
        });
    }

    ngOnInit() {
        this.threadVerificacion = setInterval(function() {
            this.getGraficas();
        }.bind(this), 1000);
    }

    ngOnDestroy() {
        clearInterval(this.threadVerificacion);
    }

    selectDataTemperatura(event: any) {
        this.messageService.add({
            severity: 'info',
            summary: 'Data Selected',
            detail: this.temperatura.datasets[event.element._datasetIndex].data[event.element._index]
        });
    }

    selectDataVentilador(event: any) {
        this.messageService.add({
            severity: 'info',
            summary: 'Data Selected',
            detail: this.ventilador.datasets[event.element._datasetIndex].data[event.element._index]
        });
    }
}
