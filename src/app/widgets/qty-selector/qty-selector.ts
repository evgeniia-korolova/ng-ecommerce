import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-qty-selector',
  imports: [MatButtonModule, MatIcon],
  templateUrl: './qty-selector.html',
  styleUrl: './qty-selector.scss',
})
export class QtySelector {
  quantity = input(0);
  qtyUpdated = output<number>()
}
