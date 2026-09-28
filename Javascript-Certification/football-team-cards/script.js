const footballTeam = {
  team: "FC Barcelona",
  year: 2015,
  headCoach: "Luis Enrique",
  players: [
    {
      name: "Marc-André ter Stegen", 
      position: "goalkeeper",
      isCaptain: false 
    },
    { 
      name: "Claudio Bravo", 
      position: "goalkeeper", 
      isCaptain: false 
    },
    { 
      name: "Dani Alves", 
      position: "defender", 
      isCaptain: false 
    },
    { 
      name: "Gerard Piqué", 
      position: "defender", 
      isCaptain: false 
    },
    {
      name: "Javier Mascherano", 
      position: "defender", 
      isCaptain: false 
    },
    { 
      name: "Jordi Alba", 
      position: "defender", 
      isCaptain: false 
    },
    { 
      name: "Jérémy Mathieu", 
      position: "defender", 
      isCaptain: false 
    },
    { 
      name: "Sergio Busquets", 
      position: "midfielder", 
      isCaptain: false 
    },
    { 
      name: "Ivan Rakitić", 
      position: "midfielder", 
      isCaptain: false 
    },
    { 
      name: "Andrés Iniesta", 
      position: "midfielder", 
      isCaptain: false 
    },
    { 
      name: "Xavi Hernández", 
      position: "midfielder", 
      isCaptain: true 
    },
    { 
      name: "Rafinha", 
      position: "midfielder", 
      isCaptain: false 
    },
    { 
      name: "Sergi Roberto", 
      position: "midfielder", 
      isCaptain: false 
    },
    { 
      name: "Lionel Messi", 
      position: "forward", 
      isCaptain: false 
    },
    { 
      name: "Luis Suárez", 
      position: "forward", 
      isCaptain: false 
    },
    { 
      name: "Neymar Jr", 
      position: "forward", 
      isCaptain: false 
    },
    { 
      name: "Pedro Rodríguez", 
      position: "forward", 
      isCaptain: false 
    }
  ]
}

const players = document.getElementById("players");
const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");

team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

players.addEventListener("change", (e) => { 
  playerCards.innerHTML = footballTeam.players.filter((player) => player.position === e.target.value || 
    e.target.value === "all"
  )
  .map((player) => `<div class="player-card"><h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2><p>Position: ${player.position}</p></div>`);
});
