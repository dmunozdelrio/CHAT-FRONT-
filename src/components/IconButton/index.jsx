
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'

export default function IconButton({ onPress, icon, size, ...rest }) {
    
  return (
    <TouchableOpacity onPress={onPress}>
      {/* <FontAwesomeIcon {...rest} icon={icon} size={size} /> */}
    </TouchableOpacity>
  )
}
