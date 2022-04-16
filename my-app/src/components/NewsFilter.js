import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import classNames from "classname";
import { activeFilterChanged, filtersFetched, filtersFetching, filtersFetchingError } from './Redux/actions';
import UseHttp from "../Hook/UseHttp"
import Spinner from "./Spinner"
import Error from "./Error"

function NewsFilter(props) {

    const {request} = UseHttp()
    const {filters, activeFilter, filterStatusLoading} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filtersFetching())
        request("http://localhost:3001/filters")
        .then(data => dispatch(filtersFetched(data)))
    }, [])

    if(filterStatusLoading === "loading"){
        return <Spinner />
    }
    else if(filterStatusLoading === "error"){
        return <Error />
    }

    const filterRendering = (arr) => {
        if(arr.length === 0){
            return <h5 className="text-center mt-5">Biz hech qanday ma'lumotlar olmadik</h5>
        }

        return arr.map(({name, label, className}) => {
            const btnClasses = classNames("btn", className, {
                "active": name === activeFilter
            })
            return <buton 
                key={name} 
                id={name}
                className={btnClasses}
                onClick={() => dispatch(activeFilterChanged(name))}
            >
                {label}
            </buton>
        })
    }

    const elements = filterRendering(filters)

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Filter by category</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    );
}

export default NewsFilter;