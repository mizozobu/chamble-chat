/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.chat = (function() {

    /**
     * Namespace chat.
     * @exports chat
     * @namespace
     */
    var chat = {};

    chat.ChatController = (function() {

        /**
         * Constructs a new ChatController service.
         * @memberof chat
         * @classdesc Represents a ChatController
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ChatController(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (ChatController.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ChatController;

        /**
         * Creates new ChatController service using the specified rpc implementation.
         * @function create
         * @memberof chat.ChatController
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {ChatController} RPC service. Useful where requests and/or responses are streamed.
         */
        ChatController.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link chat.ChatController#connect}.
         * @memberof chat.ChatController
         * @typedef ConnectCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {chat.ResConnect} [response] ResConnect
         */

        /**
         * Calls Connect.
         * @function connect
         * @memberof chat.ChatController
         * @instance
         * @param {chat.IReqConnect} request ReqConnect message or plain object
         * @param {chat.ChatController.ConnectCallback} callback Node-style callback called with the error, if any, and ResConnect
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ChatController.prototype.connect = function connect(request, callback) {
            return this.rpcCall(connect, $root.chat.ReqConnect, $root.chat.ResConnect, request, callback);
        }, "name", { value: "Connect" });

        /**
         * Calls Connect.
         * @function connect
         * @memberof chat.ChatController
         * @instance
         * @param {chat.IReqConnect} request ReqConnect message or plain object
         * @returns {Promise<chat.ResConnect>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link chat.ChatController#disconnect}.
         * @memberof chat.ChatController
         * @typedef DisconnectCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {chat.ResDisconnect} [response] ResDisconnect
         */

        /**
         * Calls Disconnect.
         * @function disconnect
         * @memberof chat.ChatController
         * @instance
         * @param {chat.IReqDisconnect} request ReqDisconnect message or plain object
         * @param {chat.ChatController.DisconnectCallback} callback Node-style callback called with the error, if any, and ResDisconnect
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ChatController.prototype.disconnect = function disconnect(request, callback) {
            return this.rpcCall(disconnect, $root.chat.ReqDisconnect, $root.chat.ResDisconnect, request, callback);
        }, "name", { value: "Disconnect" });

        /**
         * Calls Disconnect.
         * @function disconnect
         * @memberof chat.ChatController
         * @instance
         * @param {chat.IReqDisconnect} request ReqDisconnect message or plain object
         * @returns {Promise<chat.ResDisconnect>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link chat.ChatController#sendChatMessage}.
         * @memberof chat.ChatController
         * @typedef SendChatMessageCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {chat.ResSendChatMessage} [response] ResSendChatMessage
         */

        /**
         * Calls SendChatMessage.
         * @function sendChatMessage
         * @memberof chat.ChatController
         * @instance
         * @param {chat.IReqSendChatMessage} request ReqSendChatMessage message or plain object
         * @param {chat.ChatController.SendChatMessageCallback} callback Node-style callback called with the error, if any, and ResSendChatMessage
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ChatController.prototype.sendChatMessage = function sendChatMessage(request, callback) {
            return this.rpcCall(sendChatMessage, $root.chat.ReqSendChatMessage, $root.chat.ResSendChatMessage, request, callback);
        }, "name", { value: "SendChatMessage" });

        /**
         * Calls SendChatMessage.
         * @function sendChatMessage
         * @memberof chat.ChatController
         * @instance
         * @param {chat.IReqSendChatMessage} request ReqSendChatMessage message or plain object
         * @returns {Promise<chat.ResSendChatMessage>} Promise
         * @variation 2
         */

        return ChatController;
    })();

    chat.ReqConnect = (function() {

        /**
         * Properties of a ReqConnect.
         * @memberof chat
         * @interface IReqConnect
         * @property {number|null} [userId] ReqConnect userId
         */

        /**
         * Constructs a new ReqConnect.
         * @memberof chat
         * @classdesc Represents a ReqConnect.
         * @implements IReqConnect
         * @constructor
         * @param {chat.IReqConnect=} [properties] Properties to set
         */
        function ReqConnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqConnect userId.
         * @member {number} userId
         * @memberof chat.ReqConnect
         * @instance
         */
        ReqConnect.prototype.userId = 0;

        /**
         * Creates a new ReqConnect instance using the specified properties.
         * @function create
         * @memberof chat.ReqConnect
         * @static
         * @param {chat.IReqConnect=} [properties] Properties to set
         * @returns {chat.ReqConnect} ReqConnect instance
         */
        ReqConnect.create = function create(properties) {
            return new ReqConnect(properties);
        };

        /**
         * Encodes the specified ReqConnect message. Does not implicitly {@link chat.ReqConnect.verify|verify} messages.
         * @function encode
         * @memberof chat.ReqConnect
         * @static
         * @param {chat.IReqConnect} message ReqConnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqConnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified ReqConnect message, length delimited. Does not implicitly {@link chat.ReqConnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.ReqConnect
         * @static
         * @param {chat.IReqConnect} message ReqConnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqConnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqConnect message from the specified reader or buffer.
         * @function decode
         * @memberof chat.ReqConnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.ReqConnect} ReqConnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqConnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.ReqConnect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqConnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.ReqConnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.ReqConnect} ReqConnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqConnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqConnect message.
         * @function verify
         * @memberof chat.ReqConnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqConnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a ReqConnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.ReqConnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.ReqConnect} ReqConnect
         */
        ReqConnect.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.ReqConnect)
                return object;
            var message = new $root.chat.ReqConnect();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqConnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.ReqConnect
         * @static
         * @param {chat.ReqConnect} message ReqConnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqConnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this ReqConnect to JSON.
         * @function toJSON
         * @memberof chat.ReqConnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqConnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqConnect;
    })();

    chat.ResConnect = (function() {

        /**
         * Properties of a ResConnect.
         * @memberof chat
         * @interface IResConnect
         * @property {number|null} [id] ResConnect id
         * @property {number|null} [chatRoomId] ResConnect chatRoomId
         * @property {number|null} [userId] ResConnect userId
         * @property {string|null} [text] ResConnect text
         */

        /**
         * Constructs a new ResConnect.
         * @memberof chat
         * @classdesc Represents a ResConnect.
         * @implements IResConnect
         * @constructor
         * @param {chat.IResConnect=} [properties] Properties to set
         */
        function ResConnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResConnect id.
         * @member {number} id
         * @memberof chat.ResConnect
         * @instance
         */
        ResConnect.prototype.id = 0;

        /**
         * ResConnect chatRoomId.
         * @member {number} chatRoomId
         * @memberof chat.ResConnect
         * @instance
         */
        ResConnect.prototype.chatRoomId = 0;

        /**
         * ResConnect userId.
         * @member {number} userId
         * @memberof chat.ResConnect
         * @instance
         */
        ResConnect.prototype.userId = 0;

        /**
         * ResConnect text.
         * @member {string} text
         * @memberof chat.ResConnect
         * @instance
         */
        ResConnect.prototype.text = "";

        /**
         * Creates a new ResConnect instance using the specified properties.
         * @function create
         * @memberof chat.ResConnect
         * @static
         * @param {chat.IResConnect=} [properties] Properties to set
         * @returns {chat.ResConnect} ResConnect instance
         */
        ResConnect.create = function create(properties) {
            return new ResConnect(properties);
        };

        /**
         * Encodes the specified ResConnect message. Does not implicitly {@link chat.ResConnect.verify|verify} messages.
         * @function encode
         * @memberof chat.ResConnect
         * @static
         * @param {chat.IResConnect} message ResConnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResConnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.chatRoomId != null && Object.hasOwnProperty.call(message, "chatRoomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chatRoomId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.userId);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified ResConnect message, length delimited. Does not implicitly {@link chat.ResConnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.ResConnect
         * @static
         * @param {chat.IResConnect} message ResConnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResConnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResConnect message from the specified reader or buffer.
         * @function decode
         * @memberof chat.ResConnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.ResConnect} ResConnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResConnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.ResConnect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.chatRoomId = reader.int32();
                    break;
                case 3:
                    message.userId = reader.int32();
                    break;
                case 4:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResConnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.ResConnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.ResConnect} ResConnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResConnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResConnect message.
         * @function verify
         * @memberof chat.ResConnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResConnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.chatRoomId != null && message.hasOwnProperty("chatRoomId"))
                if (!$util.isInteger(message.chatRoomId))
                    return "chatRoomId: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates a ResConnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.ResConnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.ResConnect} ResConnect
         */
        ResConnect.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.ResConnect)
                return object;
            var message = new $root.chat.ResConnect();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.chatRoomId != null)
                message.chatRoomId = object.chatRoomId | 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a ResConnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.ResConnect
         * @static
         * @param {chat.ResConnect} message ResConnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResConnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.chatRoomId = 0;
                object.userId = 0;
                object.text = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.chatRoomId != null && message.hasOwnProperty("chatRoomId"))
                object.chatRoomId = message.chatRoomId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this ResConnect to JSON.
         * @function toJSON
         * @memberof chat.ResConnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResConnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResConnect;
    })();

    chat.ReqDisconnect = (function() {

        /**
         * Properties of a ReqDisconnect.
         * @memberof chat
         * @interface IReqDisconnect
         * @property {number|null} [userId] ReqDisconnect userId
         */

        /**
         * Constructs a new ReqDisconnect.
         * @memberof chat
         * @classdesc Represents a ReqDisconnect.
         * @implements IReqDisconnect
         * @constructor
         * @param {chat.IReqDisconnect=} [properties] Properties to set
         */
        function ReqDisconnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqDisconnect userId.
         * @member {number} userId
         * @memberof chat.ReqDisconnect
         * @instance
         */
        ReqDisconnect.prototype.userId = 0;

        /**
         * Creates a new ReqDisconnect instance using the specified properties.
         * @function create
         * @memberof chat.ReqDisconnect
         * @static
         * @param {chat.IReqDisconnect=} [properties] Properties to set
         * @returns {chat.ReqDisconnect} ReqDisconnect instance
         */
        ReqDisconnect.create = function create(properties) {
            return new ReqDisconnect(properties);
        };

        /**
         * Encodes the specified ReqDisconnect message. Does not implicitly {@link chat.ReqDisconnect.verify|verify} messages.
         * @function encode
         * @memberof chat.ReqDisconnect
         * @static
         * @param {chat.IReqDisconnect} message ReqDisconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqDisconnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified ReqDisconnect message, length delimited. Does not implicitly {@link chat.ReqDisconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.ReqDisconnect
         * @static
         * @param {chat.IReqDisconnect} message ReqDisconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqDisconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqDisconnect message from the specified reader or buffer.
         * @function decode
         * @memberof chat.ReqDisconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.ReqDisconnect} ReqDisconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqDisconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.ReqDisconnect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqDisconnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.ReqDisconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.ReqDisconnect} ReqDisconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqDisconnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqDisconnect message.
         * @function verify
         * @memberof chat.ReqDisconnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqDisconnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a ReqDisconnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.ReqDisconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.ReqDisconnect} ReqDisconnect
         */
        ReqDisconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.ReqDisconnect)
                return object;
            var message = new $root.chat.ReqDisconnect();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqDisconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.ReqDisconnect
         * @static
         * @param {chat.ReqDisconnect} message ReqDisconnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqDisconnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this ReqDisconnect to JSON.
         * @function toJSON
         * @memberof chat.ReqDisconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqDisconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqDisconnect;
    })();

    chat.ResDisconnect = (function() {

        /**
         * Properties of a ResDisconnect.
         * @memberof chat
         * @interface IResDisconnect
         * @property {boolean|null} [ok] ResDisconnect ok
         */

        /**
         * Constructs a new ResDisconnect.
         * @memberof chat
         * @classdesc Represents a ResDisconnect.
         * @implements IResDisconnect
         * @constructor
         * @param {chat.IResDisconnect=} [properties] Properties to set
         */
        function ResDisconnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResDisconnect ok.
         * @member {boolean} ok
         * @memberof chat.ResDisconnect
         * @instance
         */
        ResDisconnect.prototype.ok = false;

        /**
         * Creates a new ResDisconnect instance using the specified properties.
         * @function create
         * @memberof chat.ResDisconnect
         * @static
         * @param {chat.IResDisconnect=} [properties] Properties to set
         * @returns {chat.ResDisconnect} ResDisconnect instance
         */
        ResDisconnect.create = function create(properties) {
            return new ResDisconnect(properties);
        };

        /**
         * Encodes the specified ResDisconnect message. Does not implicitly {@link chat.ResDisconnect.verify|verify} messages.
         * @function encode
         * @memberof chat.ResDisconnect
         * @static
         * @param {chat.IResDisconnect} message ResDisconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResDisconnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified ResDisconnect message, length delimited. Does not implicitly {@link chat.ResDisconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.ResDisconnect
         * @static
         * @param {chat.IResDisconnect} message ResDisconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResDisconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResDisconnect message from the specified reader or buffer.
         * @function decode
         * @memberof chat.ResDisconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.ResDisconnect} ResDisconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResDisconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.ResDisconnect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResDisconnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.ResDisconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.ResDisconnect} ResDisconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResDisconnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResDisconnect message.
         * @function verify
         * @memberof chat.ResDisconnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResDisconnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a ResDisconnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.ResDisconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.ResDisconnect} ResDisconnect
         */
        ResDisconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.ResDisconnect)
                return object;
            var message = new $root.chat.ResDisconnect();
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a ResDisconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.ResDisconnect
         * @static
         * @param {chat.ResDisconnect} message ResDisconnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResDisconnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ok = false;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this ResDisconnect to JSON.
         * @function toJSON
         * @memberof chat.ResDisconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResDisconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResDisconnect;
    })();

    chat.ReqSendChatMessage = (function() {

        /**
         * Properties of a ReqSendChatMessage.
         * @memberof chat
         * @interface IReqSendChatMessage
         * @property {number|null} [chatRoomId] ReqSendChatMessage chatRoomId
         * @property {number|null} [userId] ReqSendChatMessage userId
         * @property {string|null} [text] ReqSendChatMessage text
         */

        /**
         * Constructs a new ReqSendChatMessage.
         * @memberof chat
         * @classdesc Represents a ReqSendChatMessage.
         * @implements IReqSendChatMessage
         * @constructor
         * @param {chat.IReqSendChatMessage=} [properties] Properties to set
         */
        function ReqSendChatMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqSendChatMessage chatRoomId.
         * @member {number} chatRoomId
         * @memberof chat.ReqSendChatMessage
         * @instance
         */
        ReqSendChatMessage.prototype.chatRoomId = 0;

        /**
         * ReqSendChatMessage userId.
         * @member {number} userId
         * @memberof chat.ReqSendChatMessage
         * @instance
         */
        ReqSendChatMessage.prototype.userId = 0;

        /**
         * ReqSendChatMessage text.
         * @member {string} text
         * @memberof chat.ReqSendChatMessage
         * @instance
         */
        ReqSendChatMessage.prototype.text = "";

        /**
         * Creates a new ReqSendChatMessage instance using the specified properties.
         * @function create
         * @memberof chat.ReqSendChatMessage
         * @static
         * @param {chat.IReqSendChatMessage=} [properties] Properties to set
         * @returns {chat.ReqSendChatMessage} ReqSendChatMessage instance
         */
        ReqSendChatMessage.create = function create(properties) {
            return new ReqSendChatMessage(properties);
        };

        /**
         * Encodes the specified ReqSendChatMessage message. Does not implicitly {@link chat.ReqSendChatMessage.verify|verify} messages.
         * @function encode
         * @memberof chat.ReqSendChatMessage
         * @static
         * @param {chat.IReqSendChatMessage} message ReqSendChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSendChatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chatRoomId != null && Object.hasOwnProperty.call(message, "chatRoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chatRoomId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userId);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified ReqSendChatMessage message, length delimited. Does not implicitly {@link chat.ReqSendChatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.ReqSendChatMessage
         * @static
         * @param {chat.IReqSendChatMessage} message ReqSendChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSendChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqSendChatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof chat.ReqSendChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.ReqSendChatMessage} ReqSendChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSendChatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.ReqSendChatMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chatRoomId = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int32();
                    break;
                case 3:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqSendChatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.ReqSendChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.ReqSendChatMessage} ReqSendChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSendChatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqSendChatMessage message.
         * @function verify
         * @memberof chat.ReqSendChatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqSendChatMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chatRoomId != null && message.hasOwnProperty("chatRoomId"))
                if (!$util.isInteger(message.chatRoomId))
                    return "chatRoomId: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates a ReqSendChatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.ReqSendChatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.ReqSendChatMessage} ReqSendChatMessage
         */
        ReqSendChatMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.ReqSendChatMessage)
                return object;
            var message = new $root.chat.ReqSendChatMessage();
            if (object.chatRoomId != null)
                message.chatRoomId = object.chatRoomId | 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a ReqSendChatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.ReqSendChatMessage
         * @static
         * @param {chat.ReqSendChatMessage} message ReqSendChatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqSendChatMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chatRoomId = 0;
                object.userId = 0;
                object.text = "";
            }
            if (message.chatRoomId != null && message.hasOwnProperty("chatRoomId"))
                object.chatRoomId = message.chatRoomId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this ReqSendChatMessage to JSON.
         * @function toJSON
         * @memberof chat.ReqSendChatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqSendChatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqSendChatMessage;
    })();

    chat.ResSendChatMessage = (function() {

        /**
         * Properties of a ResSendChatMessage.
         * @memberof chat
         * @interface IResSendChatMessage
         * @property {boolean|null} [ok] ResSendChatMessage ok
         */

        /**
         * Constructs a new ResSendChatMessage.
         * @memberof chat
         * @classdesc Represents a ResSendChatMessage.
         * @implements IResSendChatMessage
         * @constructor
         * @param {chat.IResSendChatMessage=} [properties] Properties to set
         */
        function ResSendChatMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResSendChatMessage ok.
         * @member {boolean} ok
         * @memberof chat.ResSendChatMessage
         * @instance
         */
        ResSendChatMessage.prototype.ok = false;

        /**
         * Creates a new ResSendChatMessage instance using the specified properties.
         * @function create
         * @memberof chat.ResSendChatMessage
         * @static
         * @param {chat.IResSendChatMessage=} [properties] Properties to set
         * @returns {chat.ResSendChatMessage} ResSendChatMessage instance
         */
        ResSendChatMessage.create = function create(properties) {
            return new ResSendChatMessage(properties);
        };

        /**
         * Encodes the specified ResSendChatMessage message. Does not implicitly {@link chat.ResSendChatMessage.verify|verify} messages.
         * @function encode
         * @memberof chat.ResSendChatMessage
         * @static
         * @param {chat.IResSendChatMessage} message ResSendChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResSendChatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified ResSendChatMessage message, length delimited. Does not implicitly {@link chat.ResSendChatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.ResSendChatMessage
         * @static
         * @param {chat.IResSendChatMessage} message ResSendChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResSendChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResSendChatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof chat.ResSendChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.ResSendChatMessage} ResSendChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResSendChatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.ResSendChatMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResSendChatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.ResSendChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.ResSendChatMessage} ResSendChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResSendChatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResSendChatMessage message.
         * @function verify
         * @memberof chat.ResSendChatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResSendChatMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a ResSendChatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.ResSendChatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.ResSendChatMessage} ResSendChatMessage
         */
        ResSendChatMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.ResSendChatMessage)
                return object;
            var message = new $root.chat.ResSendChatMessage();
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a ResSendChatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.ResSendChatMessage
         * @static
         * @param {chat.ResSendChatMessage} message ResSendChatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResSendChatMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ok = false;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this ResSendChatMessage to JSON.
         * @function toJSON
         * @memberof chat.ResSendChatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResSendChatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResSendChatMessage;
    })();

    return chat;
})();

