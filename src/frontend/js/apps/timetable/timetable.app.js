import App from './TimeTable.vue'
import List from './TimeTableList.vue'
import Form from './TimeTableForm.vue'
import Model from 'Components/store/model/model';

export const nameApp = 'timetable';


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