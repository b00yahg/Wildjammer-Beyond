// ship-class.js

class Ship {
    constructor(data = {}) {
        this.id = data.id || Date.now().toString();
        this.name = data.name || '';
        this.hullType = data.hullType || '';
        this.helmType = data.helmType || '';
        this.captain = data.captain || '';
        this.helmsman = data.helmsman || '';
        this.boatswain = data.boatswain || '';
        this.gunner1 = data.gunner1 || '';
        this.gunner2 = data.gunner2 || '';
        this.gunner3 = data.gunner3 || '';
        this.fighterHelmsman1 = data.fighterHelmsman1 || '';
        this.fighterHelmsman2 = data.fighterHelmsman2 || '';
        this.fighterHelmsman3 = data.fighterHelmsman3 || '';
        this.crew = data.crew || [];
        this.weapons = data.weapons || [];
        this.modules = data.modules || [];
        this.upgrades = data.upgrades || [];
        this.weaponModifiers = data.weaponModifiers || {};
        this.moduleUses = data.moduleUses || {};
        this.cargo = data.cargo || { copper: 0, silver: 0, gold: 0, platinum: 0, items: '' };
        this.crewComplement = data.crewComplement || [];
        
        // New properties for hull information
        this.size = data.size || [0, 0];
        this.ac = data.ac || 0;
        this.hp = data.hp || 0;
        this.bp = data.bp || 0;
        this.speed = data.speed || 0;
        this.maneuverability = data.maneuverability || 0;
        this.hardpoints = data.hardpoints || [];
        this.minCrew = data.minCrew || 0;
        this.maxCrew = data.maxCrew || 0;
        this.cargoCapacity = data.cargoCapacity || 0;
        this.airEnvelope = data.airEnvelope || 0;
    }

    addWeapon(weaponKey) {
        this.weapons.push(weaponKey);
    }

    removeWeapon(index) {
        this.weapons.splice(index, 1);
    }

    addModule(moduleKey) {
        this.modules.push(moduleKey);
    }

    removeModule(index) {
        this.modules.splice(index, 1);
    }

    addUpgrade(upgradeKey) {
        this.upgrades.push(upgradeKey);
    }

    removeUpgrade(index) {
        this.upgrades.splice(index, 1);
    }

    adjustHullPoints(amount) {
        this.hp += amount;
    }

    // New method to update hull information
    updateHullInfo(hullInfo) {
        this.size = hullInfo.size || this.size;
        this.ac = hullInfo.ac || this.ac;
        this.hp = hullInfo.hp || this.hp;
        this.bp = hullInfo.bp || this.bp;
        this.speed = hullInfo.speed || this.speed;
        this.maneuverability = hullInfo.maneuverability || this.maneuverability;
        this.hardpoints = hullInfo.hardpoints || this.hardpoints;
        this.minCrew = hullInfo.crew?.min || this.minCrew;
        this.maxCrew = hullInfo.crew?.max || this.maxCrew;
        this.cargoCapacity = hullInfo.cargo || this.cargoCapacity;
        this.airEnvelope = hullInfo.air || this.airEnvelope;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            hullType: this.hullType,
            helmType: this.helmType,
            captain: this.captain,
            helmsman: this.helmsman,
            boatswain: this.boatswain,
            gunner1: this.gunner1,
            gunner2: this.gunner2,
            gunner3: this.gunner3,
            fighterHelmsman1: this.fighterHelmsman1,
            fighterHelmsman2: this.fighterHelmsman2,
            fighterHelmsman3: this.fighterHelmsman3,
            crew: this.crew,
            weapons: this.weapons,
            modules: this.modules,
            upgrades: this.upgrades,
            cargo: this.cargo,
            // New properties in toJSON
            size: this.size,
            ac: this.ac,
            hp: this.hp,
            bp: this.bp,
            speed: this.speed,
            maneuverability: this.maneuverability,
            hardpoints: this.hardpoints,
            minCrew: this.minCrew,
            maxCrew: this.maxCrew,
            cargoCapacity: this.cargoCapacity,
            airEnvelope: this.airEnvelope,
            crewComplement: this.crewComplement,
        };
    }

    static fromJSON(json) {
        return new Ship(JSON.parse(json));
    }
}

// Make Ship available in the global scope for non-module environments
if (typeof window !== 'undefined') {
    window.Ship = Ship;
}

// CommonJS module export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Ship;
}

// ES6 module export
// Uncomment the next line if you're using ES6 modules
// export default Ship;
