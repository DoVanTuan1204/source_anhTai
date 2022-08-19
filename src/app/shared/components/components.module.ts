import { NgModule } from "@angular/core";
import { SharedDevExtremeModule } from "../shared-devextreme.module";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
    declarations: [ToolbarComponent, PageLoaderComponent],
    imports: [SharedDevExtremeModule, NgxSpinnerModule],
    exports: [ToolbarComponent, PageLoaderComponent],
  })
  export class ComponentsModule {}