import React, { Component } from 'react';
import {
    View,
    TextInput,
    Button
} from 'react-native';

class Form extends Component {
    static defaultProps = {
        onAdd: () => {}
    }
    state = {
        text: '',
    }

    Add = () => {
        const { state } = this;
        //console.log(state);
        if (state.text) {
            this.props.onAdd(state.text);
            this.handleChange('');
        }
    }

    handleChange = (text) => {
        this.setState({text});
    }

    render() {
        const { state } = this;
        return (
            <View>
                <TextInput 
                    value={state.text}
                    onChangeText={this.handleChange}
                />
                <Button 
                    title="Add"
                    onPress={this.Add}
                />
            </View>
        )
    }
}

export default Form;