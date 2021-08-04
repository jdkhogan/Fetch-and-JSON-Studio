// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json) {
            const container = document.getElementById("container");
            
            // sort by time in space
            json.sort((a,b) => (a.hoursInSpace > b.hoursInSpace) ? -1 : 1)
            
            for (astronaut of json) {
                // build and add each astronaut entry
                container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li id="${astronaut.id}">Active: ${astronaut.active}</li>
                                <li>Skills: ${astronaut.skills.join(", ")}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronaut.picture}">
                    </div>
                `;
                
                // change text of Active to green if astronaut is still active
                if (astronaut.active === true) {
                    const active = document.getElementById(astronaut.id);
                    active.style.color = "green";
                }
            }
            
            //Add total number of astronauts
            container.innerHTML += `<h2>Astronaut count: ${json.length}</h2>`
        });
    });
});