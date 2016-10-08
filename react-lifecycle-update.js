import React from 'react';
import ReactDOM from 'react-dom';

class ReactLifeCycleUpdate extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {increasing: false};
    }
    update() {
        ReactDOM.render(
            <ReactLifeCycleUpdate val={this.props.val+1} />,
            document.getElementById('react-lifecycle-update')
        );
    }
    // This is called when component Receive Props from update.
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps: ', nextProps.val > this.props.val);
        this.setState({increasing: nextProps.val > this.props.val});
    }
    // This require when to re-render your component.
    // If not required to re-render the component then don't do.
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate: ');
        return nextProps.val % 5 === 0;
    }

    // Component Did Update called after the component Update is done with return true.
    componentDidUpdate(prevProps, prevState) {
        console.log('PrevProps: ', prevProps);
        console.log('prevState:', prevState);
    }
    render() {
        console.log(this.state.increasing);
        return (
            <p>Life Cycle Updates - Please check console log: Multiples of 5 on click:
            <button onClick={this.update}>
            {this.props.val}
            </button>
            </p>
        )
    }
}


ReactLifeCycleUpdate.defaultProps = { val: 0 }


ReactDOM.render(
    <ReactLifeCycleUpdate />,
    document.getElementById('react-lifecycle-update')
)
export default ReactLifeCycleUpdate
