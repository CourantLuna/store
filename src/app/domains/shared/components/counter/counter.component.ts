import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input ({ required: true }) duration: number = 0;
  @Input ({ required: true }) message: string = '';

  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // Initialization logic can go here if needed
    //NO ASYNC OPERATIONS
    // BEFORE RENDERING
    // Run just once
    console.log(`Counter initialized with duration: ${this.duration} and message: ${this.message}`);
    console.log(`-`.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //before and during rendering
    console.log(`ngOnChanges`);
    console.log(`-`.repeat(10));
    console.log(`Changes detected:`, changes);
    const duration = changes['duration'];
    if(duration !== undefined && duration.previousValue !== duration.currentValue) {
      console.log(`Duration changed from ${duration.previousValue} to ${duration.currentValue}`);
    }

  }

  ngOnInit(){
    //after rendering
    // run just once
    //async operations then subscribe ...
    console.log(`ngOnInit`);
    console.log(`-`.repeat(10));
    console.log(`Duration =>: ${this.duration} and message =>: ${this.message}`);

    this.counterRef = window.setInterval(() => {
      this.counter.update(value => value + 1);
      console.log(`Counter updated: ${this.counter()}`);
    }, 1000);
  }

  ngAfterViewInit(){
    //after rendering
    // children are ready / rendered
    console.log(`ngAfterViewInit`);
    console.log(`-`.repeat(10));
  }

  ngOnDestroy(){
    //cleanup
    console.log(`ngOnDestroy`);
    console.log(`-`.repeat(10));

  window.clearInterval(this.counterRef);
  // this.counter.set(0);
  }

}
