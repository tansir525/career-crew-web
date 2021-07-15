import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import QueueIcon from '@material-ui/icons/Queue';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
/* import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'; */
import PeopleIcon from '@material-ui/icons/People';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CreateIcon from '@material-ui/icons/Create';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import MicIcon from '@material-ui/icons/Mic';
import { Link } from 'react-router-dom'


const instructorListItems = (
    <div>
        <Link className="dashboardDrawer" to='/dashboard/instructor'>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/instructor/listening'>
            <ListItem button >
                <ListItemIcon>
                    <HeadsetMicIcon />
                </ListItemIcon>
                <ListItemText primary="Listening" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/instructor/reading'>
            <ListItem button >
                <ListItemIcon>
                    <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Reading" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/instructor/writing'>
            <ListItem button >
                <ListItemIcon>
                    <CreateIcon />
                </ListItemIcon>
                <ListItemText primary="Writing" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/instructor/speaking'>
            <ListItem button >
                <ListItemIcon>
                    <MicIcon />
                </ListItemIcon>
                <ListItemText primary="Speaking" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/instructor/livesession'>
            <ListItem button >
                <ListItemIcon>
                    <QueueIcon />
                </ListItemIcon>
                <ListItemText primary="Live Session" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/instructor/profile'>
            <ListItem button>
                <ListItemIcon>
                    <PermContactCalendarIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/instructor/settings'>
            <ListItem button>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>
        </Link>
    </div>
);

const userListItems = (
    <div>
        <Link className="dashboardDrawer" to='/dashboard'>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/student/listening'>
            <ListItem button >
                <ListItemIcon>
                    <HeadsetMicIcon />
                </ListItemIcon>
                <ListItemText primary="Listening" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/student/reading'>
            <ListItem button >
                <ListItemIcon>
                    <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Reading" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/student/writing'>
            <ListItem button >
                <ListItemIcon>
                    <CreateIcon />
                </ListItemIcon>
                <ListItemText primary="Writing" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/student/speaking'>
            <ListItem button >
                <ListItemIcon>
                    <MicIcon />
                </ListItemIcon>
                <ListItemText primary="Speaking" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/student/material'>
            <ListItem button >
                <ListItemIcon>
                    <NoteAddIcon />
                </ListItemIcon>
                <ListItemText primary="Materials" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/student/livesession'>
            <ListItem button >
                <ListItemIcon>
                    <QueueIcon />
                </ListItemIcon>
                <ListItemText primary="Live Session" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/student/profile'>
            <ListItem button>
                <ListItemIcon>
                    <PermContactCalendarIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/student/settings'>
            <ListItem button>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>
        </Link>
    </div>
);

const adminListItem = (
    <div>
        <Link className="dashboardDrawer" to='/dashboard/admin'>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/materiallist'>
            <ListItem button >
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Materials" />
            </ListItem>
        </Link>
        {/* <Link className="dashboardDrawer" to='/dashboard/Sells'>
            <ListItem button>
                <ListItemIcon>
                    <MonetizationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Sells" />
            </ListItem>
        </Link> */}
        <Link className="dashboardDrawer" to='/dashboard/instructorlist'>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Instructors" />
            </ListItem>
        </Link>
        <Link className="dashboardDrawer" to='/dashboard/studentlist'>
            <ListItem button>
                <ListItemIcon>
                    <GroupAddIcon />
                </ListItemIcon>
                <ListItemText primary="Students" />
            </ListItem>
        </Link>
        {/* <Link className="dashboardDrawer" to='/dashboard/settings'>
            <ListItem button>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>
        </Link> */}
    </div>
);

export { instructorListItems, userListItems, adminListItem }

