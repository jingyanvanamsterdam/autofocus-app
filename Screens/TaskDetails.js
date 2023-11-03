import { StyleSheet, Text, View } from 'react-native';

function Feature(props) {
  return <Text style={styles.featureStyle}>{props.txt}</Text> 
}

function Description (props){
  return (
    <View>
      <Text style={styles.heading}>Description</Text>
      <Text style={styles.descriptionStyle}>{props.txt}</Text>
    </View>
  )
}

export default function TaskDetails() {
  return (
      <View style={styles.bodyText}>
        <Text style={styles.heading}>Task Title</Text>
        <View>
          <Feature txt={"Due by " + Date()} />
          <Feature txt={"Important: Y/N"} />
        </View>
        <Description txt={'description text'} />
      </View>
  );
}

const styles = StyleSheet.create({

  bodyText:{
    flex: 0.9,
    marginRight: 30, 
    marginLeft: 30,
    borderWidth: 2,
    padding: 30,
  },
  heading:{
    fontSize: 36,
    marginBottom: 30,
  },
  featureStyle:{
    fontSize: 24,
    marginBottom: 30,
  },
  descriptionStyle:{
    fontSize: 24,
  },
});

