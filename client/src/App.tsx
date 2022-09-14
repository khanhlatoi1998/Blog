import './App.scss';
import './style/custom.scss'


import Banner from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import Info from './pages/info/Info';
import TopView from './pages/topview/TopView';
import ListFavoriteLocation from './pages/favorite-location/ListFavoriteLocation';
import ListHandBook from './pages/handbook/ListHandBook';
import ListEntertainment from './pages/entertainment/ListEntertainment';
import ListEat  from './pages/Eat/ListEat';
import ListAccommodation from './pages/accommodation/ListAccommodation';
import ListBlogShare from './pages/blog-share/ListBlogShare';
import Footer from './components/footer';


function App() {
    return (
        <div className="App">
            <Menu />
            <Banner />
            <Info />
            <ListFavoriteLocation />
            <TopView />
            <ListHandBook />
            <ListEntertainment />
            <ListEat />
            <ListAccommodation />
            <ListBlogShare />
            <Footer />
        </div>
    );
}

export default App;
