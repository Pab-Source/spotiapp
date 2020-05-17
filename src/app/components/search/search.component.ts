import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "app/services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) {}

  search(termino: string) {
    this.loading = true;
    this.spotify
      .getArtist(termino.toLocaleLowerCase())
      .subscribe((data: any) => {
        this.artistas = data;
        this.loading = false;
      });
  }
}
