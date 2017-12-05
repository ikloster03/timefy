import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

const router = new VueRouter( {

} );

const store = new Vuex.Store( {

} );

window.getConfig = ( config ) => {
    return config.split( '.' ).reduce( ( o,i ) => o[ i ], window.config );

};

function loadConfig( currentApp ){
    console.log( "Load config", currentApp );
    if( !window.config ) {
        window.config = {};
    }
    window.config = Object.assign( window.config, currentApp );
}


function loadApp( currentApp ) {
    console.log( "Load app", currentApp );
    if( currentApp.store ) {
        store.registerModule( currentApp.name, currentApp.store );
    }
    if( currentApp.routes ) {
        router.addRoutes( currentApp.routes );
    }
}

loadApp( require( 'Apps/timer/timer.app' ) );

const app = window.App = new Vue( {
    el: '#app_wrapper',
    router: router,
    components: {

    },
    store,
    data( ) {
        return {

        }
    }
} );