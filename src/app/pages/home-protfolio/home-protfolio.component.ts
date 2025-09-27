import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-protfolio',
  templateUrl: './home-protfolio.component.html',
  styleUrls: ['./home-protfolio.component.scss']
})
export class HomeProtfolioComponent implements OnInit {

  isVisible: boolean = false;


  constructor() { }

  ngOnInit(): void {

  }


  // Lắng nghe sự kiện scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    const start = window.scrollY;
    const duration = 600; // thời gian (ms)
    const startTime = performance.now();
    const easeInOutCubic = (t: number): number =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, start * (1 - easedProgress));

      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}

