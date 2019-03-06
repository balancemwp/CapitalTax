import { Injectable } from '@angular/core';
import { Slider} from '../model/slider';
import { SliderContent } from '../model/slider-content';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor() { }

  get(): Promise<Slider> {

    const sliderContent: Array<SliderContent> = [{
      title: 'Tax Preparation and Accounting Services',
      text: 'We are not a typical accounting firm.  We provide the individual detail that large firms do not.',
      linkText: 'View More'
    },
    {
      title: 'Our Expert Always Guide You',
      text: 'Our expertise that provides innovative and dynamic solutions that allow both  our individual and business clients to benefit.',
      linkText: 'Meet the Team'
    },
    {
      title: 'We have the Best Tax Solutions',
      text: 'We work to ensure our customized tax solutions meet your every need.',
      linkText: 'Read Reviews'
    }];

    const sliderImages = ['../../assets/images/slider-0001.jpeg', '../../assets/images/slider-002.jpeg', '../../assets/images/slider-0003.jpeg'];

    const sliders: Slider = {
      content: sliderContent,
      images: sliderImages
    };

    const promise =  new Promise<Slider>((resolve, reject) => {
      resolve(sliders);
    });

    return promise;
  }

  // getImages(): Promise<string[]> {

  //   const images = ['../../assets/images/slider-001.jpeg', '../../assets/images/slider-002.jpg', '../../assets/images/slider-3.jpg'];

  //   const promise =  new Promise<string[]>((resolve, reject) => {
  //     resolve(images);
  //   });

  //   return promise;
  // }
}
