import React, {
    Component
} from 'react';
import {
    View,
    Text,
    Button,
    FlatList
}
from 'react-native';
class ToDoList extends Component {
    static defaultProps = {
        list: [],
        removeRow: () => {},
    }

    handleRow = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Text style={{ flex: 1 }}>
                    {this.formatListNumber(index)} - {item.text}
                </Text>
                <Button 
                    style={{ width: 30 }}
                    title='x'
                    onPress={() => this.props.removeRow(item)}
                />
            </View>
        );
    }

    formatListNumber(number) {
        const digits = 2;
        return ('0'.repeat(digits) + (number + 1)).slice(-digits);
    } 

    render() {
        const { props } = this;
        const keyExtractor = item => item.id;  
        return (
            <View>
                <FlatList 
                    data={props.list}
                    keyExtractor={keyExtractor}
                    renderItem={this.handleRow}
                />
            </View>
        );
    }
}

export default ToDoList;