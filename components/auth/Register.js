import React, { Component } from 'react'
import { View, Button, TextInput, StyleSheet} from 'react-native'
import firebase from 'firebase';
export class Register extends Component {

    constructor(props){
        super(props);
    
    this.state = {
        email : '',
        password : '',
        name : ''
    }


    this.onSignUp = this.onSignUp.bind(this)

    }

            onSignUp(){

        const { email, password, name} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
        console.log(error)
        })
            }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                placeholder="name"
                onChangeText={(name) => this.setState({ name })}
                ></TextInput>
                 <TextInput 
                placeholder="email"
                onChangeText={(email) => this.setState({ email })}
                ></TextInput>
                 <TextInput 
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
                ></TextInput>
                <Button
                onPress={() => this.onSignUp()}
                title="Sign Up"
                />
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Register
