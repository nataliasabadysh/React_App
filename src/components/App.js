import React, { lazy, Suspense } from 'react';

import { Route, Switch } from 'react-router-dom';
import AboutPage from '../pages/About';
import Nav from './Nav';

// import ProductList from './Products/ProductList';
// import Panel from './Panel';
// // import Dropdown from './Dropdown/Dropdown';
// import Button from './Button/Button';
// import ProfileDetails from './Products/ProfileDetails';
// import products from '../products.json';
// import TechList from './TechList';
// import Mailbox from './Mailbox/Mailbox';
//import Counter from './Counter/Counter';



// const technologies = [
//   { id: 'id-1', name: 'JS' },
//   { id: 'id-2', name: 'React' },
//   { id: 'id-3', name: 'React Router' },
//   { id: 'id-4', name: 'Redux' },
// ];

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 'padding: 0 16px',
};

const AsyncComponent = lazy(() => import('./Form/Form' /* webpackChunkName: "form-page" */ ),);
const AsyncNotFound = lazy(() => import('../pages/NotFound'/* webpackChunkName: "notfound-page" */), );
const AsyncArticles = lazy(() => import('./Articles/Articles'/* webpackChunkName: "article" */), );
const AsyncArticlesPage = lazy(() => import('../pages/Articles'/* webpackChunkName: "articles-page" */), );
const AsyncArticlePost = lazy(() => import('../pages/Article'/* webpackChunkName: "articles-post-page" */), );
const AsyncHome = lazy(() =>import('../pages/Home' /* webpackChunkName: "home-page" */), );
const AsyncPost = lazy(() =>import('./Posts/Post' /* webpackChunkName: "post-page" */), );

const App = () => (
  <div style={containerStyles}>
    <Nav />
   
    <Suspense fallback={<h1>Loading...</h1>}>
       <Switch>
        <Route path="/" exact component={AsyncHome} />
        <Route path="/articles/:id" component={AsyncArticlePost} />
        <Route path="/articles" component={AsyncArticlesPage} />
        <Route path="/about" component={AboutPage} />

        <Route path="/form" component={AsyncComponent} />
        <Route path="/posts" component={AsyncPost} />
        <Route path="/list" component={AsyncArticles} />
        <Route component={AsyncNotFound} />

      </Switch>
    </Suspense>

      
    {/* <Counter step={1} initialValue={5} />
    <Counter step={10} initialValue={15} />

    <Button  label="Click me!"  />

    <TechList items={technologies} />
  
    <Mailbox unreadMessages={[1, 2, 3]} />

    <Panel title="Some title">
      <ProfileDetails name="Mango" email="mango@mail.com" />
    </Panel>

    <Panel title="Top Products">
      <ProductList items={products} />
    </Panel> < br /> <hr /> < br /> <hr /> */}

  </div>
);

export default App;
