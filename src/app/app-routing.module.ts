import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComboComponent } from './components/pages/combo/combo.component';
import { CombosComponent } from './components/pages/combos/combos.component';
import { EditComboComponent } from './components/pages/edit-combo/edit-combo.component';
import { OngsComponent } from './components/pages/ongs/ongs.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NovaOngComponent } from './components/pages/nova-ong/nova-ong.component';
import { NovoComboComponent } from './components/pages/novo-combo/novo-combo.component';
import { OngComponent } from './components/pages/ong/ong.component';
import { EditOngComponent } from './components/pages/edit-ong/edit-ong.component';
import { AdministracaoComponent } from './components/pages/administracao/administracao.component';
import { UsuarioComponent } from './components/pages/usuario/usuario.component';
import { BannerComponent } from './components/pages/banner/banner.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { NovoUsuarioComponent } from './components/pages/novo-usuario/novo-usuario.component';
import { DoacaoComponent } from './components/pages/doacao/doacao.component';



const routes: Routes = [
  {path:'', component: HomeComponent  },
  {path:'combos',component: CombosComponent},
  {path:'combos/novo', component: NovoComboComponent},
  {path:'combos/edit/:id',component: EditComboComponent},
  {path:'combos/:id', component: ComboComponent},
  {path:'ongs',component: OngsComponent},
  {path:'ongs/novo',component: NovaOngComponent},
  {path:'ongs/edit/:id',component: EditOngComponent},
  {path:'ongs/:id',component: OngComponent},
  {path:'ong',component: OngComponent},
  {path:'administracao',component:AdministracaoComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'usuarios/novo',component:NovoUsuarioComponent},
  {path:'usuarios/edit/:id',component:UsuarioComponent},
  {path:'usuarios/:id',component:UsuarioComponent},
  {path:'doacao',component:DoacaoComponent},
  {path:'banner',component:BannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
