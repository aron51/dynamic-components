import { ConfigService } from './config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ComponentFactoryResolver } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SmaxAssignmentComponent } from './smax/smax-assignment/smax-assignment.component';
import { SiebelAssignmentComponent } from './siebel/siebel-assignment/siebel-assignment.component';
import { SiebelAssignmentComponentService } from './siebel/siebel-assignment-component.service';
import { SmaxAssignmentComponentService } from './smax/smax-assignment-component.service';
import { AssignmentComponentService } from './assignment-component.service';

const ROUTES: Routes = [ { path: 'assignment', component: AssignmentComponent } ];

let region;

function configFactory(http: HttpClient) {
	return () =>
		http.get('/assets/config.json').subscribe((data: { [region: string]: string }) => {
			region = data.region;
		});
}

export function regionFactory(resolver: ComponentFactoryResolver, http: HttpClient) {
	if (region === 'siebel') {
		return new SiebelAssignmentComponentService(resolver);
	} else {
		return new SmaxAssignmentComponentService(resolver);
	}
}

@NgModule({
	declarations: [
		AppComponent,
		AssignmentComponent,
		DynamicComponent,
		SmaxAssignmentComponent,
		SiebelAssignmentComponent
	],
	imports: [ BrowserModule, RouterModule.forRoot(ROUTES), FormsModule, HttpClientModule ],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: configFactory,
			deps: [ HttpClient ],
			multi: true
		},
		{
			provide: AssignmentComponentService,
			useFactory: regionFactory,
			deps: [ ComponentFactoryResolver, HttpClient ]
		},
		ConfigService
	],
	entryComponents: [ SmaxAssignmentComponent, SiebelAssignmentComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
