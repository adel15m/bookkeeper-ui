import {Component, ViewChild} from '@angular/core';
import {ExpenseService} from '../../services/expense.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent {
  expens: any;
  showModal = false;
  newExpense: any = {};
  summary: any;
  currentSortColumn: any;
  isSortAscending: boolean = true;

  @ViewChild('addExpenseModal', {static: false}) addExpenseModal: any;
  @ViewChild('summaryModal', {static: false}) summaryModal: any;

  constructor(
    private expenseService: ExpenseService,
    private modalService: NgbModal
  ) {
    this.reloadList();
  }

  reloadList(){
    this.expenseService.getAll().subscribe((value) => {
      this.expens = value;
    });
  }

  showAddExpenseModal() {
    const modalRef = this.modalService.open(this.addExpenseModal);
    modalRef.result.then(() => {

      this.newExpense = {};
    }, () => {

      this.newExpense = {};
    });
  }

  addExpense() {
    this.expenseService.addOne(this.newExpense).subscribe(
      (response) => {
        console.log('Expense added successfully!');
        this.reloadList();
        // close the window
        this.modalService.dismissAll();
      },
      (error) => {
        console.log('Error adding expense:', error);
      }
    );
  }

  showRowDetails(expense: any) {
    const modalRef = this.modalService.open(RowDetailsModalComponent);
    modalRef.componentInstance.expense = expense;
  }

  deleteExpense(id: any) {
    this.expenseService.deleteOne(id.id).subscribe(
      (response) => {
        console.log('Expense deleted successfully!');
        this.reloadList();
      },
      (error) => {
        console.log('Error deleting expense:', error);
        window.location.reload();
      }
    );
  }

  showSummary() {
    this.expenseService.getSummary().subscribe(
      (response) => {
        console.log('Summary fetched successfully!');
        this.summary = response;
        const modalRef = this.modalService.open(this.summaryModal);
        modalRef.result.then(() => {
        }, () => {
        });
      },
      (error) => {
        console.log('Error fetching summary:', error);
      }
    );
  }

  sort(columnName: string) {
    if (this.currentSortColumn === columnName) {
      this.isSortAscending = !this.isSortAscending;
    } else {
      this.currentSortColumn = columnName;
      this.isSortAscending = true;
    }

    this.expens.sort((a: any, b: any) => {
      if (a[columnName] < b[columnName]) {
        return this.isSortAscending ? -1 : 1;
      } else if (a[columnName] > b[columnName]) {
        return this.isSortAscending ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}

@Component({
  selector: 'app-row-details-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Details</h4>
      <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <button type="button">save</button>
      <button type="button">edit</button>
      <table class="table table-bordered border-primary">
        <thead>
        <tr>
          <th>name</th>
          <th>amount</th>
          <th>date</th>
          <th>type</th>
          <th>note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{{ expense.name }}</td>
          <td>{{ expense.amount }}</td>
          <td>{{ expense.date }}</td>
          <td>{{ expense.type }}</td>
          <td>{{ expense.note }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class RowDetailsModalComponent {
  expense: any;

  constructor(public modal: NgbActiveModal) {
  }
}
