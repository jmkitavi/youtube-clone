import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{
              width: 98,
              height: 22,
            }}
            />
            <View style={styles.rightNav} >
              <TouchableOpacity>
                <Icon name='search' size={25} style={styles.navItem} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name='account-circle' size={25} style={styles.navItem} />
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem: {
    marginLeft: 25
  }
})
