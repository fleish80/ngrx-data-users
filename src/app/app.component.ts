import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-root',
    template: `
        <div *ngIf="loading$ | async">Loading....</div>
        <ul>
            <li *ngFor="let user of users$ | async">
                <span>{{user._id}}</span>
                <span>{{user.firstName}}</span>
                <span>{{user.lastName}}</span>
                <span><button (click)="setSelectedUser(user)">Update</button></span>
                <span><button (click)="delete(user)">Delete</button></span>
            </li>
        </ul>

        <form [formGroup]="formNew" (ngSubmit)="add(formNew.getRawValue())">
            <label>First Name</label>
            <input formControlName="firstName">
            <label>Last Name</label>
            <input formControlName="lastName">
            <button type="submit">Add</button>
        </form>

        <form *ngIf="selectedUser" [formGroup]="formUpdate" (ngSubmit)="update(formUpdate.getRawValue())">
            <label>Id</label>
            <input formControlName="_id" disabled>
            <label>First Name</label>
            <input formControlName="firstName">
            <label>Last Name</label>
            <input formControlName="lastName">
            <button type="submit">Update</button>
        </form>


    `,
    styles: [`
        ul {
            list-style: none;
        }

        li span {
            width: 250px;
            display: inline-block;
        }

    `]
})
export class AppComponent implements OnInit {

    loading$: Observable<boolean>;
    users$: Observable<User[]>;
    formNew: FormGroup;
    formUpdate: FormGroup;
    selectedUser: User;

    constructor(private userService: UserService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.getUsers();
        this.users$ = this.userService.entities$;
        this.loading$ = this.userService.loading$;

        this.formNew = this.fb.group({
            _id: [],
            firstName: [],
            lastName: []
        });

        this.formUpdate = this.fb.group({
            _id: [],
            firstName: [],
            lastName: []
        })
    }

    add(user: User) {
        this.userService.add(user);
    }

    delete(user: User) {
        this.userService.delete(user._id);
    }

    getUsers() {
        this.userService.getAll();
    }

    update(user: User) {
        this.userService.update(user);
    }

    setSelectedUser(user: User) {
        this.selectedUser = user;
        this.formUpdate.reset();
        this.formUpdate.get('_id').setValue(this.selectedUser._id);
        this.formUpdate.get('firstName').setValue(this.selectedUser.firstName);
        this.formUpdate.get('lastName').setValue(this.selectedUser.lastName);
    }
}
