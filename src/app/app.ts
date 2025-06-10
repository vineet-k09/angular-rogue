import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Overlay } from './overlay/overlay';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Overlay],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'angular-rogue';
  ngAfterViewInit(): void {
    const cursor = document.getElementById('cursor');
    const trailContainer = document.querySelector('.cursor-trail-container');
  
    document.addEventListener('mousemove', (e) => {
      if (!cursor || !trailContainer) return;
  
      // Use offset so the transform isn't reset
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
  
      setTimeout(() => {
      // Create the heart and position it properly
        const heart = document.createElement('div');
        heart.style.position = 'fixed';
        heart.className = 'heart';
        heart.innerHTML = '♡';
        heart.style.color = '#ff4ecd';
        heart.style.transform = 'scale(2)';
        heart.style.left = `${e.clientX-10}px`;
        heart.style.top = `${e.clientY-10}px`;
        trailContainer.appendChild(heart);
      // Remove the heart after animation
        setTimeout(() => 
          heart.style.transform = 'scale(0.8)', 200);
        setTimeout(() => 
          heart.style.transform = 'scale(0.5)', 300);
        setTimeout(() =>
          heart.remove(), 500);
        // heart.remove(), 200);
        }, 200);
      
    });
  
    // Hover feedback for links/buttons
    const hoverTargets = document.querySelectorAll('a, button, [role="button"]');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursor) cursor.style.backgroundColor = '#ffffff';
      });
      el.addEventListener('mouseleave', () => {
        if (cursor) cursor.style.backgroundColor = '#ff4ecd';
      });
    });

    let heartInterval = 0;

    document.addEventListener('mouseenter', () => {
    const ripple = document.querySelector('.ripple');
    if (ripple) {
      heartInterval = setInterval(() => {
        console.log('Ripple effect initialized');
        const heart2 = document.createElement('div');
        heart2.className = 'heart2';
        heart2.innerHTML = '♡';
        ripple.appendChild(heart2);

      heart2.style.position = 'fixed';
      heart2.style.left = `${Math.random() * window.innerWidth}px`;
      heart2.style.bottom = '0';
      heart2.style.transition = 'all 2s ease-out';
      
      // trigger float
      setTimeout(() => {
        heart2.style.bottom = `${Math.random() * window.innerHeight}px`;
        heart2.style.opacity = '0';
      }, 10);

      // remove after animation
      setTimeout(() => {
        heart2.remove();
      }, 2100);
    }, 300);
  }
});

document.addEventListener('mouseleave', () => {
  clearInterval(heartInterval);
});
  }
}