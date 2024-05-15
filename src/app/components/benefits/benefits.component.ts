import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'our-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  benefits = [
    {
      icon: "../../../assets/images/icons/north_east_FILL0_wght400_GRAD0_opsz24.svg",
      title: "Lorem ipsum dolor sit amet",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam erat velit scelerisque in. Ultrices gravida dictum fusce ut placerat orci."
    },
    {
      icon: "../../../assets/images/icons/north_east_FILL0_wght400_GRAD0_opsz24.svg",
      title: "Lorem ipsum dolor sit amet",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam erat velit scelerisque in. Ultrices gravida dictum fusce ut placerat orci."
    },
    {
      icon: "../../../assets/images/icons/north_east_FILL0_wght400_GRAD0_opsz24.svg",
      title: "Lorem ipsum dolor sit amet",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam erat velit scelerisque in. Ultrices gravida dictum fusce ut placerat orci."
    },
    {
      icon: "../../../assets/images/icons/north_east_FILL0_wght400_GRAD0_opsz24.svg",
      title: "Lorem ipsum dolor sit amet",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam erat velit scelerisque in. Ultrices gravida dictum fusce ut placerat orci."
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
