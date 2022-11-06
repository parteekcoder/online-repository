import React from "react";
import RComponent from "../components/RComponent";
const Resources=()=>{

    return (
        <>
        <h1>Books</h1>
        <RComponent type="book"/>
        <br></br>
        <h1>Videos</h1>
        <RComponent type="video"/>
        <br></br>
        <h1>Links</h1>
        <RComponent type="link"/>
        </>
    );
}


export default Resources;