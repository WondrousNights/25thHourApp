import { hostViewClassName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Howl } from 'howler';


export interface Track{
  name: string;
  path: string;
}

@Component({
  selector: 'app-ambient-mixer',
  templateUrl: './ambient-mixer.page.html',
  styleUrls: ['./ambient-mixer.page.scss'],
})
export class AmbientMixerPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  ToHome()
  {
    this.route.navigate(['/home-directory']);
  }


  playlist: Track[] = [
    {
      name: 'Airport',
      path: 'src\assets\ambient-tracks\Airport.wav'
    },
    
    {
      name: 'Campfire',
      path: 'src\assets\ambient-tracks\Campfire.wav'
    },
    
    {
      name: 'Rain',
      path: 'src\assets\ambient-tracks\Rain.wav'
    },
    
    {
      name: 'Thunder',
      path: 'src\assets\ambient-tracks\Thunder.wav'
    },
    
    {
      name: 'Spaceship',
      path: 'src\assets\ambient-tracks\Spaceship.wav'
    },
    
    {
      name: 'Street',
      path: 'src\assets\ambient-tracks\Street.wav'
    },
    
    {
      name: 'RainyAirport',
      path: 'src\assets\ambient-tracks\RainyAirport.mp3'
    },
    
    {
      name: 'SummerCamping',
      path: 'src\assets\ambient-tracks\SummerCamping.mp3'
    },
    
    {
      name: 'WorkDay',
      path: 'src\assets\ambient-tracks\WorkDay.mp3'
    }

  ];

  
  player: Howl = null;

  start(track: number){
    if (this.player) {
      this.player.stop();
    }
    console.log([this.playlist[track].name]);
    this.player = new Howl({
      src: [this.playlist[track].path]
    });
    this.player.play();
  }

  stop(track: Track){

  }

}
