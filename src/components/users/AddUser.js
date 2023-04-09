import { useState } from "react";

function AddUser(props){

    let [image,setImage] = useState("");
    let [name,setName] = useState("");
    let [phone,setPhone] = useState("");
    let [cell,setCell] = useState("");
    let [uuid,setUuid] = useState("");

    const imageHandler = (event)=>{
        setImage(event.target.value);
    }
    const nameHandler = (event)=>{
        setName(event.target.value)
    }
    const phoneHandler = (event)=>{
        setPhone(event.target.value)
    }
    const cellHandler = (event)=>{
        setCell(event.target.value)
    }
    const uuidHandler = (event)=>{
        setUuid(event.target.value)
    }
    
    const submitUser = (event)=>{
        event.preventDefault();
        let user = {
            name : name,
            image : image,
            phone : phone,
            cell : cell ,
            uuid : uuid 
        };
        props.addUser(user);
    }


    return(
        <div className="my-3 card p-5">
            <form onSubmit={submitUser}>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="text" className="form-control" id="image" onChange={imageHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={nameHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="phone" onChange={phoneHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cell" className="form-label">Cell</label>
                    <input type="number" className="form-control" id="cell" onChange={cellHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="uuid" className="form-label">Uuid</label>
                    <input type="text" className="form-control" id="uudi" onChange={uuidHandler} />
                </div>
                <button type="submit" className="btn btn-primary btn-sm float-end">Submit</button>
            </form>
        </div>
    );
}

export default AddUser;