import {
    Component,
    View,
    Inject,
    OnInit
} from 'angular2/core';


import {
    Router,
    RouteConfig,
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES
} from 'angular2/router';

//
import {RegisterCmp} from '../../register/register-cmp';
import {ProfileCmp} from '../../profile/profile-cmp';
import {LoginCmp} from '../../login/login-cmp';
import {ResetPasswordCmp} from '../../login/reset-password-cmp';
import {ResetPasswordRequestCmp} from '../../login/reset-password-request-cmp';
import {AboutCmp} from '../../about/components/about-cmp';
import {CompanyCmp} from '../../company/company-cmp';


@Component({
    selector: 'app-cmp',
    templateUrl: 'client/dev/app/templates/app.html',
    styleUrls: ['client/dev/app/styles/app.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/', name: "About", component: AboutCmp},
    {path: '/profile', name: "Profile", component: ProfileCmp},
    {path: '/login', name: "Login", component: LoginCmp},
    {path: '/register', name: "Register", component: RegisterCmp},
    {path: '/reset-password/:token/:email', name: "ResetPassword", component: ResetPasswordCmp},
    {path: '/reset-password', name: "ResetPasswordRequest", component: ResetPasswordRequestCmp},
    {path: '/results/:resultsLink', name: "CompanyResults", component: CompanyCmp},
])
export class AppCmp implements OnInit {
    constructor(router:Router) {
        //console.log("app");
        router.subscribe((path) => {
            //console.log(path);
        });
    }

    ngOnInit() {

    }
}
