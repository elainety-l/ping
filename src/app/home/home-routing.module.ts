import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    // children: [
    //   {
    //     path: 'home',
    //     children: [
    //       {
    //         path: '',
    //         loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    //       }
    //     ]

    //   },
    //   {
    //     path: 'payment',
    //     children: [
    //       {
    //         path: '',
    //         loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule)
    //       }
    //     ]

    //   },
    //   {
    //     path: 'chats',
    //     children: [
    //       {
    //         path: '',
    //         loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    //       }
    //     ]

    //   },
    //   {
    //     path: 'profile',
    //     children: [
    //       {
    //         path: '',
    //         loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    //       }
    //     ]

    //   }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
