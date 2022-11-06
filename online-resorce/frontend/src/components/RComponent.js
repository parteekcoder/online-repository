import React from "react";
import "./Books.css"
const Books=()=>{
    return(
        <div class="container-fluid">
    
    <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
    
    <div class="col-5">
	<div class="card card-block">
        <center><img class="img card-img-top" src="https://images-eu.ssl-images-amazon.com/images/I/71RanAYLvqL._AC_UL232_SR232,232_.jpg" alt="Card image cap"/>
        <div class="card-body">
        <h5 class="card-title">Computer Networks By Forouzan</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
        <a class="booklink btn btn-primary" href="#" role="button">Link</a>
        </div>
        </center>
    </div>
	</div>
    <div class="col-5">
	<div class="card card-block">
        <center><img class="img card-img-top" src="https://m.media-amazon.com/images/I/61RzCIAcAvL.jpg" alt="Card image cap"/>
        <div class="card-body">
        <h5 class="card-title">Let Us C++ by Y Kanetkar</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
        <a class="booklink btn btn-primary" href="#" role="button">Link</a>
        </div>
        </center>
    </div>
	</div>
    <div class="col-5">
	<div class="card card-block">
        <center><img class="img card-img-top" src="http://img.youtube.com/vi/cuHDQhDhvPE/1.jpg" alt="Card image cap"/>
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
        <a class="booklink btn btn-primary" href="#" role="button">Link</a>
        </div>
        </center>
    </div>
	</div>
    <div class="col-5">
	<div class="card card-block">
        <center><img class="img card-img-top" src="" alt="Card image cap"/>
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
        <a class="booklink btn btn-primary" href="#" role="button">Link</a>
        </div>
        </center>
    </div>
	</div>

    

    </div>
</div>
    );
}
export default Books;