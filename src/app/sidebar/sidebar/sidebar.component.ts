import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    userType: Boolean;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: 'text-dark', userType: true},
    { path: '/potential-attributes',     title: 'Potential Attributes',         icon:'nc-bank',       class: 'text-dark' , userType: true},
    { path: '/assess-my-potential',         title: 'assess my Potential',             icon:'nc-diamond',    class: 'text-dark' , userType: true},
    { path: '/assess-my-team',          title: 'Assess My Team',              icon:'nc-pin-3',      class: '' , userType: true},
    { path: '/critical-roles-assessment', title: 'Assess Critical Roles',     icon:'nc-bell-55',    class: '' , userType: true },    
    { path: '/critical-skills-assessment',         title: 'Assess Critical Skills',        icon:'nc-tile-56',    class: '' , userType: true },
    { path: '/talent-mapping',    title: 'Talent Mapping',        icon:'nc-caps-small', class: ''  , userType: true},
    { path: '/succession-plan',    title: 'Succession Plans',        icon:'nc-bulb-63', class: '' , userType: true },
    { path: '/user',          title: 'Profiles',      icon:'nc-single-02',  class: ''  , userType: true},
    { path: '/mvps',          title:`MVP'S`,      icon:'nc-money-coins',  class: '' , userType: true },
    
];

export const ROUTES_EMPLOYEE: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: 'text-dark', userType: true},
    { path: '/potential-attributes',     title: 'Potential attributes',         icon:'nc-bank',       class: 'text-dark' , userType: true},
    { path: '/assess-my-potential',         title: 'assess my Potential',             icon:'nc-diamond',    class: 'text-dark' , userType: true},
    { path: '/assess-my-team',          title: 'Assess My Team',              icon:'nc-pin-3',      class: '' , userType: false},
    { path: '/critical-roles-assessment', title: 'Assess Critical Roles',     icon:'nc-bell-55',    class: '' , userType: true },    
    { path: '/skills-view',         title: 'Assess Critical Skills',        icon:'nc-tile-56',    class: '' , userType: true },
    { path: '/talent-mapping',    title: 'Talent Mapping',        icon:'nc-caps-small', class: ''  , userType: true},
    { path: '/succession-plan',    title: 'Succession Plans',        icon:'nc-bulb-63', class: '' , userType: true },
    { path: '/user',          title: 'Profiles',      icon:'nc-single-02',  class: ''  , userType: true},
    { path: '/mvps',          title:`MVP'S`,      icon:'nc-money-coins',  class: '' , userType: true },
    
];

@Component({
    moduleId: module.id,
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})

export class SidebarComponent implements OnInit {
    systemUser: any
    public menuItems: any[] = []
    ngOnInit() {
        this.systemUser = JSON.parse(localStorage.getItem("user"))
        if(this.systemUser.roleId == 1){
            this.menuItems = ROUTES.filter(menuItem => menuItem);

        }else{
            this.menuItems = ROUTES_EMPLOYEE.filter(menuItem => menuItem);

        }
    }
}
