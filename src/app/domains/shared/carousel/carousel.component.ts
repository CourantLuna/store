import { Component, AfterViewInit, ElementRef, inject, signal, Input } from '@angular/core';
import { Carousel, type CarouselOptions } from 'flowbite';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements AfterViewInit {
  private elRef = inject(ElementRef);

  @Input() images: string[] = [
    'https://picsum.photos/640/640?r=1',
    'https://picsum.photos/640/640?r=2',
    'https://picsum.photos/640/640?r=3',
    'https://picsum.photos/640/640?r=4',
    'https://picsum.photos/640/640?r=5',
  ];

  private carousel!: Carousel;

    isStatic = signal(true);

  toggleMode() {
    this.isStatic.set(!this.isStatic());
    if (this.isStatic()) {
      this.pausarCarrousel();
    } else {
      this.carousel.cycle();
    }
  }

  ngAfterViewInit() {
    const el = this.elRef.nativeElement.querySelector('#my-carousel') as HTMLElement;

    const options: CarouselOptions = {
      // desactiva autoplay
      interval: 0,
    };

    // 👇 OJO: options va en el 3er argumento
    this.carousel = new Carousel(el, undefined, options);
    this.carousel.cycle()
    // autoplay solo cuando hay hover
  }

  pausarCarrousel() {
    this.carousel.pause();
  }
}


