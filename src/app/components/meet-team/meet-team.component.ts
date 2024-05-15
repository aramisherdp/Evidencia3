import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'meet-the-team',
  templateUrl: './meet-team.component.html',
  styleUrls: ['./meet-team.component.scss']
})
export class MeetTeamComponent implements OnInit {

  expandedText = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  toggleReadMore() {
    this.expandedText = !this.expandedText;
    console.log('ExpandedText:', this.expandedText);
    this.cdr.detectChanges();
  }

}
