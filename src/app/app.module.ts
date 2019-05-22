import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import {ActuadoresComponent} from './components/actuadores/actuadores.component';
import {SensoresComponent} from './components/sensores/sensores.component';
import {CardModule} from 'primeng/card';
import {ButtonModule, FieldsetModule, RadioButtonModule, ToggleButtonModule} from 'primeng/primeng';

@NgModule({
    declarations: [
        AppComponent,
        ActuadoresComponent,
        SensoresComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        PanelModule,
        CardModule,
        FieldsetModule,
        RadioButtonModule,
        ButtonModule,
        ToggleButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
