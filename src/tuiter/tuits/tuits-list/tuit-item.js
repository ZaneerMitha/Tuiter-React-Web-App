import React from "react";
import {Chat} from "react-bootstrap-icons";
import {ArrowRepeat} from "react-bootstrap-icons";
import {Heart} from "react-bootstrap-icons";
import {HeartFill} from "react-bootstrap-icons";
import {Share} from "react-bootstrap-icons";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits-reducer";

const TuitItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }


) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }


    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img width={30} className="float-left rounded-5" src={`/images/${post.image}`}/>
                </div>
                <div className="col-10">
                    <div>{post.userName} . {post.handle} . {post.time}</div>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <div>{post.tuit}</div>


                    <div className="row">
                        <div className="col-3">
                            <Chat/>
                            {post.replies}
                        </div>
                        <div className="col-3">
                            <ArrowRepeat/>
                            {post.retuits}
                        </div>
                        <div className="col-3">
                            { post.liked ? <HeartFill/> : <Heart/> }
                                {post.likes}
                        </div>

                        <div className="col-3">
                            <Share/>
                        </div>
                    </div>

                </div>

            </div>

        </li>
    );
};
export default TuitItem;