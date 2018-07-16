import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  state = { text: ''};


  render() {

    return (
      <Card>
      <CardSection>
      <TextInput 
        value={this.state.text}
        onChangeText={ text=> this.setState({ text: text })}
        style={{height:20, width: 100}}
        />
      </CardSection>

      <CardSection>
      </CardSection>

      <CardSection>
        <Button>
          Log In motherfucker        
        </Button>
      </CardSection>
    </Card>

    );
  }
}

export default LoginForm;