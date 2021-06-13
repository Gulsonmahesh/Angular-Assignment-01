import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-issuerecords',
  templateUrl: './issuerecords.component.html',
  styleUrls: ['./issuerecords.component.scss']
})
export class IssuerecordsComponent implements OnInit {

  constructor() { }

  @Input() issues:any = [];

  ngOnInit(): void {
    console.log(this.issues);
  }

}
