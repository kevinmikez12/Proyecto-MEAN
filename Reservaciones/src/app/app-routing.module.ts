import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import{ListContentComponent} from './components/list-content/list-content.component';
import{SideContentComponent} from './components/side-content/side-content.component';

const routes: Routes = [
  {path: '', component: ListContentComponent},
  {path:'side-content', component:SideContentComponent},
  {path:'editar-reservacion/:id', component:SideContentComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
