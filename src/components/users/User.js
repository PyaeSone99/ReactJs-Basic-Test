function User(props){ //({image,phone,cell})

    const removeHandler = ()=>{
        props.remove(props.data.uuid);
    }

    return(
        <div className="card mb-2">
            <div className="row">
                <div className="col-md-3">
                    <img src={props.data.image} width="70px" height="73px" alt="" />
                </div>
                <div className="col-md-5">
                    <small>Name : {props.data.name}</small><br/>
                    <small>Ph : {props.data.phone}</small><br/>
                    <small>Cell : {props.data.cell}</small>
                </div>
                <div className="col-md-4 d-flex align-items-center">
                    <button className="btn btn-danger btn-sm" onClick={removeHandler}><i className="las la-trash"></i></button>
                </div>
            </div>
        </div>
    );
}

export default User;
