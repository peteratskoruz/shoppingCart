import { Component, OnInit } from '@angular/core';
import {StateService} from '../../state.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  states= [];
  myInput: FormControl = new FormControl();
  constructor(private service: StateService) { }

  ngOnInit() {
    this.myInput.valueChanges.subscribe(val => {
        this.states = this.service.getFilteredStates(val);
    });

  }

}
