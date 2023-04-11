import { Component } from "react";
import { Link } from "react-router-dom";

class PostCard extends Component{

    deletePost(){
        this.props.remove(this.props.post.id);
    }

    render(){
        return(
            <div className="card mt-2">
                <div className="row  d-flex align-items-center justify-content-center ps-2">
                    <div className="col-2">
                        <img src="https://photos.hancinema.net/photos/photo1515354.jpg" width="70px" height="80px" alt="" />
                    </div>
                    <div className="col-5">
                        <h4>{this.props.post.title}</h4>
                        <p>{this.props.post.description}</p>
                    </div>
                    <div className="col-5">
                        <Link to={`/post/${this.props.post.id}`} state={{post : this.props.post}}>
                            <button className="btn btn-outline-info me-2">
                                <i className="las la-info-circle"></i>
                            </button>
                        </Link>
                        <Link to={`/post/edit/${this.props.post.id}`} state={{post : this.props.post}}>
                            <button className="btn btn-outline-success me-2">
                                <i className="las la-pen"></i>
                            </button>
                        </Link>
                        <button className="btn btn-outline-danger me-2" onClick={this.deletePost.bind(this)}>
                            <i className="las la-trash"></i>
                        </button>                            
                    </div>
                </div>
            </div>
        )
    };
}

export default PostCard;