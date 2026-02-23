const moonImages = {
  "New Moon": "/images/NewMoon.svg",
  "Waxing Crescent": "/images/WaxingCrescent.svg",
  "First Quarter": "/images/FirstQuarter.svg",
  "Waxing Gibbous": "/images/WaxingGibbous.svg",
  "Full Moon": "/images/FullMoon.svg",
  "Waning Gibbous": "/images/WaningGibbous.svg",
  "Last Quarter": "/images/LastQuarter.svg",
  "Waning Crescent": "/images/WaningCrescent.svg",
};

export default function moonImage(moonPhase) {
  return moonImages[moonPhase];
}
