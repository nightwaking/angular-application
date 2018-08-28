import { RouterModule, Routes } from '@angular/router';
import { FrameComponent } from './frame.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'frame',
        component: FrameComponent,
        children: [
            { path: '', loadChildren: '' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrameRoutingModule { }
