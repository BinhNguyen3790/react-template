// Layouts
import { HeaderOnly } from '~/components/layout';

import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import News from '~/pages/News';

// Public Router
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/news', component: News, layout: HeaderOnly },
];
const privateRoutes = {};

export { publicRoutes, privateRoutes };
