import React, { useState } from "react";
import "./styles.css";
import axios from "./axiosrequest";

function Banner() {
  const [team, setTeam] = useState(false);
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  const teamArray = [
    "Karachi Kings",
    "Lahore Qalanders",
    "Peshawar Zalmi",
    "Multan Sultans",
    "Quetta Gladiators",
    "Islamabad United",
  ];
  const [tempTeam, setTempTeam] = useState(teamArray);
  let tempARR = [];
  const handleTeamA = (arr) => {
    setTeamA(arr);
    tempARR = [...teamArray];
    tempARR = tempARR.filter((item) => item !== arr);
    setTempTeam(tempARR);
    console.log(tempTeam);
  };
  const handleTeamB = (arr) => {
    setTeamB(arr);
  };
  const save = () => {
    axios({
      method: "post",
      url: "http://localhost:4000/api/pslTeams",
      data: {
        City: city,
        Date: date,
        TeamA: teamA,
        TeamB: teamB,
      },
    });
    setTeam(false);
  };
  console.log(teamA);
  console.log(teamB);
  return (
    <header className="banner">
      {team ? (
        <>
          <div className="teams__container">
            <div>
              {teamArray.map((arr) => (
                <h1 className="team__text" onClick={() => handleTeamA(arr)}>
                  {arr}
                </h1>
              ))}
              <input
                onChange={(event) => setCity(event.target.value)}
                placeholder="City"
                className="input"
              />
              <input
                onChange={(event) => setDate(event.target.value)}
                placeholder="Date"
                className="input"
              />
            </div>
            <div>
              {tempTeam.map((arr) => (
                <h1 className="team__text" onClick={() => handleTeamB(arr)}>
                  {arr}
                </h1>
              ))}

              <button className="cancel__button" onClick={() => setTeam(false)}>
                Cancel
              </button>
              <button className="save__button" onClick={() => save()}>
                Save
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text__container">
          <h1>PSL 2022</h1>
          <button className="search__btn" onClick={() => setTeam(true)}>
            Schedule a Match
          </button>
        </div>
      )}

      <div className="img__container">
        <img
          className="img__banner"
          src="data:image/jpeg;base64,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"
          alt="Banner"
        />
      </div>
    </header>
  );
}

export default Banner;
