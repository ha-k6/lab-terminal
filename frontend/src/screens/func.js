import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axiosrequest";

async function services({ setMatches }) {
    
    const request = await axios.get("http://localhost:4000/api/pslTeams");
    console.log(request.data);
    setMatches(request.data);
    return request;
  
}

export default services;