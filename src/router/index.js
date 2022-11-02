import React from 'react';
const Home = React.lazy(() => import('../container/home'));
const Life = React.lazy(() => import('../container/life'));
const School = React.lazy(() => import('../container/school'));
export const routes = [
  {
    path:'/',
    exact:true,
    component:Home
  },
  {
    path:'/school',
    exact:true,
    component:School
  },
  {
    path:'/life',
    exact:true,
    component:Life
  },
]