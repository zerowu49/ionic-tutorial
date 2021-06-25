import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.scss'],
})
export class Sample2Component implements OnInit {
  @Input() recipe: Recipe;
  @Input() test: string;
  constructor() { }

  ngOnInit() {}

}
