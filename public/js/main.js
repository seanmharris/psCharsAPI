document.querySelector('#clickMe').addEventListener('click', get)
document.querySelector('#reset').addEventListener('click', reset)

const data = {}

async function get() {
    const char = document.querySelector('#search').value
    try {
        const response = await fetch(`https://simple-ps-chars-api.cyclic.app/api/${char}`)
        data = await response.json()
        populate()
        unhide()
    } catch(error) {
        console.error(error)
    }
}

function populate() {
    document.querySelector('#name').innerText = data['name']
    if(data['altName']) document.querySelector('#altNames').innerText = `AKA: "${data['altName']}"`
    document.querySelector('#debutYear').innerText = `Debuted in: ${data['debutYear']}`
    document.querySelector('#firstGame').innerText = `Origin: ${data['firstGame']}`
    document.querySelector('#latestMainGame').innerText = `Most recent main game/appearance: ${data['latestMainGame']}`
    document.querySelector('#originalDev').innerText = `Created by (developer/studio): ${data['originDev']}`
}
function unhide() {
    document.querySelector('#name').classList.remove('hidden')
    if(data['altName']) document.querySelector('#altNames').classList.remove('hidden')
    document.querySelector('#debutYear').classList.remove('hidden')
    document.querySelector('#firstGame').classList.remove('hidden')
    document.querySelector('#latestMainGame').classList.remove('hidden')
    document.querySelector('#originalDev').classList.remove('hidden')
    document.querySelector('#reset').classList.remove('hidden')
}

function reset() {
    document.querySelector('#name').innerText = ''
    if(data['altName']) document.querySelector('#altNames').innerText = ''
    document.querySelector('#debutYear').innerText = ''
    document.querySelector('#firstGame').innerText = ''
    document.querySelector('#latestMainGame').innerText = ''
    document.querySelector('#originalDev').innerText = ''
    document.querySelector('#name').classList.add('hidden')
    if(data['altName']) document.querySelector('#altNames').classList.add('hidden')
    document.querySelector('#debutYear').classList.add('hidden')
    document.querySelector('#firstGame').classList.add('hidden')
    document.querySelector('#latestMainGame').classList.add('hidden')
    document.querySelector('#originalDev').classList.add('hidden')
    document.querySelector('#reset').classList.add('hidden')
}