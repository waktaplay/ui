import Fill from "./sub-components/Fill"
import Main from "./sub-components/Main"
import More from "./sub-components/More"
import Outline from "./sub-components/Outline"
import Text from "./sub-components/Text"

const Button = Object.assign(Main, { Text, Outline, Fill, More })

export default Button
