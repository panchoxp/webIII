import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { TerminosyCondicionesComponent } from './pages/terminosy-condiciones/terminosy-condiciones.component';
import { ContactosComponent } from './pages/contactanos-crear/ContactosComponent';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactosListaComponent } from './pages/contactanos-lista/contactos-lista.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'terminos', component: TerminosyCondicionesComponent},
    {path: 'contactos', component: ContactosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'terminos', component: TerminosyCondicionesComponent},
    {path: 'listaContactos', component: ContactosListaComponent},//parte de admin
    {path: 'admin', component: AdminComponent},

    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
