// import components
import Login from '@/components/Login';
import RegisterNav from '@/components/Register/RegisterNav';
import Register from '@/components/Register/Register';
import RegisterStep1 from '@/components/Register/RegisterStep1';
import RegisterStep2 from '@/components/Register/RegisterStep2';
import RegisterStep3 from '@/components/Register/RegisterStep3';
import RegisterStep4 from '@/components/Register/RegisterStep4';
import RegisterStep5 from '@/components/Register/RegisterStep5';
import AppShell from '@/components/AppShell';
import NotFound from '@/components/NotFound';
import Accueil from '@/components/Accueil';
import AccueilNav from '@/components/AccueilNav';
import Journal from '@/components/Journal';
import Profil from '@/components/Profil';
import AjouterRepas from '@/components/AjouterRepas';
import Calories from '@/components/Calories';
import Poids from '@/components/Poids';
import AjouterAmi from '@/components/AjouterAmi';
import AjouterSeance from '@/components/AjouterSeance';
import ListeRepas from '@/components/CommandeRepas/ListeRepas';
import DetailRepas from '@/components/CommandeRepas/DetailRepas';
import SouscrirePremium from '@/components/SouscrirePremium';

const withPrefix = (prefix, routes) =>
    routes.map((route) => {
        route.path = `${prefix}/${route.path}`;
        return route;
    });

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'RegisterNav',
        component: RegisterNav,
        children: [
            {
                path: '/register',
                name: 'Register',
                component: Register,
                children: [
                    {
                        path: '/register/1',
                        name: 'RegisterStep1',
                        component: RegisterStep1,
                    },
                    {
                        path: '/register/2',
                        name: 'RegisterStep2',
                        component: RegisterStep2,
                    },
                    {
                        path: '/register/3',
                        name: 'RegisterStep3',
                        component: RegisterStep3,
                    },
                    {
                        path: '/register/4',
                        name: 'RegisterStep4',
                        component: RegisterStep4,
                    },
                    {
                        path: '/register/5',
                        name: 'RegisterStep5',
                        component: RegisterStep5,
                    },
                ],
            },
        ]
    },
    {
        path: '/password',
        name: 'password',
        component: Register,
    },
    {
        path: '',
        component: AppShell,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '',
                component: AccueilNav,
                children: [
                    {
                        path: '',
                        name: 'Accueil',
                        component: Accueil,
                        children: [
                            {
                                path: '/journal',
                                name: 'Journal',
                                component: Journal,
                            },
                        ],
                    },
                ],
            },
            {
                path: '/profil',
                name: 'Profil',
                component: Profil,
            },
            ...withPrefix('/commande-repas', [
                {
                    path: 'liste',
                    name: 'ListeRepas',
                    component: ListeRepas,
                },
                {
                    path: 'detail/:id',
                    name: 'DetailRepas',
                    component: DetailRepas,
                },
            ]),
            {
                path: '/calories',
                name: 'Calories',
                component: Calories,
            },
            {
                path: '/poids',
                name: 'Poids',
                component: Poids,
            },
            ...withPrefix('ajouter', [
                {
                    path: '/ami',
                    name: 'AjouterAmi',
                    component: AjouterAmi,
                },
                {
                    path: '/seance',
                    name: 'AjouterSeance',
                    component: AjouterSeance,
                },
                {
                    path: '/repas',
                    name: 'AjouterRepas',
                    component: AjouterRepas,
                },
            ]),
            {
                path: '/souscrire-premium',
                name: 'SouscrirePremium',
                component: SouscrirePremium,
            },
            {
                path: '*',
                name: '404',
                component: NotFound,
            },
        ],
    },
];

export default routes;
