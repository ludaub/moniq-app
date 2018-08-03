import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'moniq-nav',
  templateUrl: './moniq-nav.component.html',
  styleUrls: ['./moniq-nav.component.css']
})
export class MoniqNavComponent {
  items = [
    {
      label: 'All',
      icon: 'list',
      href: '#'
    },
    {
      label: 'Inbox',
      icon: 'inbox',
      href: '#'
    },
    {
      label: 'Favorites',
      icon: 'favorite_outline',
      href: '#'
    },
    {
      label: 'Trash',
      icon: 'delete_outline',
      href: '#'
    },
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {}
  
}
