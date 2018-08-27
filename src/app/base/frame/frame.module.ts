import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FrameRoutingModule } from './frame-routing.module';
import { FrameComponent } from './frame.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FrameRoutingModule,
    ],
    declarations: [
        FrameComponent,
    ],

    exports: [FrameComponent],
    providers: []
})
export class FrameModule { }
