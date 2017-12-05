import App from './Statistics.vue'
import List from './StatisticsList.vue'
import Form from './StatisticsForm.vue'
import Model from 'Components/store/model/model';

export const nameApp = 'statistics';


export const routes = [
    {
        path: '/' + nameApp, name: nameApp, component: App,
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