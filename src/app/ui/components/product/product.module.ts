import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductSummaryComponent } from './product-summary/product-summary.component';

import { MaterialModule } from '../../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductAttributesComponent } from './product-attributes/product-attributes.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductImagesComponent } from './product-images/product-images.component';

import { CmsModule } from '../../../cms/cms.module'; // some slots are loaded inside components (i.e. tabs)

import { MediaModule } from '../media/media.module';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MediaModule,
        MaterialModule,
        FlexLayoutModule,
        CmsModule
    ],
    declarations: [
        ProductSummaryComponent,
        ProductAttributesComponent,
        ProductDetailsComponent,
        ProductImagesComponent,
        StarRatingComponent,
        ProductReviewsComponent
    ],
    exports: [
        ProductDetailsComponent,
        ProductSummaryComponent,
        ProductAttributesComponent,
        ProductImagesComponent
    ],
    providers: [
        {
            // TODO: configure locale
            provide: LOCALE_ID, useValue: 'en-EN'
        },
    ],
})
export class ProductModule { }