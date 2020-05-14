import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

 class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  componentDidMount() {
    this.intervals = setInterval(this.inc, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervals);
  }

  inc = () => {
    console.log("still workjings",this.state.count);
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  //  console.log("donw");
  render() {
   
       return ( <Text style={styles.texts}>{this.state.count}</Text>)
    
  }
}
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: true,
    };
  }
    toggleCounter = () => {
    this.setState((prevState) => ({
      counter: !prevState.counter,
    }));
  };
  
  render() {
    if (this.state.counter) {
      return (
        <View style={styles.container}>
          <Text style={styles.texts}>Brrrrrrrrrrrrrrr......</Text>
        <Counter/>
          <Button title="toggle" onPress={this.toggleCounter}></Button>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
 <Button title="toggle" onPress={this.toggleCounter}></Button>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  texts: {
    fontSize: 40,
    fontWeight: "bold",
    //fontFamily: "sans",
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "black",

    alignItems: "center",
    justifyContent: "center",
  },
});
