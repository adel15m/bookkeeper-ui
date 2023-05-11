import { Component } from '@angular/core';
import {ExpenseService} from "../../services/expense.service";

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {
  res : any;
  constructor(private expenseService: ExpenseService) {
    this.expenseService.getSummary().subscribe(value => {
      this.res = value;
    });
  }



}
