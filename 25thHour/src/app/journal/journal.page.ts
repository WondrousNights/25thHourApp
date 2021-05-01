import { Component, ViewChild, OnInit} from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private route: Router) { }

  ngOnInit() {
  }
  ToHome()
  {
    this.route.navigate(['/home-directory']);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if(length == 1000)
      {
        event.target.disabled = true;
      }
    }, 500);
  }

  

}


 
