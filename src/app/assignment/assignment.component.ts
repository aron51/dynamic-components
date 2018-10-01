import { AssignmentComponentService } from './../assignment-component.service';
import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

@Component({
	selector: 'app-assignment',
	templateUrl: './assignment.component.html',
	styleUrls: [ './assignment.component.css' ]
})
export class AssignmentComponent implements OnInit {
	@ViewChild('assignmentContainer', { read: ViewContainerRef })
	entry: ViewContainerRef;

	constructor(private assignmentComponentService: AssignmentComponentService) {}

	ngOnInit() {
		this.entry.clear();
		this.assignmentComponentService.createComponent(this.entry);
	}
}
