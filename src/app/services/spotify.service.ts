import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers: HttpHeaders = new HttpHeaders({
      Authorization:
        "Bearer BQBZnRzGcm6xc2Q_Ntt-A9nkuiOem1wEQELhSsHyAwnHxtjBPC3a5CZxX-F2FUsO4UbkanwAzUSnV5XNKsE",
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases").pipe(
      map((data) => data["albums"].items)
    );
  }

  getArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(
      map((data) => data["artists"].items)
    );
  }
}
