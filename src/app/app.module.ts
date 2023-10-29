import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CvtemplateComponent } from './cvtemplate/cvtemplate.component';
import { DetailsformComponent } from './detailsform/detailsform.component';

@NgModule({
  declarations: [
    AppComponent,
    CvtemplateComponent,
    DetailsformComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
