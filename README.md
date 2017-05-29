# proactive-message-api

Api based on Nodejs to let users POST an address+message to update a specific conversation of Microsoft Bot Framework. 

How To

1. Add your AppId and AppPassword in ```index.js``` file on below lines

```
var connector = new builder.ChatConnector({
  appId: '{YOURAPPID}',
  appPassword: '{YOURAPPPWD}'
});
```
2. Run ```npm install``` to install all node modules.
3. Run ```node index.js``` to host the Api.

4. Send a POST request using Postman to the endpoint ```/api/notify```. The body should contain a JSON object with format as below

```
{"address":{"id":"APx0uDmLydT","channelId":"webchat","user":{"id":"acc9a91577564817bd9c8085827685cf"},"conversation":{"id":"acc9a91577564817bd9c8085827685cf"},"bot":{"id":"tchatbot@lEJMk-o5juY","name":"YourTrainBot"},"serviceUrl":"https://webchat.botframework.com/"},
"message":"I love MS"}
```

Note: The body simply contains two properties (address and message). The address of the conversation can be obtained by ```session.address``` and message is simply the text you wish to send to the conversation.
