const laLigaGoals = 0;
const copaDelReyGoals = 0;
const championsLeagueGoals = 0;


function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    let gol = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    if (gol == 0){
        return 0;
    } else {
        return gol;
    } 

    // return laLigaGoals + copaDelReyGoals + championsLeagueGoals; упрощенный вариан
}

const start = goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals);
console.log(start);