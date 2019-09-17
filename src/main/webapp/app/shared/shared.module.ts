import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BlogoSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BlogoSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [BlogoSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogoSharedModule {
  static forRoot() {
    return {
      ngModule: BlogoSharedModule
    };
  }
}
