# ROBLOX Proxy API service

## About

ROBLOX web APIs are not accessible via HttpService within ROBLOX, so this site exists as a way to access some of those APIs via proxy. A list of all ROBLOX web APIs can be found [here](http://wiki.roblox.com/index.php?title=Web_APIs). Currently though, this only supports one [API method](http://wiki.roblox.com/index.php?title=Web_APIs#Get_AssetIds_being_worn_by_a_user), with plans for great expansion! If you have a particular API method you would like me to support, shoot me a PM [on ROBLOX](https://www.roblox.com/users/7020663/profile).

## Setup

Make sure you have npm and node installed, then download the project. Cd into it and run `npm install` then `npm start`. Open up your browser to `localhost:3131` and you should see a similar readme to this one.

## Use

This site is currently hosted on my site, [here](http://rbxproxy.blakemealey.ca), where you can use it as long as you don't expect it to scale.

In order to use the API, make a GET request to:

`http://rbxproxy.blakemealey.ca/api/{ROBLOX_API_REQUEST}`

Where `ROBLOX_API_REQUEST` is the remaining part of the ROBLOX API request after `http://www.roblox.com`.

I.e. for `http://www.roblox.com/Asset/AvatarAccoutrements.ashx?userId=261`, the request would be `http://rbxproxy.blakemealey.ca/api/Asset/AvatarAccoutrements.ashx?userId=261`