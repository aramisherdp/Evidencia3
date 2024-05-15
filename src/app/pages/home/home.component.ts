import { Component, HostListener, OnInit } from '@angular/core';
import { ActiveSectionService } from 'src/app/services/active-section.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activeSection: string | null = null;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event){
    this.detectActiveSection();
  }

  detectActiveSection() {
    const sections = ['Home', 'Team', 'Services', 'Benefits', 'FAQs', 'Partnerships'];
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          this.activeSection = sectionId;
          break;
        } else {
          this.activeSection = "";
        }
      }
    }
    this.activeSectionService.setActiveSection(this.activeSection);
  }

  constructor(
    private activeSectionService: ActiveSectionService
  ) {
    this.activeSectionService.setActiveSection("home");
  }

  ngOnInit(): void {
  }

}
