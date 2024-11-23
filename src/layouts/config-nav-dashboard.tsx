
/* eslint-disable import/no-extraneous-dependencies */

import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import PieChartIcon from '@mui/icons-material/PieChart';


// ----------------------------------------------------------------------


export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AutoGraphIcon />, // Иконка Dashboard
  },
  {
    title: 'Transactions',
    path: '/transactions',
    icon: <ClearAllIcon />, // Иконка пользователя
  },

  {
    title: 'Sign in',
    path: '/sign-in',
    icon: <PieChartIcon />, // Иконка входа
  },
  {
    title: 'Not found',
    path: '/404',
    icon: <PieChartIcon />, // Иконка ошибки
  },
];

