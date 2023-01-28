const { request } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

//lots of data hardcoded here rather than using a db
const characters = {
    'crashbandicoot': {
        'name' : 'Crash Bandicoot',
        'debutYear': 1996,
        'firstGame': 'Crash Bandicoot',
        'latestMainGame': "Crash Bandicoot 4: It's About Time",
        'originDev': 'Naughty Dog'
        
    },
    'kratos': {
        'name' : 'Kratos',
        'altName': 'Ghost of Sparta',
        'debutYear': 2005,
        'firstGame': 'God of War',
        'latestMainGame': "God of War Ragnarok",
        'originDev': 'Santa Monica Studio'
    },
    'atreus': {
        'name' : 'Atreus',
        'altName': 'Loki, BOY',
        'debutYear': 2018,
        'firstGame': 'God of War (2018)',
        'latestMainGame': "God of War Ragnarok",
        'originDev': 'Santa Monica Studio'
    },
    'ratchet': {
        'name' : 'Ratchet',
        'debutYear': 2002,
        'firstGame': 'Ratchet & Clank',
        'latestMainGame': "Ratchet & Clank: Rift Apart",
        'originDev': 'Insomniac Games'
    },
    'clank': {
        'name' : 'Clank',
        'debutYear': 2002,
        'firstGame': 'Ratchet & Clank',
        'latestMainGame': "Ratchet & Clank: Rift Apart",
        'originDev': 'Insomniac Games'
    },
    'sackboy': {
        'name' : 'Sackboy',
        'debutYear': 2008,
        'firstGame': 'Little Big Planet',
        'latestMainGame': "Sackboy: A Big Adventure",
        'originDev': 'Media Molecule'
    },
    'solidsnake': {
        'name' : 'Solid Snake',
        'altName': 'David',
        'debutYear': 1998,
        'firstGame': 'Metal Gear Solid',
        'latestMainGame': "Metal Gear Solid 4: Guns of the Patriots",
        'originDev': 'Konami (Kojima Productions)'
    },
    'cloudstrife': {
        'name' : 'Cloud Strife',
        'altName': 'Ex-SOLDIER',
        'debutYear': 1997,
        'firstGame': 'Final Fantasy VII',
        'latestMainGame': "Crisis Core: Final Fantasy VII Reunion",
        'originDev': 'Squaresoft'
    },
    'cloud': {
        'name' : 'Cloud Strife',
        'altName': 'Ex-SOLDIER',
        'debutYear': 1997,
        'firstGame': 'Final Fantasy VII',
        'latestMainGame': "Crisis Core: Final Fantasy VII Reunion",
        'originDev': 'Squaresoft'
    },
    'abe': {
        'name' : 'Abraham Lure',
        'altName': 'Abe',
        'debutYear': 1997,
        'firstGame': "Oddworld: Abe's Oddysee",
        'latestMainGame': "Oddworld: Soulstorm",
        'originDev': 'Oddworld Inhabitants'
    },
    'colemacgrath': {
        'name' : 'Cole MacGrath',
        'debutYear': 2009,
        'firstGame': 'inFAMOUS',
        'latestMainGame': "inFAMOUS 2",
        'originDev': 'Sucker Punch Productions'
    },
    'jak': {
        'name' : 'Jak',
        'debutYear': 2001,
        'firstGame': 'Jak and Daxter: The Precursor Legacy',
        'latestMainGame': "Jak 3",
        'originDev': 'Naughty Dog'
    },
    'daxter': {
        'name' : 'Daxter',
        'debutYear': 2001,
        'firstGame': 'Jak and Daxter: The Precursor Legacy',
        'latestMainGame': "Jak 3",
        'originDev': 'Naughty Dog'
    },
    'jillvalentine': {
        'name' : 'Jill Valentine',
        'debutYear': 1996,
        'firstGame': 'Resident Evil',
        'latestMainGame': "Resident Evil 3 (2020 remake)",
        'originDev': 'Capcom'
    },
    'chrisredfield': {
        'name' : 'Chris Redfield',
        'debutYear': 1996,
        'firstGame': 'Resident Evil',
        'latestMainGame': "Resident Evil Village",
        'originDev': 'Capcom'
    },
    'joel': {
        'name' : 'Joel Miller',
        'debutYear': 2013,
        'firstGame': 'The Last of Us',
        'latestMainGame': "The Last of Us Part II",
        'originDev': 'Naughty Dog'
    },
    'joelmiller': {
        'name' : 'Joel Miller',
        'debutYear': 2013,
        'firstGame': 'The Last of Us',
        'latestMainGame': "The Last of Us Part II",
        'originDev': 'Naughty Dog'
    },
    'elliewilliams': {
        'name' : 'Ellie Williams',
        'altName': 'Kiddo, Baby girl',
        'debutYear': 2013,
        'firstGame': 'The Last of Us',
        'latestMainGame': "The Last of Us Part II",
        'originDev': 'Naughty Dog'
    },
    'ellie': {
        'name' : 'Ellie Williams',
        'altName': 'Kiddo, Baby girl',
        'debutYear': 2013,
        'firstGame': 'The Last of Us',
        'latestMainGame': "The Last of Us Part II",
        'originDev': 'Naughty Dog'
    },
    'nathandrake': {
        'name' : 'Nathan Drake',
        'altName': 'Drake',
        'debutYear': 2007,
        'firstGame': "Uncharted: Drake's Fortune",
        'latestMainGame': "Uncharted 4: A Thief's End",
        'originDev': 'Naughty Dog'
    },
    'drake': {
        'name' : 'Nathan Drake',
        'altName': 'Drake',
        'debutYear': 2007,
        'firstGame': "Uncharted: Drake's Fortune",
        'latestMainGame': "Uncharted 4: A Thief's End",
        'originDev': 'Naughty Dog'
    },
    'nathan': {
        'name' : 'Nathan Drake',
        'altName': 'Drake',
        'debutYear': 2007,
        'firstGame': "Uncharted: Drake's Fortune",
        'latestMainGame': "Uncharted 4: A Thief's End",
        'originDev': 'Naughty Dog'
    },
    'parappa': {
        'name' : 'PaRappa the Rapper',
        'debutYear': 1996,
        'firstGame': "PaRappa the Rapper",
        'latestMainGame': "PaRappa the Rapper 2",
        'originDev': 'NanaOn-Sha'
    },
    'slycooper': {
        'name' : 'Sly Cooper',
        'debutYear': 2002,
        'firstGame': "Sly Cooper and the Thievius Raccoonus",
        'latestMainGame': "Sly Cooper: Thieves in Time",
        'originDev': 'Sucker Punch Productions'
    },
    'spyro': {
        'name' : 'Spyro',
        'debutYear': 1998,
        'firstGame': "Spyro the Dragon",
        'latestMainGame': "The Legend of Spyro: Dawn of the Dragon",
        'originDev': 'Insomniac Games'
    },
    'laracroft': {
        'name' : 'Lara Croft',
        'debutYear': 1996,
        'firstGame': "Tomb Raider",
        'latestMainGame': "Shadow of the Tomb Raider",
        'originDev': 'Core Design'
    },
    'notfound': {
        'name': 'No info for requested character'
    }
}
// data over

app.use(express.static('public'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:charName', (req, res) => {
    const requestedChar = req.params.charName.toLowerCase().replaceAll(' ', '')
    if (characters[requestedChar]) {
        res.json(characters[requestedChar])
    } else {
        res.json(characters['notfound'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The servers is running on port ${PORT}!`)
})