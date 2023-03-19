import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  
  @HostListener('window:scroll')
  checkScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if ( window.pageYOffset > 100) {
      // console.log("down")
      element.classList.add("navbar-inverse");
      const a=window.pageYOffset;
      // console.log("a=",a);
    //  if(window.addEventListener){
      window.addEventListener("scroll", 
      ()=>{
       const scroll=window.pageYOffset;
        // console.log(scroll,"hello")
        if(scroll<a){
          // console.log('yup')
          element.classList.add("navbar-inverse1");
        }else{
          // console.log("nope")
          element.classList.remove("navbar-inverse1");
        }
      });
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
  
}