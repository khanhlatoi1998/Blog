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
import Category from './pages/category/Category';
import AddPost from './pages/form/post/AddPost';


function App() {
    return (
        <div className="App">
            <BrowserRouter >
                <Header />
                <Banner />
                
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
                    <Route path=":category" element={<Category />} />
                    <Route path="/detail" >
                        <Route path=":id" element={<Detail />} />
                    </Route>
                    <Route path="/w" element={<AddPost />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Routes>
                    {/* <Route path="/detail" element={<Detail />} />

                    <Route path="dia-diem" element={<Category />}>
                    </Route>
                    <Route path="dia-diem">
                        <Route path=":detail" element={<Detail />} />
                    </Route>
                    <Route path="am-thuc" element={<Category />}> 
                    </Route>
                    <Route path="am-thuc">
                        <Route path=":detail" element={<Detail />} />
                    </Route>
                    <Route path="cam-nang" element={<Category />}>
                    </Route>
                    <Route path="cam-nang">
                        <Route path=":detail" element={<Detail />} />
                    </Route>
                    <Route path="homestay" element={<Category />}>
                    </Route>
                    <Route path="homestay">
                        <Route path=":detail" element={<Detail />} />
                    </Route>
                    <Route path="tinh-thanh" element={<Category />}>
                    </Route>
                    <Route path="tinh-thanh">
                        <Route path=":detail" element={<Detail />} />
                    </Route> */}
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
