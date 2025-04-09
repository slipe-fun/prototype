import { StyleSheet } from "react-native";
import { colors, spacing, borderRadius } from "../../../constants/Theme";

export const styles = StyleSheet.create({
	tabBarContainer: {
		position: "absolute",
		bottom: spacing.medium,
		left: spacing.medium,
		right: spacing.medium,
		height: 60,
		borderRadius: borderRadius.large,
		overflow: "hidden",
	},
	blurView: {
		flex: 1,
		flexDirection: "row",
		height: 60,
		borderRadius: borderRadius.large,
	},
	tabItem: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	tabButton: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: borderRadius.medium,
	},
	tabButtonFocused: {
		backgroundColor: colors.indicator,
	},
});
