import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  ToHome()
  {
    this.route.navigate(['/home-directory']);
  }
}
