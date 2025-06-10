import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  Name: string = '';
  formAction(): void {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    if (nameInput && nameInput.value) {
      this.Name = nameInput.value;
      localStorage.setItem('name', this.Name);
    }
  }

  getName(): string | null {
    return localStorage.getItem('name');
  }
}
