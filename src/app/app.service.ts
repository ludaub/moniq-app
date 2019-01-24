import { ElementRef, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  private isHandset$: Observable<boolean>;
  private sidenav: ElementRef;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  }

  public getIsHandset(): Observable<boolean> {
    return this.isHandset$;
  }
  
  public getSidenav(): ElementRef {
    return this.sidenav;
  }

  public setSidenav(sidenav: ElementRef) {
    this.sidenav = sidenav;
  }
}