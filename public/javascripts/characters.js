const characters = [
    {
        name: 'ashe',
        path: './../../public/images/character-icons/ashe.svg',
    },{
        name: 'bangalore',
        path: './../../public/images/character-icons/bangalore.svg',
    },{
        name: 'bloodhound',
        path: './../../public/images/character-icons/bloodhound.svg',
    },{
        name: 'caustic',
        path: './../../public/images/character-icons/caustic.svg',
    },{
        name: 'crypto',
        path: './../../public/images/character-icons/crypto.svg',
    },{

        name: 'fuse',
        path: './../../public/images/character-icons/fuse.svg',
    },{

        name: 'gibraltar',
        path: './../../public/images/character-icons/gibraltar.svg',
    },{

        name: 'horizon',
        path: './../../public/images/character-icons/horizon.svg',
    },{

        name: 'lifeline',
        path: './../../public/images/character-icons/lifeline.svg',
    },{

        name: 'loba',
        path: './../../public/images/character-icons/loba.svg',
    },{

        name: 'mirage',
        path: './../../public/images/character-icons/mirage.svg',
    },{

        name: 'octane',
        path: './../../public/images/character-icons/octane.svg',
    },{

        name: 'pathfinder',
        path: './../../public/images/character-icons/pathfinder.svg',
    },{

        name: 'rampart',
        path: './../../public/images/character-icons/rampart.svg',
    },{

        name: 'revenant',
        path: './../../public/images/character-icons/revenant.svg',
    },{

        name: 'seer',
        path: './../../public/images/character-icons/seer.svg',
    },{

        name: 'valkyrie',
        path: './../../public/images/character-icons/valkyrie.svg',
    },{

        name: 'wattson',
        path: './../../public/images/character-icons/wattson.svg',
    },{

        name: 'wraith',
        path: './../../public/images/character-icons/wraith.svg',
    }
]

const getCharInfo = (charName) => {
    return characters.filter(c => charName.toLowerCase() === c.name);
};


module.exports = getCharInfo;