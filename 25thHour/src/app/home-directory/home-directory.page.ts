import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-directory',
  templateUrl: './home-directory.page.html',
  styleUrls: ['./home-directory.page.scss'],
})
export class HomeDirectoryPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  ToAmbientMixer()
  {
    this.route.navigate(['/ambient-mixer']);
  }
}
