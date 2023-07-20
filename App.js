/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import from 'react';
import React, {useState} from 'react';
//import type {Node} from 'react';
import {StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import {init, addBoot, readAllBoots, deleteBootFrDb, updateBootFrDb} from './database/db';


init()
.then(()=>{console.log("Database initialized");}
).catch((error)=>{console.log("Database is not initialized" + error);
});

const App = () => {
  const [bootList, setBootList] = useState([]);

async function saveBoot(){
  try{
    await addBoot("winter boot", 42);
    console.log("boot added");
    await readAllBoots();
  }catch(error){
    console.log("boot not added");
  }finally{
    /* setBootList(bootList); */
  }
}

async function readAllBoots(){
  try{
    await readAllBoots();
    console.log("boots read");
  }catch(error){
    console.log("boots not read");
  }
  finally{
    /* setBootList(bootList); */
  }
}

async function deleteBootFrDb(){
  try{
    await deleteBoot(1);
    console.log("boot deleted");
  }catch(error){
    console.log(error);
  }finally{
    // readAllBoots();
  }
}

async function updateBootFrDb(){
  try {
    await updateBoot(1, "summer boot", 42);
    console.log("boot updated");
  }catch(error){
      console.log(error);
  }finally
  { 
    readAllBoots();
}
}


    
  return (
    <View >
      <Button title="Save" onPress={()=>saveBoot()} style={styles.buttonstyle}/>
      <Button title="Read" onPress={()=>readAllBoots()} />
      <Button title="Delete" onPress={()=>deleteBootFrDb()} />
      <Button title="Update" onPress={()=>updateBootFrDb()}  />
        <Text>The bootlist</Text>
          <FlatList
          data={bootList}
          renderItem={(item)=><View><Text>{item.item.id}) {item.item.type} {item.item.size}</Text>
          </View>}
          />
      <View style={styles.listitemstyle}>
        <Text>
            {item.id_number}. {item.size}: {item.type}
        </Text>
      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textinput: {
    backgroundColor: 'lightblue',
    width: '70%',
    borderColor: 'black',
    borderWidth: 2,
  },
  inputstyle: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonstyle: {
    width: 200,
    marginTop: 30,
    marginBottom: 30,
  },
  listitemstyle: {
    backgroundColor: 'lightgreen',
    width: '90%',
    borderColor: 'red',
    borderWidth: 2,
    margin: 5,
  },
  scrollviewstyle:{
    width:'80%',
    backgroundColor:'yellow',
  },  
});

export default App;