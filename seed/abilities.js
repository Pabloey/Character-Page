const db = require('../db')
const { Ability, Character } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'));

const main = async () => {
  const jinx = await Character.find({ name: "Jinx" });
  const vi = await Character.find({ name: "Vi" });
  const caitlyn = await Character.find({ name: "Caitlyn" });
  const jayce = await Character.find({ name: "Jayce" });
  const abilities = [
    {
      pSkill: "Get Excited!",
      pImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/passive/Jinx_Passive.png",
      pDes: "Jinx receives massively increased Move Speed and Attack Speed whenever she helps kill or destroy an enemy champions epic jungle monster, or structure.",
      qSkill: "Switcheroo!",
      qImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/JinxQ.png",
      qDes: "Jinx modifies her basic attacks by swapping between Pow-Pow, her minigun and Fishbones, her rocket launcher. Attacks with Pow-Pow grant Attack Speed, while attacks with Fishbones deal area of effect damage, gain increased range, but drain Mana and attack slower.",
      wSkill: "Zap!",
      wImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/JinxW.png",
      wDes: "Jinx uses Zapper, her shock pistol, to fire a blast that deals damage to the first enemy hit, slowing and revealing it.",
      eSkill: "Flame Chompers!",
      eImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/JinxE.png",
      eDes: "Jinx throws out a line of snare grenades that explode after 5 seconds, lighting enemies on fire. Flame Chompers will bite enemy champions who walk over them, rooting them in place.",
      rSkill: "Super Mega Death Rocket!",
      rImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/JinxR.png",
      rDes: "Jinx fires a super rocket across the map that gains damage as it travels. The rocket will explode upon colliding with an enemy champion, dealing damage to it and surrounding enemies based on their missing Health.",
      ability_id: jinx[0].name
    },
    {
      pSkill: "Blast Shield",
      pImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/passive/ViPassive.png",
      pDes: "Vi charges a shield over time. The shield can be activated by hitting an enemy with an ability.",
      qSkill: "Vault Breaker",
      qImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/ViQ.png",
      qDes: "Vi charges her gauntlets and unleashes a vault shattering punch, carrying her forward. Enemies she hits are knocked back and receive a stack of Denting Blows.",
      wSkill: "Denting Blows",
      wImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/ViW.png",
      wDes: "Vi's punches break her opponent's Armor, dealing bonus damage and granting her Attack Speed.",
      eSkill: "Relentless Force",
      eImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/ViE.png",
      eDes: "Vi's next attack blasts through her target, dealing damage to enemies behind it.",
      rSkill: "Cease and Desist",
      rImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/ViR.png",
      rDes: "Vi runs down an enemy, knocking aside anyone in the way. When she reaches her target she knocks it into the air, jumps after it, and slams it back into the ground.",
      ability_id: vi[0].name
    },
    {
      pSkill: "Headshot",
      pImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/passive/Caitlyn_Headshot.png",
      pDes: "Every few basic attacks, or against a target she has trapped or netted, Caitlyn will fire a headshot dealing bonus damage that scales with her critical strike chance. On trapped or netted targets, Caitlyn's Headshot attack range is doubled.",
      qSkill: "Piltover Peacemaker",
      qImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/CaitlynQ.png",
      qDes: "Caitlyn revs up her rifle for 1 second to unleash a penetrating shot that deals physical damage (deals less damage to subsequent targets).",
      wSkill: "Yordle Snap Trap",
      wImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/CaitlynW.png",
      wDes: "Caitlyn sets a trap to find sneaky yordles. When sprung, the trap reveals and immobilizes the enemy champion for 1.5 seconds, granting Caitlyn an empowered Headshot.",
      eSkill: "90 Caliber Net",
      eImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/CaitlynE.png",
      eDes: "Caitlyn fires a heavy net to slow her target. The recoil knocks Caitlyn back.",
      rSkill: "Ace in the Hole",
      rImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/CaitlynR.png",
      rDes: "Caitlyn takes time to line up the perfect shot, dealing massive damage to a single target at a huge range. Enemy champions can intercept the bullet for their ally.",
      ability_id: caitlyn[0].name
    },
    {
      pSkill: "Hextech Capacitor",
      pImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/passive/Jayce_Passive.png",
      pDes: "When Jayce swaps weapons he gains movement speed for a short duration.",
      qSkill: "To the Skies!",
      qImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/JayceToTheSkies.png",
      qDes: "Hammer Stance: Leaps to an enemy dealing physical damage and slowing enemies.<br><br>Cannon Stance: Fires an orb of electricity that detonates upon hitting an enemy (or reaching the end of its path) dealing physical damage to all enemies hit.",
      wSkill: "Lightning Field",
      wImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/JayceStaticField.png",
      wDes: "Hammer Stance: Passive: Restores Mana per strike. Active: Creates a field of lightning damaging nearby enemies for several seconds.<br><br>Cannon Stance: Gains a burst of energy, increasing Attack Speed to maximum for several attacks.",
      eSkill: "Thunder Blow!",
      eImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/JayceThunderingBlow.png",
      eDes: "Hammer Stance: Deals magic damage to an enemy and knocks them back a short distance.<br><br>Cannon Stance: Deploys an Acceleration Gate increasing the Move Speed of all allied champions who pass through it. If Shock Blast is fired through the gate the missile speed, range, and damage will increase.",
      rSkill: "Transform Mercury Cannon",
      rImage: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/JayceStanceHtG.png",
      rDes: "Hammer Stance: Transforms the Mercury Hammer into the Mercury Cannon gaining new abilities and increased range. The first attack in this form reduces the target's Armor and Magic Resist.<br><br>Cannon Stance: Transforms the Mercury Cannon into the Mercury Hammer gaining new abilities and increasing Armor and Magic Resist. The first attack in this form deals additional magic damage.",
      ability_id: jayce[0].name
    },
  ]
  await Ability.insertMany(abilities)
  console.log('abilities created')
};

const run = async () => {
  await main();
  db.close;
}

run();