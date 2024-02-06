import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CellRendererComponent, CellRendererParams } from 'angular-mko-lib';

@Component({
  selector: 'app-crime-date',
  standalone: true,
  imports: [
    CommonModule,
  ],
  providers: [DatePipe],
  templateUrl: './crime-date.component.html',
  styleUrl: './crime-date.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrimeDateComponent implements CellRendererComponent {
  public transformedDate?: string | null; 

  constructor(private datePipe: DatePipe) {}

  cellInit(params: CellRendererParams) {
    this.transformedDate = this.datePipe.transform(params.data);
  }
}
