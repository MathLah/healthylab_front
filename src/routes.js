// import components
import Login from '@/components/Login'
import Register from '@/components/Register'
import AppShell from '@/components/AppShell'
import NotFound from '@/components/NotFound'
import Accueil from '@/components/Accueil'
import Profil from '@/components/Profil'
import AjouterRepas from '@/components/AjouterRepas'
import Calories from '@/components/Calories'
import Poids from '@/components/Poids'
import AjouterAmi from '@/components/AjouterAmi'
import AjouterSeance from '@/components/AjouterSeance'
import ListeRepas from '@/components/CommandeRepas/ListeRepas'
import DetailRepas from '@/components/CommandeRepas/DetailRepas'
import SouscrirePremium from '@/components/SouscrirePremium'


const routes = [
  {
    path : '/login',
    name : 'Login',
    component : Login,
  },
  {
    path : '/register',
    name : 'Register',
    component : Register,
  },
  {
    path : '/password',
    name : 'password',
    component : Register,
  },
  {
    path : '',
    component : AppShell,
    meta : {
      requiresAuth : true,
    },
    children : [
      {
        path : '',
        name : 'Accueil',
        component : Accueil,
      },
      {
        path : '/profil',
        name : 'Profil',
        component : Profil,
      },
      {
        path : '/listeRepas',
        name : 'ListeRepas',
        component : ListeRepas,
        children : [
          {
            path : '/detailRepas',
            name : 'DetailRepas',
            component : DetailRepas,
          },
        ]
      },
      {
        path : '/calories',
        name : 'Calories',
        component : Calories,
      },
      {
        path : '/poids',
        name : 'Poids',
        component : Poids,
      },
      {
        path : '/ajouterAmi',
        name : 'AjouterAmi',
        component : AjouterAmi,
      },
      {
        path : '/ajouterSeance',
        name : 'AjouterSeance',
        component : AjouterSeance,
      },
      {
        path : '/ajouterRepas',
        name : 'AjouterRepas',
        component : AjouterRepas,
      },
      {
        path : '/souscrirePremium',
        name : 'SouscrirePremium',
        component : SouscrirePremium,
      },
      {
        path : '*',
        name : '404',
        component : NotFound,
      },
    ],
  },
]

export default routes
