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


const withPrefix = (prefix, routes) =>
  routes.map((route) => {
    route.path = `${prefix}/${route.path}`
    return route
  })

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
      ...withPrefix('/commande-repas', [
        {
          path : 'liste',
          name : 'ListeRepas',
          component : ListeRepas,
        },
        {
          path : 'detail/:id',
          name : 'DetailRepas',
          component : DetailRepas,
        },
      ]),
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
      ...withPrefix('ajouter', [
        {
          path : '/ami',
          name : 'AjouterAmi',
          component : AjouterAmi,
        },
        {
          path : '/seance',
          name : 'AjouterSeance',
          component : AjouterSeance,
        },
        {
          path : '/repas',
          name : 'AjouterRepas',
          component : AjouterRepas,
        },
      ]),
      {
        path : '/souscrire-premium',
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
