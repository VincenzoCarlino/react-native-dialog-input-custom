import React, { Component } from 'react';
import { Modal, View, StyleSheet, TextInput, Platform, Keyboard } from 'react-native';
import { Title, NormalText, SubTitle } from './components/text';
import helpers from './components/helpers';
import { Button } from './components/button';


type Props = {};
export default class DialogInput extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }


    close() {
        this.props.submitInput(this.state.text);
        this.props.closeDialogInput();
        Keyboard.dismiss();
        this.setState({ text: "" })
    }

    render() {
        return (
            Platform.OS == "ios" ?
                (
                    <View style={{ flex: 1 }}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.props.dialogIsVisible}
                        >
                            <View style={[{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center' }, this.props.outerContainerStyle]}>
                                <View style={[{ backgroundColor: '#f6f6f6', width: '80%', marginHorizontal: '10%', borderRadius: 20, paddingTop: 0 }, this.props.containerStyle]}>
                                    <View style={{ padding: 20 }}>
                                        <SubTitle style={[{ textAlign: 'center', fontWeight: 'bold'}, this.props.titleStyle]}>{this.props.title || "Title"}</SubTitle>
                                        <NormalText style={[{ textAlign: 'center'}, this.props.subTitleStyle]}>{this.props.subtitle || "Subtitle"}</NormalText>
                                        <View style={{ height: 100, paddingTop: 25 }}>
                                            <TextInput
                                                placeholder={this.props.placeholderInput || "Placeholder..."}
                                                secureTextEntry={this.props.secureTextEntry || false}
                                                value={this.state.text}
                                                onChangeText={(text) => this.setState({ text })}
                                                placeholderTextColor={this.props.placeholderTextColor || '#C7C7CC'}
                                                style={[{
                                                    width: '100%', backgroundColor: "white",
                                                    borderWidth: 1, borderRadius: 5, height: 42
                                                }, this.props.textInputStyle]} 
                                                onSubmitEditing={() => this.close()}
                                                />
                                        </View>
                                    </View>
                                    <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                                        <Button style={[{ borderColor:  'gray', borderTopWidth: 1, borderRightWidth: 0.5, width: '50%' }, this.props.buttonsStyle]}
                                            onPress={() => { this.props.closeDialogInput(); Keyboard.dismiss(); this.setState({ text: "" }) }}
                                        >
                                            <NormalText style={[{ color: '#0076ff', fontWeight: 'normal' }, this.props.textCancelStyle]}>
                                                {this.props.cancelButtonText || "Cancel"}
                                            </NormalText>
                                        </Button>
                                        <Button style={[{ width: '50%', borderColor: 'gray', borderTopWidth: 1, borderLeftWidth: 0.5, justifyContent: 'center' }, this.props.buttonsStyle]}
                                            onPress={() => this.close()}
                                            >
                                            <NormalText style={[{ color: '#0076ff', fontWeight: 'bold', textAlign: 'center' }, this.props.submitTextStyle]}>
                                                {this.props.submitButtonText || "OK"}
                                            </NormalText>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                )
                :
                (
                    <View style={{ flex: 1 }}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.props.dialogIsVisible}
                        >
                            <View style={[{ flex: 1, backgroundColor:'rgba(0, 0, 0, 0.75)', justifyContent: 'center' }, this.props.outerContainerStyle]}>
                                <View style={[{ backgroundColor: 'white', width: '80%', marginHorizontal: '10%', borderRadius: 5 }, this.props.containerStyle]}>
                                    <View style={{ padding: 20 }}>
                                        <SubTitle style={[{ textAlign: 'left', fontWeight: 'bold', color: 'black' }, this.props.titleStyle]}>{this.props.title || "Title"}</SubTitle>
                                        <NormalText style={[{ textAlign: 'left', color: 'black' }, this.props.subTitleStyle]}>{this.props.subtitle || "Subtitle"}</NormalText>
                                        <View style={{ height: 100, paddingTop: 25 }}>
                                            <TextInput
                                                placeholder={this.props.placeholderInput || "Placeholder..."}
                                                secureTextEntry={this.props.secureTextEntry || false}
                                                value={this.state.text}
                                                onChangeText={(text) => this.setState({ text })}
                                                placeholderTextColor={this.props.placeholderTextColor || '#C7C7CC'}
                                                style={[{
                                                    width: '100%', backgroundColor: "white",
                                                    borderBottomWidth: 2, borderRadius: 5, height: 42, borderColor: "#44a097"
                                                }, this.props.textInputStyle]}
                                                onSubmitEditing={() => this.close()}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', width: '100%', justifyContent: 'flex-end' }}>
                                        <Button style={[{ justifyContent: 'center' }, this.props.buttonsStyle]}
                                            onPress={() => { this.props.closeDialogInput(); Keyboard.dismiss(); this.setState({ text: "" }) }}
                                        >
                                            <NormalText style={[{ color: '#44a097', fontWeight: 'normal' }, this.props.textCancelStyle]}>
                                                {this.props.cancelButtonText || "Cancel"}
                                            </NormalText>
                                        </Button>
                                        <Button style={[{ justifyContent: 'center' }, this.props.buttonsStyle]}
                                            onPress={() => this.close()}
                                        >
                                            <NormalText style={[{ color: '#44a097', fontWeight: 'bold', textAlign: 'center' }, this.props.submitTextStyle]}>
                                                {this.props.submitButtonText || "OK"}
                                            </NormalText>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                )
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    }
});


