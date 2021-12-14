import React from "react";
import Preloader from "../../common/Preloader/Preloader";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    debugger;
    console.log("This: ", this);
    this.setState({
      editMode: true,
    });
  };

  // activateEditMode() {
  //   debugger;
  //   console.log("This: ", this);
  //   this.setState({
  //     editMode: true,
  //   });
  // }
  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (event) => {
    ///onStatusChange () declaretioon dont work
    console.log(event.currentTarget);
    console.log(event.target);
    this.setState({ status: event.currentTarget.value });
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log("componentDidUpdate");
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  };
  render() {
    console.log("render");
    console.log(this.props);
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span
              onDoubleClick={() => {
                this.activateEditMode();
              }}
            >
              {this.props.status || "----"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={() => {
                this.deactivateEditMode();
              }}
              defaultValue={this.props.status}
              // defaultValue={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
