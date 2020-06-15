
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  Image,
  PixelRatio,
  Dimensions,
  FlatList,
  Switch,
  Picker,
  ToastAndroid,
  TouchableOpacity,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OneSignal from 'react-native-onesignal';
import Modal from 'react-native-modal';
import YouTube from 'react-native-youtube';
import Icon from 'react-native-vector-icons/Entypo';

const mainclr = '#262624';
const yellow = '#fac01e'
const apiKey = 'AIzaSyBSc7n7lcOQYGoW9W7tDhdGGRlgzAYg8jc'
var vData1 = [];
var allcat=[];
const WIDTH = Dimensions.get('window').width / 3.5;
const HEIGHT = Dimensions.get('window').width / 4.9;
export default class Main extends Component {
 getdata=()=>{
   this.setState({
     Data1:allcat,
     refresh:!this.state.refresh
   })

   if(this.state.language.indexOf("all") !== -1 && this.state.language.indexOf("all") !== -1  ){
    this.setState({
      Data1:allcat,
      refresh:!this.state.refresh
    })
     
    fetch('https://api.freeflix.in/public/live-streams')
    .then((response) => {

      return response.json()
    })
    .then((responseJSON) => {
     
      this.setState({
        Data1: responseJSON.result.list,
        
      })
     
      vData1 = responseJSON.result.list;
     
    })
    .catch((error) => {
      console.warn(error);
    });
   } 
   if(this.state.language.indexOf("all") !== -1 && this.state.categories.indexOf("all") == -1 ){
    this.setState({
      Data1:allcat,
      refresh:!this.state.refresh
    })
    
    .then((cresponse) => {
        
      return cresponse.json()
    })
    .then((cresponseJSON) => {
      this.setState({
        Data1:allcat,
        refresh:!this.state.refresh
      })

      this.setState({
        Data1: cresponseJSON.result.list,
        refresh:!this.state.refresh
      })
     
      vData1 = cresponseJSON.result.list;
     
    })
    .catch((error) => {
      console.warn(error);
    });
   }
   if(this.state.categories.indexOf("all") !== -1 && this.state.language.indexOf("all") == -1 ){
    this.setState({
      Data1:allcat,
      refresh:!this.state.refresh
    })
     console.log('languagues not all')
     console.log('https://api.freeflix.in/public/live-streams?skip=0&total=true&languages='+this.state.language.join(','))
    fetch('https://api.freeflix.in/public/live-streams?skip=0&total=true&languages='+this.state.language.join(','))
    .then((lresponse) => {

      return lresponse.json()
    })
    .then((lresponseJSON) => {
      
      this.setState({
        Data1: lresponseJSON.result.list,
        refresh:!this.state.refresh
      })
     
      vData1 = lresponseJSON.result.list;
     
    })
    .catch((error) => {
      console.warn(error);
    });
   }
   if(this.state.language.indexOf("all") == -1 &&this.state.categories.indexOf("all") == -1){
    this.setState({
      Data1:allcat,
      refresh:!this.state.refresh
    })
     console.log('both not all')
     console.log('https://api.freeflix.in/public/live-streams?skip=0&total=true&languages='+this.state.language.join(',')+'&categories='+this.state.categories.join(','))
    fetch('https://api.freeflix.in/public/live-streams?skip=0&total=true&languages='+this.state.language.join(',')+'&categories='+this.state.categories.join(','))
    .then((bresponse) => {

      return bresponse.json()
    })
    .then((bresponseJSON) => {
    
      this.setState({
        Data1: bresponseJSON.result.list,
        refresh:!this.state.refresh
      })
     
      vData1 = bresponseJSON.result.list;
     
    })
    .catch((error) => {
      console.warn(error);
    });
   }
 }
  
