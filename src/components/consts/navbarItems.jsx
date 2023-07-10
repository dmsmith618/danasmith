import HomeIcon from '@mui/icons-material/Home';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MovieIcon from '@mui/icons-material/Movie';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SecurityIcon from '@mui/icons-material/Security';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import PowerIcon from '@mui/icons-material/Power';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <HomeIcon />,
        label: 'Home',
        route: 'home',
    },
    {
        id: 1,
        icon: <MeetingRoomIcon />,
        label: 'Rooms',
        route: 'rooms',
    },
    {
        id: 2,
        icon: <MovieIcon />,
        label: 'Media',
        route: 'media',
    },
    {
        id: 3,
        icon: <TipsAndUpdatesIcon />,
        label: 'Ambiance',
        route: 'ambiance',
    },
    {
        id: 4,
        icon: <SecurityIcon />,
        label: 'Security',
        route: 'security',
    },
    {
        id: 5,
        icon: <FireplaceIcon />,
        label: 'Comfort',
        route: 'comfort',
    },
    {
        id: 6,
        icon: <PowerIcon />,
        label: 'Appliances',
        route: 'appliances',
    },
    {
        id: 7,
        icon: <CalendarMonthIcon />,
        label: 'Calendar',
        route: 'calendar',
    },
]