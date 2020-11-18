import {NgModule}from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routs:Routes=[

    {path:'contacts',component:ContactListComponent},
    {path:'contacts/:id',component:ContactDetailComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routs, { relativeLinkResolution: 'legacy' })],
    exports:[RouterModule]
})
export class AppRoutingModule
{

}