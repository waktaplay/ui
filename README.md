# SpaceWak Design System

This repository provides a list of components commonly used by services operated by the [Team SpaceWak](https://spacewak.net).

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

## Installation
If you are installing this library first time, please run the following command first.

You may need to issue the GitHub Personal Access Token (legacy) to run this script.

```bash
# Windows + Powershell
Invoke-WebRequest -Uri 'https://github.com/waktaplay/ui/raw/main/scripts/registry-setup.ps1' -OutFile '.\registry-setup.ps1'
Start-Process '.\registry-setup.ps1' -Wait
Remove-Item '.\registry-setup.ps1'

# macOS or Unix/Linux
curl 'https://github.com/waktaplay/ui/raw/main/scripts/registry-setup.sh' | bash
```

To install the SpaceWak Design System, you can use the following command:

```bash
# Npm
npm install @waktaplay/ui

# Yarn
yarn add @waktaplay/ui

# pnpm
pnpm add @waktaplay/ui
```

We highly recommend using pnpm, as yarn has some issues while installing libraries from our registry.

## Usage

To use the SpaceWak Design System, you can import the components you need from the package:

```tsx
import { Button } from "@waktaplay/ui"

function App() {
  return <Button>Click me!</Button>
}
```

## License

This project is not licensed as public domain. Please contact the [Team SpaceWak](mailto:contact@spacewak.net) for more information.

Copyright © 2024 [Team SpaceWak](https://spacewak.net). All rights reserved.
