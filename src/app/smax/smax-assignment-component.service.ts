import { SmaxAssignmentComponent } from './smax-assignment/smax-assignment.component';
import { AssignmentComponentService } from './../assignment-component.service';
import { Injectable, ComponentFactoryResolver } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SmaxAssignmentComponentService extends AssignmentComponentService {
	constructor(protected resolver: ComponentFactoryResolver) {
		super(resolver);
	}

	createComponent(entry: any) {
		const factory = this.resolver.resolveComponentFactory(SmaxAssignmentComponent);
		const ref = entry.createComponent(factory);
		ref.instance.message = 'From service';
	}
}
