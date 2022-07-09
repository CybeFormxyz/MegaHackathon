import React,{useState,useEffect} from 'react'
import "./Mainbody.css"
import StorageIcon from '@material-ui/icons/Storage';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { IconButton } from '@material-ui/core';
import Card from "./Card" 
import axios from "axios";

function Mainbody() {


    
    return (
        <div>
            <div className="mainbody">
            <div className="main_top">
              <div className="main_top_left" style={{fontSize:"16px",fontWeight:"500"}}>Forms I created</div>
            </div>
                 {/* {
                    files.map((ele)=>(
                        <Card name={ele}/>
                    ))            
                 } */}
                { <Card created={true}/>}
        </div>  
                <div className="mainbody">
                <div className="main_top">
                  <div className="main_top_left" style={{fontSize:"16px",fontWeight:"500"}}>Forms I answered</div>
                </div>
                {/* <div className="main_docs"> */}
                     {/* {
                        files.map((ele)=>(
                            <Card name={ele}/>
                        ))            
                     } */}
                     {/* {<Card created={false}/>}  */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Mainbody
