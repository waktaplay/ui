###########################################################
# Setting up GitHub Package registry with specific scopes #
#                 Supports npm, yarn, pnpm                #
#                                                         #
#         Copyright 2024 Minsu Kim (@kms0219kms).         #
###########################################################

# Prompt the user for their GitHub Personal Access Token
$GITHUB_TOKEN = Read-Host "Enter your GitHub Personal Access Token"

function Configure-Npm {
    if (Get-Command "npm" -ErrorAction SilentlyContinue) {
        Add-Content -Path .npmrc -Value "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN"
        Add-Content -Path .npmrc -Value "@waktaplay:registry=https://npm.pkg.github.com"
        Add-Content -Path .gitignore -Value ".npmrc"
        Read-Host -Prompt ""
    } else {
        Write-Output "Could not check if node.js is installed, so registry setup failed."
        Write-Output "Please check again whether node.js is installed properly."
        Read-Host -Prompt ""
        exit 1
    }
}

function Configure-YarnBerry {
    Configure-Npm

    $yarnrcContent = @"
npmscopes:
  waktaplay:
    npmRegistryServer: "https://npm.pkg.github.com"
    npmAuthToken: "$GITHUB_TOKEN"
"@
    Set-Content -Path .yarnrc.yml -Value $yarnrcContent
}

# Detect if the project uses yarn
$yarnLockExists = Test-Path "yarn.lock"
$yarnrcYmlExists = Test-Path ".yarnrc.yml"

if ($yarnLockExists -or $yarnrcYmlExists) {
    if (Get-Command "yarn" -ErrorAction SilentlyContinue) {
        # Check the Yarn version
        $YARN_VERSION = & yarn --version | ForEach-Object { $_.Split('.')[0] }

        if ($YARN_VERSION -eq "1") {
            # Classic Yarn uses the same way as npm
            Configure-Npm
        }
        else {
            # Yarn Berry
            Configure-YarnBerry
        }

        Write-Output "Registry setup is complete."
        Read-Host -Prompt ""
    } else {
        Write-Output "Could not check if Yarn is installed, so registry setup failed."
        Write-Output "If your project does not use Yarn, please delete yarn.lock and .yarnrc.yml."
        Read-Host -Prompt ""
        exit 1
    }
} else {
    Configure-Npm
    Write-Output "Registry setup is complete."
    Read-Host -Prompt ""
}
