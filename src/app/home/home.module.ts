import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AppBarComponent } from './views/app-bar/app-bar.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';


@NgModule({
  declarations: [
    SidebarComponent,
    AppBarComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
