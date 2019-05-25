import React, { Component, lazy, Suspense } from 'react';
import PostList from './PostList';
import posts from './dummy-posts';

const AsyncPostEditor = lazy(() =>
  import('./PostEditor' /* webpackChunkName: "post-editor" */),
);

export default class PostsPage extends Component {
  state = {
    isEditorVisible: false,
  };

  showEditor = () => this.setState({ isEditorVisible: true });

  hideEditor = () => this.setState({ isEditorVisible: false });

  render() {
    const { isEditorVisible } = this.state;

    return (
      <div>
        <h1>Posts Page</h1>

        <PostList posts={posts} />

        {isEditorVisible ? (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AsyncPostEditor onCancel={this.hideEditor} />
          </Suspense>
        ) : (
          <button type="button" onClick={this.showEditor}>
            Create post
          </button>
        )}
      </div>
    );
  }
}
