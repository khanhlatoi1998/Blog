import './App.scss';
import './style/custom.scss'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";



import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Info from './pages/info/Info';
import TopView from './pages/topview/TopView';
import ListFavoriteLocation from './pages/favorite-location/ListFavoriteLocation';
import ListHandBook from './pages/handbook/ListHandBook';
import ListEntertainment from './pages/entertainment/ListEntertainment';
import ListEat from './pages/Eat/ListEat';
import ListAccommodation from './pages/accommodation/ListAccommodation';
import ListBlogShare from './pages/blog-share/ListBlogShare';
import Footer from './components/footer';
import NotFound from './components/NotFound';
import Detail from './pages/detail/Detail';


function App() {

    const category = ['handbook', 'accommodation', 'eat', 'share', 'entertainment', 'location', 'destination'];


    return (
        <div className="App">
            <Routes>
                <Route
                    path="*"
                    element={
                        <>
                            <Header />
                            <Banner />
                        </>
                    }
                />
            </Routes>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Info />
                            <ListFavoriteLocation />
                            <TopView />
                            <ListHandBook />
                            <ListEntertainment />
                            <ListEat />
                            <ListAccommodation />
                            <ListBlogShare />
                        </>
                    }
                />
            </Routes>
            <Routes>
                <Route path="detail" element={<Detail />} />
            </Routes>
            <Routes>
                <Route path="*" element={<Footer />} />
            </Routes>
        </div>
    );
}

export default App;
