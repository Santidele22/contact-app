import { Component, effect, input, signal, viewChild } from '@angular/core';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { FilterComponent } from './filter/filter.component';

const MATERIAL_MODULES = [MatPaginatorModule, MatTableModule, MatSortModule]


@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MATERIAL_MODULES, FilterComponent],
  templateUrl: './grid.component.html',
  styles: `
      table {
       width: 100%;
        padding:1rem;
      }

      td, th {
        width: 25%;
      }
      `
})


export class GridComponent<T> {
  displayedColumns = input.required<string[]>()
  data = input.required<T[]>()

  dataSource = new MatTableDataSource<T>();

  private readonly _sort = viewChild.required<MatSort>(MatSort);
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);

  valueToFilter = signal('')


  constructor() {
    effect(() => {
      if (this.valueToFilter()) {
        this.dataSource.filter = this.valueToFilter()
      } else {
        this.dataSource.filter = ""
      }
    }, { allowSignalWrites: true })
  }


  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data());
  }
  ngAfterViewInit() {
    this.dataSource.sort = this._sort();
    this.dataSource.paginator = this._paginator();
  }


}
