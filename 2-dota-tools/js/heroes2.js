const list1 = ("AbaddonAlchemistAxeBeastmasterBrewmasterBristlebackCentaur WarrunnerChaos KnightClockwerkDoomDragon KnightEarth SpiritEarthshakerElder TitanHuskarIoKunkkaLegion CommanderLifestealerLycanMagnusMarsNight StalkerOmniknightPhoenixPudgeSand KingSlardarSnapfireSpirit BreakerSvenTidehunterTimbersawTinyTreant ProtectorTuskUnderlordUndyingWraith King");
const list2 = ("Anti-MageArc WardenBloodseekerBounty HunterBroodmotherClinkzDrow RangerEmber SpiritFaceless VoidGyrocopterJuggernautLone DruidLunaMedusaMeepoMiranaMonkey KingMorphlingNaga SirenNyx AssassinPangolierPhantom AssassinPhantom LancerRazorRikiShadow FiendSlarkSniperSpectreTemplar AssassinTerrorbladeTroll WarlordUrsaVengeful SpiritVenomancerViperWeaver");
const list3 = ("Ancient ApparitionBaneBatriderChenCrystal MaidenDark SeerDark WillowDazzleDeath ProphetDisruptorEnchantressEnigmaGrimstrokeInvokerJakiroKeeper of the LightLeshracLichLinaLionNature's ProphetNecrophosOgre MagiOracleOutworld DevourerPuckPugnaQueen of PainRubickShadow DemonShadow ShamanSilencerSkywrath MageStorm SpiritTechiesTinkerVisageVoid SpiritWarlockWindrangerWinter WyvernWitch DoctorZeus");
const mainAttributes = ['Strength', 'Agility', 'Intelligence'];

function Hero(fullName,mainAttribute) {
  this.fullName = fullName;
  this.mainAttribute = mainAttribute;
  // Methods
  function give() {
    for (let hero of createdHeroes) { hero = new Hero();
      if (list == list1) Hero.mainAttribute = mainAttributes[0];
      if (list == list2) Hero.mainAttribute = mainAttributes[1];
      if (list == list3) Hero.mainAttribute = mainAttributes[2];   }
    }
}
function breakNames(list) {
  document.getElementById('heroes').innerHTML = '';
    const criteria = new RegExp(/[A-Z][a-z]+[\s|\W][A-Z][a-z]+|[A-Z][a-z]+/g);
    heroList = list.match(criteria);
  for (const hero in heroList) { document.getElementById('heroes').innerHTML += heroList[hero] + ' ';}
  heroList = [];
}
