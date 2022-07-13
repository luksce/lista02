import React from "react";
import { StyleSheet, Switch, View, Text } from "react-native";

type ThemeSwitcherProps = {
  toggleTheme: Function;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme }: ThemeSwitcherProps) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    toggleTheme();
  };

  return (
    <View style={styles.container}>
      <Text>Theme</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 2,
    marginTop: 46,
  }
});

export default ThemeSwitcher;