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
      title: 'Free Bootstrap HTML For Tax',
      text: 'Proin eleifend auctor urna sed porttitor dui tempus at. In augue lectus elementum sit amet venenatis at vulputate et quam. Donec vitae lacus eiquam erat volutpat.',
      linkText: 'View More'
    },
    {
      title: 'Our Expert Always Guide You',
      text: 'Our expertise that provides innovative and dynamic solutions that allow both  our individual and business clients to benefit.',
      linkText: 'meet our experts'
    },
    {
      title: 'We have the Best Tax GST Solutions',
      text: 'Fusce et sapien sed massa ultricies dapibus eu id leo. Praesent tempus varius ex malesuada vehicula.',
      linkText: 'Read Reviews'
    }];

    const sliderImages = ['../../assets/images/slider-1.jpg', '../../assets/images/slider-2.jpg', '../../assets/images/slider-3.jpg'];

    const sliders: Slider = {
      content: sliderContent,
      images: sliderImages
    };

    const promise =  new Promise<Slider>((resolve, reject) => {
      resolve(sliders);
    });

    return promise;
  }

  getImages(): Promise<string[]> {

    const images = ['../../assets/images/slider-1.jpg', '../../assets/images/slider-2.jpg', '../../assets/images/slider-3.jpg'];

    const promise =  new Promise<string[]>((resolve, reject) => {
      resolve(images);
    });

    return promise;
  }
}
