import {
  Component,
  Input,
  OnChanges,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { TableColumn } from '../../types';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss'],
})
export class MaterialTableComponent implements OnChanges {
  @Output() itemWasClick: EventEmitter<any> = new EventEmitter();
  @Input() columnsWithLabels: TableColumn[];
  @Input() tableData: Array<{ [key: string]: any }>;
  public columns: string[];
  constructor(private changeDetectorRefs: ChangeDetectorRef) {}

  ngOnChanges() {
    this.changeDetectorRefs.detectChanges();
    if (this.columnsWithLabels) {
      // Extract only The columns name
      this.columns = this.columnsWithLabels.map((c) => c.columnName);
    }
  }

  // Return the appropriate label according to index
  public getLabelAccordingToColumnIndex(index: number): string {
    return this.columnsWithLabels[index].label;
  }

  public checkIfCellOfTypeDate(cellIndex: number): boolean {
    return Boolean(this.columnsWithLabels[cellIndex].dateField);
  }
}
