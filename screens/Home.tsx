import React, { useRef, useEffect } from 'react';
import { Header, wrapIcon, H2, Body1 } from '@pxblue/react-native-components';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Linking, StyleSheet, ScrollView, Animated } from 'react-native';
import * as Colors from '@pxblue/colors';
import { Button, Divider } from 'react-native-paper';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const MenuIcon = wrapIcon({ IconClass: MaterialIcons, name: 'menu' });

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: '100%',
    },
    header: {
        paddingTop: 48,
    },
    paragraph: {
        marginTop: 24,
    },
    patternsMenuButton: {
        marginTop: 24,
        marginBottom: 40,
        borderColor: Colors.blue[500],
    },
    divider: {
        marginBottom: 32,
        marginHorizontal: -16,
    },
    link: {
        marginBottom: 16,
        alignSelf: 'flex-start',
    },
    linkContent: {
        color: Colors.black[500],
    },
});

export const Home: React.FC = () => {
    const navigation = useNavigation<DrawerNavigationProp<Record<string, undefined>>>();

    const toggleMenu = (): void => {
        navigation.openDrawer();
    };

    const fadeAnimTitle = useRef(new Animated.Value(0)).current;
    const fadeAnimContent = useRef(new Animated.Value(0)).current;
    const fadeAnimLinks = useRef(new Animated.Value(0)).current;

    const fadeInTitle = (): any => {
        Animated.timing(fadeAnimTitle, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const fadeInContent = (): any => {
        Animated.timing(fadeAnimContent, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false,
        }).start();
    };

    const fadeInLinks = (): any => {
        Animated.timing(fadeAnimLinks, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };

    useEffect(() => {
        setTimeout(fadeInTitle, 250);
        setTimeout(fadeInContent, 500);
        setTimeout(fadeInLinks, 1250);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Header
                title={'PX Blue Design Patterns'}
                navigation={{
                    icon: MenuIcon,
                    onPress: (): void => {
                        toggleMenu();
                    },
                }}
            />
            <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
                <Animated.View style={{ opacity: fadeAnimTitle }}>
                    <H2 style={styles.header}>
                        The <H2 color={'primary'}>Patterns</H2>.
                    </H2>
                </Animated.View>

                <Animated.View style={{ opacity: fadeAnimContent }}>
                    <Body1 style={styles.paragraph}>
                        A <Body1 font={'medium'}>design pattern</Body1> is a common interaction or behavior that should
                        be consistent across applications. In general, we follow most of the design patterns and
                        behavior from the Material Design system. PX Blue design patterns are patterns that
                        extend/modify those from Material or are specific to PX Blue applications.
                    </Body1>

                    <Body1 style={styles.paragraph}>
                        While everyone is encouraged to interact with the design pattern demos to become familiar with
                        the interactions and behaviors, this application is primarily intended for
                        <Body1 font={'medium'}> React Native developers </Body1> to provide examples of how to implement
                        these patterns in their own applications.
                    </Body1>

                    <Button
                        style={styles.patternsMenuButton}
                        accessibilityStates
                        mode={'outlined'}
                        color={Colors.blue[500]}
                        onPress={(): void => {
                            toggleMenu();
                        }}
                    >
                        Explore PX Blue Design Patterns
                    </Button>
                </Animated.View>

                <Animated.View style={{ opacity: fadeAnimLinks, paddingBottom: 16 }}>
                    <Divider accessibilityStates style={styles.divider} />

                    <Button
                        style={styles.link}
                        labelStyle={styles.linkContent}
                        accessibilityStates
                        onPress={(): void => {
                            void Linking.openURL('https://pxblue.github.io/development/frameworks-mobile/react-native');
                        }}
                    >
                        React Native Getting Started Guide
                    </Button>
                    <Button
                        style={styles.link}
                        labelStyle={styles.linkContent}
                        accessibilityStates
                        onPress={(): void => {
                            void Linking.openURL('https://pxblue.github.io/patterns');
                        }}
                    >
                        Design Pattern Descriptions
                    </Button>
                    <Button
                        style={styles.link}
                        labelStyle={styles.linkContent}
                        accessibilityStates
                        onPress={(): void => {
                            void Linking.openURL('https://pxblue-components.github.io/react-native/');
                        }}
                    >
                        PX Blue React Native Component Library
                    </Button>
                    <Button
                        style={styles.link}
                        labelStyle={styles.linkContent}
                        accessibilityStates
                        onPress={(): void => {
                            void Linking.openURL('https://github.com/pxblue');
                        }}
                    >
                        Visit Us on GitHub
                    </Button>
                    <Button
                        style={styles.link}
                        labelStyle={styles.linkContent}
                        accessibilityStates
                        onPress={(): void => {
                            void Linking.openURL('https://github.com/pxblue/react-design-patterns');
                        }}
                    >
                        Design Pattern Source on GitHub
                    </Button>
                    <Button
                        style={styles.link}
                        labelStyle={styles.linkContent}
                        accessibilityStates
                        onPress={(): void => {
                            void Linking.openURL('https://pxblue.github.io/roadmap');
                        }}
                    >
                        Release Roadmap
                    </Button>
                    <Button
                        style={styles.link}
                        labelStyle={styles.linkContent}
                        accessibilityStates
                        onPress={(): void => {
                            void Linking.openURL('https://pxblue.github.io/community/contactus');
                        }}
                    >
                        Send Feedback or Suggestions
                    </Button>
                </Animated.View>
            </ScrollView>
        </View>
    );
};
