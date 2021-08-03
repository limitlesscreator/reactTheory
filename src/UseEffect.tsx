import React, {useState,useEffect} from "react";

export function UseEffect() {

    const [resourceType, setResourceType] = useState("posts")
    const [items, setItems] = useState([])


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
        console.log("resource changed")
        // return () => {
        //     console.log("return from resource change")
        // }
    }, [resourceType])
    // useEffect(() => {
    //     console.log("onMount")
    // }, [])

    return (
        <>
            <div>
                <button onClick={() => {setResourceType("posts")}}>Posts</button>
                <button onClick={() => {setResourceType("users")}}>Users</button>
                <button onClick={() => {setResourceType("comments")}}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            <span>{items.map((i) => {
                return (
                    <pre>{JSON.stringify(i)}</pre>
                )
            })}</span>
        </>
    )
}
