import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss'],
})
export class PianoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public aplicarSonido(arg: number) {
    const audio = new Audio();
    audio.src = '../../../assets/piano/Sounds/note' + arg + '.wav';
    audio.load();
    audio.play();
  }
}
