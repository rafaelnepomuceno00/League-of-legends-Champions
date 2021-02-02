allChampions = 'http://ddragon.leagueoflegends.com/cdn/11.2.1/data/pt_BR/champion.json'


imgChampions = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'


function fetchData() {
    fetch(allChampions)
        .then(response => {
            if (!response) {
                throw Error("error in response")
            } else {
                return response.json()
            }
        }).then(data => {
            console.log(data.data)
            const champions = Object.values(data.data)
            const champion = champions.map(char => {
                return ` <div class='card'>
                <img class="img-card" src="${imgChampions}${char.id}_0.jpg">
                    <h5>${char.id}</h5>
                    <p> " ${char.title} "</p>
                    
                    <p> ${char.tags } </p>
                     </div>`
            }).join('')
            console.log(champions)
            document.querySelector('.container').insertAdjacentHTML('afterbegin', champion)

        }).catch(error => {
            console.log(error)
        })
}

fetchData()