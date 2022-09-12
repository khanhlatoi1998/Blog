import './App.scss';
import './style/custom.scss'


import Banner from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import Info from './pages/info/Info';
import TopView from './pages/topview/TopView';
import ListFavoriteLocation from './pages/favorite-location/ListFavoriteLocation';

function App() {
    return (
        <div className="App">
            <Menu />
            <Banner />
            <Info />
            <ListFavoriteLocation />
            <TopView />
        </div>
    );
}

export default App;
