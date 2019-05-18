import React, { Component } from 'react'
import PropsTypes from 'prop-types';

import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postAction'

class Posts extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: []
  //   }
  // }

  // componentWillMount() {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     // promise
  //     .then(res => res.json())
  //     .then(data => this.setState({posts: data}));
  // }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      // push will add the end 
      // unshift will add the beginning
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render() {

    const postItems = this.props.posts.map(post => (
      <div key = {post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propsType = {
  fetchPosts: PropsTypes.func.isRequired,
  posts: PropsTypes.array.isRequired,
  newPost: PropsTypes.object

}

const mapStateToProps = state => ({
  posts: state.posts.items, 
  newPost: state.posts.item
});

export default connect(mapStateToProps, {fetchPosts})(Posts);
