async function getMatchData(){


    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=2f9f5bdd-a052-4f12-a922-280f903a805f&offset=0")
        .then(data=>data.json())
        .then(data=>{
                if(data.status!="success")return;
                const matchesList=data.data; 

                if(!matchesList) return [];

                const dekhane_Walla_data=matchesList.map(match=>`${match.name}, ${match.status}`);

                console.log({dekhane_Walla_data});

                document.getElementById("matches").innerHTML=dekhane_Walla_data.map(match=> `<li>${match}</li>`).join('');

                return dekhane_Walla_data;
        })
        .catch(e=> console.log(e));

}

getMatchData();