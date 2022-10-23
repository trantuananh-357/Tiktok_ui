import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';
import HeaderOnly from '../components/Layout/HeaderOnly';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/profile', component: Profile, layout: null },
];
// Route k cần đăng nhập vẫn xem được

const privateRoutes = [];

//Route phải đăng nhập mưới xem được , di chuyển sang login

export { publicRoutes, privateRoutes };
