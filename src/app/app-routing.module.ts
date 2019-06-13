import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
 
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'button', loadChildren: './pages/button/button.module#ButtonPageModule' },
  { path: 'fab', loadChildren: './pages/fab/fab.module#FabPageModule' },
  { path: 'check', loadChildren: './pages/check/check.module#CheckPageModule' },
  { path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
  { path: 'infinite', loadChildren: './pages/infinite/infinite.module#InfinitePageModule' },
  { path: 'navegacion', loadChildren: './pages/navegacion/navegacion.module#NavegacionPageModule' },
  { path: 'pop/:id', loadChildren: './pages/pop/pop.module#PopPageModule' },
  { path: 'popover', loadChildren: './pages/popover/popover.module#PopoverPageModule' },
  { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
  { path: 'range', loadChildren: './pages/range/range.module#RangePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
