import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions'

class Channel extends Component {
  handleClick = () => {
    this.props.selectChannel(this.props.channel);
    this.props.fetchMessages(this.props.channel);
  }

  render() {
    const selected = `channel ${(this.props.channel === this.props.selectedChannel) ? 'selected' : '' }`

    return(
      <div className={selected} onClick={this.handleClick}>
        #{this.props.channel}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedChannel: reduxState.selectedChannel
  }
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(Channel);
