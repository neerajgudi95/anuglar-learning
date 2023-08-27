import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServersComponent } from './servers/servers.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingService } from './logging-service.service';
import { AccountService } from './accounts.service';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';
import { HomeComponent } from './home/home.component';
import { RoutingUsersComponent } from './routingusers/users.component';
import { RoutingServersComponent } from './routingservers/servers.component';
import { RoutingUserComponent } from './routingusers/user/user.component';
import { EditServerComponent } from './routingservers/edit-server/edit-server.component';
import { ServersService } from './routingservers/servers.service';
import { RoutingServerComponent } from './routingservers/server/server.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './authguard/auth.service';
import { AuthGuard } from './authguard/auth-guard.service';
import { CanDeactivateGuard } from './routingservers/edit-server/can-deactivate-guard.service';
import { ObsHomeComponent } from './observables/obs-home/obs-home.component';
import { ObsUsersComponent } from './observables/obs-users/obs-users.component';
import { TdFormComponent } from './forms/td-form/td-form.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HomeComponent,
    RoutingUsersComponent,
    RoutingUserComponent,
    RoutingServersComponent,
    RoutingServerComponent,
    EditServerComponent,
    ObsHomeComponent,
    ObsUsersComponent,
    TdFormComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    LoggingService,
    AccountService,
    UsersService,
    CounterService,
    ServersService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
