
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MoniqNavComponent } from './moniq-nav.component';

describe('MoniqNavComponent', () => {
  let component: MoniqNavComponent;
  let fixture: ComponentFixture<MoniqNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MoniqNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoniqNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
