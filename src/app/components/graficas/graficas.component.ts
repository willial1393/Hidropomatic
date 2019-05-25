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
            labels: [],
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
            labels: [],
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
            this.graficas.temperatura = this.graficas.temperatura.reverse();
            this.graficas.ventilador = this.graficas.ventilador.reverse();
            // Temperatura
            const datosTemperatura: number[] = this.graficas.temperatura.map(x => {
                return x.dato;
            });
            const labelsTemperatura: number[] = [];
            for (let i = 0; i < datosTemperatura.length; i++) {
                labelsTemperatura.push(i + 1);
            }
            this.temperatura.datasets[0].data = datosTemperatura;
            this.temperatura.labels = labelsTemperatura;
            this.chartTemperatura.refresh();

            // Ventilador
            const datosVentilador: number[] = this.graficas.ventilador.map(x => {
                return x.dato;
            });
            const labelsVentilador: number[] = [];
            for (let i = 0; i < datosVentilador.length; i++) {
                labelsVentilador.push(i + 1);
            }
            this.ventilador.datasets[0].data = datosVentilador;
            this.ventilador.labels = labelsVentilador;
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
