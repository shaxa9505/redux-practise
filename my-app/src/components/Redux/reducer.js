const initialState = {
    news: [],
    newsLoadingStatus: "sam",
    filters: [],
    filterStatusLoading: "sam",
    activeFilter: "all",
    filteredNews: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case "NEWS_FETCHING" :
            return {
                ...state,
                newsLoadingStatus: "loading"
            }
        case "NEWS_FETCHED" :
            return {
                ...state,
                news: payload,
                filteredNews: state.activeFilter === "all" ? payload : payload.filter(s => s.categories === state.activeFilter),
                newsLoadingStatus: "sam"
            }
        case "NEWS_FETCHING_ERROR" :
            return {
                ...state,
                newsLoadingStatus: "error"
            }
        case "NEWS_CREATED" :
            const newsNewCreated = [...state.news, payload]
            return {
                ...state,
                news: newsNewCreated,
                filteredNews: state.activeFilter === "all" ? newsNewCreated : newsNewCreated.filter(s => s.categories === state.activeFilter)
            }
        case "FILTERS_FETCHING" :
            return {
                ...state,
                filterStatusLoading: "loading"
            }
        case "FILTERS_FETCHED" :
            return {
                ...state,
                filters: payload,
                filterStatusLoading: "sam"
            }
        case "FILTERS_FETCHING_ERROR" :
            return {
                ...state,
                filterStatusLoading: "error"
            }
        case "ACTIVE_FILTER_CHANGED" :
            return {
                ...state,
                filteredNews: payload === "all" ? state.news : state.news.filter(s => s.categories === payload)
            }
        case "NEWS_DELETED" :
                const newNewsList = state.news.filter(s => s.id !== payload)
                return {
                    ...state,
                    news: newNewsList,
                    filteredNews: state.activeFilter === "all" ? newNewsList : newNewsList.filter(s => s.categories === state.activeFilter)
                }
        default :
        return state
    }
}

export default reducer