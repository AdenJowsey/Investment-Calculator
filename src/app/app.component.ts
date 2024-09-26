import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';
import { NewInvestmentData } from './investment-results/investment-result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentInvestmentInput?: NewInvestmentData;

  get GetInvestmentInput() {
    return this.currentInvestmentInput;
  }

  onInvestmentInputUpdate(newInvestmentInput: NewInvestmentData) {
    this.currentInvestmentInput = newInvestmentInput;
  }
}
