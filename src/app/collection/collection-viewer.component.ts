import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'mon-collection__viewer',
  templateUrl: 'collection-viewer.component.html',
  styleUrls: ['collection-viewer.component.sass']
})
export class CollectionViewerComponent {
  private id: String;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => 
      this.id = params.id);
  }
}