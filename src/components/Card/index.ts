import Link from "./sub-components/Link"
import Main from "./sub-components/Main"

import {
  CardHeader as Header,
  CardTitle as Title,
  CardDate as Date,
  CardDivider as Divider,
  CardBody as Body,
} from "./sub-components/Sub"

const Card = Object.assign(Main, { Link, Header, Title, Date, Divider, Body })

export default Card
