import { Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";

class EditPost extends Component{
    constructor(props){
        super(props);
        const post = this.props.state.state.post;
        this.state = {
            id: post.id,
            title: post.title,
            description : post.description
        }
    }

    updatePost(e){
        e.preventDefault();
        this.props.updatePost(this.state);
        this.props.navigate("/")
    }
    render(){
        return(
            <div className="card p-4 mt-4" style={{backgroundColor : "lavender"}}>
                <h3 className="text-center">Add new Post</h3>
                <form onSubmit={this.updatePost.bind(this)}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" onChange={e => this.setState({title : e.target.value})} value={this.state.title} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tidescriptiontle" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" onChange={e => this.setState({description : e.target.value})} value={this.state.description} />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        );
    }
}

//export default EditPost;
export default (props) =>{
    let state = useLocation();
    let navigate = useNavigate();
    return <EditPost {...props} state={state} navigate={navigate} />
}