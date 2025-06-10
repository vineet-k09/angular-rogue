import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
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
  }
}