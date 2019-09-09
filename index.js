/* This code has been generated from your interaction model by skillinator.io

/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the contents as the code for a new Lambda function, using the alexa-skill-kit-sdk-factskill template.
// This code includes helper functions for compatibility with versions of the SDK prior to 1.0.9, which includes the dialog directives.



 // 1. Text strings =====================================================================================================
 //    Modify these strings and messages to change the behavior of your Lambda function

let speechOutput_hist;
let speechOutput;
let reprompt;
let welcomeOutput = "Hey, Welcome to Encyclopedia Journey .  It’s always the journey that matters than the destination . Let’s explore our new adventure . Are you ready?";
let welcomeReprompt = "you would like to know the facts of science?";
// 2. Skill Code =======================================================================================================
"use strict";
const Alexa = require('alexa-sdk');
const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
speechOutput = '';
const handlers = {
	'LaunchRequest': function () {
		this.emit(':ask', welcomeOutput, welcomeReprompt);
	},
	'AMAZON.HelpIntent': function () {
		speechOutput = 'How can I help you?';
		reprompt = '';
		this.emit(':ask', speechOutput, reprompt);
	},
	 'AMAZON.YesIntent': function () {
		speechOutput = 'I am Glad you said yes!!! Would you like to start your journey with Ancient history?  Historical places? or  Literature?';
		this.emit(':ask', speechOutput);
	},
	 'AMAZON.NoIntent': function () {
		speechOutput = 'Cool !! Have a nice day Buddy !!!!';
		this.emit(':tell', speechOutput);
	},
   'AMAZON.CancelIntent': function () {
		speechOutput = 'okay,Cancelled the service';
		this.emit(':tell', speechOutput);
	},
   'AMAZON.StopIntent': function () {
		speechOutput = '';
		this.emit(':tell', speechOutput);
   },
   'SessionEndedRequest': function () {
		speechOutput = '';
		//this.emit(':saveState', true);//uncomment to save attributes to db on session end
		this.emit(':tell', speechOutput);
   },
	'AMAZON.FallbackIntent': function () {
		speechOutput = 'Sorry I could not understand that...';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "Sorry I could not understand that...";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.NavigateHomeIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "This is a place holder response for the intent named AMAZON.NavigateHomeIntent. This intent has no slots. Anything else?";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'InterestingTopics': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience

		let TopicsSlotRaw = this.event.request.intent.slots.Topics.value;
		console.log(TopicsSlotRaw);
		let TopicsSlot = resolveCanonical(this.event.request.intent.slots.Topics);
		console.log(TopicsSlot);
		var topics = {
		    'ancient history': ' Great!! As Martin Luther King, Jr. famously said. “We are not the makers of History. We are made by history." Let’s dig deep into it and see can we create one. Are you interested in Roman Empire? or Greek Dynasty?  ',
		    'historical places': 'A place is only as good as the people in it. History add some values to it. Would you like to explore more about. The Pyramids at Giza? or The Taj Mahal?  ',
		    'literature':'T.S. Eliot once said. "The purpose of Literature is to turn blood to Ink. With that in mind. Do you want to know more about William Shakesphere ? or John Keats? "'}
		
		var topic = TopicsSlot.toLowerCase();
		if(TopicsSlot && topics[topic]){
		    var infonote = topics[topic];
		//Your custom intent handling goes here
		speechOutput = infonote;
		this.emit(":ask", speechOutput, '');
		}
		else{
		    	speechOutput = "The topic you asked for is not supported";
		    	reprompt = "";
		    	this.emit(":ask", speechOutput,reprompt );
		}
    },
    'TopicHistory': function () {
		speechOutput_hist = '';

		//any intent slot variables are listed here for convenience

		let TopicsSlotRawHist = this.event.request.intent.slots.TopicHist.value;
		console.log(TopicsSlotRawHist);
		let TopicsSlotHist = resolveCanonical(this.event.request.intent.slots.TopicHist);
		console.log(TopicsSlotHist);
		var topics_hist = {
		    'roman empire' : ' Its Roman !!!  The Roman Empire was among the most powerful, economic, cultural, political and military forces in the world of its time. At the height of the Roman Empire, a number of key emperors helped to elevate Rome. granting a lasting influence for centuries to come—including such notable names are Augustus. and Marcus . Whom would you like to conquer more about ?  ',
		    'greek' : ' <voice name="Brian"><lang xml:lang="en-US"> Greek Dynasty. As we all know. The history of Greece encompasses the territory of the modern nation state of Greece. as well as that of the Greek people and the areas they inhabited and ruled historically. Among those great rulers, would you like to know more about  King of athens? or Kings of Sparta? </lang></voice> ',
		    'roman' : ' Its Roman !!!  The Roman Empire was among the most powerful, economic, cultural, political and military forces in the world of its time. At the height of the Roman Empire, a number of key emperors helped to elevate Rome. granting a lasting influence for centuries to come—including such notable names are Augustus. and Marcus . Whom would you like to conquer more about ?  ',
		    'greek dynasty': ' <voice name="Brian"><lang xml:lang="en-US"> Greek Dynasty. As we all know. The history of Greece encompasses the territory of the modern nation state of Greece. as well as that of the Greek people and the areas they inhabited and ruled historically. Among those great rulers, would you like to know more about  King of athens? or Kings of Sparta? </lang></voice> ',
		    'marcus':'Marcus Aurelius is one of the most revered emperors in history, known for his intellectual prowess; his personal writings on stoicism are considered some of the most comprehensive of all time. With that historical information. Would you like to continue your journey with Historical places? or Literature?  ',
		    'augustus':'Augustus was the great-nephew of Julius Caesar and reigned after Caesar’s death. He was highly regarded by the Senate, which eventually gave him the name of Augustus. With that historical information. Would you like to continue your journey with Historical places? or Literature ?'
        }
		var topic_hist = TopicsSlotHist.toLowerCase();
		if(TopicsSlotHist && topics_hist[topic_hist]){
		    var infonote_hist = topics_hist[topic_hist];
		//Your custom intent handling goes here
		speechOutput_hist = infonote_hist;
		this.emit(":ask", speechOutput_hist, '');
		}
		else{
		    	speechOutput_hist = "The topic you asked for is not supported.";
		    	reprompt = "";
		    	this.emit(":ask", speechOutput_hist,reprompt );
		}
    },
	'Unhandled': function () {
        speechOutput_hist = "The skill didn't quite understand what you wanted.  Do you want to try something else?";
        this.emit(':ask', speechOutput_hist, '');
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
	//alexa.dynamoDBTableName = 'DYNAMODB_TABLE_NAME'; //uncomment this line to save attributes to DB
    alexa.execute();
};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function resolveCanonical(slot){
	//this function looks at the entity resolution part of request and returns the slot value if a synonyms is provided
	let canonical;
    try{
		canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
	}catch(err){
	    console.log(err.message);
	    canonical = slot.value;
	};
	return canonical;
};

function delegateSlotCollection(){
  console.log("in delegateSlotCollection");
  console.log("current dialogState: "+this.event.request.dialogState);
    if (this.event.request.dialogState === "STARTED") {
      console.log("in Beginning");
	  let updatedIntent= null;
	  // updatedIntent=this.event.request.intent;
      //optionally pre-fill slots: update the intent object with slot values for which
      //you have defaults, then return Dialog.Delegate with this updated intent
      // in the updatedIntent property
      //this.emit(":delegate", updatedIntent); //uncomment this is using ASK SDK 1.0.9 or newer
	  
	  //this code is necessary if using ASK SDK versions prior to 1.0.9 
	  if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
			shouldEndSession: false
		});
		this.emit(':responseReady', updatedIntent);
		
    } else if (this.event.request.dialogState !== "COMPLETED") {
      console.log("in not completed");
      // return a Dialog.Delegate directive with no updatedIntent property.
      //this.emit(":delegate"); //uncomment this is using ASK SDK 1.0.9 or newer
	  
	  //this code necessary is using ASK SDK versions prior to 1.0.9
		if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', null, null),
			shouldEndSession: false
		});
		this.emit(':responseReady');
		
    } else {
      console.log("in completed");
      console.log("returning: "+ JSON.stringify(this.event.request.intent));
      // Dialog is now complete and all required slots should be filled,
      // so call your normal intent handler.
      return this.event.request.intent;
    }
}


function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    let i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}
function isSlotValid(request, slotName){
        let slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        let slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}

//These functions are here to allow dialog directives to work with SDK versions prior to 1.0.9
//will be removed once Lambda templates are updated with the latest SDK

function createSpeechObject(optionsParam) {
    if (optionsParam && optionsParam.type === 'SSML') {
        return {
            type: optionsParam.type,
            ssml: optionsParam['speech']
        };
    } else {
        return {
            type: optionsParam.type || 'PlainText',
            text: optionsParam['speech'] || optionsParam
        };
    }
}

function buildSpeechletResponse(options) {
    let alexaResponse = {
        shouldEndSession: options.shouldEndSession
    };

    if (options.output) {
        alexaResponse.outputSpeech = createSpeechObject(options.output);
    }

    if (options.reprompt) {
        alexaResponse.reprompt = {
            outputSpeech: createSpeechObject(options.reprompt)
        };
    }

    if (options.directives) {
        alexaResponse.directives = options.directives;
    }

    if (options.cardTitle && options.cardContent) {
        alexaResponse.card = {
            type: 'Simple',
            title: options.cardTitle,
            content: options.cardContent
        };

        if(options.cardImage && (options.cardImage.smallImageUrl || options.cardImage.largeImageUrl)) {
            alexaResponse.card.type = 'Standard';
            alexaResponse.card['image'] = {};

            delete alexaResponse.card.content;
            alexaResponse.card.text = options.cardContent;

            if(options.cardImage.smallImageUrl) {
                alexaResponse.card.image['smallImageUrl'] = options.cardImage.smallImageUrl;
            }

            if(options.cardImage.largeImageUrl) {
                alexaResponse.card.image['largeImageUrl'] = options.cardImage.largeImageUrl;
            }
        }
    } else if (options.cardType === 'LinkAccount') {
        alexaResponse.card = {
            type: 'LinkAccount'
        };
    } else if (options.cardType === 'AskForPermissionsConsent') {
        alexaResponse.card = {
            type: 'AskForPermissionsConsent',
            permissions: options.permissions
        };
    }

    let returnResult = {
        version: '1.0',
        response: alexaResponse
    };

    if (options.sessionAttributes) {
        returnResult.sessionAttributes = options.sessionAttributes;
    }
    return returnResult;
}

function getDialogDirectives(dialogType, updatedIntent, slotName) {
    let directive = {
        type: dialogType
    };

    if (dialogType === 'Dialog.ElicitSlot') {
        directive.slotToElicit = slotName;
    } else if (dialogType === 'Dialog.ConfirmSlot') {
        directive.slotToConfirm = slotName;
    }

    if (updatedIntent) {
        directive.updatedIntent = updatedIntent;
    }
    return [directive];
}