import {Destinos} from '../pages/Destinos'
import {LoginPage} from '../pages/LoginPage'
import {RegisterPage} from '../pages/RegisterPage'
import {VuelosPage} from '../pages/VuelosPage'
import {HomePage} from '../pages/HomePage'


export let router = [
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/home",
        element: <HomePage />
    },
    {
        path: "/destinos",
        element: <Destinos />
    },
    {
        path: "/vuelos",
        element: <VuelosPage />
    },
    
]