import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { TerminosyCondicionesComponent } from './pages/terminosy-condiciones/terminosy-condiciones.component';
import { ContactosComponent } from './pages/contactos/ContactosComponent';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'ofertas', component: OfertasComponent},
    {path: 'terminos', component: TerminosyCondicionesComponent},
    {path: 'contactos', component: ContactosComponent},

    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
