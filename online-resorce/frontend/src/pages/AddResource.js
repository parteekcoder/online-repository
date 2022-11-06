import React from "react";
import './AddResource.css';
import { useState } from "react";
const AddResources=()=>{
    const [type,setType]=useState("Books");
    const [topic,setTopic]=useState("");
    const [description,setDescription]=useState("");
    const [data,setData]=useState({});
    
    return(
    <div className="resource-data">
    <form>
    <div className="form-group">
        <label for="TopicName">TopicName</label>
        <input type="text" className="form-control" id="TopicName" placeholder="Topic Name" onChange={(e)=>{setTopic(e.target.value)}}/>
    </div>
    <div className="form-group">
        <label for="Description">Description</label>
        <input type="text" className="form-control" id="Description" placeholder="Description" onChange={(e)=> {setDescription(e.target.value)}}/>
    </div>
    <div className="form-group form-row" >
        <div className="form-check" style={{margin:"5px"}}>
            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Books" onChange={(e)=>{setType(e.target.value)}}/>
            <label className="form-check-label" for="gridRadios1">
                Books
            </label>
            </div>
            <div className="form-check"style={{margin:"5px"}}>
            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Links"onChange={(e)=>{setType(e.target.value)}}/>
            <label className="form-check-label" for="gridRadios2">
                Links
            </label>
            </div>
            <div className="form-check"style={{margin:"5px"}}>
            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Videos"onChange={(e)=>{setType(e.target.value)}}/>
            <label className="form-check-label" for="gridRadios2">
                Videos
            </label>
            </div>
    </div>
    {type==="Books" && <div className="form-row">
        <div className="form-group col-md-6">
        <label for="BookName">Book Name</label>
        <input type="text" className="form-control" id="BookName"/>
        <label for="BookUrl">Book Url</label>
        <input type="text" className="form-control" id="BookUrl"/>
        <label for="BookUrl">Book Photo</label>
        <input type="text" className="form-control" id="BookPhoto"/>
        </div>
    </div>}
    {type==="Videos" && <div className="form-row">
        <div className="form-group col-md-6">
        <label for="VideoName">Video Name</label>
        <input type="text" className="form-control" id="BookName"/>
        <label for="VideoUrl">Video Url</label>
        <input type="text" className="form-control" id="BookUrl"/>
        
        </div>
    </div>}
    {type==="Links" && <div className="form-row">
        <div className="form-group col-md-6">
        <label for="LinkName">Link Name</label>
        <input type="text" className="form-control" id="BookName" placeholder="website name"/ >
        <label for="LinkUrl">Link Url</label>
        <input type="text" className="form-control" id="LinkUrl"/>
        
        </div>
    </div>}
    <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
    </div>
    );
};

export default AddResources;