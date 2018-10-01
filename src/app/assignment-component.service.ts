import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';

@Injectable({
	providedIn: 'root'
})
export abstract class AssignmentComponentService {
	constructor(protected resolver: ComponentFactoryResolver) {}
	createComponent(entry) {}
}
