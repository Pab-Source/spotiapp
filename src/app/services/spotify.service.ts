import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class SpotifyService {
	constructor(private http: HttpClient) {}

	getNewReleases() {
		const headers = new HttpHeaders({
			Authorization:
				'Bearer BQBRji3pRnIr52SirVSK2MXZDPPv-pxd51LuczMFBr5HkMsRuMuN6idtYiDNwOu7qRKrD2Evw7F20tEJRiM',
		});
		return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
			headers,
		});
	}
}
