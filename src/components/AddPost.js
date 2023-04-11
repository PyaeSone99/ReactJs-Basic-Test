import { Component } from "react";
import { v4 as uuid } from 'uuid';
import {useNavigate} from 'react-router-dom';

class AddPost extends Component{
    state = {
        title : "",
        description : ""
    }

    addUser = (e)=>{
        e.preventDefault();
        this.props.addPost({id : uuid(),...this.state});
        this.setState({
            title : "",
            description : ""
        });
        this.props.navigate("/");
    }
    render(){
        return(
            <div className="card p-4 mt-4" style={{backgroundColor : "lavender"}}>
                <h3 className="text-center">Add new Post</h3>
                <form onSubmit={this.addUser}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" onChange={e => this.setState({title : e.target.value})} value={this.state.title} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tidescriptiontle" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" onChange={e => this.setState({description : e.target.value})} value={this.state.description} />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }
}


export default (props) => {
    const navigator = useNavigate();
    return <AddPost {...props} navigate={navigator} />
}