  componentDidMount() {
    Linking.getInitialURL()
    .then((url) => {
      if (url) {

        // Alert.alert('GET INIT URL','initial url  ' + url)
        console.log(url .split( '/' ))
        if(url .split( '/' ).length>5)
        {
          this.setState({
            currentvideo:url.split('/')[5],

        })
      fetch('https://api.freeflix.in/public/live-streams')
      .then((response) => {

        return response.json()
      })
      .then((responseJSON) => {
 
        vData1 = responseJSON.result.list;
        for (var i = 0; i < vData1.length; i++){
        
          if (vData1[i].youtube_id == url.split('/')[5] ){
            this.setState({
              title:vData1[i].name,
  
          })
          }
        }
       
       
      })
        }
        
        else
        ToastAndroid('link invalid')

      }
    })
    .catch((e) => {})

// This listener handles the case where the app is woken up from the Universal or Deep Linking
   Linking.addEventListener('url', this.appWokeUp);
    fetch('https://api.freeflix.in/public/live-streams')
      .then((response) => {

        return response.json()
      })
      .then((responseJSON) => {
 
        this.setState({
          Data1: responseJSON.result.list,
         
        })
       
        vData1 = responseJSON.result.list;
       
      })
      .catch((error) => {
        console.warn(error);
      });
     
  }
  constructor(props) {
    super(props);
    OneSignal.init("9027affc-7b7f-439d-9c8d-4a081e642350", {kOSSettingsKeyAutoPrompt : true});
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    this.state = {
      loading: true,
      email: "",
      lanty: 'select',
      cataty: 'select',
      adurl: '',
      Data1:[],
      refresh: true,
      ori: 'Portrait',
      useraddcnlda: false,
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: false,
      isLooping: true,
      duration: 0,
      currentTime: 0,
      fullscreen: false,
      playerWidth: Dimensions.get('window').width,
      in1: '#fac01e',
      checked: false,
      allda: true,
      currentvideo: '5qap5aO4i9A',
      language: ['all'],
      categories: ['all'],
      isModalVisible: false,
      isLangModalVisible: false,
      isCatModalVisible: false,
      scnd_btn: 'gray',
      scnd_icn: 'gray',
      fst_btn: '#fac01e',
      fst_icn: '#fac01e',
      title: 'lofi hip hop radio - beats to relax/study to'
    };
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  toggleLangModal = () => {
    this.setState({ isLangModalVisible: !this.state.isLangModalVisible });
  }; toggleCatModal = () => {
    this.setState({ isCatModalVisible: !this.state.isCatModalVisible });
  };
  _youTubeRef = React.createRef();
  render() {
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height;
    return (


      <View style={styles.container}>
        <Modal isVisible={this.state.isModalVisible}
          deviceWidth={deviceWidth}
          
          deviceHeight={deviceHeight}>
          <View style={{ justifyContent: 'flex-start', aspectRatio: 1.1, alignItems: 'flex-start', backgroundColor: '#262620' }}>
            <View style={{ marginTop: 20 }}>
              <Text style={{
                color: '#fac01e', alignSelf: "stretch", fontSize: 24,
                textAlign: "left",
                marginLeft: 20
              }}>ADD YOUR CHANNEL</Text>
            </View>

            <View style={{
              width: '80%',
              marginTop: 40,
              borderWidth: 1,
              marginLeft: 20,
              borderStyle: "dotted",
              borderColor: this.state.in1,
              borderRadius: 4,

            }}>
              <TextInput
                style={{ color: 'white' }}
                placeholder="URL"
                onChangeText={text => this.setState({ adurl: text })}
                value={this.state.adurl}
                placeholderTextColor='gray'
                underlineColorAndroid="transparent"
                onFocus={() => {
                  this.setState({
                    in1: 'red'
                  })
                }}
                onBlur={() => {
                  this.setState({
                    in1: 'fac01e'
                  })
                }}
              />
            </View>
            <Picker
              selectedValue={this.state.lanty}
              style={{ height: 50, width: '80%', marginLeft: 20, color: yellow, paddingTop: 10 }}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({
                  lanty: itemValue
                });
       
              }}
            >
              <Picker.Item label="SELECT LANGUAGE" value='null' />
              <Picker.Item label="Telugu" value="5db81c2bb9623f0a6249eb2a" />
              <Picker.Item label="Hindi" value="5db81c2eb9623f0a6249eb2b" />
              <Picker.Item label="Marathi" value="5db81c33b9623f0a6249eb2c" />
              <Picker.Item label="Urdu" value="5db81c3bb9623f0a6249eb2d" />
              <Picker.Item label="English" value="5db81c42b9623f0a6249eb2e" />
              <Picker.Item label="Kannada" value="5db81c4cb9623f0a6249eb2f" />
              <Picker.Item label="Tamil" value="5db81c5ab9623f0a6249eb30" />
              <Picker.Item label="Punjabi" value="5db81c62b9623f0a6249eb31" />
              <Picker.Item label="Bhojpuri" value="5db81c76b9623f0a6249eb32" />
              <Picker.Item label="Bengali" value="5db81c81b9623f0a6249eb33" />
              <Picker.Item label="Malayalam" value="5db81c8ab9623f0a6249eb34" />
              <Picker.Item label="Gujarati" value="5db81c98b9623f0a6249eb35" />
              <Picker.Item label="Haryani" value="5db81ca0b9623f0a6249eb36" />
            </Picker>
            <Picker
              selectedValue={this.state.cataty}
              style={{ height: 50, width: '80%', marginLeft: 20, color: yellow, paddingTop: 10 }}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({
                  cataty: itemValue
                });

              }}
            >
              <Picker.Item label="SELECT CATEGORY" value='null' />
              <Picker.Item label="News" value="5db81b10b9623f0a6249eb1e" />
              <Picker.Item label="Kids" value="5db81b35b9623f0a6249eb1f" />
              <Picker.Item label="Music" value="5db81b3db9623f0a6249eb20" />
              <Picker.Item label="Entertainment" value="5db81b56b9623f0a6249eb21" />
              <Picker.Item label="Science" value="5db81b94b9623f0a6249eb22" />
              <Picker.Item label="geographic" value="5db81ba3b9623f0a6249eb23" />
              <Picker.Item label="Bussiness" value="5db81bb4b9623f0a6249eb24" />
              <Picker.Item label="Lifestyle" value="5db81bbfb9623f0a6249eb25" />
              <Picker.Item label="devotional" value="5db81bcab9623f0a6249eb26" />
              <Picker.Item label="Study" value="5db81bd4b9623f0a6249eb27" />
              <Picker.Item label="Wildlife" value="5db81bdcb9623f0a6249eb28" />
              <Picker.Item label="Gaming" value="5db81bf2b9623f0a6249eb29" />
              <Picker.Item label="Sports" value="5db81b05b9623f0a6249eb1d" />
            </Picker>
            <View style={{ width: '100%', justifyContent: 'space-around', flexDirection: 'row' }}>

              <Button 
                onPress={() => {
                  this.toggleModal();
                }}
                title="cancle"
                color='red'

              /><Button 
                onPress={() => {
                  var details = {
                    'url': this.state.adurl,
                    'language':this.state.lanty,
                    'category': this.state.cataty,

                }
              
                  if (this.state.adurl.length > 1 && this.state.lanty!='null' && this.state.cataty!='null') {

                    this.setState({
                      useraddcnlda: true,
                      
                    });
                    var formBody = [];
                    for (var property in details) {
                      var encodedKey = encodeURIComponent(property);
                      var encodedValue = encodeURIComponent(details[property]);
                      formBody.push(encodedKey + "=" + encodedValue);
                    }
                    formBody = formBody.join("&");
                    
                    fetch('https://api.freeflix.in/public/channels', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                      },
                      body: formBody
                    }).then((response) => response.json())
                    .then((responseData) => {
                  
                    })
                    
                    this.toggleModal();
                  } else {
                    ToastAndroid.showWithGravity(
                      "Add URL, Language, Category",
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER
                    );
                  }
                }
                }


                title={"   "+"Done"+"   "}
                color={yellow}

              />
            </View>

          </View>
        </Modal>
        <Modal isVisible={this.state.isLangModalVisible}
          deviceWidth={deviceWidth}
          onBackdropPress={() => {
            this.setState({ 
              isLangModalVisible: false, 
              refresh: !this.state.refresh});
            this.getdata();

          }
           
          
          }
          deviceHeight={deviceHeight}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ justifyContent: 'space-around', height: '80%', width: '80%', alignItems: 'center', backgroundColor: mainclr }}>

              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                var list = []
                list.push('all')
                this.setState({
                  language: list
                })
              }}>
                <Text style={{ color: this.state.language.indexOf("all") !== -1 ? yellow : 'white' }}>
                  All
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.language.indexOf("5db81c2bb9623f0a6249eb2a") !== -1) {
                  var list = this.state.language;
                  list.splice(list.indexOf('5db81c2bb9623f0a6249eb2a'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    language: list,
                  })

                }
                else {
                  var list = this.state.language;
                  list.push('5db81c2bb9623f0a6249eb2a')
                  if (this.state.language.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    language: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.language.indexOf("5db81c2bb9623f0a6249eb2a") !== -1 ? yellow : 'white' }}>
                  Telugu
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.language.indexOf("5db81c2eb9623f0a6249eb2b") !== -1) {
                  var list = this.state.language;
                  list.splice(list.indexOf('5db81c2eb9623f0a6249eb2b'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    language: list,
                  })

                }
                else {
                  var list = this.state.language;
                  list.push('5db81c2eb9623f0a6249eb2b')
                  if (this.state.language.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    language: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.language.indexOf("5db81c2eb9623f0a6249eb2b") !== -1 ? yellow : 'white' }}>
                  Hindi
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.language.indexOf("5db81c33b9623f0a6249eb2c") !== -1) {
                  var list = this.state.language;
                  list.splice(list.indexOf('5db81c33b9623f0a6249eb2c'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    language: list,
                  })

                }
                else {
                  var list = this.state.language;
                  list.push('5db81c33b9623f0a6249eb2c')
                  if (this.state.language.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    language: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.language.indexOf("5db81c33b9623f0a6249eb2c") !== -1 ? yellow : 'white' }}>
                  Marathi
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.language.indexOf("5db81c3bb9623f0a6249eb2d") !== -1) {
                  var list = this.state.language;
                  list.splice(list.indexOf('5db81c3bb9623f0a6249eb2d'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    language: list,
                  })

                }
                else {
                  var list = this.state.language;
                  list.push('5db81c3bb9623f0a6249eb2d')
                  if (this.state.language.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    language: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.language.indexOf("5db81c3bb9623f0a6249eb2d") !== -1 ? yellow : 'white' }}>
                  Urdu
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.language.indexOf("5db81c42b9623f0a6249eb2e") !== -1) {
                  var list = this.state.language;
                  list.splice(list.indexOf('5db81c42b9623f0a6249eb2e'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    language: list,
                  })

                }
                else {
                  var list = this.state.language;
                  list.push('5db81c42b9623f0a6249eb2e')
                  if (this.state.language.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    language: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.language.indexOf("5db81c42b9623f0a6249eb2e") !== -1 ? yellow : 'white' }}>
                  English
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.language.indexOf("5db81c4cb9623f0a6249eb2f") !== -1) {
                  var list = this.state.language;
                  list.splice(list.indexOf('5db81c4cb9623f0a6249eb2f'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    language: list,
                  })

                }
                else {
                  var list = this.state.language;
                  list.push('5db81c4cb9623f0a6249eb2f')
                  if (this.state.language.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    language: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.language.indexOf("5db81c4cb9623f0a6249eb2f") !== -1 ? yellow : 'white' }}>
                  Kannada
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.language.indexOf("5db81c5ab9623f0a6249eb30") !== -1) {
                  var list = this.state.language;
                  list.splice(list.indexOf('5db81c5ab9623f0a6249eb30'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    language: list,
                  })

                }
                else {
                  var list = this.state.language;
                  list.push('5db81c5ab9623f0a6249eb30')
                  if (this.state.language.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    language: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.language.indexOf("5db81c5ab9623f0a6249eb30") !== -1 ? yellow : 'white' }}>
                  Tamli
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.language.indexOf("5db81c62b9623f0a6249eb31") !== -1) {
                  var list = this.state.language;
                  list.splice(list.indexOf('5db81c62b9623f0a6249eb31'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    language: list,
                  })

                }
                else {
                  var list = this.state.language;
                  list.push('5db81c62b9623f0a6249eb31')
                  if (this.state.language.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    language: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.language.indexOf("5db81c62b9623f0a6249eb31") !== -1 ? yellow : 'white' }}>
                  Punjabi
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.language.indexOf("5db81c76b9623f0a6249eb32") !== -1) {
                  var list = this.state.language;
                  list.splice(list.indexOf('5db81c76b9623f0a6249eb32'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    language: list,
                  })

                }
                else {
                  var list = this.state.language;
                  list.push('5db81c76b9623f0a6249eb32')
                  if (this.state.language.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    language: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.language.indexOf("5db81c76b9623f0a6249eb32") !== -1 ? yellow : 'white' }}>
                  Bhojpuri
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.language.indexOf("5db81c81b9623f0a6249eb33") !== -1) {
                  var list = this.state.language;
                  list.splice(list.indexOf('5db81c81b9623f0a6249eb33'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    language: list,
                  })

                }
                else {
                  var list = this.state.language;
                  list.push('5db81c81b9623f0a6249eb33')
                  if (this.state.language.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    language: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.language.indexOf("5db81c81b9623f0a6249eb33") !== -1 ? yellow : 'white' }}>
                  Bengali
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.language.indexOf("5db81c8ab9623f0a6249eb34") !== -1) {
                  var list = this.state.language;
                  list.splice(list.indexOf('5db81c8ab9623f0a6249eb34'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    language: list,
                  })

                }
                else {
                  var list = this.state.language;
                  list.push('5db81c8ab9623f0a6249eb34')
                  if (this.state.language.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)

                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    language: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.language.indexOf("5db81c8ab9623f0a6249eb34") !== -1 ? yellow : 'white' }}>
                  Malayalam
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.language.indexOf("5db81c98b9623f0a6249eb35") !== -1) {
                  var list = this.state.language;
                  list.splice(list.indexOf('5db81c98b9623f0a6249eb35'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    language: list,
                  })

                }
                else {
                  var list = this.state.language;
                  list.push('5db81c98b9623f0a6249eb35')
                  if (this.state.language.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    language: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.language.indexOf("5db81c98b9623f0a6249eb35") !== -1 ? yellow : 'white' }}>
                  Gujarati
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.language.indexOf("5db81ca0b9623f0a6249eb36") !== -1) {

                  var list = this.state.language;

                  list.splice(list.indexOf('5db81ca0b9623f0a6249eb36'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    language: list,
                  })

                }
                else {
                  var list = this.state.language;
                  list.push('5db81ca0b9623f0a6249eb36')
                  if (this.state.language.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    language: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.language.indexOf("5db81ca0b9623f0a6249eb36") !== -1 ? yellow : 'white' }}>
                  Haryani
                                                            </Text>
              </TouchableOpacity>
            </View>
          </View>

        </Modal>
        <Modal isVisible={this.state.isCatModalVisible}
          deviceWidth={deviceWidth}
          onBackdropPress={() => {
            this.setState({
              isCatModalVisible: false,
              refresh: !this.state.refresh
            });
            this.getdata()
          }}
          deviceHeight={deviceHeight}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ justifyContent: 'space-around', height: '80%', width: '80%', alignItems: 'center', backgroundColor: mainclr }}>

              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                var list = []
                list.push('all')
                this.setState({
                  categories: list
                })
              }}>
                <Text style={{ color: this.state.categories.indexOf("all") !== -1 ? yellow : 'white' }}>
                  All
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {

                if (this.state.categories.indexOf("5db81b10b9623f0a6249eb1e") !== -1) {
                  var list = this.state.categories;
                  list.splice(list.indexOf('5db81b10b9623f0a6249eb1e'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    categories: list,
                  })

                }
                else {
                  var list = this.state.categories;
                  list.push('5db81b10b9623f0a6249eb1e')
                  if (this.state.categories.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    categories: list,
                  })
                }
                this.setState({
                  refresh: !this.state.refresh,
                })
              }}>
                <Text style={{ color: this.state.categories.indexOf("5db81b10b9623f0a6249eb1e") !== -1 ? yellow : 'white' }}>
                  News
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.categories.indexOf("5db81b35b9623f0a6249eb1f") !== -1) {
                  var list = this.state.categories;
                  list.splice(list.indexOf('5db81b35b9623f0a6249eb1f'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    categories: list,
                  })

                }
                else {
                  var list = this.state.categories;
                  list.push('5db81b35b9623f0a6249eb1f')
                  if (this.state.categories.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    categories: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.categories.indexOf("5db81b35b9623f0a6249eb1f") !== -1 ? yellow : 'white' }}>
                  Kids
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.categories.indexOf("5db81b3db9623f0a6249eb20") !== -1) {
                  var list = this.state.categories;
                  list.splice(list.indexOf('5db81b3db9623f0a6249eb20'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    categories: list,
                  })

                }
                else {
                  var list = this.state.categories;
                  list.push('5db81b3db9623f0a6249eb20')
                  if (this.state.categories.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    categories: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.categories.indexOf("5db81b3db9623f0a6249eb20") !== -1 ? yellow : 'white' }}>
                  Music
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.categories.indexOf("5db81b56b9623f0a6249eb21") !== -1) {
                  var list = this.state.categories;
                  list.splice(list.indexOf('5db81b56b9623f0a6249eb21'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    categories: list,
                  })

                }
                else {
                  var list = this.state.categories;
                  list.push('5db81b56b9623f0a6249eb21')
                  if (this.state.categories.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    categories: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.categories.indexOf("5db81b56b9623f0a6249eb21") !== -1 ? yellow : 'white' }}>
                  Entertainment
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.categories.indexOf("5db81b94b9623f0a6249eb22") !== -1) {
                  var list = this.state.categories;
                  list.splice(list.indexOf('5db81b94b9623f0a6249eb22'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    categories: list,
                  })

                }
                else {
                  var list = this.state.categories;
                  list.push('5db81b94b9623f0a6249eb22')
                  if (this.state.categories.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    categories: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.categories.indexOf("5db81b94b9623f0a6249eb22") !== -1 ? yellow : 'white' }}>
                  Science
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.categories.indexOf("5db81ba3b9623f0a6249eb23") !== -1) {
                  var list = this.state.categories;
                  list.splice(list.indexOf('5db81ba3b9623f0a6249eb23'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    categories: list,
                  })

                }
                else {
                  var list = this.state.categories;
                  list.push('5db81ba3b9623f0a6249eb23')
                  if (this.state.categories.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    categories: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.categories.indexOf("5db81ba3b9623f0a6249eb23") !== -1 ? yellow : 'white' }}>
                  Geographic
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.categories.indexOf("5db81bb4b9623f0a6249eb24") !== -1) {
                  var list = this.state.categories;
                  list.splice(list.indexOf('5db81bb4b9623f0a6249eb24'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    categories: list,
                  })

                }
                else {
                  var list = this.state.categories;
                  list.push('5db81bb4b9623f0a6249eb24')
                  if (this.state.categories.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    categories: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.categories.indexOf("5db81bb4b9623f0a6249eb24") !== -1 ? yellow : 'white' }}>
                  Bussiness
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.categories.indexOf("5db81bbfb9623f0a6249eb25") !== -1) {
                  var list = this.state.categories;
                  list.splice(list.indexOf('5db81bbfb9623f0a6249eb25'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    categories: list,
                  })

                }
                else {
                  var list = this.state.categories;
                  list.push('5db81bbfb9623f0a6249eb25')
                  if (this.state.categories.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    categories: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.categories.indexOf("5db81bbfb9623f0a6249eb25") !== -1 ? yellow : 'white' }}>
                  Lifestyle
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.categories.indexOf("5db81bcab9623f0a6249eb26") !== -1) {
                  var list = this.state.categories;
                  list.splice(list.indexOf('5db81bcab9623f0a6249eb26'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    categories: list,
                  })

                }
                else {
                  var list = this.state.categories;
                  list.push('5db81bcab9623f0a6249eb26')
                  if (this.state.categories.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    categories: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.categories.indexOf("5db81bcab9623f0a6249eb26") !== -1 ? yellow : 'white' }}>
                  Devotional
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.categories.indexOf("5db81bd4b9623f0a6249eb27") !== -1) {
                  var list = this.state.categories;
                  list.splice(list.indexOf('5db81bd4b9623f0a6249eb27'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    categories: list,
                  })

                }
                else {
                  var list = this.state.categories;
                  list.push('5db81bd4b9623f0a6249eb27')
                  if (this.state.categories.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)

                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    categories: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.categories.indexOf("5db81bd4b9623f0a6249eb27") !== -1 ? yellow : 'white' }}>
                  Study
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.categories.indexOf("5db81bdcb9623f0a6249eb28") !== -1) {
                  var list = this.state.categories;
                  list.splice(list.indexOf('5db81bdcb9623f0a6249eb28'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    categories: list,
                  })

                }
                else {
                  var list = this.state.categories;
                  list.push('5db81bdcb9623f0a6249eb28')
                  if (this.state.categories.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    categories: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.categories.indexOf("5db81bdcb9623f0a6249eb28") !== -1 ? yellow : 'white' }}>
                  Wildlife
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
              
                if (this.state.categories.indexOf("5db81bf2b9623f0a6249eb29") !== -1) {

                  var list = this.state.categories;

                  list.splice(list.indexOf('5db81bf2b9623f0a6249eb29'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    categories: list,
                  })

                }
                else {
                  var list = this.state.categories;
                  list.push('5db81bf2b9623f0a6249eb29')
                  if (this.state.categories.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    categories: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.categories.indexOf("5db81bf2b9623f0a6249eb29") !== -1 ? yellow : 'white' }}>
                  Gaming
                                                            </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => {
                if (this.state.categories.indexOf("5db81b05b9623f0a6249eb1d") !== -1) {

                  var list = this.state.categories;

                  list.splice(list.indexOf('5db81b05b9623f0a6249eb1d'), 1)
                  if (list.length == 0)
                    list.push('all')
                  this.setState({
                    categories: list,
                  })

                }
                else {
                  var list = this.state.categories;
                  list.push('5db81b05b9623f0a6249eb1d')
                  if (this.state.categories.indexOf("all") !== -1) {
                    list.splice(list.indexOf('all'), 1)
                  }
                  if (list.length == 13) {
                    list = ['all']
                  }
                  this.setState({
                    categories: list,
                  })
                }
              }}>
                <Text style={{ color: this.state.categories.indexOf("5db81b05b9623f0a6249eb1d") !== -1 ? yellow : 'white' }}>
                  Sports
                                                            </Text>
              </TouchableOpacity>
            </View>
          </View>

        </Modal>
        <View style={styles.header}>

          <View style={styles.headerLeft}>

            <Image style={styles.logo} source={require('../../res/logo.png')}></Image>
          </View>
          <View style={styles.headerRightt}>
            
            <LinearGradient
          colors={['yellow',  'red']}
          start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
          style={{ height: 46, width: 140, alignItems: 'center', justifyContent: 'center', borderRadius:15}}
        >
          <TouchableOpacity style={{alignItems: 'center',justifyContent:'center',backgroundColor:mainclr,height:44,width:138,borderRadius:15}}>
          <Text style={{color:yellow}}>freeflix.media</Text>
        </TouchableOpacity>
            </LinearGradient>
            <View styly={{ paddingRight: 30 }}>
              <Icon name="plus" onPress={() => { this.toggleModal(); }} color="#fac01e" size={32} />
            </View>

          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.mnvideo}>
            <YouTube
              ref={this._youTubeRef}

              apiKey="AIzaSyBSc7n7lcOQYGoW9W7tDhdGGRlgzAYg8jc"

              videoId={this.state.currentvideo}
              showFullscreenButton={true}
              play={true}
              loop={this.state.isLooping}
              fullscreen={false}
              controls={1}
              modestbranding={false}
              style={[
                { height: PixelRatio.roundToNearestPixel(this.state.playerWidth / (16 / 9)) },
                styles.player,
              ]}
              onError={e => {
                this.setState({ error: e.error });
              }}
              onReady={e => {
                this.setState({ isReady: true });
              }}
              onChangeState={e => {
                this.setState({ status: e.state });
              }}
              onChangeQuality={e => {
                this.setState({ quality: e.quality });
              }}
              onChangeFullscreen={e => {
                this.setState({
                  fullscreen: e.isFullscreen,

                });
                //   if(this.state.ori=='Landscape'){
                //      Orientation.lockToLandscape();
                //    }
                //    else{
                //       Orientation.lockToPortrait();
                //      }
              }}
              onProgress={e => {
                this.setState({ currentTime: e.currentTime });
              }}
            />
          </View>
          <View style={styles.mnTitle}>
           
            <Text style={{ color: 'white' }}>{' '+this.state.title}</Text>
          </View>
          <View style={styles.line}>

          </View>
          <View style={{ flex: 1, backgroundColor: mainclr }}>
            <View style={{ paddingLeft: 6, height: '10%', justifyContent: 'center' }}>
              <Text style={{ color: 'white' }}>
                {'Live  Streams (' + this.state.Data1.length+ ')'}
              </Text>
            </View>

            <View >
              <FlatList
                extraData={this.state.refresh}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={this.state.Data1}
                numColumns={3}
                keyExtractor={item => item.youtube_id}
                style={{ marginHorizontal: 5 }}
                renderItem={({ item }) => {
                 
                  return (
                    <View style={{
                      flex: 1,
                      maxWidth: Dimensions.get('window').width / 3 - 10, // Width / 3 - (marginLeft and marginRight for the components)

                      margin: 3,
                      paddingTop: 5,

                    }}>
                      <TouchableOpacity onPress={() => {
                        this.setState({
                          currentvideo: item.youtube_id,
                          title: item.name
                        })
                      }} style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                        margin: 1,
                        height: HEIGHT,
                        backgroundColor: mainclr
                      }}>
                        <View style={{ flex: 1 }}>
                          <Image source={{ uri: item.image_url }} style={{
                            flex: 1,
                            width: WIDTH,
                            height: HEIGHT,
                            resizeMode: 'contain'
                          }} />

                        </View>



                        <Text numberOfLines={1} style={{ color: 'white' }}>{item.name}</Text>



                      </TouchableOpacity>

                    </View>
                  )



                }}



                keyExtractor={item => item.id}
              />
            </View>


          </View>
        </View>
        <View style={styles.footer}>

          <View style={{
            flexDirection: 'row',
            color: 'white',
            justifyContent: 'space-evenly',
            backgroundColor: mainclr,
            alignItems: 'flex-start',

            width: '100%',
            paddingBottom: 7,

          }}>
            <TouchableOpacity onPress={() => {
              this.setState({
                scnd_btn: 'gray',
                scnd_icn: 'gray',
                fst_btn: '#fac01e',
                fst_icn: '#fac01e',

              });
              this.toggleLangModal();
            }} style={{ flexDirection: 'row', height: '100%' }}>
              <Icon name='language' color={this.state.fst_icn} size={20} />
              <Text

                style={{ color: this.state.fst_btn, paddingLeft: 3 }}>LANGUAGES</Text>


            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              this.setState({
                scnd_btn: '#fac01e',
                scnd_icn: '#fac01e',
                fst_btn: 'gray',
                fst_icn: 'gray',

              });
              this.toggleCatModal();
            }} style={{ flexDirection: 'row' }}>
              <Icon name='list' color={this.state.scnd_icn} size={20} />
              <Text style={{ color: this.state.scnd_btn, textAlign: 'center' }}>CATEGORIES</Text>
            </TouchableOpacity>
          </View>


        </View>
      </View>

    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: mainclr
  },
  header: {
    backgroundColor: '#282525',
    flexDirection: 'row',
    height: '7%',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  headerLeft: {

  },
 
buttonContainer: {
  width: 150,
  alignItems: 'center',
},
  line: {
    backgroundColor: 'black',
    height: '0.3%',
    width: '100%'
  },
  mnTitle: {
    backgroundColor: mainclr,
    height: '6%',
    alignItems: 'center',

    flexDirection: 'row'
  },
  headerRightt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:5
  },
  logo: {
    flex: 1,
    aspectRatio: 3.10,
    resizeMode: 'cover',
  },
  mnTb: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain',
    justifyContent: 'center'
  },
  mnvideo: {
    paddingTop: 3,
    backgroundColor: mainclr,
    height: '33%',
    width: '100%'
  },
  body: {
    backgroundColor: mainclr,
    flexDirection: 'column',
    height: '84%',
    width: '100%',

  },
  footer: {
    flexDirection: 'column',
    color: 'white',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: '4.7%',
    alignItems: 'center',
    backgroundColor: mainclr
  }

});
<FlatList
extraData={this.state.refresh}
horizontal={false}
showsHorizontalScrollIndicator={false}
showsVerticalScrollIndicator={false}
data={this.state.LangList}
numColumns={2}
keyExtractor={item => item._id}
style={{ marginHorizontal: 5,height:'100%' }}
renderItem={({ item }) => {
  return(
    <View
      style={{
       justifyContent:'space-between',
       alignItems:'center',
     borderColor:yellow,
     backgroundColor:mainclr,
    
     
      margin: 3,
      paddingTop: 5,
      }}
    >
      <TouchableOpacity style={{ width: '100%', alignItems: 'center', }} onPress={() => {
if (this.state.language.indexOf(item._id) !== -1) {

  var list = this.state.language;

  list.splice(list.indexOf(item._id), 1)
  if (list.length == 0)
    list.push('all')
  this.setState({
    language: list,
  })

}
else {
  var list = this.state.language;
  list.push(item._id)
  if (this.state.language.indexOf("all") !== -1) {
    list.splice(list.indexOf('all'), 1)
  }
  if (list.length == 13) {
    list = ['all']
  }
  this.setState({
    language: list,
  })
}
}}>
<Text style={{ color: this.state.language.indexOf(item._id) !== -1 ? yellow : 'white' }}>
  {item.name[0].toUpperCase() +  
item.name.slice(1)}
                                            </Text>
</TouchableOpacity>
    </View>
  )
}
}
/> 

