import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Icon = ({icon, size = 's', color = "white", className}) => {
    return  <FontAwesomeIcon
     icon={icon}
     size={size}
     color={color}
     className={className}
    />
}