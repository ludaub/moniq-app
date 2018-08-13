import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collection } from './collection';

@Component({
  selector: 'mon-collection',
  templateUrl: 'collection.component.html',
  styleUrls: ['collection.component.sass']
})
export class CollectionComponent {
  private collection: Collection;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    let id;
    this.activatedRoute.params.subscribe(params => 
      id = params.id);
    this.collection = new Collection(id, 'Todo');
  }
}