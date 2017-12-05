import defaultClient from 'axios';
import createActions from './actions';
import createGetters from './getters';
import createMutations from './mutations';
import createState from './states';

export default ({
                    idAttribute = 'id',
                    resource,
                    urlRoot,
                    state = {},
                    actions = {},
                    mutations = {},
                    getters = {},
                    client = defaultClient,
                    onFetchListStart = () => {
                    },
                    onFetchListSuccess = () => {
                    },
                    onFetchListError = () => {
                    },
                    onFetchSingleStart = () => {
                    },
                    onFetchSingleSuccess = () => {
                    },
                    onFetchSingleError = () => {
                    },
                    onCreateStart = () => {
                    },
                    onCreateSuccess = () => {
                    },
                    onCreateError = () => {
                    },
                    onUpdateStart = () => {
                    },
                    onUpdateSuccess = () => {
                    },
                    onUpdateError = () => {
                    },
                    onReplaceStart = () => {
                    },
                    onReplaceSuccess = () => {
                    },
                    onReplaceError = () => {
                    },
                    onDestroyStart = () => {
                    },
                    onDestroySuccess = () => {
                    },
                    onDestroyError = () => {
                    },
                    only = ['FETCH_LIST', 'FETCH_SINGLE', 'CREATE', 'UPDATE', 'REPLACE', 'DESTROY'],
                    parseList = res => res,
                    parseSingle = res => res,
                    parseError = res => res
                } = {}) => {
    if (!resource) {
        throw new Error('Resource name must be specified');
    }

    /**
     * Create root url for API requests. By default it is: /api/<resource>
     */
    const rootUrl = urlRoot ? ((url) => {
        const lastCharacter = url.substr(-1);

        return lastCharacter === '/' ? url.slice(0, -1) : url;
    })(urlRoot) : `/api/${resource}`;

    return {
        namespaced: true,

        state: createState({
            state: Object.assign(state, {
                page: 1,
                filter: {},
                searchList: [],
            }), only,

        }),

        actions: createActions({
            actions: Object.assign(actions, {

                save({commit, dispatch}, {data, config} = {}) {
                    if (data.id) {
                        console.log("data", data);
                        return dispatch('replace', {id: data.id, data, config});
                    } else {
                        console.log("THIS", this);
                        return dispatch('create', {data, config});

                    }
                },
                search({commit}, {config}, {params} = {}) {
                    commit('searchStart');
                    console.log("fetch config", config);
                    return client.get(config.url ? config.url : rootUrl, config)
                        .then((res) => {
                            const parsedResponse = parseList(res);

                            commit('searchSuccess', parsedResponse);

                            return parsedResponse;
                        })
                        .catch((err) => {
                            const parsedError = parseError(err);

                            commit('searchError', parsedError);

                            return Promise.reject(parsedError);
                        });
                }
            }),
            rootUrl,
            only,
            client,
            parseList,
            parseSingle,
            parseError
        }),

        mutations: createMutations({
            mutations: Object.assign(mutations, {
                setPage(store, page) {
                    store.page = page;
                },
                setFilter(store, filter) {
                    store.filter = filter;
                },

                searchStart(store) {
                    state.isSearchingList = true;

                },
                searchSuccess(store) {
                    state.list = items.map(m => m[idAttribute].toString());

                    console.log("LIST", state.isSearchingList);
                    state.isSearchingList = false;
                    state.searchListError = null;
                },
                searchError(state, err) {
                    state.searchList = [];
                    state.searchListError = err;
                    state.isSearchingList = false;
                }
            }),
            idAttribute,
            only,
            onFetchListStart,
            onFetchListSuccess,
            onFetchListError,
            onFetchSingleStart,
            onFetchSingleSuccess,
            onFetchSingleError,
            onCreateStart,
            onCreateSuccess,
            onCreateError,
            onUpdateStart,
            onUpdateSuccess,
            onUpdateError,
            onReplaceStart,
            onReplaceSuccess,
            onReplaceError,
            onDestroyStart,
            onDestroySuccess,
            onDestroyError
        }),

        getters: createGetters({
            getters: Object.assign(getters, {
                rootUrl() {
                    return rootUrl;
                },
                searchList(state) {
                    return state.searchList;
                },

            }), idAttribute
        })
    };
};