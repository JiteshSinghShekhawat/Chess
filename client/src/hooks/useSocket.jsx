import React, { useEffect, useState } from "react";

const WS_URL = 'ws://localhost:3000'; 


function useSocket(){
    const [socket,setSocket] = useState(null); 

    useEffect(()=>{
        const ws = new WebSocket(WS_URL); 
        ws.onopen = ()=>{
            setSocket(ws); 
        }; 
        ws.onclose = ()=>{
            setSocket(null); 
        }; 
        return ()=>{
            ws.close(); 
        }
    },[]); 
    return socket ; 
}

export {useSocket}; 