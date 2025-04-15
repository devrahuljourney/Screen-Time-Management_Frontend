import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const { bgColor, ttColor } = require("../../constants/Colors")

const {width, height} = Dimensions.get('window')

const w = (percentage) => {
  return width * percentage
}

const h = (percentage) => {
  return height * percentage
}

export default function ScreenTimePermission() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.screen}>
      {/* Header: Back Button */}
      <View style={styles.container} >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-white rounded-full w-[50px] h-[35px] justify-center items-center"
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Info Text */}
      <View style={styles.screenTime__intro}>
        <Text style={styles.screenTime__introTitle}>
          Mind giving access to Screen Time?
        </Text>
        <Text style={styles.screenTime__introText}>
          Don't worry, it's all about helping you stay on track! 🛣️
        </Text>
      </View>

      {/* Permission Card */}
      <View style={styles.screenTime__card}>
        <View>
          <Text style={styles.screenTime__cardTitle}>
            “Focusly” Would Like to Access Screen Time
          </Text>
          <Text style={styles.screenTime__cardText}>
            Providing “Focusly” access to Screen Time may allow it to see your activity data, restrict content, and limit the usage of apps and websites.
          </Text>
        </View>
        <View style={styles.screenTime__cardActions}>
          <Text style={[styles.screenTime__continue,styles.screenTime__btn]}>Continue</Text>
          <Text style={styles.screenTime__deny}>Don’t Allow</Text>
        </View>
      </View>

      {/* Footer Instructions */}
      <View style={styles.screenTime__footer}>
        <Text style={styles.screenTime__footerText}>
          After tapping Provide Access, tap on “Continue” on the next screen
        </Text>
        <TouchableOpacity className="screen-time__provide-btn">
          <Text style={styles.screenTime__provideText}>Provide Access</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  screen: {
    backgroundColor: bgColor.black,
    flex:1,
    padding: 10,
    paddingTop: 30,
    justifyContent:"space-between",
    
  },
  container:{
    height:h(1),
    justifyContent:'space-between',
    alignItems:'flex-start',
    padding:w(0.03)
  },

  screenTime__intro: {
    // marginTop: 20,
  },
  screenTime__introTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    textAlign:'center'
  },
  screenTime__introText: {
    fontSize: 16,
    color: '#ccc',
    textAlign:'center'

  },

  screenTime__card: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 10,
    width:w(0.9)
  },
  screenTime__cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    textAlign:'center'

  },
  screenTime__cardText: {
    fontSize: 14,
    color: '#aaa',
    textAlign:'center'

  },
  screenTime__cardActions: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding:w(0.03),
    borderColor:ttColor.gray700,
    borderTopWidth:1
  },
  screenTime__continue: {
    color: '#4CAF50',
    fontWeight: '600',
    width:w(0.4)
  },
  screenTime__deny: {
    color: '#f44336',
    padding:10
  },

  screenTime__footer: {
    marginBottom: 30,
  },
  screenTime__footerText: {
    color: '#aaa',
    marginBottom: 10,
    textAlign:'center'

  },
  screenTime__provideText: {
    backgroundColor: bgColor.blue,
    color: 'white',
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
    fontWeight: '600',
  },
  screenTime__btn : {
    borderWidth:2,
    borderColor: 'white',
    padding:10,
    borderBottomLeftRadius:10    
  }
});
