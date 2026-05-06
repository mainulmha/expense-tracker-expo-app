import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Expense By Cateogry', value: '1' },
    { label: 'Income By Cateogry', value: '2' },
    { label: 'Invest By Category', value: '3' },
];

const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select Category</Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#3B82F6' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                // search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <Ionicons
                        style={styles.icon}
                        color={isFocus ? '#3B82F6' : '#64748B'}
                        name="list"
                        size={20}
                    />
                )}
            />
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
    },
    dropdown: {
        height: 50,
        borderColor: '#E2E8F0',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    icon: {
        marginRight: 8,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 12,
        color: '#64748B',
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#94A3B8',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#0F172A',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        borderRadius: 8,
    },
});