import { Component, OnInit } from '@angular/core';

import SwiperCore, {Autoplay, Pagination, Navigation} from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'our-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  public swiper = [
    {
      img: '/assets/images/partners/logo-hispanic-bn.jpg',
      url: 'https://www.impulso.solutions/'
    },
    {
      img: '/assets/images/partners/logo-impulso-solutions.jpg',
      url: 'https://hbn-chicago.com/'
    },
    {
      img: '/assets/images/partners/logo-MWR.png',
      url: 'https://www.mwrfinancial.com/es/'
    },
    {
      img: '/assets/images/partners/logo-world-ds.jpg',
      url: 'https://www.worlddatasystems.com/'
    },
  ]

  swiperConfig: any = {
    loop: true,
    centeredSlides: true,
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 0,
    initialSlide: 2,
    autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pauseOnMouseEnter: true,
    breakpoints: {
      505:{
        slidesPerView: 3,
      },
      800:{
        slidesPerView: 4,
      },
      1000:{
        slidesPerView: 4.6,
      },
      1400:{
        slidesPerView: 5.6,
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
