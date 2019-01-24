import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Collection } from './collection';

@Component({
  selector: 'mon-collection',
  templateUrl: 'collection.component.html',
  styleUrls: ['collection.component.sass']
})
export class CollectionComponent {
  private collection: Collection;
  private isHandset$: Observable<boolean>;
  private sidenav: ElementRef;
  private searchTerms: String;

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.isHandset$ = this.appService.getIsHandset();
    this.sidenav = this.appService.getSidenav();
    let id;
    this.activatedRoute.params.subscribe(params => 
      id = params.id);
    this.collection = new Collection(id, 'Todo');
  }
}