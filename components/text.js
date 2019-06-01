import React, { Component } from 'react';
import { Text } from 'react-native';
import helpers from './helpers';

type Props = {};

class BigTitle extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            fontSize: helpers.heightPercentageToDP('5%')
        }
    }
    render() {
        return (
            <Text style={[{fontSize: this.state.fontSize, fontWeight: 'bold'}, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}

class Title extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            fontSize: helpers.heightPercentageToDP('3.5%')
        }
    }
    render() {
        return (
            <Text style={[{fontSize: this.state.fontSize, fontWeight: 'bold'}, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}

class SubTitle extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            fontSize: helpers.heightPercentageToDP('2.5%')
        }
    }
    render() {
        return (
            <Text style={[{fontSize: this.state.fontSize}, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}

class NormalText extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            fontSize: helpers.heightPercentageToDP('2%')
        }
    }
    render() {
        return (
            <Text style={[{fontSize: this.state.fontSize}, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}

class SmallText extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            fontSize: helpers.heightPercentageToDP('1.5%')
        }
    }
    render() {
        return (
            <Text style={[{fontSize: this.state.fontSize}, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}

class XSmallText extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            fontSize: helpers.heightPercentageToDP('1%')
        }
    }
    render() {
        return (
            <Text style={[{fontSize: this.state.fontSize}, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}

export { BigTitle, Title, SubTitle, NormalText, SmallText, XSmallText};

