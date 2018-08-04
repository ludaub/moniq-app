import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mon-collection-viewer',
  templateUrl: 'collection-viewer.component.html',
  styleUrls: ['collection-viewer.component.sass']
})
export class CollectionViewerComponent {
  private id: String;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => 
      this.id = params.id);
  }
}