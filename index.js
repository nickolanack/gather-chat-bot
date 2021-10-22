const credentials = require("./credentials.json");
const config = require("./config.json");

const GatherClient = require("gather-node-client");
const client = new GatherClient(credentials, config, () => {

	client.subscribe(config.messageChannel, config.messageEvent,(data)=>{

		console.log(data);

		if(data.text.indexOf('\\')!==0){
			return;
		}


		setTimeout(()=>{
			client.postChat(data.discussion, "bot response: "+data.text, {
				"bot":true
			});
		}, 500);
	})

});
