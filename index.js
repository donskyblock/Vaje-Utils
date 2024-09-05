import { coinflip } from "./commands/Coinflip"
import { enderPearlCommand } from "./commands/EnderPearlCommand"
import { inflatableJerriesCommand } from "./commands/InflatableJerriesCommand"
import { refillCommand } from "./commands/RefillCommand"
import { rotate } from "./commands/Rotate"
import { VajeCommand } from "./commands/VajeCommand"
import Settings from './config';  // Adjust path as necessary
import { mpCommand, pbCommand, lvlCommand } from "./features/CheckStats"
import { Color } from 'Vigilance';  // Adjust the path if necessary


import "./features/AtLocationMessages"
import "./features/AutoKickValley"
import "./features/AutoOpenPotionBag"
import "./features/BloodCampHelper"
import "./features/BloodRushSplits"
import "./features/CooldownKickMessage"
import "./features/CrystalPlaceTimer"
import "./features/CrystalSpawnTimer"
import "./features/DragonSpawnTimer"
import "./features/DungeonWarpCooldown"
import "./features/DupeClassChecker"
import "./features/ExplosiveShot"
import "./features/GoldorTickTimer"
import "./features/HidePlayersInP3"
import "./features/InvincibilityMessages"
import "./features/P3StartTimer"
import "./features/PictureOnScreen"
import "./features/PredevTimer"
import "./features/ReaperDisplay"
import "./features/RelicSpawnTimer"
import "./features/RelicTimer"
import "./features/Reminder"
import "./features/TerminalTimestamps"
// Correcting Sound class instances with consistent capitalization
const JanneroMeowSound = new Sound({ source: "JanneroMeow.ogg" });
const JanneroUwUSound = new Sound({ source: "JanneroUwU.ogg" });
const phonelingSound = new Sound({ source: "phoneling.ogg" });

// Correcting KeyBind instances with consistent capitalization
const Meow = new KeyBind("Meow", 0, "Vaje Utils");
const JanneroMeow = new KeyBind("Jannero Meow", 0, "Vaje Utils");
const JanneroUwU = new KeyBind("Jannero UwU", 0, "Vaje Utils");
const phonelin = new KeyBind("Phone Linging", 0, "Vaje Utils");

// Register key press events
Meow.registerKeyPress(() => World.playSound("mob.cat.meow", 1, 1));
JanneroMeow.registerKeyPress(() => JanneroMeowSound.play());
JanneroUwU.registerKeyPress(() => JanneroUwUSound.play());
phonelin.registerKeyPress(() => phonelingSound.play());

// To read/write config values, simply read/write them like normal JS values
Settings.myColor = Color.RED;  // Correct use of Color
console.log(Settings.textInput);  // Check if textInput is defined


