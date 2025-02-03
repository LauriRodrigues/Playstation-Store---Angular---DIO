import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ColecoesComponent } from './pages/colecoes/colecoes.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { AssinaturasComponent } from './pages/assinaturas/assinaturas.component';
import { NavegarComponent } from './pages/navegar/navegar.component';

export const routes: Routes = [
  { 
    path: '',
    component: HomeComponent
  },
  { 
    path: 'colecoes',
    component: ColecoesComponent
  },
  { 
    path: 'ofertas',
    component: OfertasComponent
  },
  { 
    path: 'assinaturas',
    component: AssinaturasComponent
  },
  { 
    path: 'navegar',
    component: NavegarComponent
  },
];
