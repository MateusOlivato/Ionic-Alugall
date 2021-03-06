import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'menu',
  component: MenuPage,
  children: [
    {
      path:'home',
      loadChildren:'../home/home.module#HomePageModule'
    },
    {
     path:'painel-usuario',
     loadChildren:'../painel-usuario/paine-usuario.module#Painel-usuarioModule'
    },
  {
    path:'',
    redirectTo:'home'
  }

  ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
