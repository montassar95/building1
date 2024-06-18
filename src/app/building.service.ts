import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BuildingService {
  constructor() {}

  loadScript(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.onload = () => {
        console.log('Script loaded successfully');
        resolve();
      };
      script.onerror = (error) => {
        console.error('Script loading error:', error);
        reject(error);
      };
      document.head.appendChild(script);
    });
  }
}
