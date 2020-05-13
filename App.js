import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
class Count extends React.Component {
  shouldComponentUpdate(nextState) {
    return nextState.count % 2;
  }
  componentDidUpdate() {
    console.log(this.props.count);
  }

  render() {
    return <Text style={styles.texts}>{this.props.count}</Text>;
  }
}
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      counter: true,
    };
  }

  componentDidMount() {
    this.intervals = setInterval(this.inc, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervals);
  }

  inc = () => {
    console.log("still workjing");
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  toggleCounter = () => {
    this.setState((prevState) => ({
      counter: !prevState.counter,
    }));
  };
  //  console.log("donw");
  render() {
    if (this.state.counter) {
      return (
        <View style={styles.container}>
          <Text style={styles.texts}>Brrrrrrrrrrrrrrr......</Text>
          <Count count={this.state.count} counter={this.state.counter} />
          <Button title="toggle" onPress={this.toggleCounter}></Button>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.texts}>Brrrrrrrrrrrrrrr......</Text>

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
