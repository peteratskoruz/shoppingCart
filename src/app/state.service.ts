import { Injectable } from '@angular/core';

@Injectable()
export class StateService {

  private states = [
      'Delhi',
      'Tamilnadu',
      'Kerala',
      'Karnataka',
      'Andra',
      'Telungana'
  ]

  constructor() { }

  getStates() {
    return this.states;
  }

  getFilteredStates(query: string) {
    return this.states.filter(state => {
        return state.toLowerCase().startsWith(query.toLowerCase());
    });
  }

}
