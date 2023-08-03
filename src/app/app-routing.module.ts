import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoutingUsersComponent } from './routingusers/users.component';
import { RoutingUserComponent } from './routingusers/user/user.component';
import { RoutingServersComponent } from './routingservers/servers.component';
import { RoutingServerComponent } from './routingservers/server/server.component';
import { EditServerComponent } from './routingservers/edit-server/edit-server.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './authguard/auth-guard.service';
import { CanDeactivateGuard } from './routingservers/edit-server/can-deactivate-guard.service';
import { ObsHomeComponent } from './observables/obs-home/obs-home.component';
import { ObsUsersComponent } from './observables/obs-users/obs-users.component';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent },
  // {
  //   path: 'users',
  //   component: RoutingUsersComponent,
  //   children: [{ path: ':id/:name', component: RoutingUserComponent }],
  // },
  // {
  //   path: 'servers',
  //   // canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   component: RoutingServersComponent,
  //   children: [
  //     { path: ':id', component: RoutingServerComponent },
  //     {
  //       path: ':id/edit',
  //       component: EditServerComponent,
  //       canDeactivate: [CanDeactivateGuard],
  //     },
  //   ],
  // },
  { path: 'obsHome', component: ObsHomeComponent },
  { path: 'obsUsers/:id', component: ObsUsersComponent },
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
