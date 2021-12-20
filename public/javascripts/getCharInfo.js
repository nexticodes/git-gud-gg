const characters = [
    {
        name: 'ashe',
        path: '/images/character-icons/ashe.svg',
    },{
        name: 'bangalore',
        path: '/images/character-icons/bangalore.svg',
    },{
        name: 'bloodhound',
        path: '/images/character-icons/bloodhound.svg',
    },{
        name: 'caustic',
        path: '/images/character-icons/caustic.svg',
    },{
        name: 'crypto',
        path: '/images/character-icons/crypto.svg',
    },{

        name: 'fuse',
        path: '/images/character-icons/fuse.svg',
    },{

        name: 'gibraltar',
        path: '/images/character-icons/gibraltar.svg',
    },{

        name: 'horizon',
        path: '/images/character-icons/horizon.svg',
    },{

        name: 'lifeline',
        path: '/images/character-icons/lifeline.svg',
    },{

        name: 'loba',
        path: '/images/character-icons/loba.svg',
    },{

        name: 'mirage',
        path: '/images/character-icons/mirage.svg',
    },{

        name: 'octane',
        path: '/images/character-icons/octane.svg',
    },{

        name: 'pathfinder',
        path: '/images/character-icons/pathfinder.svg',
    },{

        name: 'rampart',
        path: '/images/character-icons/rampart.svg',
    },{

        name: 'revenant',
        path: '/images/character-icons/revenant.svg',
    },{

        name: 'seer',
        path: '/images/character-icons/seer.svg',
    },{

        name: 'valkyrie',
        path: '/images/character-icons/valkyrie.svg',
    },{

        name: 'wattson',
        path: '/images/character-icons/wattson.svg',
    },{

        name: 'wraith',
        path: '/images/character-icons/wraith.svg',
    }
]

const getCharInfo = (charName) => {
    return characters.filter(c => charName.toLowerCase() === c.name);
};


module.exports = getCharInfo;