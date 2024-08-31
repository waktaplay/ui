#!/bin/bash

###########################################################
# Setting up GitHub Package registry with specific scopes #
#                 Supports npm, yarn, pnpm                #
#                                                         #
#         Copyright 2024 Minsu Kim (@kms0219kms).         #
###########################################################


# Get the user to enter their GitHub Personal Access Token
read -p "Enter your GitHub Personal Access Token: " GITHUB_TOKEN
echo

if [[ -z "$GITHUB_TOKEN" ]]; then
    echo "Please provide a valid GitHub Personal Access Token. It should start with ghp_."
    read -s -n 1
    exit 1
fi

configure_npm() {
    if command -v npm >/dev/null 2>&1; then
        echo "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN" >> .npmrc
        echo "@waktaplay:registry=https://npm.pkg.github.com" >> .npmrc
        # echo ".npmrc" >> .gitignore
    else
        echo "Could not check if node.js is installed, so registry setup failed."
        echo "Please check again whether node.js is installed properly."
        read -s -n 1
        exit 1
    fi
}

configure_yarnberry() {
    configure_npm

    cat <<EOL > .yarnrc.yml
npmscopes:
  waktaplay:
    npmRegistryServer: "https://npm.pkg.github.com"
    npmAuthToken: "$GITHUB_TOKEN"
EOL
}

# Detects the project uses yarn
if [ -f "yarn.lock" ] || [ -f ".yarnrc.yml" ]; then
    if command -v yarn >/dev/null 2>&1; then
        # Check the yarn is berry or classic
        YARN_VERSION=$(yarn --version | cut -d '.' -f1)
        
        if [ "$YARN_VERSION" -eq 1 ]; then
            # Classic uses same way as npm
            configure_npm
        else
            # Berry
            configure_yarnberry
        fi

        echo "Registry setup is complete."
        read -s -n 1
    else
        echo "Could not check if yarn is installed, so registry setup failed."
        echo "If your project does not use yarn, please delete yarn.lock and .yarnrc.yml."
        read -s -n 1
        exit 1
    fi

# Detects the project uses pnpm or npm
else
    configure_npm
fi
