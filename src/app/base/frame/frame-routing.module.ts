import { RouterModule, Routes } from '@angular/router';
import { FrameComponent } from './frame.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'frame',
        component: FrameComponent,
        children: [
            { path: '', loadChildren: '../change-password/change-password.module#ChangePasswordModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrameRoutingModule { }
