
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import WaveSurfer, { WaveSurferOptions } from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {
  @ViewChild('wave') waveContainer!: ElementRef;
   ws!: WaveSurfer;

  @Input({ required: true}) options!: WaveSurferOptions;

  ngAfterViewInit() {
    // Initialize WaveSurfer after the view is initialized
 this.ws = WaveSurfer.create({
    ...this.options,
    container: this.waveContainer.nativeElement,

    })

}

playPause()
{
  this.ws.playPause();
}


}
