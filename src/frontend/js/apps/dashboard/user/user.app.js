import App from './User.vue'
import List from './UserList.vue'
import Form from './UserForm.vue'
import Model from 'Components/store/model/model';

export const nameApp = 'dashboard.user';


export const routes = [
    {
        path: '/dashboard/user', name: nameApp, component: App,
        children: [
            { name: nameApp + ".list", path: '',         component: List},
            { name: nameApp + ".edit", path: ':id/edit', component: Form},
            { name: nameApp + ".new",  path: 'new',      component: Form}
        ]
    }
];
export const store = Model({
    resource: nameApp,
    state: {

    },
    actions: {

    },
    getters: {

    },
    mutations: {

    }
})