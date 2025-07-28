import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MATERIAL_MODULES = [MatInputModule, MatFormFieldModule]

@Component({
  selector: 'app-filter',
  imports: [MATERIAL_MODULES, FormsModule],
  standalone: true,
  template: `
     <mat-form-field>
        <mat-label>{{label()}}</mat-label>
        <input matInput
        [(ngModel)]="filter"
        [placeholder]="placeholder()">
     </mat-form-field>
  `
  ,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
        .mat-mdc-form-field {
          width: 100%;
          font-size: 14px; } `
  ]
})



export class FilterComponent {
  filter = model("");
  label = input<string>("filter");
  placeholder = input<string>("search...");

}
