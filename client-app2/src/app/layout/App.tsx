import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation(); //returns location object from router, useful for the key

  const [theme, setTheme] = useState('light');
  

  function handleToggleTheme() {
      if(theme == 'dark'){
        setTheme('light');
      } else {
        setTheme('dark');
      }
      console.log(theme);
      
  }

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light');
    root.classList.remove('dark');
    root.classList.add(theme);
  }, [theme])


  return (
    <div className="h-full bg-gray-50 dark:bg-gray-900">
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar setTheme={handleToggleTheme} />
            <main >
              <div className="pl-24 pr-8 py-8">
                <Route exact path='/activities' component={ActivityDashboard} />
                <Route path='/activities/:id' component={ActivityDetails} />
                <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
              </div>

            </main>
          </>
        )} />


    </div>
  );
}

export default observer(App);
