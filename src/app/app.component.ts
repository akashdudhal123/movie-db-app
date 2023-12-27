import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movie-db-app';

  ngOnInit(): void {
    sessionStorage.setItem('token', 'abcd@123123');
    sessionStorage.clear();
  }

}
