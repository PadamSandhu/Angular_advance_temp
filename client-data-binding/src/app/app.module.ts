import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  // NgModule take these 4 inputs
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ServersComponent
  ], // Need to register new child modules in here
  imports: [BrowserModule, FormsModule], // imports allow us to import other modules to this module
  providers: [],

  bootstrap: [AppComponent] // Which module angular app should be aware off when whole application starts
})
export class AppModule {}