$root.test = (function() {

    /**
     * Namespace test.
     * @exports test
     * @namespace
     */
    var test = {};

    test.TestController = (function() {

        /**
         * Constructs a new TestController service.
         * @memberof test
         * @classdesc Represents a TestController
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function TestController(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (TestController.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TestController;

        /**
         * Creates new TestController service using the specified rpc implementation.
         * @function create
         * @memberof test.TestController
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {TestController} RPC service. Useful where requests and/or responses are streamed.
         */
        TestController.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link test.TestController#unaryAccumulate}.
         * @memberof test.TestController
         * @typedef UnaryAccumulateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {test.ResAccumulate} [response] ResAccumulate
         */

        /**
         * Calls UnaryAccumulate.
         * @function unaryAccumulate
         * @memberof test.TestController
         * @instance
         * @param {test.IReqAccumulate} request ReqAccumulate message or plain object
         * @param {test.TestController.UnaryAccumulateCallback} callback Node-style callback called with the error, if any, and ResAccumulate
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TestController.prototype.unaryAccumulate = function unaryAccumulate(request, callback) {
            return this.rpcCall(unaryAccumulate, $root.test.ReqAccumulate, $root.test.ResAccumulate, request, callback);
        }, "name", { value: "UnaryAccumulate" });

        /**
         * Calls UnaryAccumulate.
         * @function unaryAccumulate
         * @memberof test.TestController
         * @instance
         * @param {test.IReqAccumulate} request ReqAccumulate message or plain object
         * @returns {Promise<test.ResAccumulate>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link test.TestController#clientStreamAccumulate}.
         * @memberof test.TestController
         * @typedef ClientStreamAccumulateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {test.ResAccumulate} [response] ResAccumulate
         */

        /**
         * Calls ClientStreamAccumulate.
         * @function clientStreamAccumulate
         * @memberof test.TestController
         * @instance
         * @param {test.IReqAccumulate} request ReqAccumulate message or plain object
         * @param {test.TestController.ClientStreamAccumulateCallback} callback Node-style callback called with the error, if any, and ResAccumulate
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TestController.prototype.clientStreamAccumulate = function clientStreamAccumulate(request, callback) {
            return this.rpcCall(clientStreamAccumulate, $root.test.ReqAccumulate, $root.test.ResAccumulate, request, callback);
        }, "name", { value: "ClientStreamAccumulate" });

        /**
         * Calls ClientStreamAccumulate.
         * @function clientStreamAccumulate
         * @memberof test.TestController
         * @instance
         * @param {test.IReqAccumulate} request ReqAccumulate message or plain object
         * @returns {Promise<test.ResAccumulate>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link test.TestController#duplexStreamAccumulate}.
         * @memberof test.TestController
         * @typedef DuplexStreamAccumulateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {test.ResAccumulate} [response] ResAccumulate
         */

        /**
         * Calls DuplexStreamAccumulate.
         * @function duplexStreamAccumulate
         * @memberof test.TestController
         * @instance
         * @param {test.IReqAccumulate} request ReqAccumulate message or plain object
         * @param {test.TestController.DuplexStreamAccumulateCallback} callback Node-style callback called with the error, if any, and ResAccumulate
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TestController.prototype.duplexStreamAccumulate = function duplexStreamAccumulate(request, callback) {
            return this.rpcCall(duplexStreamAccumulate, $root.test.ReqAccumulate, $root.test.ResAccumulate, request, callback);
        }, "name", { value: "DuplexStreamAccumulate" });

        /**
         * Calls DuplexStreamAccumulate.
         * @function duplexStreamAccumulate
         * @memberof test.TestController
         * @instance
         * @param {test.IReqAccumulate} request ReqAccumulate message or plain object
         * @returns {Promise<test.ResAccumulate>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link test.TestController#clientStreamObservableAccumulate}.
         * @memberof test.TestController
         * @typedef ClientStreamObservableAccumulateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {test.ResAccumulate} [response] ResAccumulate
         */

        /**
         * Calls ClientStreamObservableAccumulate.
         * @function clientStreamObservableAccumulate
         * @memberof test.TestController
         * @instance
         * @param {test.IReqAccumulate} request ReqAccumulate message or plain object
         * @param {test.TestController.ClientStreamObservableAccumulateCallback} callback Node-style callback called with the error, if any, and ResAccumulate
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TestController.prototype.clientStreamObservableAccumulate = function clientStreamObservableAccumulate(request, callback) {
            return this.rpcCall(clientStreamObservableAccumulate, $root.test.ReqAccumulate, $root.test.ResAccumulate, request, callback);
        }, "name", { value: "ClientStreamObservableAccumulate" });

        /**
         * Calls ClientStreamObservableAccumulate.
         * @function clientStreamObservableAccumulate
         * @memberof test.TestController
         * @instance
         * @param {test.IReqAccumulate} request ReqAccumulate message or plain object
         * @returns {Promise<test.ResAccumulate>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link test.TestController#serverStreamObservableAccumulate}.
         * @memberof test.TestController
         * @typedef ServerStreamObservableAccumulateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {test.ResAccumulate} [response] ResAccumulate
         */

        /**
         * Calls ServerStreamObservableAccumulate.
         * @function serverStreamObservableAccumulate
         * @memberof test.TestController
         * @instance
         * @param {test.IReqAccumulate} request ReqAccumulate message or plain object
         * @param {test.TestController.ServerStreamObservableAccumulateCallback} callback Node-style callback called with the error, if any, and ResAccumulate
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TestController.prototype.serverStreamObservableAccumulate = function serverStreamObservableAccumulate(request, callback) {
            return this.rpcCall(serverStreamObservableAccumulate, $root.test.ReqAccumulate, $root.test.ResAccumulate, request, callback);
        }, "name", { value: "ServerStreamObservableAccumulate" });

        /**
         * Calls ServerStreamObservableAccumulate.
         * @function serverStreamObservableAccumulate
         * @memberof test.TestController
         * @instance
         * @param {test.IReqAccumulate} request ReqAccumulate message or plain object
         * @returns {Promise<test.ResAccumulate>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link test.TestController#duplexStreamObservableAccumulate}.
         * @memberof test.TestController
         * @typedef DuplexStreamObservableAccumulateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {test.ResAccumulate} [response] ResAccumulate
         */

        /**
         * Calls DuplexStreamObservableAccumulate.
         * @function duplexStreamObservableAccumulate
         * @memberof test.TestController
         * @instance
         * @param {test.IReqAccumulate} request ReqAccumulate message or plain object
         * @param {test.TestController.DuplexStreamObservableAccumulateCallback} callback Node-style callback called with the error, if any, and ResAccumulate
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TestController.prototype.duplexStreamObservableAccumulate = function duplexStreamObservableAccumulate(request, callback) {
            return this.rpcCall(duplexStreamObservableAccumulate, $root.test.ReqAccumulate, $root.test.ResAccumulate, request, callback);
        }, "name", { value: "DuplexStreamObservableAccumulate" });

        /**
         * Calls DuplexStreamObservableAccumulate.
         * @function duplexStreamObservableAccumulate
         * @memberof test.TestController
         * @instance
         * @param {test.IReqAccumulate} request ReqAccumulate message or plain object
         * @returns {Promise<test.ResAccumulate>} Promise
         * @variation 2
         */

        return TestController;
    })();

    test.ReqAccumulate = (function() {

        /**
         * Properties of a ReqAccumulate.
         * @memberof test
         * @interface IReqAccumulate
         * @property {Array.<number>|null} [data] ReqAccumulate data
         */

        /**
         * Constructs a new ReqAccumulate.
         * @memberof test
         * @classdesc Represents a ReqAccumulate.
         * @implements IReqAccumulate
         * @constructor
         * @param {test.IReqAccumulate=} [properties] Properties to set
         */
        function ReqAccumulate(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAccumulate data.
         * @member {Array.<number>} data
         * @memberof test.ReqAccumulate
         * @instance
         */
        ReqAccumulate.prototype.data = $util.emptyArray;

        /**
         * Creates a new ReqAccumulate instance using the specified properties.
         * @function create
         * @memberof test.ReqAccumulate
         * @static
         * @param {test.IReqAccumulate=} [properties] Properties to set
         * @returns {test.ReqAccumulate} ReqAccumulate instance
         */
        ReqAccumulate.create = function create(properties) {
            return new ReqAccumulate(properties);
        };

        /**
         * Encodes the specified ReqAccumulate message. Does not implicitly {@link test.ReqAccumulate.verify|verify} messages.
         * @function encode
         * @memberof test.ReqAccumulate
         * @static
         * @param {test.IReqAccumulate} message ReqAccumulate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAccumulate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.data.length; ++i)
                    writer.double(message.data[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ReqAccumulate message, length delimited. Does not implicitly {@link test.ReqAccumulate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof test.ReqAccumulate
         * @static
         * @param {test.IReqAccumulate} message ReqAccumulate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAccumulate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqAccumulate message from the specified reader or buffer.
         * @function decode
         * @memberof test.ReqAccumulate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {test.ReqAccumulate} ReqAccumulate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAccumulate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test.ReqAccumulate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.data.push(reader.double());
                    } else
                        message.data.push(reader.double());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqAccumulate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof test.ReqAccumulate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {test.ReqAccumulate} ReqAccumulate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAccumulate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqAccumulate message.
         * @function verify
         * @memberof test.ReqAccumulate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqAccumulate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i)
                    if (typeof message.data[i] !== "number")
                        return "data: number[] expected";
            }
            return null;
        };

        /**
         * Creates a ReqAccumulate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof test.ReqAccumulate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {test.ReqAccumulate} ReqAccumulate
         */
        ReqAccumulate.fromObject = function fromObject(object) {
            if (object instanceof $root.test.ReqAccumulate)
                return object;
            var message = new $root.test.ReqAccumulate();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".test.ReqAccumulate.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i)
                    message.data[i] = Number(object.data[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqAccumulate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof test.ReqAccumulate
         * @static
         * @param {test.ReqAccumulate} message ReqAccumulate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqAccumulate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = options.json && !isFinite(message.data[j]) ? String(message.data[j]) : message.data[j];
            }
            return object;
        };

        /**
         * Converts this ReqAccumulate to JSON.
         * @function toJSON
         * @memberof test.ReqAccumulate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqAccumulate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqAccumulate;
    })();

    test.ResAccumulate = (function() {

        /**
         * Properties of a ResAccumulate.
         * @memberof test
         * @interface IResAccumulate
         * @property {number|null} [sum] ResAccumulate sum
         */

        /**
         * Constructs a new ResAccumulate.
         * @memberof test
         * @classdesc Represents a ResAccumulate.
         * @implements IResAccumulate
         * @constructor
         * @param {test.IResAccumulate=} [properties] Properties to set
         */
        function ResAccumulate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResAccumulate sum.
         * @member {number} sum
         * @memberof test.ResAccumulate
         * @instance
         */
        ResAccumulate.prototype.sum = 0;

        /**
         * Creates a new ResAccumulate instance using the specified properties.
         * @function create
         * @memberof test.ResAccumulate
         * @static
         * @param {test.IResAccumulate=} [properties] Properties to set
         * @returns {test.ResAccumulate} ResAccumulate instance
         */
        ResAccumulate.create = function create(properties) {
            return new ResAccumulate(properties);
        };

        /**
         * Encodes the specified ResAccumulate message. Does not implicitly {@link test.ResAccumulate.verify|verify} messages.
         * @function encode
         * @memberof test.ResAccumulate
         * @static
         * @param {test.IResAccumulate} message ResAccumulate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResAccumulate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sum != null && Object.hasOwnProperty.call(message, "sum"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.sum);
            return writer;
        };

        /**
         * Encodes the specified ResAccumulate message, length delimited. Does not implicitly {@link test.ResAccumulate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof test.ResAccumulate
         * @static
         * @param {test.IResAccumulate} message ResAccumulate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResAccumulate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResAccumulate message from the specified reader or buffer.
         * @function decode
         * @memberof test.ResAccumulate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {test.ResAccumulate} ResAccumulate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResAccumulate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test.ResAccumulate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sum = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResAccumulate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof test.ResAccumulate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {test.ResAccumulate} ResAccumulate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResAccumulate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResAccumulate message.
         * @function verify
         * @memberof test.ResAccumulate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResAccumulate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sum != null && message.hasOwnProperty("sum"))
                if (typeof message.sum !== "number")
                    return "sum: number expected";
            return null;
        };

        /**
         * Creates a ResAccumulate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof test.ResAccumulate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {test.ResAccumulate} ResAccumulate
         */
        ResAccumulate.fromObject = function fromObject(object) {
            if (object instanceof $root.test.ResAccumulate)
                return object;
            var message = new $root.test.ResAccumulate();
            if (object.sum != null)
                message.sum = Number(object.sum);
            return message;
        };

        /**
         * Creates a plain object from a ResAccumulate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof test.ResAccumulate
         * @static
         * @param {test.ResAccumulate} message ResAccumulate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResAccumulate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.sum = 0;
            if (message.sum != null && message.hasOwnProperty("sum"))
                object.sum = options.json && !isFinite(message.sum) ? String(message.sum) : message.sum;
            return object;
        };

        /**
         * Converts this ResAccumulate to JSON.
         * @function toJSON
         * @memberof test.ResAccumulate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResAccumulate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResAccumulate;
    })();

    return test;
})();

module.exports = $root;
