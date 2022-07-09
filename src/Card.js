import React, {useCallback} from 'react'
import "./Card.css"
import StorageIcon from '@material-ui/icons/Storage';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useNavigate } from "react-router-dom";


function Card({created}) {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(created ? '/response/123' : '/answer/123', {replace: true}), [navigate]);
    const handleOnClick2 = useCallback(() => navigate('/userviewform', {replace: true}), [navigate]);

    // function navigate_to(docname){
    //     var fname;
    //     if(docname){
    //         var fname=docname.split(".");
    //     }
    //     history.push("/form/" + fname[0])

    // }

    return (
        <div className="doc_cards">
            <div className="doc_card" >
                <div className="doc_card_content">
                    <h5 style={{overFlow:"ellipsis"}}>{"Testing Form" }</h5>
                    <div className="doc_content">
                        <div className="content_left" style={{fontSize:"12px",color:"grey"}}>
                        <StorageIcon style={{color:"white",fontSize:"12px",backgroundColor:"#6E2594",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/>   Opened 8 July 2021
                        </div>
                        
                        <MoreVertIcon style={{color:"grey",fontSize:"16px"}} />
                    </div>
                </div>
            </div>
            <div className="doc_card" /*onClick={()=>{navigate_to(name)}}*/>
                <div className="doc_card_content">
                    <h5 style={{overFlow:"ellipsis"}}>{"Sign up for the latest blockchain club event" }</h5>
                    <div className="doc_content">
                        <div className="content_left" style={{fontSize:"12px",color:"grey"}}>
                        <StorageIcon style={{color:"white",fontSize:"12px",backgroundColor:"#6E2594",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/>   Opened 8 July 2021
                        </div>
                        
                        <MoreVertIcon style={{color:"grey",fontSize:"16px"}} />
                    </div>
                </div>
            </div>

            <div className="doc_card" onClick={handleOnClick}>
                <div className="doc_card_content">
                    <h5 style={{overFlow:"ellipsis"}}>{"Mega Hackathon NFT Airdrop information collections" }</h5>
                    <div className="doc_content">
                        <div className="content_left" style={{fontSize:"12px",color:"grey"}}>
                        <StorageIcon style={{color:"white",fontSize:"12px",backgroundColor:"#6E2594",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/>   Opened 9 July 2021
                        </div>
                        
                        <MoreVertIcon style={{color:"grey",fontSize:"16px"}} />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Card
