import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { metaReducers } from './store/reducers';
import * as fromGuards from './guards';
import { LoginModule } from './components/login/login.module';
import { effects, reducers } from './store';
import { RegisterComponent } from './components/register/register.component';
import { UserErrorHandlingService } from './services/user-error-handling.service';
import { UserHttpInterceptor } from './http-interceptors/user-http.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    LoginModule,
    ReactiveFormsModule,
    StoreModule.forFeature('user', reducers, { metaReducers }),
    EffectsModule.forFeature(effects)
  ],
  declarations: [RegisterComponent],
  providers: [
    ...fromGuards.guards,
    UserErrorHandlingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserHttpInterceptor,
      multi: true
    }
  ],
  exports: [RegisterComponent]
})
export class UserModule {}