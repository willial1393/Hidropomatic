import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import {ActuadoresComponent} from './components/actuadores/actuadores.component';
import {SensoresComponent} from './components/sensores/sensores.component';
import {CardModule} from 'primeng/card';
import {
    AccordionModule,
    AccordionTab,
    ButtonModule,
    ChartModule,
    FieldsetModule,
    MessageService,
    ProgressBarModule,
    RadioButtonModule,
    ToggleButtonModule
} from 'primeng/primeng';
import {GraficasComponent} from './components/graficas/graficas.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
    declarations: [
        AppComponent,
        ActuadoresComponent,
        SensoresComponent,
        GraficasComponent
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
        ToggleButtonModule,
        ProgressBarModule,
        ChartModule,
        ToastModule,
        AccordionModule
    ],
    providers: [
        MessageService,
        AccordionTab
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
