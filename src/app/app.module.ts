import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NovoComboComponent } from './components/pages/novo-combo/novo-combo.component';
import { ComboFormComponent } from './components/combo-form/combo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CombosComponent } from './components/pages/combos/combos.component';
import { EditComboComponent } from './components/pages/edit-combo/edit-combo.component';
import { ComboComponent } from './components/pages/combo/combo.component';
import { NovaOngComponent } from './components/pages/nova-ong/nova-ong.component';
import { OngFormComponent } from './components/ong-form/ong-form.component';
import { OngComponent } from './components/pages/ong/ong.component';
import { MensagensComponent } from './components/mensagens/mensagens.component';
import { OngsComponent } from './components/pages/ongs/ongs.component';
import { EditOngComponent } from './components/pages/edit-ong/edit-ong.component';
import { AdministracaoComponent } from './components/pages/administracao/administracao.component';
import { UsuarioComponent } from './components/pages/usuario/usuario.component';
import { BannerComponent } from './components/pages/banner/banner.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { NovoUsuarioComponent } from './components/pages/novo-usuario/novo-usuario.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { EditUsuarioComponent } from './components/pages/edit-usuario/edit-usuario.component';
import { DoacaoComponent } from './components/pages/doacao/doacao.component';
import { FinalizaDoacaoComponent } from './components/pages/finaliza-doacao/finaliza-doacao.component';
import { DoacaoFormComponent } from './components/doacao-form/doacao-form.component';
import { NovaDoacaoComponent } from './components/pages/nova-doacao/nova-doacao.component';
import { CriaDoacaoComponent } from './components/cria-doacao/cria-doacao.component';
import { LoginComponent } from './components/pages/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NovoComboComponent,
    ComboFormComponent,
    CombosComponent,
    EditComboComponent,
    ComboComponent,
    NovaOngComponent,
    OngFormComponent,
    OngComponent,
    MensagensComponent,
    OngsComponent,
    EditOngComponent,
    AdministracaoComponent,
    UsuarioComponent,
    BannerComponent,
    UsuariosComponent,
    NovoUsuarioComponent,
    UsuarioFormComponent,
    EditUsuarioComponent,
    DoacaoComponent,
    FinalizaDoacaoComponent,
    DoacaoFormComponent,
    NovaDoacaoComponent,
    CriaDoacaoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
