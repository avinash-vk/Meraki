import { BottomNavigation } from '@material-ui/core';
import SpeedDials from './floatingbutton'
import React from 'react';
const BottomNav = () => {
return <BottomNavigation className="stickToBottom"><SpeedDials/> </BottomNavigation>
};
export default BottomNav;