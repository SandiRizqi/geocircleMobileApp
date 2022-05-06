import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar, Image} from 'react-native';



const ProjectsList = () => {
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    fetch('https://www.geo-circle.com/api/project/')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <View>
      <ScrollView >
        {projects.map((project, index) => (
          <TouchableOpacity style={styles.container} key={index}>
            <Text style={styles.title}>{project.project} | {project.name}</Text>
            <Text style={styles.text}>{project.created_at}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
     padding: 10,
     marginTop: 3,
     backgroundColor: '#4AB19D',
     marginLeft:50,

  },
  text: {
     color: '#FFFFFF',
     justifyContent: 'center',
  },
  title : {
    color: '#FFFFFF',
     justifyContent: 'center',
     fontWeight: 'bold',
     fontSize:15,
  },
});

export default ProjectsList;