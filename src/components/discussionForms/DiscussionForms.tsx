import {Avatar} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from "@/utils/IconButton";

interface DiscussionFormsProps {
    name: string;
    avatar: string;
    location: string;
    description: string;
}

const DiscussionForms = ({name, avatar, location, description}: DiscussionFormsProps) => {

    return (
        <div
            className="mx-auto cardWidth m-4 bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-center relative sm:flex-row max-sm:items-center">
            <Avatar src={avatar} alt="Avatar" className="m-4 h-20 w-20"/>

            <div className="p-2 sm:p-4">
                <div className="flex flex-col gap-2 max-sm:flex-row max-sm:justify-center sm:gap-10">
                    <h1 className="text-lg lg:text-xl font-semibold">{name}</h1>
                    <h2 className="rounded-xl border border-blue-500 bg-blue-100 px-2 py-1">{location}</h2>
                </div>
                <p className="mt-2 mb-2 text-gray-700">{description}</p>

                <div className="flex justify-between items-center p-2 border-t border-gray-200 sm:p-4">
                    <IconButton
                        icon={(isActive: boolean) => isActive ? <FavoriteIcon className="text-pink-600 mr-2"/> :
                            <FavoriteBorderOutlinedIcon className="mr-2"/>}
                        text="2K"
                    />

                    <IconButton
                        icon={() => <ChatBubbleOutlineOutlinedIcon className="mr-2" color="primary"/>}
                        text="2K"
                    />

                    <IconButton
                        icon={() => <VisibilityOutlinedIcon className="mr-2"/>}
                        text="2K"
                    />

                    <IconButton
                        icon={() => <ShareIcon className="mr-2"/>}
                        text="Share"
                    />
                </div>

            </div>
            <small className="text-blue-500 absolute top-4 right-4 max-sm:top-2 max-sm:right-1"> 2 mins ago</small>
        </div>
    )
}

export default DiscussionForms;
