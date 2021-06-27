import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axiosrequest";
import "./styles.css";
import service from "./func";

function MatchesScreen() {
  const [matches, setMatches] = useState([]);
  const history = useHistory();

  useEffect(() => {
    service(setMatches);
    
  }, []);

  return (
    <div className="matchesScreen">
      <table>
        <tr className="match__table">
          <th>TEAM A</th>
          <th>TEAM B</th>
          <th>City</th>
          <th>Date</th>
        </tr>

        {matches.map((match) => (
          <tr>
            <td>{match.TeamA}</td>
            <td>{match.TeamB}</td>
            <td>{match.City}</td>
            <td>{match.Date}</td>
          </tr>
        ))}
      </table>
      <button onClick={() => history.push('/signin')}>Sign In</button>
    </div>
  );
}

export default MatchesScreen;
