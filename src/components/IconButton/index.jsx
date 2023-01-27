
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet } from 'react-native'

export default function IconButton({ onPress, icon, size, ...rest }) {
    
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesomeIcon {...rest} icon={icon} size={size} />
    </TouchableOpacity>
  )
}




