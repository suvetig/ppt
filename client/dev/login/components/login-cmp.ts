import {
    Component,
    View,
    Inject,
    OnInit
} from '../../../../node_modules/angular2/core.d';

import {HTTP_PROVIDERS} from '../../../../node_modules/angular2/http.d';
import {
    Validators,
    FormBuilder,
    ControlGroup,
    Control
} from '../../../../node_modules/angular2/common.d';

import {LoginService} from '../services/login-service';

type UserLogin = {
    email: string,
    password: string,
}

@Component({
    selector: 'login-cmp',
    templateUrl: 'client/dev/login/templates/login.html',
    providers: [HTTP_PROVIDERS, LoginService],
})
export class LoginCmp implements OnInit {
    loginForm:ControlGroup;

    constructor(@Inject(FormBuilder) fb:FormBuilder, private _loginService:LoginService) {
        this.loginForm = fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required],
        });
    }

    doLogin(event) {
        console.log(this.loginForm.value);
        event.preventDefault();
    }

    ngOnInit() {
        //this._getAll();
    }

    private _getAll():void {
        //this._loginService
        //    .getAll()
        //    .subscribe((todos) => {
        //        console.log(todos);
        //        this.todos = todos;
        //    });
    }

    //add(message:string):void {
    //    this._loginService
    //        .add(message)
    //        .subscribe((m) => {
    //            this.todos.push(m);
    //            (<Control>this.todoForm.controls['todoMessage']).updateValue("");
    //        });
    //}
    //
    //remove(id:string):void {
    //    this._loginService
    //        .remove(id)
    //        .subscribe(() => {
    //            this.todos.forEach((t, i) => {
    //                if (t._id === id)
    //                    return this.todos.splice(i, 1);
    //            });
    //        })
    //}

}
