import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(private http: HttpClient) {}

	POST(link: string, postObj, options = {}) {
		return this.http.post(link, postObj, options);
	}

	GET(link: string, options = {}): Observable<any> {
		return this.http.get(link, options);
	}

	DELETE(link: string, options = {}): Observable<any> {
		return this.http.delete(link, options);
	}
}
