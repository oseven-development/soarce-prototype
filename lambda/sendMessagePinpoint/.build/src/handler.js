'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var AWS = require('aws-sdk');
var aws_region = 'eu-central-1';
var originationNumber = '+12065550199';
var destinationNumber = '+4915773301295';
var message = 'This message was sent through Amazon Pinpoint ' +
    'using the AWS SDK for JavaScript in Node.js. Reply STOP to ' +
    'opt out.';
var applicationId = 'ce796be37f32f178af652b26eexample';
var messageType = 'TRANSACTIONAL';
var registeredKeyword = 'myKeyword';
var senderId = 'Soarce';
var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
AWS.config.credentials = credentials;
AWS.config.update({ region: aws_region });
var pinpoint = new AWS.Pinpoint();
module.exports.sendMessage = (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    var params = {
        ApplicationId: applicationId,
        MessageRequest: {
            Addresses: {
                [destinationNumber]: {
                    ChannelType: 'SMS',
                },
            },
            MessageConfiguration: {
                SMSMessage: {
                    Body: message,
                    Keyword: registeredKeyword,
                    MessageType: messageType,
                    OriginationNumber: originationNumber,
                    SenderId: senderId,
                },
            },
        },
    };
    pinpoint.sendMessages(params, function (err, data) {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log('Message sent! ' + data['MessageResponse']['Result'][destinationNumber]['StatusMessage']);
        }
    });
    callback(null, event);
});
