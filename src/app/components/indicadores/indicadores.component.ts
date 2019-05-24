import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatlabService} from '../../services/matlab.service';
import {Indicadores} from '../../models/indicadores';

@Component({
    selector: 'app-indicadores',
    templateUrl: './indicadores.component.html',
    styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit, OnDestroy {

    indicadores: Indicadores = new Indicadores();
    threadVerificacion: any;
    selectedValue: string;

    start: boolean;
    stop: boolean;


    constructor(private matlabService: MatlabService) {
    }

    getIndicadores() {
        this.matlabService.getIndicadores().subscribe(res => {
            Object.assign(this.indicadores, res);
            this.start = this.indicadores.start.toString() === '1';
            this.stop = !this.start;
        });
    }

    setIndicadores() {
        this.indicadores.start = this.start ? 1 : 0;
        this.matlabService.postIndicadores(this.indicadores).subscribe();
    }

    ngOnInit() {
        this.threadVerificacion = setInterval(function() {
            this.getIndicadores();
        }.bind(this), 1000);
    }

    ngOnDestroy() {
        clearInterval(this.threadVerificacion);
    }

    setStart() {
        this.start = true;
        this.stop = false;
        this.setIndicadores();
    }

    setStop() {
        this.start = false;
        this.stop = true;
        this.setIndicadores();
    }

    setEnraizamiento() {
        this.indicadores.enraizamiento = 1;
        this.indicadores.floracion = 0;
        this.indicadores.vegetativo = 0;
        this.setIndicadores();
    }

    setFloracion() {
        this.indicadores.enraizamiento = 0;
        this.indicadores.floracion = 1;
        this.indicadores.vegetativo = 0;
        this.setIndicadores();
    }

    setVegetativo() {
        this.indicadores.enraizamiento = 0;
        this.indicadores.floracion = 0;
        this.indicadores.vegetativo = 1;
        this.setIndicadores();
    }
}
