import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ActiveSectionService } from 'src/app/services/active-section.service';
import { Router } from '@angular/router';


interface Menu {
  name: string;
  goTo: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public menu: boolean = false;
  public selectedItem: string | null = 'Home';
  public scrollFlag: string = '';
  private scrollListener: boolean = true;

  public menuOptions: Menu[] = [
    {
      name: 'Home',
      goTo: 'Home'
    },
    {
      name: 'Team',
      goTo: 'Team'
    },
    {
      name: 'Services',
      goTo: 'Services'
    },
    {
      name: 'Benefits',
      goTo: 'Benefits'
    },
    {
      name: 'FAQs',
      goTo: 'FAQs'
    },
    {
      name: 'Partnerships',
      goTo: 'Partnerships'
    },
    // {
    //   name: 'Contact',
    //   goTo: 'Contact'
    // },
  ];

  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
    private activeSectionService: ActiveSectionService,

  ) {
    this.activeSectionService.activeSection$.subscribe(section => {
      this.selectedItem = section;
    });
  }

  async ngOnInit(): Promise<void> {
    this.scrollFlag = '';
    this.scrollListener = true;

    this.renderer.listen('window', 'scroll', (e) => {
      if(this.scrollListener) {
        this.scrollFlag = (e.target.scrollingElement.scrollTop > 50) ? 'dark-nav' : '';
      }
    })
  }

  goTo(e:any) {
    setTimeout( () => {
      const elementList = document.querySelectorAll('#' + e);
      const element = elementList[0] as HTMLElement;
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, 200);
  }

  public toggleMenu() {
    this.menu = !this.menu;
    let html = this.renderer.selectRootElement('html', true);
    let body = this.renderer.selectRootElement('body', true);
    if (this.menu == true) {
      this.renderer.setAttribute(body, 'style', 'overflow: hidden;');
      return;
    }
    this.renderer.setAttribute(body, 'style', 'overflow:visible;');
  }
}
