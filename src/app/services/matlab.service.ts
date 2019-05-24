import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Sensores} from '../models/sensores';
import {Graficas} from '../models/graficas';
import {Indicadores} from '../models/indicadores';

@Injectable({
    providedIn: 'root'
})
export class MatlabService {

    url = environment.endpoint;
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private http: HttpClient) {
    }

    getSensores() {
        return this.http.get(this.url + 'sensores/', {headers: this.headers});
    }

    postSensores(sensores: Sensores) {
        return this.http.post(this.url + 'sensores/', sensores, {headers: this.headers});
    }

    getGraficas() {
        return this.http.get(this.url + 'graficas/', {headers: this.headers});
    }

    postGraficas(graficas: Graficas) {
        return this.http.post(this.url + 'graficas/', graficas, {headers: this.headers});
    }

    getIndicadores() {
        return this.http.get(this.url + 'indicadores/', {headers: this.headers});
    }

    postIndicadores(indicadores: Indicadores) {
        return this.http.post(this.url + 'indicadores/', indicadores, {headers: this.headers});
    }
}
