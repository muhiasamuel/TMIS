import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: 'text-dark' },
    { path: '/assess-my-potential',         title: 'assess my Potential',             icon:'nc-diamond',    class: 'text-dark' },
    { path: '/assess-my-team',          title: 'Assess My Team',              icon:'nc-pin-3',      class: '' },
    { path: '/appraisals',          title: 'Appraisals',      icon:'nc-basket',  class: '' },
    { path: '/critical-roles-assessment', title: 'Assess Critical Roles',     icon:'nc-bell-55',    class: '' },    
    { path: '/critical-skills-assessment',         title: 'Assess Critical Skills',        icon:'nc-tile-56',    class: '' },
    { path: '/talent-mapping',    title: 'Talent Mapping',        icon:'nc-caps-small', class: '' },
    { path: '/succession-plan',    title: 'Succession Plans',        icon:'nc-bulb-63', class: '' },
    { path: '/user',          title: 'Profiles',      icon:'nc-single-02',  class: '' },
    { path: '/mvps',          title:`MVP'S`,      icon:'nc-money-coins',  class: '' },
    
];

@Component({
    moduleId: module.id,
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})

export class SidebarComponent implements OnInit {
    public menuItems: any[] = []
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
