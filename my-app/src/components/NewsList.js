import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux"
import UseHttp from '../Hook/UseHttp';
import { newsFetched, newsFetchingError, newsDeleted } from "../components/Redux/actions"
import Spinner from './Spinner';
import Error from './Error';
import NewsListItem from './NewsListItem';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style/style.css"

function NewsList() {

    const { request } = UseHttp()
    const { filteredNews, filterStatusLoading, } = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        request("http://localhost:3001/news")
            .then(data => dispatch(newsFetched(data)))
            .catch(() => dispatch(newsFetchingError()))
    }, [])


    const onDelete = useCallback((id) => {
        request(`http://localhost:3001/news/${id}`, "DELETE")
            .then(data => console.log(data + " Deleted"))
            .then(dispatch(newsDeleted(id)))
            .catch(err => console.log(err))
    }, [])

    if (filterStatusLoading === "loading") {
        return <Spinner />
    } else if (filterStatusLoading === "error") {
        return <Error />
    }




    const renderItem = (arr) => {
        if (arr.length === 0) {
            return <h1>Biz malumotni olmadik</h1>
        }

        return arr.map(({ id, ...props }) => {
            return (
                <CSSTransition key={id} timeout={500} classNames="item">
                    <NewsListItem  onDelete={() => onDelete(id)} {...props} />
                </CSSTransition>
            )
        })
    }

    const element = renderItem(filteredNews)

    return (
        <TransitionGroup component="ul">
            {element}
        </TransitionGroup>
        
    )
}

export default NewsList;