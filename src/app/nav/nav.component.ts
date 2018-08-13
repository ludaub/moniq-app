import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavService } from './nav.service';

@Component({
  selector: 'mon-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.sass']
})
export class NavComponent {
  private items: any[];
  private expanded: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private navService: NavService) {}
  
  ngOnInit() {
    this.expanded = true;
    this.navService.getItems().subscribe(data => {
      this.items = data.items
    });
  }

  private switchView() {
    this.expanded = !this.expanded;
  }
}
