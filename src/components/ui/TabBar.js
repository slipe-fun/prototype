import React from "react";
import { View, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/Theme";
import { ROUTES } from "../../constants/Routes";
import { styles } from "./styles/TabBarStyles";

const CustomTabBar = ({ state, descriptors, navigation }) => {
	return (
		<View style={styles.tabBarContainer}>
			<BlurView
				style={styles.blurView}
				intensity={80}
				tint="light"
			>
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key];
					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: "tabPress",
							target: route.key,
							canPreventDefault: true,
						});

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name);
						}
					};

					let iconName;
					if (route.name === ROUTES.BLOGS) {
						iconName = isFocused ? "newspaper" : "newspaper-outline";
					} else if (route.name === ROUTES.PUBLISH) {
						iconName = isFocused ? "create" : "create-outline";
					} else if (route.name === ROUTES.SEARCH) {
						iconName = isFocused ? "search" : "search-outline";
					}

					return (
						<View key={route.key} style={styles.tabItem}>
							<TouchableOpacity onPress={onPress} style={[styles.tabButton, isFocused && styles.tabButtonFocused]}>
								<Ionicons name={iconName} size={24} color={isFocused ? colors.primary : colors.glassButton} />
							</TouchableOpacity>
						</View>
					);
				})}
			</BlurView>
		</View>
	);
};

export default CustomTabBar;
