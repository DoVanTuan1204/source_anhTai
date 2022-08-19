import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import {
  SideNavOuterToolbarModule,
  SideNavInnerToolbarModule,
  SingleCardModule,
} from "./layouts";
import {
  FooterModule,
  ResetPasswordFormModule,
  CreateAccountFormModule,
  ChangePasswordFormModule,
  LoginFormModule,
} from "./shared/components";
import { AuthService, ScreenService, AppInfoService } from "./shared/services";
import { UnauthenticatedContentModule } from "./unauthenticated-content";
import { AppRoutingModule, routes } from "./app-routing.module";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { APP_INITIALIZER } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";
import { AppConfig } from "./app.config";

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from "ngx-perfect-scrollbar";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ClickOutsideModule } from "ng-click-outside";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from "@angular/common/http";
import { LocalStoreService } from "./shared/services/local-store.service";
import { WINDOW_PROVIDERS } from "./shared/services/window.service";
import { TokenInterceptor } from "./shared/interceptors/token.interceptor";
import { FilterComponent } from "./shared/components/filter/filter.component";
import { SharedDevExtremeModule } from "./shared/shared-devextreme.module";
import { ComponentsModule } from "./shared/components/components.module";
import {
  DxButtonModule,
  DxFormModule,
  DxLoadIndicatorModule,
  DxButtonGroupModule,
  DxTextBoxModule,
  DxValidatorModule,
  DxTabsModule,
  DxNavBarModule,
  DxDataGridModule,
  DxMenuModule,
} from "devextreme-angular";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false,
};

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [AppComponent, FilterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule,
    NgxSpinnerModule,
    ClickOutsideModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxButtonGroupModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxTabsModule,
    DxNavBarModule,
    DxButtonModule,
    DxMenuModule,
    DxDataGridModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    SharedDevExtremeModule,
    ComponentsModule,
  ],
  providers: [
    AppConfig,
    AuthService,
    ScreenService,
    AppInfoService,
    LocalStoreService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig],
      multi: true,
    },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },

    // REQUIRED IF YOU USE JWT AUTHENTICATION
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    WINDOW_PROVIDERS,
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
