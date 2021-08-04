import React, {useEffect, useState} from "react";

type TypeProps = {
    getItems: () => Array<number>
}


export function List({getItems}: TypeProps) {
    const [items, setItems] = useState<Array<number>>([])

    useEffect(() => {
        setItems(getItems())
        console.log("Updating Items")
    },[getItems])

    return <>{items.map(item => <div key={item}>{item}</div>)}</>

}
