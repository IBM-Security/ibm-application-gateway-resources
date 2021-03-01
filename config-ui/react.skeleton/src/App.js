import React, { Component } from 'react';
import './app.scss';
import './rwttabs.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import IAGHeader from './components/IAGHeader';
import { Route, Switch } from 'react-router-dom';
import landingPage from './content/landingPage';
<ADD_IMPORTS_HERE>



class App extends Component {
  render() {
    return (
      <>
        <IAGHeader />
        <Content>
          <div className="bx--row">
            <section className="bx--offset-lg-3 bx--col-lg-13">
              <Switch>
                <Route exact path="/" component={landingPage} />
    <ADD_ROUTES_HERE>
              </Switch>
            </section>
          </div>
        </Content>
      </>
    );
  }
}

export default App;















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































