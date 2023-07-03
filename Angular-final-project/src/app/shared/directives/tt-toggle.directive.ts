 
import { Directive, ElementRef, Renderer2, Input, HostListener, HostBinding } from '@angular/core'
 
@Directive({
  selector: '[ttToggle]',
})
export class ttToggleDirective {
 
  private elementSelected = false;
 
  constructor(private el: ElementRef) {
    console.log("Yes")

    console.log(el)
  }
 
  ngOnInit() {
  }
 
  @HostListener('click',['$event'])
   onClick() {
    console.log('clicked toggle');
    this.elementSelected = !this.elementSelected;
    if (this.elementSelected) {
      this.el.nativeElement.classList.remove('untoggle')
      this.el.nativeElement.classList.add('toggle')
      this.el.nativeElement.innerHTML = 'Male'
      
    } else {
      this.el.nativeElement.classList.remove('toggle')
      this.el.nativeElement.classList.add('untoggle')
      this.el.nativeElement.innerHTML = 'Female'
      
    }
  }
 
}