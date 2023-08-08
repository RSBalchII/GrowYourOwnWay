import { CannabisAnatomy } from "../Shared/Components/CannabisAnatomy";
import { Cultivation } from "../Shared/Components/Cultivation";
import { Footer } from "../Shared/Components/Footer";
import { GrowthCycle } from "../Shared/Components/GrowthCycle";
import { Hygiene } from "../Shared/Components/Hygiene";
import { InitialStatement } from "../Shared/Components/InitialStatement";
import { TipsAndTricks } from "../Shared/Components/Tips&Tricks";
import { WhyGrowYourOwnWay } from "../Shared/Components/whyGrowYxourOwnWay";
import {Navigation} from "../Shared/Components/Navigation";


export function Home() {
    return (
    <>
    <Navigation/>
    <InitialStatement/>
    <WhyGrowYourOwnWay/>
    <GrowthCycle/>
    <Hygiene/>
    <Cultivation/>
    <CannabisAnatomy/>
    <TipsAndTricks/>
    <Footer/>
    </>
    )
}