import { TouchableOpacity, StyleSheet,Text,View } from "react-native"
import Icon from 'react-native-vector-icons/Feather'
const Task = ({name,done,deleteTask,checkTask}) => {  
    return (
        <View
        style={styles.container}>
            <TouchableOpacity 
            style = {styles.actionButtonContainer}
            onPress = {checkTask}>
                <Icon
                name={done ? "check" : "square"}
                size={25}>
                </Icon>
            </TouchableOpacity>
            <Text
            style = {styles.taskName}>
                {name}
            </Text>
            <TouchableOpacity
            onPress = {deleteTask}
            style = {styles.actionButtonContainer}>
                <Icon
                name="trash"
                size={25}>
                </Icon>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
        width : 'auto',
        height : 50,
        borderBottomWidth : 1,
    },
    taskName : {
        height : 50,
        width : '80%',
        justifyContent : 'center',
        alignItems : 'center',
        fontSize : 30,
        textAlign : 'center',
    },
    actionButtonContainer : {
        width : '10%',
        height : 50,
        justifyContent : 'center',
        alignItems : 'center',
    }
})
export default Task

