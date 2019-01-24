import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app.service';
import { NavService } from './nav.service';

@Component({
  selector: 'mon-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.sass']
})
export class NavComponent {
  private items: any[];
  private expanded: boolean;
  private isHandset$: Observable<boolean>;
  @ViewChild('sidenav') private sidenav: ElementRef;
    
  constructor(private breakpointObserver: BreakpointObserver, private appService: AppService, private navService: NavService) {}
  
  ngOnInit() {
    this.isHandset$ = this.appService.getIsHandset();
    this.appService.setSidenav(this.sidenav);
    this.expanded = true;
    this.navService.getItems().subscribe(data => {
      this.items = data.items
    });
  }

  private switchView() {
    this.expanded = !this.expanded;
  }
}
