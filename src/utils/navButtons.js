import ChatIcon from '@material-ui/icons/Chat';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactsIcon from '@material-ui/icons/Contacts';
export const navButtons = [
    {
        name: 'ChatsButton',
        route: '/',
        icon : <ChatIcon
            htmlColor="white"
            className="navButtonIcon"
        />
    },
    {
        name: 'SettingsButton',
        route: '/settings',
        icon : <SettingsIcon   
            htmlColor="white"
            className="navButtonIcon"
        />
    },
    {
        name: 'ContactsButton',
        route: '/contacts',
        icon : <ContactsIcon   
            htmlColor="white"
            className="navButtonIcon"
        />
    },
]