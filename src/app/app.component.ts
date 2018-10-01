import { ConfigService } from './config.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'dynamic-components';
	region: String = 'siebel';

	constructor(private config: ConfigService) {}

	onChange() {
		this.config.setRegion(this.region);
	}
}
