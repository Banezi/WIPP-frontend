import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {PluginRoutingModule} from './plugin-routing.module';
import {PluginListComponent} from './plugin-list/plugin-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    PluginRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    FormsModule
  ],
  declarations: [
    PluginListComponent
  ]
})
export class PluginModule { }
