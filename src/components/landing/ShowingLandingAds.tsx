import LandingAd1 from "../ads/Landing-ad-1";
import LandingAd2 from "../ads/Landing-ad-2";

export default function ShowingLandingAdsAstro () {
    return (
        <div className="flex w-full justify-around items-center pt-20 flex-wrap gap-10">
            <LandingAd1 />
            <LandingAd2 />
        </div> 
    )
}
