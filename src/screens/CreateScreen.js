import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { addBlogPost } = useContext(Context);

	return (
		<View>
			<Text style={styles.label}>Enter Title:</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>
			<Text style={styles.label}>Enter COntent:</Text>
			<TextInput
				style={styles.input}
				value={content}
				onChangeText={(text) => setContent(text)}
			/>
			<Button
				onPress={() => {
					addBlogPost(title, content, () => {
						navigation.navigate('Index');
					});
				}}
				title="Add Blog Post"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 15,
		padding: 5,
		margin: 5,
	},
	label: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5,
	},
});

export default CreateScreen;
