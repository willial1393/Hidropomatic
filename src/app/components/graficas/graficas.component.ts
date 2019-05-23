import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-graficas',
    templateUrl: './graficas.component.html',
    styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {
    temperatura: any;
    ventilador: any;

    temperaturaX = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    temperaturaY = [65, 59, 80, 81, 56, 55, 40, 56, 55, 40];

    ventiladorX = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    ventiladorY = [65, 59, 80, 81, 56, 55, 40, 56, 55, 40];

    constructor(private messageService: MessageService) {
        this.temperatura = {
            labels: this.temperaturaX,
            datasets: [
                {
                    label: 'Grados celsius (°C)',
                    data: this.temperaturaY,
                    fill: false,
                    borderColor: '#4bc0c0'
                }
            ]
        };
        this.ventilador = {
            labels: this.ventiladorX,
            datasets: [
                {
                    label: 'Voltaje (V)',
                    data: this.ventiladorY,
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
    }

    ngOnInit() {
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
