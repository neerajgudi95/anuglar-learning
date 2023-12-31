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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoggingService, AccountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
