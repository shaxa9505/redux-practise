export const newsFetching = () => {
    return {
        type: "NEWS_FETCHING"
    }
}

export const newsFetched = (num) => {
    return {
        type: "NEWS_FETCHED", payload: num
    }
}

export const newsFetchingError = () => {
    return {
        type: "NEWS_FETCHING_ERROR"
    }
}

export const onDelete = (id) => {
    return {
        type: "ON_DELETE", payload: id
    }
}

export const newsCreated = (news) => {
    return {
        type: "NEWS_CREATED", payload: news
    }
}

export const filtersFetching = () => {
    return {
        type: "FILTERS_FETCHING"
    }
}

export const filtersFetched = (filters) => {
    return {
        type: "FILTERS_FETCHED",
        payload: filters
    }
}

export const filtersFetchingError = () => {
    return {
        type: "FILTERS_FETCHING_ERROR"
    }
}

export const activeFilterChanged = (name) => {
    return {
        type: "ACTIVE_FILTER_CHANGED",
        payload: name
    }
}

export const newsDeleted = (id) => {
    return {
        type: "NEWS_DELETED",
        payload: id
    }
}