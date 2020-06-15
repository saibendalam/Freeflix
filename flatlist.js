
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
} from 'react-native';

import Modal from 'react-native-modal';
import YouTube from 'react-native-youtube';
import Icon from 'react-native-vector-icons/Entypo';
import { List } from 'react-native-paper';
const mainclr='#262624';
const yellow='#fac01e'
const apiKey='AIzaSyBSc7n7lcOQYGoW9W7tDhdGGRlgzAYg8jc'
export default class App extends Component{
  
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          email: "",
          lanty:'select',
          cataty:'select',
          adurl:'',
          adcat:'',
          adlan:'',
          useraddcnlda:false,
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
          in1:'#fac01e',
          checked: false,
          language:['all'],
          categories:['all'],
          isModalVisible:false,
          isLangModalVisible:false,
          isCatModalVisible:false,
          scnd_btn:'gray',
          scnd_icn:'gray',
          fst_btn:'#fac01e',
          fst_icn:'#fac01e',
          Data:[{img:require('./res/tb1.png'),id:1,title:'Watch sky line'},
                {img:require('./res/tb2.png'),id:2,title:'Carona virus increase'},
                {img:require('./res/tb1.png'),id:3,title:'fc'},
                {img:require('./res/tb1.png'),id:4,title:'gggchjkfh'},
                {img:require('./res/tb2.png'),id:5,title:'Carona virus increses'},
                {img:require('./res/tb1.png'),id:6,title:'Best of standup comedy'},
                {img:require('./res/tb1.png'),id:7,title:'Watch sky line'},
                {img:require('./res/tb2.png'),id:8,title:'Carona virus increses'},
                {img:require('./res/tb1.png'),id:9,title:'Best of standup comedy'},
                {img:require('./res/tb1.png'),id:10,title:'Watch sky line'},
                {img:require('./res/tb2.png'),id:11,title:'Carona virus increses'},
                {img:require('./res/tb1.png'),id:12,title:'Best of standup comedy'},
                {img:require('./res/tb1.png'),id:13,title:'Watch sky line'},
                {img:require('./res/tb2.png'),id:14,title:'Carona virus increses'},
                {img:require('./res/tb1.png'),id:15,title:'Best of standup comedy'},
                {img:require('./res/tb1.png'),id:16,title:'Watch sky line'},
                {img:require('./res/tb2.png'),id:17,title:'Carona virus increses'},
                {img:require('./res/tb1.png'),id:18,title:'Best of standup comedy'},
                {img:require('./res/tb1.png'),id:19,title:'Watch sky line'},
                {img:require('./res/tb2.png'),id:20,title:'Carona virus increses'},
                {img:require('./res/tb1.png'),id:21,title:'Best of standup comedy'},
                {img:require('./res/tb1.png'),id:22,title:'Watch sky line'},
                {img:require('./res/tb2.png'),id:23,title:'Carona virus increses'},
                {img:require('./res/tb1.png'),id:24,title:'Best of standup comedy'}, 
              ]
        };
      }
      toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
      };
      toggleLangModal = () => {
        this.setState({isLangModalVisible: !this.state.isModalVisible});
      };toggleCatModal = () => {
        this.setState({isCatModalVisible: !this.state.isModalVisible});
      };
      _youTubeRef = React.createRef(); 
    render(){
      const deviceWidth = Dimensions.get("window").width;
      const deviceHeight = Dimensions.get("window").height;
        return(
          
         
            <View style={styles.container}>
              <Modal isVisible={this.state.isModalVisible}
                      deviceWidth={deviceWidth}
                      onBackdropPress={() => this.setState({isModalVisible: false})}
                      deviceHeight={deviceHeight}>
                         <View style={{justifyContent:'flex-start',aspectRatio:1.1,alignItems:'flex-start',backgroundColor:mainclr}}>
                          <View style={{marginTop:20}}>
                          <Text style={{color:'#fac01e', alignSelf: "stretch", fontSize:24,
        textAlign: "left",
        marginLeft: 20}}>ADD YOUR CHANNEL</Text>
                          </View>
                          
        <View style={{
             width:'80%',
          marginTop: 40,
          borderWidth: 1,
          marginLeft:20,
          borderStyle: "dotted",
          borderColor: this.state.in1,
          borderRadius: 4,
         
        }}>
        <TextInput
                style={{color:'white'}}
                placeholder="URL"
                onChangeText={text => this.setState({ adurl: text })}
                value={this.state.adurl}
                placeholderTextColor='gray'
                underlineColorAndroid="transparent"
                onFocus={()=>{
                  this.setState({
                    in1:'red'
                  })
               }}
               onBlur={()=>{
                this.setState({
                  in1:'fac01e'
                })
               }}
              />
        </View>
        <Picker
        selectedValue={this.state.lanty}
        style={{ height: 50, width: '80%', marginLeft:20,color:yellow,paddingTop:10 }}
        onValueChange={(itemValue, itemIndex) =>{
          this.setState({
            lanty:itemValue
          });
          console.log(this.state.lanty)
        }}
      >
        <Picker.Item label="SELECT LANGUAGE" value='null' />
        <Picker.Item label="Telugu" value="telugu" />
        <Picker.Item label="Hindi" value="hindi" />
        <Picker.Item label="Marathi" value="marathi" />
        <Picker.Item label="Urdu" value="urdu" />
        <Picker.Item label="English" value="english" />
        <Picker.Item label="Kannada" value="kannada" />
        <Picker.Item label="Tamil" value="tamil" />
        <Picker.Item label="Punjabi" value="punjabi" />
        <Picker.Item label="Bhojupuri" value="bhojupuri" />
        <Picker.Item label="Bengali" value="bengali" />
        <Picker.Item label="Malyalam" value="malayalam" />
        <Picker.Item label="Gujarathi" value="gujarathi" />
        <Picker.Item label="Haryani" value="haryani" />
      </Picker>
      <Picker
        selectedValue={this.state.cataty}
        style={{ height: 50, width: '80%', marginLeft:20,color:yellow,paddingTop:10 }}
        onValueChange={(itemValue, itemIndex) =>{
          this.setState({
            cataty:itemValue
          });
        
        }}
      >
        <Picker.Item label="SELECT CATEGORY" value='null' />
        <Picker.Item label="News" value="news" />
        <Picker.Item label="Kids" value="hindi" />
        <Picker.Item label="Music" value="music" />
        <Picker.Item label="Entertainment" value="entertainment" />
        <Picker.Item label="Science" value="science" />
        <Picker.Item label="Geographic" value="geographic" />
        <Picker.Item label="Bussiness" value="bussiness" />
        <Picker.Item label="Lifestyle" value="lifestyle" />
        <Picker.Item label="Devotional" value="devotional" />
        <Picker.Item label="Study" value="study" />
        <Picker.Item label="Wildlife" value="wildllife" />
        <Picker.Item label="Gaming" value="gaming" />
        <Picker.Item label="Sports" value="sports" />
      </Picker>
       <View style={{width:'100%',justifyContent:'space-evenly',flexDirection:'row'}}>
       
       <Button
            onPress={()=>{
                   this.toggleModal();
            }}
  title="cancle"
  color='red'
  
/><Button
            onPress={()=>{
              if(this.state.adurl.length>1){
                this.setState({
                  useraddcnlda:true
                 });
                 this.toggleModal();
          }else{
            ToastAndroid.showWithGravity(
              "Add URL",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
          }
        }
              }
            
                   
  title="Done"
  color={yellow}
  
/>
         </View> 
     
                      </View>
        </Modal>
        <Modal isVisible={this.state.isLangModalVisible}
                      deviceWidth={deviceWidth}
                      onBackdropPress={() => this.setState({isLangModalVisible: false})}
                      deviceHeight={deviceHeight}>
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                        <View  style={{justifyContent:'space-around',height:'80%',width:'80%',alignItems:'center',backgroundColor:mainclr}}>
                                                        
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                        var list=[]
                                                        list.push('all')
                                                        this.setState({
                                                          language:list
                                                        })
                                                        }}>
                                                            <Text style={{color:this.state.language.indexOf("all") !== -1?yellow:'white'}}>
                                                                    All
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.language.indexOf("telugu") !== -1){
                                                                     var list=this.state.language;
                                                                     list.splice(list.indexOf('telugu'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      language:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.language;
                                                            list.push('telugu')
                                                            if (this.state.language.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            } 
                                                            this.setState({
                                                              language:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.language.indexOf("telugu") !== -1?yellow:'white'}}>
                                                                      Telugu
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.language.indexOf("hindi") !== -1){
                                                                     var list=this.state.language;
                                                                     list.splice(list.indexOf('hindi'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      language:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.language;
                                                            list.push('hindi')
                                                            if (this.state.language.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              language:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.language.indexOf("hindi") !== -1?yellow:'white'}}>
                                                                      Hindi
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.language.indexOf("marathi") !== -1){
                                                                     var list=this.state.language;
                                                                     list.splice(list.indexOf('marathi'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      language:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.language;
                                                            list.push('marathi')
                                                            if (this.state.language.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              language:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.language.indexOf("marathi") !== -1?yellow:'white'}}>
                                                                      Marathi
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}}  onPress={()=>{
                                                          if(this.state.language.indexOf("urdu") !== -1){
                                                                     var list=this.state.language;
                                                                     list.splice(list.indexOf('urdu'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      language:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.language;
                                                            list.push('urdu')
                                                            if (this.state.language.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              language:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.language.indexOf("urdu") !== -1?yellow:'white'}}>
                                                                      Urdu
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}}  onPress={()=>{
                                                          if(this.state.language.indexOf("english") !== -1){
                                                                     var list=this.state.language;
                                                                     list.splice(list.indexOf('english'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      language:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.language;
                                                            list.push('english')
                                                            if (this.state.language.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              language:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.language.indexOf("english") !== -1?yellow:'white'}}>
                                                                      English
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.language.indexOf("kannada") !== -1){
                                                                     var list=this.state.language;
                                                                     list.splice(list.indexOf('kannada'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      language:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.language;
                                                            list.push('kannada')
                                                            if (this.state.language.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              language:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.language.indexOf("kannada") !== -1?yellow:'white'}}>
                                                                      Kannada
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.language.indexOf("tamil") !== -1){
                                                                     var list=this.state.language;
                                                                     list.splice(list.indexOf('tamil'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      language:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.language;
                                                            list.push('tamil')
                                                            if (this.state.language.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              language:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.language.indexOf("tamil") !== -1?yellow:'white'}}>
                                                                      Tamli
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.language.indexOf("punjabi") !== -1){
                                                                     var list=this.state.language;
                                                                     list.splice(list.indexOf('punjabi'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      language:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.language;
                                                            list.push('punjabi')
                                                            if (this.state.language.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              language:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.language.indexOf("punjabi") !== -1?yellow:'white'}}>
                                                                      Punjabi
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.language.indexOf("bhojpuri") !== -1){
                                                                     var list=this.state.language;
                                                                     list.splice(list.indexOf('bhojpuri'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      language:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.language;
                                                            list.push('bhojpuri')
                                                            if (this.state.language.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              language:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.language.indexOf("bhojpuri") !== -1?yellow:'white'}}>
                                                            Bhojpuri
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.language.indexOf("bengali") !== -1){
                                                                     var list=this.state.language;
                                                                     list.splice(list.indexOf('bengali'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      language:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.language;
                                                            list.push('bengali')
                                                            if (this.state.language.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              language:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.language.indexOf("bengali") !== -1?yellow:'white'}}>
                                                                      Bengali
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}}  onPress={()=>{
                                                          if(this.state.language.indexOf("malayalam") !== -1){
                                                                     var list=this.state.language;
                                                                     list.splice(list.indexOf('malayalam'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      language:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.language;
                                                            list.push('malayalam')
                                                            if (this.state.language.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                              
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              language:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.language.indexOf("malayalam") !== -1?yellow:'white'}}>
                                                                      Malayalam
                                                            </Text>
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.language.indexOf("gujarati") !== -1){
                                                                     var list=this.state.language;
                                                                     list.splice(list.indexOf('gujarati'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      language:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.language;
                                                            list.push('gujarati')
                                                            if (this.state.language.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              language:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.language.indexOf("gujarati") !== -1?yellow:'white'}}>
                                                                      Gujarati
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}}  onPress={()=>{
                                                          if(this.state.language.indexOf("haryani") !== -1){
                                                                   
                                                                     var list=this.state.language;

                                                                     list.splice(list.indexOf('haryani'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      language:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.language;
                                                            list.push('haryani')
                                                            if (this.state.language.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              language:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.language.indexOf("haryani") !== -1?yellow:'white'}}>
                                                                      Haryani
                                                            </Text>
                                                        </TouchableOpacity>  
                                                   </View>
                        </View>
                        
        </Modal>
        <Modal isVisible={this.state.isCatModalVisible}
                      deviceWidth={deviceWidth}
                      onBackdropPress={() => this.setState({isCatModalVisible: false})}
                      deviceHeight={deviceHeight}>
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                        <View  style={{justifyContent:'space-around',height:'80%',width:'80%',alignItems:'center',backgroundColor:mainclr}}>
                                                        
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                        var list=[]
                                                        list.push('all')
                                                        this.setState({
                                                          categories:list
                                                        })
                                                        }}>
                                                            <Text style={{color:this.state.categories.indexOf("all") !== -1?yellow:'white'}}>
                                                                    All
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.categories.indexOf("news") !== -1){
                                                                     var list=this.state.categories;
                                                                     list.splice(list.indexOf('news'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      categories:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.categories;
                                                            list.push('news')
                                                            if (this.state.categories.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              categories:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.categories.indexOf("news") !== -1?yellow:'white'}}>
                                                                      News
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.categories.indexOf("kids") !== -1){
                                                                     var list=this.state.categories;
                                                                     list.splice(list.indexOf('kids'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      categories:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.categories;
                                                            list.push('kids')
                                                            if (this.state.categories.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              categories:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.categories.indexOf("kids") !== -1?yellow:'white'}}>
                                                                      Kids
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.categories.indexOf("music") !== -1){
                                                                     var list=this.state.categories;
                                                                     list.splice(list.indexOf('music'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      categories:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.categories;
                                                            list.push('music')
                                                            if (this.state.categories.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              categories:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.categories.indexOf("music") !== -1?yellow:'white'}}>
                                                                      Music
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}}  onPress={()=>{
                                                          if(this.state.categories.indexOf("entertainment") !== -1){
                                                                     var list=this.state.categories;
                                                                     list.splice(list.indexOf('entertainment'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      categories:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.categories;
                                                            list.push('entertainment')
                                                            if (this.state.categories.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              categories:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.categories.indexOf("entertainment") !== -1?yellow:'white'}}>
                                                                      Entertainment
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}}  onPress={()=>{
                                                          if(this.state.categories.indexOf("science") !== -1){
                                                                     var list=this.state.categories;
                                                                     list.splice(list.indexOf('science'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      categories:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.categories;
                                                            list.push('science')
                                                            if (this.state.categories.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              categories:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.categories.indexOf("science") !== -1?yellow:'white'}}>
                                                                      Science
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.categories.indexOf("geographic") !== -1){
                                                                     var list=this.state.categories;
                                                                     list.splice(list.indexOf('geographic'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      categories:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.categories;
                                                            list.push('geographic')
                                                            if (this.state.categories.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              categories:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.categories.indexOf("geographic") !== -1?yellow:'white'}}>
                                                                      Geographic
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.categories.indexOf("bussiness") !== -1){
                                                                     var list=this.state.categories;
                                                                     list.splice(list.indexOf('bussiness'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      categories:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.categories;
                                                            list.push('bussiness')
                                                            if (this.state.categories.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              categories:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.categories.indexOf("bussiness") !== -1?yellow:'white'}}>
                                                                      Bussiness
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.categories.indexOf("lifestyle") !== -1){
                                                                     var list=this.state.categories;
                                                                     list.splice(list.indexOf('lifestyle'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      categories:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.categories;
                                                            list.push('lifestyle')
                                                            if (this.state.categories.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              categories:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.categories.indexOf("lifestyle") !== -1?yellow:'white'}}>
                                                                      Lifestyle
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.categories.indexOf("devotional") !== -1){
                                                                     var list=this.state.categories;
                                                                     list.splice(list.indexOf('devotional'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      categories:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.categories;
                                                            list.push('devotional')
                                                            if (this.state.categories.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              categories:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.categories.indexOf("devotional") !== -1?yellow:'white'}}>
                                                                      Devotional
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}}  onPress={()=>{
                                                          if(this.state.categories.indexOf("study") !== -1){
                                                                     var list=this.state.categories;
                                                                     list.splice(list.indexOf('study'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      categories:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.categories;
                                                            list.push('study')
                                                            if (this.state.categories.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                              
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              categories:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.categories.indexOf("study") !== -1?yellow:'white'}}>
                                                            Study
                                                            </Text>
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                                                          if(this.state.categories.indexOf("wildlife") !== -1){
                                                                     var list=this.state.categories;
                                                                     list.splice(list.indexOf('wildlife'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      categories:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.categories;
                                                            list.push('wildlife')
                                                            if (this.state.categories.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              categories:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.categories.indexOf("wildlife") !== -1?yellow:'white'}}>
                                                            Wildlife
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}}  onPress={()=>{
                                                          if(this.state.categories.indexOf("gaming") !== -1){
                                                                   
                                                                     var list=this.state.categories;

                                                                     list.splice(list.indexOf('gaming'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      categories:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.categories;
                                                            list.push('gaming')
                                                            if (this.state.categories.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              categories:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.categories.indexOf("gaming") !== -1?yellow:'white'}}>
                                                                      Gaming
                                                            </Text>
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity style={{width:'100%',alignItems:'center'}}  onPress={()=>{
                                                          if(this.state.categories.indexOf("sports") !== -1){
                                                                   
                                                                     var list=this.state.categories;

                                                                     list.splice(list.indexOf('sports'),1)
                                                                     if(list.length==0)
                                                                     list.push('all')
                                                                     this.setState({
                                                                      categories:list,
                                                                    })

                                                          }
                                                          else{
                                                            var list=this.state.categories;
                                                            list.push('sports')
                                                            if (this.state.categories.indexOf("all") !== -1) {
                                                              list.splice(list.indexOf('all'),1)
                                                            }
                                                            if(list.length==13){
                                                              list=['all']
                                                            }
                                                            this.setState({
                                                              categories:list,
                                                            })
                                                          }
                                                        }}>
                                                            <Text style={{color:this.state.categories.indexOf("sports") !== -1?yellow:'white'}}>
                                                                      Sports
                                                            </Text>
                                                        </TouchableOpacity>  
                                                   </View>
                        </View>
                        
        </Modal>
                <View style={styles.header}>
           
                     <View style={styles.headerLeft}>
                          
                          <Image style={styles.logo} source={require('./res/logo.png')}></Image>
                     </View>
                     <View style={styles.headerRightt}>
                        <View style={{paddingRight:25}}>
                           <Text  style={{color:'white',textAlign:'center'}}>freeflix.media</Text>
                        </View>

                        <View styly={{paddingRight:30}}>
                           <Icon name="plus" onPress={()=>{this.toggleModal();}} color="#fac01e" size={32}/>
                        </View>
                         
                     </View>
                </View>
                
                <View style={styles.body}>
                      <View style={styles.mnvideo}>
                      <YouTube
          ref={this._youTubeRef}
         
          apiKey="AIzaSyBSc7n7lcOQYGoW9W7tDhdGGRlgzAYg8jc"
          
          videoId="9Auq9mYxFEE"
          
          play={this.state.isPlaying}
          loop={this.state.isLooping}
          fullscreen={this.state.fullscreen}
          controls={1}
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
            this.setState({ fullscreen: e.isFullscreen });
          }}
          onProgress={e => {
            this.setState({ currentTime: e.currentTime });
          }}
        />
                      </View> 
                      <View style={styles.mnTitle}>
                           <Icon name="dot-single" color="red" size={36}/>
                            <Text  style={{color:'white'}}>  Watch sky News live</Text>
                      </View>
                      <View style={styles.line}>
                            
                      </View>
                     <View style={{flex:1,backgroundColor:mainclr}}>
                       <View style={{paddingLeft:9,paddingTop:20,justifyContent:'flex-start'}}> 
                       <Text style={{color:'white'}}>
                       {'Live  Streams ('+this.state.Data.length+')'}
                     </Text>
                       </View>
                    
                      <View >
                      <FlatList
                 
                           horizontal={false}
                        data={this.state.Data}
                        numColumns={3}
                        renderItem={({ item }) =>
                        <View style={{ flex:1,
                          maxWidth: Dimensions.get('window').width / 3 - 10, // Width / 3 - (marginLeft and marginRight for the components)
                          justifyContent: 'center',
                          alignItems:'center',    
                          margin:3,
                          paddingTop:5
                              
                          }}>
                                                            <View style={{alignItems: 'center',
                                                       justifyContent: 'center',
                                                         flex: 1,
                                                         margin: 1,
                                                    height: Dimensions.get('window').width / 3,}}>  
                                    <View style={{height:0}}></View>
                                       <Image source={item.img} style={{flex:1,width:null,height:null,resizeMode:'cover'}}/>
                        <View>
                        <Text numberOfLines={1} style={{color:'white'}}>{item.title}</Text>
                        </View>

                        
                           </View>

                        </View>
                             
               
                          }
                        keyExtractor={item => item.id}
                   />
                      </View>
                  
                  
                    </View>
                </View>
                <View style={styles.footer}>
                  
                  <View style={{
                    flexDirection:'row',
                    color:'white',
                    justifyContent:'space-around',
                     backgroundColor:mainclr,
                    alignItems:'flex-start',
                    
                    width:'100%',
                    paddingBottom:8,
                    height:'50%'
                  }}>
                  <View style={{flexDirection:'row'}}>
                     <Icon name='language' color={this.state.fst_icn} size={20}/>
                   <Text
                      onPress={()=>{
                        this.setState({
                          scnd_btn:'gray',
                          scnd_icn:'gray',
                          fst_btn:'#fac01e',
                          fst_icn:'#fac01e',
                       
                        });
                    this.toggleLangModal();
                      }}
                   style={{color:this.state.fst_btn,paddingLeft:3}}>LANGUAGES</Text>
                   
                 
                   </View>
                  <View style={{flexDirection:'row'}}>
                       <Icon name='list' color={this.state.scnd_icn} size={20}/>
                       <Text onPress={()=>{
                         this.setState({
                           scnd_btn:'#fac01e',
                           scnd_icn:'#fac01e',
                           fst_btn:'gray',
                           fst_icn:'gray',
                         
                         });
                         this.toggleCatModal();
                       }} style={{color:this.state.scnd_btn,textAlign:'center'}}>CATEGORIES</Text>
                       </View>
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
        backgroundColor:mainclr
      },
      header:{
        backgroundColor:'#282525',
        flexDirection:'row',
        height:'7%',
        width:'100%',
        justifyContent:'space-between',
        paddingTop:15
      },
      headerLeft:{
         
      },
      line:{
        backgroundColor:'black',
        height:'0.3%',
        width:'100%'
      },
      mnTitle:{
        backgroundColor:mainclr,
        height:'6%',
      alignItems:'center',
        flexDirection:'row'
      },
      headerRightt:{
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'center'
      },
      logo:{
        flex: 1,
        aspectRatio: 3.10, 
        resizeMode: 'cover',
      },
      mnTb:{
        flex: 1,
        height:null,
        width:null,
        resizeMode: 'contain',
      },
      mnvideo:{
        paddingTop:3,
        backgroundColor:mainclr,
        height:'32%',
        width:'100%'
      },
      body:{
        backgroundColor:mainclr,
        flexDirection:'column',
        height:'87%',
        width:'100%',
       
      },
      footer:{
        flexDirection:'column',
        color:'white',
        justifyContent:'space-around',
        width:'100%',
        flex:1,
        alignItems:'center',
        backgroundColor:mainclr
      }
     
});

