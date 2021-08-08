import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from '../styles/app.module.css';
import GlobalStyle from '../styles/global.styles';
import Home from './Home';
import Navbar from './Navbar';
import NewBlog from './NewBlog';
import PostDetails from './PostDetails';

function App() {
    const url = 'https://my-json-server.typicode.com/jubayer-amb/blog-site/posts';
    return (
        <Router>
            <GlobalStyle />
            <div className={styles.container}>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home url={url} />
                    </Route>
                    <Route exact path="/create">
                        <NewBlog url={url} />
                    </Route>
                    <Route exact path="/posts/:id">
                        <PostDetails url={url} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
