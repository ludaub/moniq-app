import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideAnimation =
  trigger('collectionAnimation', [
    state('collection',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('1.2s ease-in')
    ]),
    transition(':leave', [
      animate('1.5s ease-out', style({
        opacity: 0,
        transform: 'translateX(0%)'
      }))
    ])
  ]);