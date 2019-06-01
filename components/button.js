import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import helpers from './helpers';

type Props = {};

class Button extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        if (this.props.small) {
            return (
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={[
                        {
                            backgroundColor: this.props.backgroundColor,
                            paddingVertical: helpers.heightPercentageToDP("0.5%"),
                            paddingHorizontal: helpers.widthPercentageToDP("3%"),
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center'
                        },
                        this.props.style
                    ]}>
                    {this.props.children}
                </TouchableOpacity>
            );
        }
        else if (this.props.large) {
            return (
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={[
                        {
                            backgroundColor: this.props.backgroundColor,
                            paddingVertical: helpers.heightPercentageToDP("3%"),
                            paddingHorizontal: helpers.widthPercentageToDP("12%"),
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center'
                        },
                        this.props.style
                    ]}>
                    {this.props.children}
                </TouchableOpacity>
            );
        }
        else {
            return (
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={[
                        {
                            backgroundColor: this.props.backgroundColor,
                            paddingVertical: helpers.heightPercentageToDP("1%"),
                            paddingHorizontal: helpers.widthPercentageToDP("6%"),
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center'
                        },
                        this.props.style
                    ]}>
                    {this.props.children}
                </TouchableOpacity>
            );
        }
    }
}

class FullButton extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={[
                    {
                        backgroundColor: this.props.backgroundColor,
                        paddingVertical: helpers.heightPercentageToDP("1%"),
                        paddingHorizontal: helpers.widthPercentageToDP("6%"),
                        width: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center'
                    },
                    this.props.style
                ]}>
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

class RoundeButton extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={[
                    {
                        backgroundColor: this.props.backgroundColor,
                        paddingVertical: helpers.heightPercentageToDP("1%"),
                        paddingHorizontal: helpers.widthPercentageToDP("6%"),
                        borderRadius: helpers.widthPercentageToDP("6%"),
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center'
                    },
                    this.props.style
                ]}>
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

class ButtonIcon extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            this.props.center ?
                (
                    <TouchableOpacity
                        onPress={this.props.onPress}
                        style={[
                            {
                                backgroundColor: this.props.backgroundColor,
                                paddingVertical: helpers.heightPercentageToDP("1%"),
                                paddingHorizontal: helpers.widthPercentageToDP("6%"),
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            },
                            this.props.style
                        ]}>
                        {this.props.children}
                    </TouchableOpacity>
                )
                :
                (
                    <TouchableOpacity
                        onPress={this.props.onPress}
                        style={[
                            {
                                backgroundColor: this.props.backgroundColor,
                                paddingVertical: helpers.heightPercentageToDP("1%"),
                                paddingHorizontal: helpers.widthPercentageToDP("6%"),
                                justifyContent: 'space-between',
                                alignContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                            },
                            this.props.style
                        ]}>
                        {this.props.children}
                    </TouchableOpacity>
                )
        );
    }
}



export { Button, FullButton, RoundeButton, ButtonIcon };

