import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuplicateComponent } from './screens/duplicate/duplicate.component';
import { EditComponent } from './screens/edit/edit.component';
import { MainTaskComponent } from './screens/main-task/main-task.component';

const routes: Routes = [
  {
    path:'',
    component: MainTaskComponent
  },
  {
    path:'edit/:id',
    component: EditComponent
  },
  {
    path: 'duplicate/:id',
    component: DuplicateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
