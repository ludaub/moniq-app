import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collection } from './collection';

@Component({
  selector: 'mon-collection-viewer',
  templateUrl: 'collection-viewer.component.html',
  styleUrls: ['collection-viewer.component.sass']
})
export class CollectionViewerComponent {
  private collection: Collection;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    let id;
    this.activatedRoute.params.subscribe(params => 
      id = params.id);
    this.collection = new Collection(id, 'Todo');
  }
}