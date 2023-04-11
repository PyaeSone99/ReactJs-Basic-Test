import { Component } from "react";
import { Link, useLocation } from "react-router-dom";


class PostDetail extends Component{
    render(){
        let post = this.props.state.state.post;
        return(
            <div>
                
                <Link to={"/"}>
                    <button className="btn btn-outline-primary btn-sm mb-3">Back</button>
                </Link>
                <div className="card" style={{width : "15rem"}}>
                    <img src="https://photos.hancinema.net/photos/photo1515354.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.description}</p>
                        </div>
                </div>
            </div>
        );
    };
}

export default (props)=>{
    const state = useLocation();
    return <PostDetail {...props} state = {state} />
};