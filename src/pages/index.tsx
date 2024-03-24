import {Inter} from "next/font/google";
import {dataArray} from "@/utils/data";
import DiscussionForms from "@/components/discussionForms/DiscussionForms";
import MarketStories from "@/components/marketStories/MarketStories";
import DrawerLeft from "@/components/Drawer";
import * as React from "react";
import {useMediaQuery} from "@mui/material";
import {useState} from "react";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    const isXlScreen = useMediaQuery("(min-width: 1280px)");
    const [showDiscussion, setShowDiscussion] = useState(true);

    const discussion = (<div className="border border-gray-300 p-10 mb-5 xl:mb-0 xl:w-1/2">
        <h1 className={`text-4xl font-semibold mb-5 text-center ${inter.className}`}>
            Discussion Stories
        </h1>
        {dataArray.map((data) => (
            <DiscussionForms
                key={data.name}
                name={data.name}
                avatar={data.avatar}
                location={data.location}
                description={data.description}
            />
        ))}
    </div>)

    const Market = (<div className="w-full xl:w-1/2 flex flex-col justify-center items-center">
        <h1 className={`text-4xl font-semibold m-5 text-center ${inter.className}`}>Market Stories</h1>
        <MarketStories/>
        <MarketStories/>
        <MarketStories/>
        <MarketStories/>
    </div>)

    if (isXlScreen) {
        return (
            <>
                <DrawerLeft/>
                <div className="p-5 flex flex-col xl:flex-row xl:justify-around">
                    {discussion}
                    {Market}
                </div>
            </>
        );
    } else {
        return (
            <>
                <DrawerLeft/>
                <div className="p-5 flex flex-col xl:flex-row xl:justify-around">
                    <div className="border border-gray-300 p-10 mb-5 xl:mb-0 xl:w-1/2">
                        {typeof window !== "undefined" && window.innerWidth < 1280 && (
                            <div className="flex justify-center items-center mb-5">
                                <button
                                    className={`mr-4 px-4 py-2 rounded-lg ${
                                        showDiscussion ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
                                    }`}
                                    onClick={() => setShowDiscussion(true)}
                                >
                                    Discussion Stories
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-lg ${
                                        !showDiscussion ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
                                    }`}
                                    onClick={() => setShowDiscussion(false)}
                                >
                                    Market Stories
                                </button>
                            </div>
                        )}
                        {showDiscussion ? discussion : Market}
                    </div>
                </div>
            </>
        );
    }
}
