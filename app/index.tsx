import { Image, ImageSourcePropType, Text, View, StyleSheet, Pressable } from "react-native";
import { useState, type PropsWithChildren } from "react";
import * as Haptics from 'expo-haptics';
import DiceOne from '@/assets/images/dice-six-faces-one.png'
import DiceTwo from '@/assets/images/dice-six-faces-two.png'
import DiceThree from '@/assets/images/dice-six-faces-three.png'
import DiceFour from '@/assets/images/dice-six-faces-four.png'
import DiceFive from '@/assets/images/dice-six-faces-five.png'
import DiceSix from '@/assets/images/dice-six-faces-six.png'

type  DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>



const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return(
   <View>
      <Image style={styles.diceImage} source={imageUrl}/>
   </View> 
  )
}

export default function Index():JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor((Math.random()) * 5) + 1;
    
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break
      case 4:
        setDiceImage(DiceFour)
        break
      case 5:
        setDiceImage(DiceFive)
        break
      case 5:
        setDiceImage(DiceSix)
        break
      default:
        break;
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)

  }

  return (
    <View>
      <Dice imageUrl={diceImage}/>
      <Pressable
      style={styles.rollBtn}
      onPress={rollDiceOnTap}
      >
        <Text style={styles.rollBtnText}>Roll the dice</Text>
        
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  diceImage :{
    marginHorizontal: 'auto',
    marginTop: 100,
    height: 200,
    width: 200,
    borderRadius: 10,
  },
  rollBtn:{
    margin: 'auto',
    marginTop: 50,
    width: '50%',
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#8780b0',
  },
  rollBtnText: {
    fontSize: 24,
    fontWeight: 500,
    color: '#ffffff',
    textAlign: 'center',
  }
})
