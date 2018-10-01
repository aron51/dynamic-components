import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ConfigService {
	regionEmitter: EventEmitter<String>;
	private region: String = 'siebel';
	constructor() {
		this.regionEmitter = new EventEmitter<String>();
		this.regionEmitter.emit(this.region);
	}

	setRegion(region) {
		this.region = region;
		this.regionEmitter.emit(this.region);
	}
}
