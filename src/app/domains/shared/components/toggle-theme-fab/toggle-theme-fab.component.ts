import { Component, AfterViewInit } from '@angular/core';

import { signal } from '@angular/core';

@Component({
  selector: 'app-toggle-theme-fab',
  standalone: true,
  imports: [],
  templateUrl: './toggle-theme-fab.component.html',
  styleUrls: ['./toggle-theme-fab.component.css']
})
export class ToggleThemeFabComponent implements AfterViewInit {
  isDark = signal(
    localStorage.getItem('color-theme') === 'dark' ||
    (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  ngAfterViewInit(): void {
    this.applyTheme();
  }

  toggleTheme() {
    this.isDark.set(!this.isDark());
    document.documentElement.classList.toggle('dark', this.isDark());
    localStorage.setItem('color-theme', this.isDark() ? 'dark' : 'light');
  }

  private applyTheme() {
    document.documentElement.classList.toggle('dark', this.isDark());
  }
}
