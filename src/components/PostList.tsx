import * as React from 'react'
import { connect } from 'react-redux';
import { fetchPostAndser } from '../actions'
import UserHeader from './UserHeader';

interface Props {
    fetchPostAndser?: () => {};
    posts?: Post[]

}

interface Post {
    id: number;
    title: string;
    body: string;
    userId:number
}
class PostList extends React.Component<Props>{

    // constructor(props: Props) {
    //     super(props)
    // }

    componentDidMount() {
        if(this.props.fetchPostAndser)
            this.props.fetchPostAndser();
    }

    renderList = () => {
        return this.props.posts ? this.props.posts.map((post) => {
            return (
                <div className="item" key={post.id}>
                    <i className='large middle aligned icon user' />
                    <div className='content'>
                        <div className='description'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId?post.userId:1}/>
                    </div>

                </div>
            )
        }
        ) : <div> Loading...</div>
    }

    render() {
       // console.log(this.props.posts)
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}
const mapStateToProps = state => {
   // console.log(state)
    return {
        posts: state.postReducer.data
    }
}

export default connect(mapStateToProps, { fetchPostAndser })(PostList);