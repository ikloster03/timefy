import App from './Timer.vue'
import List from './TimerList.vue'
import Form from './TimerForm.vue'
import Model from 'Components/store/model/model';

export const nameApp = 'timer';


export const routes = [
    {
        path: '/', name: nameApp, component: App,
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