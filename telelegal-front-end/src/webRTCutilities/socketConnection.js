import { io } from 'socket.io-client';

// const socket = io.connect('https://localhost:9000');

let socket;
const socketConnection = (jwt)=>{
    //check to see if the socket is already connected
    if(socket && socket.connected){
        //if so, then just return it so whoever needs it, can use it
        return socket;
    }else{
        //its not connected... connect!
        // socket = io.connect('https://api.deploying-javascript.com',{
        // socket = io.connect('https://192.168.55.8:9000',{
        socket = io.connect('https://api.yoo.homes',{
            auth: {
                jwt
            }
        });
        return socket;
    }
}

export default socketConnection;