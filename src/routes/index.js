import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';
import HeaderOnly from '../components/Layout/HeaderOnly';
import Live from '../pages/Live';
import Search from '../pages/Search';
import config from '../config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];
// Route k cần đăng nhập vẫn xem được

const privateRoutes = [];

//Route phải đăng nhập mưới xem được , di chuyển sang login

export { publicRoutes, privateRoutes };
