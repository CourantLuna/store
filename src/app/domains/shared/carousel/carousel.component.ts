import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements AfterViewInit, OnChanges {
  /** URLs de imágenes */
  @Input({ required: true }) images: string[] = [];
  /** Alto del carrusel vía clases Tailwind (ajustable) */
  @Input() heightClass = 'h-58';

  @ViewChild('root', { static: true }) rootEl!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    // Inicializa Flowbite cuando el DOM ya está renderizado
    initFlowbite();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['images'] && !changes['images'].firstChange) {
      // Re-inicializa si cambian las imágenes
      queueMicrotask(() => initFlowbite());
    }
  }

  trackByIndex(i: number) { return i; }
}
