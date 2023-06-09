import React, { createRef } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Album } from '../../components/Album/Album';
import { AudioControllers } from '../../components/AudioControllers/AudioControllers';
import { Header } from '../../components/Header/Header';
import ActionSheet from 'react-native-actions-sheet';
import { Dimensions } from 'react-native';
import { Playlist } from '../../components/Playlist/Playlist';

export function Player() {
	const actionSheetRef = createRef();

	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<Header actionSheetRef={actionSheetRef} />
				<ScrollView>
					<Album />
					<AudioControllers />
				</ScrollView>
				<ActionSheet
					ref={actionSheetRef}
					containerStyle={{
						height: Dimensions.get('screen').height - 150,
						padding: 20,
					}}
				>
					<Playlist actionSheetRef={actionSheetRef}/>
				</ActionSheet>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
