import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ForumIcon from '@mui/icons-material/Forum';
import StoreIcon from '@mui/icons-material/Store';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';

export default function AnchorTemporaryDrawer() {
    const [state, setState] = useState(false);
    const [marketStoriesOpen, setMarketStoriesOpen] = useState(false);
    const [arrowRotation, setArrowRotation] = useState(0);

    const toggleMarketStories = (event: React.MouseEvent) => {
        event.stopPropagation();
        setMarketStoriesOpen(!marketStoriesOpen);
        setArrowRotation(arrowRotation === 0 ? 180 : 0);
    }

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        setState(prevState => !prevState);
    };

    const list = () => (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <ListItem disablePadding>
                <ListItemButton>
                    <Avatar src="https://source.unsplash.com/random/?avatar" className="mr-4"/>
                    <ListItemText primary="John Doe" secondary="New Notifications"/>
                    <NotificationsIcon/>

                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ForumIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Discussion Forms"/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={(event) => toggleMarketStories(event)}>
                <ListItemButton>
                    <ListItemIcon>
                        <StoreIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Market Stories"/>
                    <ListItemIcon>
                        <ExpandLessIcon style={{transform: `rotate(${arrowRotation}deg)`}}/>
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
            {marketStoriesOpen && (
                <>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Sentiment"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Market Sector"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Watchlist"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Events"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="News/Interview"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Description"/>
                        </ListItemButton>
                    </ListItem>
                </>
            )}
        </Box>
    );

    return (
        <>
            <IconButton onClick={toggleDrawer(true)} aria-label="Open Drawer"
                        className="fixed left-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white rounded-full p-3 border border-gray-900
    hover:bg-gray-700 hover:border-gray-800 hover:shadow-md transition duration-300 ease-in-out"
            >
                <ChevronRightIcon fontSize={"large"}/>
            </IconButton>

            <Drawer
                anchor="left"
                open={state}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </>
    );
}
