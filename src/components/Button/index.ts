import Fill from "./sub-components/Fill"
import Main from "./sub-components/Main"
import Outline from "./sub-components/Outline"
import Text from "./sub-components/Text"

const Button = Object.assign(Main, { Text, Outline, Fill })

export default Button
