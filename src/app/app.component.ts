import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Garage-Oto';
  isVisible: boolean = false;

  scrollToFooter(event: Event) {
    event.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
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
