import { ConfigService } from './config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ComponentFactoryResolver } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SmaxAssignmentComponent } from './smax/smax-assignment/smax-assignment.component';
import { SiebelAssignmentComponent } from './siebel/siebel-assignment/siebel-assignment.component';
import { SiebelAssignmentComponentService } from './siebel/siebel-assignment-component.service';
import { SmaxAssignmentComponentService } from './smax/smax-assignment-component.service';
import { AssignmentComponentService } from './assignment-component.service';

const ROUTES: Routes = [ { path: 'assignment', component: AssignmentComponent } ];

export function apiFactory(resolver: ComponentFactoryResolver, config: ConfigService) {
	const data = 'siebel';
	if (data === 'siebel') {
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
	imports: [ BrowserModule, RouterModule.forRoot(ROUTES), FormsModule ],
	providers: [
		{
			provide: AssignmentComponentService,
			useFactory: apiFactory,
			deps: [ ComponentFactoryResolver, ConfigService ]
		},
		ConfigService
	],
	entryComponents: [ SmaxAssignmentComponent, SiebelAssignmentComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
