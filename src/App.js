
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage'
import CoinPage from './pages/CoinPage';
import { makeStyles } from '@material-ui/core';

function App() {
  const useStyles = makeStyles(() => ({
     App: {
      backgroundColor: '#14141a',
      color: 'white',
      minHeight: '100vh'
     }
  }));

  const classes = useStyles();


  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path='/' component={HomePage} exact/>
        <Route path='/coins/:id' component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
