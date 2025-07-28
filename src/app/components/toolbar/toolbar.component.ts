import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [MatIconModule, MatButtonModule, MatToolbarModule]

@Component({
  selector: 'app-toolbar',
  imports: [MATERIAL_MODULES],
  templateUrl: './toolbar.component.html',
  styles: `
  .toolbar{
    display:flex;
    justify-content:space-between;
}
`
})
export class ToolbarComponent {
  openModal() {
    alert("Abriendo modal")
  }
}
