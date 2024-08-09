// wildjammer-data.js

const wildjammerData = {
    hulls: {
        // Fighters (0.5 x 0.5)
        blade: {
            name: "Blade",
            type: "Fighter",
            size: [0.5, 0.5],
            ac: 13,
            hp: 45,
            bp: 0,
            speed: 3500,
            maneuverability: 180,
            hardpoints: [{ size: "small", count: 1 }],
            crew: { min: 1, max: 1 },
            cargo: 0.25,
            air: 120
        },
        spiritWarrior: {
            name: "Spirit Warrior",
            type: "Fighter",
            size: [0.5, 0.5],
            ac: 13,
            hp: 45,
            bp: 0,
            speed: 3000,
            maneuverability: 360,
            hardpoints: [{ size: "special", count: 1 }],
            crew: { min: 1, max: 1 },
            cargo: 0.25,
            air: 120
        },

        // Schooners (1 x 1)
        dragonfly: {
            name: "Dragonfly",
            type: "Schooner",
            size: [1, 1],
            ac: 12,
            hp: 66,
            bp: 10,
            speed: 4000,
            maneuverability: 135,
            hardpoints: [{ size: "small", count: 1 }],
            crew: { min: 3, max: 10 },
            cargo: 5,
            air: 1200
        },
        thundership: {
            name: "Thundership",
            type: "Schooner",
            size: [1, 1],
            ac: 15,
            hp: 79,
            bp: 12,
            speed: 3000,
            maneuverability: 90,
            hardpoints: [
                { size: "medium", count: 2 },
                { size: "small", count: 1 }
            ],
            crew: { min: 5, max: 15 },
            cargo: 5,
            air: 1800
        },
        wasp: {
            name: "Wasp",
            type: "Schooner",
            size: [1, 1],
            ac: 15,
            hp: 86,
            bp: 12,
            speed: 3000,
            maneuverability: 90,
            hardpoints: [{ size: "large", count: 1 }],
            crew: { min: 8, max: 18 },
            cargo: 9,
            air: 2160
        },
        cutter: {
            name: "Cutter",
            type: "Schooner",
            size: [1, 1],
            ac: 15,
            hp: 92,
            bp: 14,
            speed: 3000,
            maneuverability: 180,
            hardpoints: [{ size: "medium", count: 3 }],
            crew: { min: 6, max: 20 },
            cargo: 10,
            air: 2400
        },

        // Sloops (1 x 1)
        huntsman: {
            name: "Huntsman",
            type: "Sloop",
            size: [1, 1],
            ac: 15,
            hp: 105,
            bp: 16,
            speed: 3000,
            maneuverability: 90,
            hardpoints: [
                { size: "medium", count: 1 },
                { size: "small", count: 1 }
            ],
            crew: { min: 10, max: 25 },
            cargo: 13,
            air: 3000
        },
        galleon: {
            name: "Galleon",
            type: "Sloop",
            size: [1, 1],
            ac: 15,
            hp: 144,
            bp: 22,
            speed: 3000,
            maneuverability: 45,
            hardpoints: [
                { size: "medium", count: 2 },
                { size: "small", count: 1 }
            ],
            crew: { min: 20, max: 40 },
            cargo: 20,
            air: 4800
        },
        nautiloid: {
            name: "Nautiloid",
            type: "Sloop",
            size: [1, 1],
            ac: 17,
            hp: 131,
            bp: 20,
            speed: 3000,
            maneuverability: 90,
            hardpoints: [{ size: "medium", count: 5 }],
            crew: { min: 10, max: 35 },
            cargo: 17,
            air: 4200
        },
        turtleShip: {
            name: "Turtle Ship",
            type: "Sloop",
            size: [1, 1],
            ac: 18,
            hp: 144,
            bp: 22,
            speed: 2500,
            maneuverability: 90,
            hardpoints: [
                { size: "medium", count: 1 },
                { size: "small", count: 3 }
            ],
            crew: { min: 12, max: 40 },
            cargo: 20,
            air: 4800
        },
        mindspider: {
            name: "Mindspider",
            type: "Sloop",
            size: [1, 1],
            ac: 16,
            hp: 144,
            bp: 22,
            speed: 2500,
            maneuverability: 135,
            hardpoints: [{ size: "medium", count: 3 }],
            crew: { min: 3, max: 40 },
            cargo: 20,
            air: 4800
        },

        // Frigates (2 x 2)
        dragonship: {
            name: "Dragonship",
            type: "Frigate",
            size: [2, 2],
            ac: 16,
            hp: 157,
            bp: 24,
            speed: 2500,
            maneuverability: 90,
            hardpoints: [{ size: "medium", count: 2 }],
            crew: { min: 20, max: 45 },
            cargo: 22,
            air: 5400
        },
        squidShip: {
            name: "Squid Ship",
            type: "Frigate",
            size: [2, 2],
            ac: 16,
            hp: 157,
            bp: 24,
            speed: 2500,
            maneuverability: 90,
            hardpoints: [
                { size: "large", count: 1 },
                { size: "medium", count: 2 }
            ],
            crew: { min: 12, max: 45 },
            cargo: 22,
            air: 5400
        },
        hammership: {
            name: "Hammership",
            type: "Frigate",
            size: [2, 2],
            ac: 16,
            hp: 196,
            bp: 30,
            speed: 2500,
            maneuverability: 90,
            hardpoints: [{ size: "large", count: 3 }],
            crew: { min: 24, max: 60 },
            cargo: 30,
            air: 7200
        },
        lampreyShip: {
            name: "Lamprey Ship",
            type: "Frigate",
            size: [2, 2],
            ac: 20,
            hp: 157,
            bp: 24,
            speed: 2500,
            maneuverability: 135,
            hardpoints: [{ size: "small", count: 6 }],
            crew: { min: 10, max: 40 },
            cargo: 22,
            air: 5400
        },
        manOWar: {
            name: "Man-o-War",
            type: "Frigate",
            size: [2, 2],
            ac: 16,
            hp: 196,
            bp: 30,
            speed: 2500,
            maneuverability: 135,
            hardpoints: [{ size: "medium", count: 5 }],
            crew: { min: 10, max: 60 },
            cargo: 30,
            air: 7200
        },

        // Heavy Frigates (3 x 3)
        octopus: {
            name: "Octopus",
            type: "Heavy Frigate",
            size: [3, 3],
            ac: 16,
            hp: 222,
            bp: 34,
            speed: 2000,
            maneuverability: 90,
            hardpoints: [{ size: "large", count: 4 }],
            crew: { min: 13, max: 70 },
            cargo: 35,
            air: 8400
        },
        battleDolphin: {
            name: "Battle Dolphin",
            type: "Heavy Frigate",
            size: [3, 3],
            ac: 16,
            hp: 222,
            bp: 34,
            speed: 2000,
            maneuverability: 90,
            hardpoints: [{ size: "medium", count: 2 }],
            crew: { min: 12, max: 70 },
            cargo: 35,
            air: 8400
        },
        whaleship: {
            name: "Whaleship",
            type: "Heavy Frigate",
            size: [3, 3],
            ac: 15,
            hp: 274,
            bp: 42,
            speed: 1500,
            maneuverability: 45,
            hardpoints: [{ size: "medium", count: 1 }],
            crew: { min: 20, max: 90 },
            cargo: 50,
            air: 10800
        },
        clipper: {
            name: "Clipper",
            type: "Heavy Frigate",
            size: [3, 3],
            ac: 18,
            hp: 209,
            bp: 32,
            speed: 1500,
            maneuverability: 45,
            hardpoints: [{ size: "medium", count: 26 }],
            crew: { min: 18, max: 65 },
            cargo: 24,
            air: 10200
        },
        dreadnought: {
            name: "Dreadnought",
            type: "Heavy Frigate",
            size: [3, 3],
            ac: 19,
            hp: 274,
            bp: 42,
            speed: 2000,
            maneuverability: 45,
            hardpoints: [
                { size: "large", count: 3 },
                { size: "medium", count: 2 }
            ],
            crew: { min: 20, max: 90 },
            cargo: 45,
            air: 10800
        },

        // Ships of the Line (4 x 4)
        castleCommand: {
            name: "Castle Command",
            type: "Ship of the Line",
            size: [4, 4],
            ac: 18,
            hp: 300,
            bp: 46,
            speed: 1500,
            maneuverability: 45,
            hardpoints: [{ size: "large", count: 7 }],
            crew: { min: 30, max: 100 },
            cargo: 50,
            air: 12000
        },
        armada: {
            name: "Armada",
            type: "Ship of the Line",
            size: [4, 4],
            ac: 18,
            hp: 300,
            bp: 46,
            speed: 1500,
            maneuverability: 90,
            hardpoints: [
                { size: "large", count: 14 },
                { size: "medium", count: 3 }
            ],
            crew: { min: 40, max: 100 },
            cargo: 50,
            air: 12000
        },
        deathspider: {
            name: "Deathspider",
            type: "Ship of the Line",
            size: [4, 4],
            ac: 19,
            hp: 300,
            bp: 46,
            speed: 1500,
            maneuverability: 45,
            hardpoints: [{ size: "large", count: 6 }],
            crew: { min: 30, max: 100 },
            cargo: 50,
            air: 12000
        },
        tsunami: {
            name: "Tsunami",
            type: "Ship of the Line",
            size: [4, 4],
            ac: 22,
            hp: 360,
            bp: 84,
            speed: 2500,
            maneuverability: 135,
            hardpoints: [
                { size: "large", count: 22 },
                { size: "medium", count: 5 }
            ],
            crew: { min: 75, max: 200 },
            cargo: 100,
            air: 24000
        }
    },
    weapons: {
        lightBallista: {
            name: "Light Ballista",
            size: "Small",
            cost: 1000,
            damage: "2d4",
            type: "piercing",
            range: {
                normal: 2500,
                long: 7500
            },
            properties: ["crew 1"],
            description: "These top loaded siege weapons look much like a large crossbow. They are mounted with a reinforced central pivot allowing them to aim in any direction. Light ballistae require only one crew member to operate and have a range of 2,500/7,500 ft."
        },
        mediumBallista: {
            name: "Medium Ballista",
            size: "Medium",
            cost: 2000,
            damage: "2d6",
            type: "piercing",
            range: {
                normal: 3000,
                long: 9000
            },
            properties: ["crew 2"],
            description: "A step up from light ballistae, medium ballistae pack more punch and have a longer range of 3,000/9,000 ft. They require two crew members to operate effectively."
        },
        heavyBallista: {
            name: "Heavy Ballista",
            size: "Large",
            cost: 4000,
            damage: "2d8",
            type: "piercing",
            range: {
                normal: 3500,
                long: 10500
            },
            properties: ["crew 3"],
            description: "The largest of the ballistae, these weapons use a two-point anchor and rest on a manually rotating platform. They have a range of 3,500/10,500 ft. and require three crew members to operate."
        },
        lightCatapult: {
            name: "Light Catapult",
            size: "Small",
            cost: 1000,
            damage: "3d4",
            type: "bludgeoning",
            range: {
                normal: 3500,
                long: 10500
            },
            properties: ["fixed", "crew 1"],
            description: "A classic siege weapon built into the hardpoint of a wildjammer. Light catapults have a range of 3,500/10,500 ft., deal 3d4 mega bludgeoning damage, and require one crew member to operate. They are fixed in position, limiting their firing arc."
        },
        mediumCatapult: {
            name: "Medium Catapult",
            size: "Medium",
            cost: 2000,
            damage: "3d6",
            type: "bludgeoning",
            range: {
                normal: 4000,
                long: 12000
            },
            properties: ["fixed", "crew 3"],
            description: "Larger than light catapults, medium catapults have a range of 4,000/12,000 ft. and deal 3d6 mega bludgeoning damage. They require three crew members to operate and are fixed in position."
        },
        heavyCatapult: {
            name: "Heavy Catapult",
            size: "Large",
            cost: 4000,
            damage: "3d8",
            type: "bludgeoning",
            range: {
                normal: 4500,
                long: 13500
            },
            properties: ["fixed", "crew 5"],
            description: "The largest catapult available, heavy catapults have a range of 4,500/13,500 ft. and deal 3d8 mega bludgeoning damage. They require five crew members to operate and are fixed in position."
        },
        carronade: {
            name: "Carronade",
            size: "Small",
            cost: 2000,
            damage: "3d6",
            type: "bludgeoning",
            range: {
                normal: 2500,
                long: 7500
            },
            properties: ["fixed", "loading", "backfire 1", "crew 2"],
            description: "Short-barreled cannons with a smoothbore design, carronades have a shorter range of 2,500/7,500 ft. but pack a punch with 3d6 mega bludgeoning damage. They require two crew members, have the loading property, and a backfire chance of 1."
        },
        twelvePounderLongGun: {
            name: "12-Pounder Long Gun",
            size: "Medium",
            cost: 4000,
            damage: "3d8",
            type: "bludgeoning",
            range: {
                normal: 5000,
                long: 15000
            },
            properties: ["fixed", "loading", "backfire 2", "crew 4"],
            description: "A common cannon in space, the 12-pounder has a range of 5,000/15,000 ft. and deals 3d8 mega bludgeoning damage. It requires four crew members, has the loading property, and a backfire chance of 2."
        },
        twentyFourPounderLongGun: {
            name: "24-Pounder Long Gun",
            size: "Large",
            cost: 6000,
            damage: "3d10",
            type: "bludgeoning",
            range: {
                normal: 6000,
                long: 18000
            },
            properties: ["fixed", "loading", "backfire 3", "crew 6"],
            description: "A larger cannon with impressive range and power, the 24-pounder has a range of 6,000/18,000 ft. and deals 3d10 mega bludgeoning damage. It requires six crew members, has the loading property, and a backfire chance of 3."
        },
        thirtySixPounderLongGun: {
            name: "36-Pounder Long Gun",
            size: "Large",
            cost: 10000,
            damage: "4d20",
            type: "bludgeoning",
            range: {
                normal: 6000,
                long: 18000
            },
            properties: ["fixed", "overheat", "backfire 4", "crew 8"],
            description: "This massive cannon, favored by giff, has a range of 6,000/18,000 ft. and deals a whopping 4d20 mega bludgeoning damage. It requires eight crew members, overheats after each shot, and has a backfire chance of 4."
        },
        lightDualBallista: {
            name: "Light Dual Ballista",
            size: "Small",
            cost: 2000,
            damage: "2d4",
            type: "piercing",
            range: {
                normal: 2500,
                long: 7500
            },
            properties: ["automatic", "fixed", "crew 2"],
            description: "A specialized ballista that fires two bolts at once. It has a range of 2,500/7,500 ft., deals 2d4 mega piercing damage, and has the automatic property allowing two attacks at disadvantage. Requires two crew members and is fixed in position."
        },
        mediumDualBallista: {
            name: "Medium Dual Ballista",
            size: "Medium",
            cost: 4000,
            damage: "2d6",
            type: "piercing",
            range: {
                normal: 3000,
                long: 9000
            },
            properties: ["automatic", "fixed", "crew 3"],
            description: "A larger dual ballista with a range of 3,000/9,000 ft., dealing 2d6 mega piercing damage. It has the automatic property and requires three crew members to operate. Fixed in position."
        },
        heavyDualBallista: {
            name: "Heavy Dual Ballista",
            size: "Large",
            cost: 8000,
            damage: "2d8",
            type: "piercing",
            range: {
                normal: 3500,
                long: 10500
            },
            properties: ["automatic", "fixed", "crew 4"],
            description: "The largest dual ballista, with a range of 3,500/10,500 ft. and 2d8 mega piercing damage. It has the automatic property, requires four crew members, and is fixed in position."
        },
        helmseekerLauncher: {
            name: "Helmseeker Launcher",
            size: "Medium",
            cost: 3000,
            damage: "3d10",
            type: "fire",
            range: {
                normal: 10000,
                long: 10000
            },
            properties: ["Deployable (4,500 ft.)", "fixed", "loading", "special", "crew 4"],
            description: "Launches a special explosive that tracks helm signatures. It has a range of 10,000 ft., deals 3d10 mega fire damage, and moves 4,500 ft. per round towards its target for up to 3 rounds. Requires four crew members and has the loading property."
        },
        aetherChargeLauncher: {
            name: "Aether Charge Launcher",
            size: "Medium",
            cost: 5000,
            damage: "6d8",
            type: "fire",
            range: {
                normal: 1000,
                long: 1000
            },
            properties: ["Deployable (0 ft.)", "fixed", "loading", "special", "crew 4"],
            description: "Launches mines sensitive to aether movements. When a ship or mega creature moves within 1,000 ft., it triggers and deals 6d8 mega fire damage. Requires four crew members and has the loading property."
        },
        fireProjector: {
            name: "Fire Projector",
            size: "Small",
            cost: 2000,
            damage: "3d4",
            type: "fire",
            range: {
                normal: 1000,
                long: 3000
            },
            properties: ["fixed", "special", "crew 1"],
            description: "A small cannon that projects flame, dealing 3d4 mega fire damage with a range of 1,000/3,000 ft. It deals double damage to bulwark points. Requires one crew member and is fixed in position."
        },
        grapplingBallista: {
            name: "Grappling Ballista",
            size: "Small",
            cost: 2000,
            damage: "1d4",
            type: "piercing",
            range: {
                normal: 1500,
                long: 4500
            },
            properties: ["special", "crew 2"],
            description: "Fires a grappling bolt with a range of 1,500/4,500 ft., dealing 1d4 mega piercing damage. When it hits, it grants advantage on ship grapple checks against the target. Requires two crew members."
        },
        maticksCannon: {
            name: "Matick's Cannon",
            size: "Medium",
            cost: 5000,
            damage: "2d4+2",
            type: "force",
            range: {
                normal: 2500,
                long: 7500
            },
            properties: ["automatic", "special", "crew 1"],
            description: "A magical cannon that fires energy bolts. It has a range of 2,500/7,500 ft., deals 2d4+2 mega force damage, and uses the Gunner's spellcasting ability for attack rolls. It has the automatic property and requires one crew member with spellcasting ability."
        }
    },
    modules: {
        anchor: {
            name: "Anchor",
            description: "A magical anchor that, when lowered, creates a field to keep the wildjammer afloat without a Helmsman at the helm. This allows the ship to remain stationary in space or hover above a planet's surface indefinitely."
        },
        arcaneAmplifier: {
            name: "Arcane Amplifier",
            requirements: "requires a hardpoint of medium or large size",
            description: "This module allows a spellcaster in the Gunner role to amplify offensive evocation spells to mega scale. The amplifier must be charged for one round before use. When activated, it transforms a spell into a mega spell, multiplying its range and dimensions by 100 (max 10,000 ft.) and converting damage to mega damage."
        },
        arcaneFont: {
            name: "Arcane Font",
            requirements: "requires Wildjammer Helm",
            description: "This device gathers residual magical energy during travel. Once per day, a creature can activate it as an action to cast the Automatic Helm spell at 3rd level, providing temporary control of the ship without a Helmsman.",
            uses: {
                max: 1,
                per: "day"
            }
        },
        astrolabe: {
            name: "Astrolabe",
            description: "When activated within a crystal sphere, this module generates a 3D illusory map of nearby celestial bodies, showing their orbital paths, rotations, and current locations relative to the ship. This aids in navigation and planning travel routes."
        },
        brig: {
            name: "Brig",
            description: "A secure room designed to hold up to 5 medium creatures. The brig's security features are determined at installation. If the module is disabled, any prisoners are freed to move about the ship."
        },
        chameleonOrb: {
            name: "Chameleon Orb",
            description: "When activated while the ship is landed, this orb creates an illusion of the surrounding landscape, hiding the ship from sight. The illusion can last up to a month but ends if a Helmsman attunes to the ship's helm. Creatures can attempt to see through the illusion with a DC 20 Intelligence (Investigation) check."
        },
        fighterBay: {
            name: "Fighter Bay",
            requirements: "requires a ship of Sloop size or larger",
            description: "This bay can store and launch one fighter-sized ship. It allows a Fighter Helmsman to deploy their vessel, expanding the wildjammer's combat capabilities."
        },
        invisibilityAmplifier: {
            name: "Invisibility Amplifier",
            description: "When a creature casts the Invisibility spell and touches the ship, this module amplifies the spell to mega scale. Everything inside the ship's air bubble becomes invisible to those outside. The effect ends if anyone aboard makes a Ship Weapon Attack, casts a mega spell, or if the ship moves more than 500 feet in a turn."
        },
        jettison: {
            name: "Jettison",
            description: "A section of the cargo hold that can be filled with debris and released behind the ship as an action by any bridge crew officer. This functions as a 2nd-level Jettison spell. It can hold up to 2 tons of cargo and must be refilled after use."
        },
        lifeboats: {
            name: "Lifeboats",
            description: "Each lifeboat can carry 5 medium creatures and is enchanted to seek out the nearest planet-sized body with air. They provide protection from most damage and are too small for ship weapons to target effectively. Each lifeboat takes up 1 ton of cargo space and provides air for up to a month."
        },
        passageDevice: {
            name: "Passage Device",
            requirements: "requires a Wildjammer Helm",
            description: "This device allows the Helmsman to cast the Create Portal spell once every 24 hours, facilitating easier entry and exit from crystal spheres.",
            uses: {
                max: 1,
                per: "day"
            }
        },
        planeShiftAmplifier: {
            name: "Plane Shift Amplifier",
            requirements: "requires a ship with an attuned Helmsman",
            description: "When a creature casts the Plane Shift spell and touches the ship with their tuning fork, this module amplifies the spell to transport the entire ship and its occupants. An unwilling Helmsman can resist with a Charisma saving throw."
        },
        portalLocator: {
            name: "Portal Locator",
            requirements: "requires a Wildjammer Helm",
            description: "When activated by the Helmsman as an action, this instrument casts the Locate Portal spell, aiding in finding entry and exit points for crystal spheres."
        },
        sendingChamber: {
            name: "Sending Chamber",
            description: "This room contains a special sending orb that allows long-distance communication between ships with Sending Chambers. It can create a magical link across spheres (but not planes) where participants can project their minds into a shared mental space. The link lasts until all participants from one side disengage."
        },
        sickbay: {
            name: "Sickbay",
            description: "A medical facility with 6 medical dice (1d8s) that recharge daily. Anyone aboard can spend 1 minute in the sickbay to use a die and regain hit points equal to the roll. Alternatively, 3 dice can be expended to cure one non-magical poison or disease. This module is crucial for long voyages without a dedicated healer.",
            uses: {
                max: 6,
                per: "day"
            }
        },
        workshop: {
            name: "Workshop",
            description: "A specialized room equipped for a specific type of crafting. It provides all necessary tools and materials for someone with the corresponding artisan tool proficiency to work on projects during travel. Each workshop is tailored to a single tool proficiency, such as smith's tools, carpenter's tools, or weaver's tools."
        }
    },
    upgrades: {
        adaptableSails: {
            name: "Adaptable Sails",
            description: "After moving, your ship can turn an additional 45°. This doesn't increase the movement cone, only the final turning angle.",
            effect: (ship) => {
                ship.maneuverability += 45;
            }
        },
        glidingSails: {
            name: "Gliding Sails",
            description: "Increases your ship's movement by 500 feet when moving in a straight line.",
            effect: (ship) => {
                ship.speed += 500;
            }
        },
        arcaneWeaponry: {
            name: "Arcane Weaponry",
            requirements: "Ship weapon upgrade, requires a ship weapon",
            description: "Converts one ship weapon to use magical energy instead of physical ammunition. A Gunner with spellcasting ability uses their spellcasting modifier for attack rolls with this weapon. If the Gunner has 3rd level spell slots but lacks Extra Attack, they gain Extra Attack when using this weapon."
        },
        assaultPort: {
            name: "Assault Port",
            requirements: "Module upgrade, requires a Fighter Bay module",
            description: "Enhances the Fighter Bay, allowing a Fighter Helmsman to deploy as a bonus action instead of an action, significantly improving reactive capabilities in combat situations."
        },
        enchantedHull: {
            name: "Enchanted Hull",
            description: "Magically reinforces the ship's hull, increasing its Armor Class by 1. This makes the ship more resilient against attacks and environmental hazards.",
            effect: (ship) => {
                ship.ac += 1;
            }
        },
        enhancedWeapon: {
            name: "Enhanced Weapon",
            description: "Enchants a ship weapon to seek out helms and mega creatures. The enchanted weapon gains a +1 bonus to attack rolls and its normal range is increased by 500 ft. Higher-level enhancements (+2 or +3) are rare and not readily available on the market.",
            effect: (ship, weaponIndex) => {
                if (ship.weapons[weaponIndex]) {
                    ship.weapons[weaponIndex].attackBonus = (ship.weapons[weaponIndex].attackBonus || 0) + 1;
                    ship.weapons[weaponIndex].range.normal += 500;
                }
            }
        },
        gunpowderStation: {
            name: "Gunpowder Station",
            requirements: "Hardpoint upgrade, requires a ship hardpoint",
            description: "Installs a specialized gunpowder handling station near a hardpoint. Cannons mounted on this hardpoint ignore the Loading property, allowing for faster fire rates. This upgrade can be purchased multiple times for different hardpoints."
        },
        helmLink: {
            name: "Helm Link",
            requirements: "Helm upgrade, requires a helm",
            description: "Creates a magical link between your ship's helm and another willing wildjammer's helm. When either ship accelerates to jamming speeds, the other is automatically carried along, allowing for coordinated long-distance travel."
        },
        reinforcedBulwark: {
            name: "Reinforced Bulwark",
            description: "Strengthens the ship's internal reinforcements with the expertise of the Boatswain. This upgrade increases the ship's bulwark points by 8, providing extra protection against damage.",
            effect: (ship) => {
                ship.bp += 8;
            }
        },
        reinforcedComponent: {
            name: "Reinforced Component",
            description: "Reinforces one of the ship's weapons, modules, or the ship's sails, doubling its hull points from 10 to 20. This makes the chosen component more resilient to damage. This upgrade can be applied multiple times to different components.",
            effect: (ship, componentType, componentIndex) => {
                if (ship[componentType] && ship[componentType][componentIndex]) {
                    ship[componentType][componentIndex].hullPoints = 20;
                }
            }
        },
        reinforcedHull: {
            name: "Reinforced Hull",
            description: "Improves the overall integrity of the wildjammer by adding lightweight reinforcement to the hull. This upgrade increases the ship's hull points by 16, significantly enhancing its durability.",
            effect: (ship) => {
                ship.hp += 16;
            }
        },
        turretedHardpoint: {
            name: "Turreted Hardpoint",
            requirements: "Hardpoint upgrade, requires a ship hardpoint",
            description: "Adds a turret platform to one of the ship's hardpoints. A Gunner using a weapon mounted on this hardpoint can use a bonus action to change the weapon's facing, increasing flexibility in combat. This upgrade can be purchased multiple times for different hardpoints."
        }
    },
    foreMantle: {
        ram: {
            name: "Ram",
            description: "A large, reinforced attachment on the ship's fore mantle designed to absorb impact. When the Helmsman uses the Collide action and hits, damage dice this ship takes are reduced to d4s.",
            type: "Fore mantle ship module"
        },
        grapplingRam: {
            name: "Grappling Ram",
            description: "A specialized ram designed for boarding actions. When the Helmsman uses the Collide action and hits, both ships are immediately placed in a ship grapple (escape DC 13).",
            type: "Fore mantle ship module"
        },
        grapplerArms: {
            name: "Grappler Arms",
            requirements: "Frigate-sized (1x1) or larger",
            description: "Extendable manipulators that allow the Helmsman to attack or grapple other ships. On a Collide action, the ship moves half speed and makes a special attack (2d10 mega bludgeoning damage) or grapple attempt against a target within 500 feet.",
            type: "Fore mantle ship weapon"
        },
        dragonFigurehead: {
            name: "Dragon Figurehead",
            description: "A dragon-shaped figurehead that can unleash a breath weapon. As an action, it can breathe fire in a 3,000-foot cone, dealing 8d6 mega fire damage (Dex save for half) and preventing bulwark point regeneration on a failed save. Usable once per hour.",
            type: "Fore mantle ship module",
            uses: {
                max: 1,
                per: "hour"
            }
        },
        couatlFigurehead: {
            name: "Couatl Figurehead",
            description: "A couatl-shaped figurehead with rainbow wings that can repair the ship. As an action, it heals the ship for 4d4 + the Helmsman's spellcasting ability modifier. Usable once per 24 hours.",
            type: "Fore mantle ship module",
            uses: {
                max: 1,
                per: "day"
            }
        },
        displacerBeastFigurehead: {
            name: "Displacer Beast Figurehead",
            description: "A displacer beast figurehead that creates illusory duplicates of the ship. As an action, it imposes disadvantage on attack rolls against the ship for 1 minute. The effect ends early if the ship is hit, destroyed, or grappled. Usable once per hour.",
            type: "Fore mantle ship module",
            uses: {
                max: 1,
                per: "hour"
            }
        }
    },
    helms: {
        artifurnace: {
            name: "Artifurnace",
            type: "Wondrous item, artifact",
            attunement: "requires attunement",
            value: "Priceless",
            description: "The Artifurnace is a priceless artifact, an upgraded version of the Furnace Helm. This helm is designed to convert magical power into propulsion for Spelljammer vessels. The Artifurnace functions with the power of an 11th level spellcaster for Spell Surge and Hover Sailing. A Helmsman is still required to control the helm. However, the Artifurnace offers a unique feature: if a sentient magic item is used as the artifact power source, it becomes the Helmsman of the wildjammer itself.",
            properties: [
                "Counts as an 11th level spellcaster for Spell Surge and Hover Sailing",
                "A Helmsman is still required to control the helm",
                "If a sentient magic item is used as the artifact, it becomes the Helmsman of the wildjammer"
            ]
        },
        crownOfStars: {
            name: "Crown of Stars",
            type: "Wondrous item, artifact",
            attunement: "requires attunement by a creature with spellcasting or pact magic",
            value: "Priceless",
            description: "This helm functions exactly the same as a Wildjammer Helm (minor), except that it takes the form of a crown. While wearing this helm, a Helmsman does not become helpless while attuned. They can act both in mega scale combat as a Helmsman and in ground scale combat aboard their ship. If the Helmsman leaves the air envelope of the wildjammer, attunement to this helm immediately ends."
        },
        deathHelm: {
            name: "Death Helm",
            type: "Wondrous item, artifact",
            attunement: "requires attunement by a creature with spellcasting or pact magic",
            value: "50,000gp",
            description: "This helm is identical to a Wildjammer Helm (major), except it also has additional properties. hen a creature with spellcasting or pact magic attunes to this helm, they must resist its charm with a DC 20 Wisdom saving throw. If charmed, the user enjoys the attunement but suffers daily, irreversible exhaustion. Each day of use requires a special death saving throw, which accumulates until attunement breaks or the user dies. Breaking attunement triggers a point of exhaustion and another special death saving throw.",
            properties: [
                "Cursed Item: When a creature attunes to this helm, they must make a DC 20 Wisdom saving throw or be charmed by the helm.",
                "While charmed, the creature enjoys being attuned to the helm, but suffers a point of exhaustion each day that doesn't go away with a long rest.",
                "Each day the helmsman uses the Death Helm, they must make a special death saving throw. These saving throws accumulate until attunement is broken or the creature dies.",
                "Unattunement Backlash: When a Helmsman unattunes, they suffer a point of exhaustion and must make a special death saving throw."
            ]
        },
        furnaceHelm: {
            name: "Furnace Helm",
            type: "Wondrous item, artifact",
            attunement: "requires attunement",
            value: {
                minor: "20,000gp",
                major: "50,000gp"
            },
            description: "The Furnace Helm is a unique propulsion system for Spelljammer vessels, taking the form of a centrally-located furnace. Due to its fire dependency, the Furnace Helm is never used in the Flow. It generates power by burning magic items, with every 1,000 gold pieces' worth of items providing a week of propulsion. For hover sailing, each 1,000 gold pieces burned equates to one spell slot level, up to a maximum of five. The Spell Surge feature allows burning additional items for extra power, but carries a 25% risk of explosion, dealing 10d10 mega fire damage. ",
            properties: [
                "For every 1,000gp of value burned, the furnace generates one week's worth of propulsion.",
                "Never used in the Flow due to fire dependence.",
                "Minor variant: Only for fighters (mega tiny) or schooner (mega small) size wildjammers.",
                "Major variant: For wildjammers from schooner (mega small) to frigate (mega large) size.",
                "Hover sailing: Every 1,000gp burned corresponds to one spell slot level (max 5).",
                "Spell Surge: Burn additional items, 1,000gp per spell slot level (max 5), 25% chance of explosion dealing 10d10 mega fire damage."
            ]
        },
        seriesHelm: {
            name: "Series Helm",
            type: "Wondrous item, artifact",
            attunement: "requires attunement by a creature with spellcasting or pact magic",
            value: "75,000gp per link",
            description: "This rare Helm is actually a series of specialized Wildjammer Helms.  Its unique design allows different creatures to attune to each link, though only one can serve as the Helmsman at any given time. This helm functions the same as a minor windjammer helm. However, this helm offers enhanced flexibility in ship control, as the Helmsman role can be transferred between attuned creatures as an action. When employing Spell Surge or hover sailing, each attuned creature can contribute up to 3 spell slot levels, with a maximum total of 9 levels.",
            properties: [
                "The role of Helmsman can be transferred as an action instead of a bonus action.",
                "When using Spell Surge or hover sailing, each creature can add up to 3 spell slots worth of levels, up to a maximum of 9 levels.",
                "Quick Attunement: Functions identically to a minor Wildjammer Helm.",
                "Unattunement Backlash: Functions identically to a minor Wildjammer Helm."
            ]
        },
        wildjammerHelm: {
            name: "Wildjammer Helm",
            type: "Wondrous item, artifact",
            attunement: "requires attunement by a creature with spellcasting or pact magic",
            value: {
                minor: "100,000gp",
                major: "250,000gp"
            },
            description: "This ornamental throne covered in Arcane runes comes in two varieties: minor and major. This helm offers a Quick Attunement feature, allowing a spellcaster to instantly attune by expending a 2nd-level spell slot. However, it comes with an Unattunement Backlash: when a Helmsman breaks attunement, they are unable to cast spells using spell slots for 1d4 rounds.",
            properties: [
                "Minor variant: Can be installed into wildjammers from schooner (mega small) to frigate (mega large) size.",
                "Major variant: Required for heavy frigates (mega huge) or ships of the line (mega gargantuan).",
                "Quick Attunement: A spellcaster can immediately attune by expending a 2nd level spell slot (minor) or 5th-level spell slot (major).",
                "Unattunement Backlash: Helmsman is unable to cast spells using spell slots for 1d4 rounds (minor) or 2d4 rounds (major)."
            ]
        }
    }
};

// Add this line at the end of the file
if (typeof module !== 'undefined') module.exports = wildjammerData;
