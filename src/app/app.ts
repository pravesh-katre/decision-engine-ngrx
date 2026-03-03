import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { addCriteria } from './store/decision/decision.actions';
import { Criteria } from './store/decision/decision.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('decision-engine');

  constructor(private store: Store) {}

  add() {
    const newCriteria: Criteria = {
      id: crypto.randomUUID(),
      name: 'Salary',
      weight: 40
    };

    this.store.dispatch(addCriteria({ criteria: newCriteria }));
  }
}