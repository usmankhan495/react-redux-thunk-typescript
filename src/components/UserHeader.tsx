import * as React from 'react'
import { connect } from 'react-redux'
import Users from '../interface/user.interface';
// import {fetchUser } from '../actions'
interface Props {
    userId?: number | null;
    fetchUser?: ((userId: number) => {}) | undefined;
    user?: Users,

}

class UserHeader extends React.Component<Props>{

    componentDidMount() {
        // if(this.props.fetchUser && this.props.userId)
        //      this.props.fetchUser(this.props.userId)

    }

    render() {


        if (this.props.user) {

            return (
                <div className="header">
                    {this.props.user.name}
                </div>
            )
        }


        return null;

    }
}

const mapStateToProps = (state: any, ownProps: Props) => {

    return {
        user: state.userReducer.find(user => user.id === ownProps.userId)
    }

}

export default connect(mapStateToProps)(UserHeader);
// export default connect(mapStateToProps,{fetchUser})(UserHeader);