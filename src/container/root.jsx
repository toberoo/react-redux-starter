import React, { Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from './../component/main.jsx'

/**
 * Containers pass the state and actions into the components. Most small apps only need one container,
 * but if the state gets complex enough, it might help to have multiple containers to seperate the state or even
 * have multiple state objects.
 */
class RootContainer extends Component  {

	//We can pass any action or state component by calling this.props.STATE_ITEM_OR_ACTION . The two methods
	//below will determine what is in our props.
	render() {
		return <Main //state={this.props.state} fakeActions ={this.props.fakeActions}
			>

		</Main>
	}
}

/** This is inheritly risky as passing your whole state is unessecary. It makes more sense to break apart the state
//and pass it into seperate components.**/
function mapStateToProps(state) {
	return {
		 //state: state this.props.state is now available in the render method.
	}
}

/**
 * This is the same as the above method except it pertains to actions bind action dispatchers automatically
 * wraps all actions in a function with the same name as the action. This means we can simply call the action
 * in order to dispatch it instead of calling dispatch() every single time.
 */
function mapDispatchToProps(dispatch) {
	return {
		//fakeActions: bindActionCreators({}, dispatch) this.props.fakeActions is now available in the render method.
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);