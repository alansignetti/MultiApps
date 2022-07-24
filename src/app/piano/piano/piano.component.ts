import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss'],
})
export class PianoComponent implements OnInit {
  public audio = new Audio();
  public audioFiles: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.cargarSonido();
  }

  public cargarSonido() {
    for (let i = 1; i <= 7; i++) {
      this.audioFiles.push(
        'https://raw.githubusercontent.com/alansignetti/MultiApps/main/src/assets/piano/Sounds/note' +
          i +
          '.wav'
      );
      this.resolve();
    }
  }

  public aplicarSonido(arg: number) {
    const sonido = new Audio();

    sonido.src = this.audioFiles[arg - 1];
    sonido.load();
    sonido.play();
    console.log(sonido.src);
  }

  private preloadAudio = (url: string): Promise<string> => {
    const audio = new Audio();
    audio.src = url;
    return new Promise((res, req) =>
      audio.addEventListener('canplaythrough', () => res(url), false)
    );
    // once file is loaded, the promise will be resolved
    // the file will be kept by the browser as cache
  };
  private resolve = (): Promise<string[]> =>
    Promise.all(this.audioFiles.map(this.preloadAudio));
}
