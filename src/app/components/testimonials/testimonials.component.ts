import { Component, OnInit, Input } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  public swiper = [

    {
      img: '/assets/images/testimonials/said.svg', //25 words
      title: 'Username 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      text1: 'Business name'
    },
    {
      img: '/assets/images/testimonials/yuliana.svg', //30 words
      title: 'Username 2',
      text: 'A arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis',
      text1: 'Business name 2'
    },
    {
      img: '/assets/images/testimonials/melina.svg', //35 words
      title: 'Username 3',
      text: 'Lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing',
      text1: 'Business name 3'
    },
    {
      img: '/assets/images/testimonials/melina.svg', //40 words
      title: 'Username 4',
      text: 'Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis',
      text1: 'Business name 4'
    },
    {
      img: '/assets/images/testimonials/melina.svg', //40 words
      title: 'Username 4',
      text: 'Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis',
      text1: 'Business name 4'
    },
    {
      img: '/assets/images/testimonials/melina.svg', //40 words
      title: 'Username 4',
      text: 'Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis',
      text1: 'Business name 4'
    },
    {
      img: '/assets/images/testimonials/melina.svg', //40 words
      title: 'Username 4',
      text: 'Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis',
      text1: 'Business name 4'
    },
    {
      img: '/assets/images/testimonials/melina.svg', //40 words
      title: 'Username 4',
      text: 'Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis',
      text1: 'Business name 4'
    },
    {
      img: '/assets/images/testimonials/melina.svg', //40 words
      title: 'Username 4',
      text: 'Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis',
      text1: 'Business name 4'
    },
    {
      img: '/assets/images/testimonials/melina.svg', //40 words
      title: 'Username 4',
      text: 'Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis',
      text1: 'Business name 4'
    },
    {
      img: '/assets/images/testimonials/melina.svg', //40 words
      title: 'Username 4',
      text: 'Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis',
      text1: 'Business name 4'
    },
  ]

  swiperConfig: any = {
    allowTouchMove: true,
    // style:{
    //   "--swiper-navigation-color": "#000",
    //   "--swiper-navigation-size": "25px",
    // },
    navigation: false,
    pagination: {
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 2
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1.7,
        spaceBetween: 10,
      },
      1023: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  }

  constructor() { }

  ngOnInit(): void {
  }

}
