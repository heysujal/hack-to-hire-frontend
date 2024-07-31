// src/socket.js or a similar file
import { io } from "socket.io-client";
import { SERVER_URL } from "./constants/api";

const socket = io(SERVER_URL); // Adjust SERVER_URL as needed

export default socket;
