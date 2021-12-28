import React from "react";
import {
  follow,
  unFollow,
  // setUsers,
  setCurrentPage,
  // setTotalUsersCount,
  getUsersThunkCreator,
} from "../../redux/users-reduser";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../../components/common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getCarrentPage,
  getFollowingInProgres,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSuperSelector,
} from "../../redux/users-selectors";

class UsersAPIConteiner extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }
  onPageChanged = (pageNamber) => {
    // this.props.toggleIsFatching(true);
    this.props.setCurrentPage(pageNamber);
    this.props.getUsersThunkCreator(pageNamber, this.props.pageSize);
  };

  render() {
    console.log("Render USERS");
    return (
      <>
        {this.props.isFatching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          followingInProgres={this.props.followingInProgres}
          toggleFollowingProgressAC={this.props.toggleFollowingProgressAC}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  console.log("mapStateToProps USERS");
  return {
    // users: getUsers(state),
    // users: getUsersSelector(state),
    users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCarrentPage(state),
    isFatching: getIsFetching(state),
    followingInProgres: getFollowingInProgres(state),
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unFollow: (userId) => {
//       dispatch(unFollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setTotalUsersCount: (totalUsersCount) => {
//       dispatch(setTotalUsersCountAC(totalUsersCount));
//     },
//     setCurrentPage: (pageNamber) => {
//       dispatch(setCurrentPageAC(pageNamber));
//     },
//     toggleIsFatching: (isFatching) => {
//       dispatch(toggleIsFatchingAC(isFatching));
//     },
//   };
// };

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIConteiner);

// const UsersContainer = connect(mapStateToProps, {
//   follow: follow,
//   unFollow: unFollow,
//   setUsers: setUsers,
//   setTotalUsersCount: setTotalUsersCount,
//   setCurrentPage: setCurrentPage,
//   toggleIsFatching: toggleIsFatching,
// })(UsersAPIConteiner);

let withAuthRedirectUsersContainer = withAuthRedirect(UsersAPIConteiner);
const UsersContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  // setUsers,
  // setTotalUsersCount,
  setCurrentPage,
  getUsersThunkCreator: getUsersThunkCreator,
})(UsersAPIConteiner);
// })(withAuthRedirectUsersContainer);
export default UsersContainer;
