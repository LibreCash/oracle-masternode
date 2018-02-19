# LibreBank Oracle Masternode

Masternode of LibreBank.

Written on NodeJS with love :)


## Requirements
1. NodeJS v. 7.4+ (https://nodejs.org/en/) 
2. Build essentials package to your OS (needed for building some deps)
For Debian-based linux you need intall `build-essential` package by apt.
For Windows: latest `Visual Studio C++ compiler`.

## Getting Started
Simple clone this repo and install deps using npm
```
git clone --recursive https://github.com/LibreCash/oracle-masternode
cd oracle-masternode
npm install
```
Run
```
node cli/masternode-cli.js
```
Options
```
<config>] [--section <section>]
  --config - config (default: ../config/default.json)
  --section - config section (default: masternode0)
```
## Contiributing
If you want to help us get better - create issue and PR.

## License
Code released under the MIT licence.
