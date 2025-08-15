import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ToggleThemeFabComponent } from './domains/shared/components/toggle-theme-fab/toggle-theme-fab.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, ToggleThemeFabComponent],
})
export class AppComponent implements OnInit{
  title = 'store';

  ngOnInit(): void {
    initFlowbite();
  }

}
