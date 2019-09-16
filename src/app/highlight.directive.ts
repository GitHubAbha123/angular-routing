import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {

    this.highlight('yellow','red')
  }

  @HostListener('mouseleave') onmouseleave(){

    this.highlight(null,null);
  }

  private highlight(bgColor:string,txtColor:string)
  {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = txtColor;
  }

}