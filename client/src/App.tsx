import './App.scss';
import './style/custom.scss'


import Banner from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import Info from './pages/info/Info';
import TopView from './pages/topview/TopView';
import ListFavoriteLocation from './pages/favorite-location/ListFavoriteLocation';
import ListHandBook from './pages/handbook/ListHandBook';

function App() {
    return (
        <div className="App">
            <Menu />
            <Banner />
            <Info />
            <ListFavoriteLocation />
            <TopView />
            <ListHandBook />
        </div>
    );
}

export default App;
