import { SliderService } from './../shared/services/slider.service';
import { Component, OnInit } from '@angular/core';
import { Slider } from '../shared/model/slider';
import { SliderContent } from '../shared/model/slider-content';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  sliderContent: SliderContent[];
  slideImages: string[];
  slideOptions = {items: 1, dots: true, nav: true, autoplay: true, autoplayTimeout: 5000, loop: true, autoplayHoverPause: false, animateOut: 'fadeOut'};

  constructor(private sliderService: SliderService) { }

  ngOnInit() {
    this.sliderService.get().then(ret => {
      this.sliderContent = ret.content;
      this.slideImages = ret.images;
    });
  }

}
