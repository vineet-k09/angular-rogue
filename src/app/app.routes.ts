import { Routes } from '@angular/router';

import { Home } from './pages/home/home'
import {Feedback} from './pages/feedback/feedback' 

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'feedback', component: Feedback },
];
