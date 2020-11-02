import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  urlTheMovieDB = `https://api.themoviedb.org/3/list/1?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=fr-FR`;
  movies$: Observable<any>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.movies$ = this.httpClient.get(this.urlTheMovieDB);
  }
}
