import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment1';
  mainTitle = 'demonstration of built-in directive and data binding';
  subTitle = 'issue list';
  issueList = [
    {description:'On clicking Delete, the application crashes.',severity:'Critical', status: 'open'},
    {description:'The heading add is wrongly displayed as Edit.',severity:'minor', status: 'Closed'}
  ];
}
