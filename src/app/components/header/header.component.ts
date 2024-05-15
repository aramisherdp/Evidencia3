import { Component,  OnInit  } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  goTo(e:any) {
    setTimeout( () => {
      const elementList = document.querySelectorAll('#' + e);
      const element = elementList[0] as HTMLElement;
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, 200);
  }

}
