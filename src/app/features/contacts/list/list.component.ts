import { Component } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { Contacts } from '@interfaces/contacts';
import { contacts } from 'src/app/data/contacts';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent],
  template: `
     <app-grid
        [displayedColumns]="displayedColumns"
        [data]="data"
      />
`,
  styleUrl: './list.component.css'
})
export class ListComponent {
  displayedColumns: string[] = ['id', 'name', 'phone_number', 'address', 'instagram'];
  data: Contacts[] = contacts;
}
