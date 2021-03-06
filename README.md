<h1 align="center">
    <img width="300" src="http://librebank.com/img/logo-black.svg" alt="LibreBank Logo">
    <br>
    <br>
</h1>

# LibreBank Oracle Masternode

Masternode of LibreBank.

Written on NodeJS with love :)


## Requirements
1. NodeJS v. 7.4+ (https://nodejs.org/en/) 
2. Build essentials package to your OS (needed for building some deps)
For Debian-based linux you need intall `build-essential` package by apt.
For Windows: latest `Visual Studio C++ compiler`.
3. MongoDB 3.0.12+

## Getting Started
Simple clone this repo and install deps using npm
```
git clone --recursive https://github.com/LibreCash/oracle-masternode
cd oracle-masternode
npm install
```
Run
```
node cli/masternode-cli.js [-- config <config>] [--section <section>]
```
Options
```
  --config - config (default: ../config/default.json)
  --section - config section (default: masternode0)
```
## Contiributing
If you want to help us get better - create issue and PR.

## License
Code released under the MIT licence.
