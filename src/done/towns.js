import React from "react";

function Towns(){
    const towns = [
        {id:1, town: 'Kyiv', info:' is the capital and most populous city of Ukraine.'},
        {id:2, town: 'Kharkiv', info: ' is the second-largest city and municipality in Ukraine.'},
        {id:3, town: 'Lviv', info: ' is one of the main cultural centres of Ukraine.'}
    ]
    return(
        <>
            {towns.map(item=>(
                <p>{item.town}{item.info}</p>
            ))}

        </>
    )
}
export default Towns;