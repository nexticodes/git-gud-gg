const weapons = [
    {
        name: '30-30 Repeater',
        path: '/images/weapon-icons/30-30 Repeater.svg',
    },{
        name: 'Alternator SMG',
        path: '/images/weapon-icons/Alternator SMG.svg',
    },{
        name: 'Bocek Compound Bow',
        path: '/images/weapon-icons/Bocek Compound Bow.svg',
    },{
        name: 'C.A.R. SMG',
        path: '/images/weapon-icons/CAR SMG.svg',
    },{
        name: 'Charge Rifle',
        path: '/images/weapon-icons/Charge Rifle.svg',
    },{
        name: 'Devotion',
        path: '/images/weapon-icons/Devotion.svg',
    },{
        name: 'EVA-8 Auto',
        path: '/images/weapon-icons/EVA-8 Shotgun.svg',
    },{
        name: 'G7 Scout',
        path: '/images/weapon-icons/G7 Scout.svg',
    },{
        name: 'HAVOC Rifle',
        path: '/images/weapon-icons/HAVOC Rifle.svg',
    },{
        name: 'Hemlok Burst AR',
        path: '/images/weapon-icons/Hemlok Burst AR.svg',
    },{
        name: 'Kraber .50-Cal Sniper',
        path: '/images/weapon-icons/Kraber 50 Cal Sniper.svg',
    },{
        name: 'L-Star',
        path: '/images/weapon-icons/L-Star.svg',
    },{
        name: 'Longbow DMR',
        path: '/images/weapon-icons/Longbow DMR.svg',
    },{
        name: 'Mastiff Shotgun',
        path: '/images/weapon-icons/Mastiff Shotgun.svg',
    },{
        name: 'Mozambique',
        path: '/images/weapon-icons/Mozambique.svg',
    },{
        name: 'P2020',
        path: '/images/weapon-icons/P2020.svg',
    },{

        name: 'Peacekeeper',
        path: '/images/weapon-icons/Peacekeeper.svg',
    },{

        name: 'Prowler Burst PDW',
        path: '/images/weapon-icons/Prowler Burst PDW.svg',
    },{
        name: 'R-99 SMG',
        path: '/images/weapon-icons/R-99.svg',
    },{
        name: 'R-301 Carbine',
        path: '/images/weapon-icons/R-301.svg',
    },{
        name: 'Rampage',
        path: '/images/weapon-icons/Rampage.svg',
    },{
        name: 'RE-45',
        path: '/images/weapon-icons/RE-45.svg',
    },{
        name: 'Sentinel',
        path: '/images/weapon-icons/Sentinel.svg',
    },{
        name: 'Spitfire',
        path: '/images/weapon-icons/Spitfire.svg',
    },{
        name: 'Triple Take',
        path: '/images/weapon-icons/Triple Take.svg',
    },{
        name: 'VK-47 Flatline',
        path: '/images/weapon-icons/VK-47 Flatline.svg',
    },{
        name: 'Volt SMG',
        path: '/images/weapon-icons/Volt SMG.svg',
    },{
        name: 'Wingman',
        path: '/images/weapon-icons/Wingman.svg',
    }
]

module.exports = (weapon1, weapon2) => {
    const result = [null, null];
    weapons.forEach(w => {
        if (w.name === weapon1) {
            result[0] = w;
        }
        if (w.name === weapon2){
            result[1] = w
        };
    })
    if (result.includes(null)){
        result[result.indexOf(null)] = {
            name: 'Mozambique',
            path: '/images/weapon-icons/Mozambique.svg'
        }
    };
    return result;
}