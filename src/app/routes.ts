import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LimittoComponent } from './limitto/limitto.component';
import { SliceComponent } from './slice/slice.component';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
    { path: '', redirectTo:'LimitTo',pathMatch:'full' },
    { path: 'Home', component: AppComponent },
    { path: 'LimitTo', component: LimittoComponent },
    { path: 'Slice', component: SliceComponent },
      
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);