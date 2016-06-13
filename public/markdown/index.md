# ROBLOX Proxy API service

## About

ROBLOX web APIs are not accessible via HttpService within ROBLOX, so this site exists as a way to access some of those APIs via proxy. A list of all ROBLOX web APIs can be found [here](http://wiki.roblox.com/index.php?title=Web_APIs). Currently though, this only supports one [API method](http://wiki.roblox.com/index.php?title=Web_APIs#Get_AssetIds_being_worn_by_a_user), with plans for great expansion! If you have a particular API method you would like me to support, shoot me a PM [on ROBLOX](https://www.roblox.com/users/7020663/profile), although if this starts to get any traffic I'll probably have to add an API key parameter or something because it is really not intended for a lot of traffic!

## Use

In order to use the API, make a GET request to:

`http://rbxproxy.blakemealey.ca/api/{ROBLOX_API_REQUEST}`

Where `ROBLOX_API_REQUEST` is the remaining part of the ROBLOX API request after `http://www.roblox.com`.

I.e. for `http://www.roblox.com/Asset/AvatarAccoutrements.ashx?userId=261`, the request would be `http://rbxproxy.blakemealey.ca/api/Asset/AvatarAccoutrements.ashx?userId=261`