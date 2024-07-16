import React from "react";
export default function Leaderboard() {
    const data = [
        { rank: 1, name: 'Alice', score: 1500 },
        { rank: 2, name: 'Bob', score: 1400 },
        { rank: 3, name: 'Charlie', score: 1300 },
      ];
    return(
        <>
        <div className="leaderboard-container">
    <h1 className="title">Leaderboard</h1>
    <table className="table">
      <thead>
        <tr>
          <th className="th">Rank</th>
          <th className="th">Name</th>
          <th className="th">Myntra Coins</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="td">{item.rank}</td>
            <td className="td">{item.name}</td>
            <td className="td">{item.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
        </>

    )

}