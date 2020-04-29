/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.app = (function() {

    /**
     * Namespace app.
     * @exports app
     * @namespace
     */
    var app = {};

    app.AppController = (function() {

        /**
         * Constructs a new AppController service.
         * @memberof app
         * @classdesc Represents an AppController
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AppController(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AppController.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AppController;

        /**
         * Creates new AppController service using the specified rpc implementation.
         * @function create
         * @memberof app.AppController
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {AppController} RPC service. Useful where requests and/or responses are streamed.
         */
        AppController.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link app.AppController#accumulate}.
         * @memberof app.AppController
         * @typedef AccumulateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {app.SumOfNumberArray} [response] SumOfNumberArray
         */

        /**
         * Calls Accumulate.
         * @function accumulate
         * @memberof app.AppController
         * @instance
         * @param {app.INumberArray} request NumberArray message or plain object
         * @param {app.AppController.AccumulateCallback} callback Node-style callback called with the error, if any, and SumOfNumberArray
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AppController.prototype.accumulate = function accumulate(request, callback) {
            return this.rpcCall(accumulate, $root.app.NumberArray, $root.app.SumOfNumberArray, request, callback);
        }, "name", { value: "Accumulate" });

        /**
         * Calls Accumulate.
         * @function accumulate
         * @memberof app.AppController
         * @instance
         * @param {app.INumberArray} request NumberArray message or plain object
         * @returns {Promise<app.SumOfNumberArray>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link app.AppController#accumulateStream}.
         * @memberof app.AppController
         * @typedef AccumulateStreamCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {app.SumOfNumberArray} [response] SumOfNumberArray
         */

        /**
         * Calls AccumulateStream.
         * @function accumulateStream
         * @memberof app.AppController
         * @instance
         * @param {app.INumberArray} request NumberArray message or plain object
         * @param {app.AppController.AccumulateStreamCallback} callback Node-style callback called with the error, if any, and SumOfNumberArray
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AppController.prototype.accumulateStream = function accumulateStream(request, callback) {
            return this.rpcCall(accumulateStream, $root.app.NumberArray, $root.app.SumOfNumberArray, request, callback);
        }, "name", { value: "AccumulateStream" });

        /**
         * Calls AccumulateStream.
         * @function accumulateStream
         * @memberof app.AppController
         * @instance
         * @param {app.INumberArray} request NumberArray message or plain object
         * @returns {Promise<app.SumOfNumberArray>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link app.AppController#accumulateStreamPass}.
         * @memberof app.AppController
         * @typedef AccumulateStreamPassCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {app.SumOfNumberArray} [response] SumOfNumberArray
         */

        /**
         * Calls AccumulateStreamPass.
         * @function accumulateStreamPass
         * @memberof app.AppController
         * @instance
         * @param {app.INumberArray} request NumberArray message or plain object
         * @param {app.AppController.AccumulateStreamPassCallback} callback Node-style callback called with the error, if any, and SumOfNumberArray
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AppController.prototype.accumulateStreamPass = function accumulateStreamPass(request, callback) {
            return this.rpcCall(accumulateStreamPass, $root.app.NumberArray, $root.app.SumOfNumberArray, request, callback);
        }, "name", { value: "AccumulateStreamPass" });

        /**
         * Calls AccumulateStreamPass.
         * @function accumulateStreamPass
         * @memberof app.AppController
         * @instance
         * @param {app.INumberArray} request NumberArray message or plain object
         * @returns {Promise<app.SumOfNumberArray>} Promise
         * @variation 2
         */

        return AppController;
    })();

    app.NumberArray = (function() {

        /**
         * Properties of a NumberArray.
         * @memberof app
         * @interface INumberArray
         * @property {Array.<number>|null} [data] NumberArray data
         */

        /**
         * Constructs a new NumberArray.
         * @memberof app
         * @classdesc Represents a NumberArray.
         * @implements INumberArray
         * @constructor
         * @param {app.INumberArray=} [properties] Properties to set
         */
        function NumberArray(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NumberArray data.
         * @member {Array.<number>} data
         * @memberof app.NumberArray
         * @instance
         */
        NumberArray.prototype.data = $util.emptyArray;

        /**
         * Creates a new NumberArray instance using the specified properties.
         * @function create
         * @memberof app.NumberArray
         * @static
         * @param {app.INumberArray=} [properties] Properties to set
         * @returns {app.NumberArray} NumberArray instance
         */
        NumberArray.create = function create(properties) {
            return new NumberArray(properties);
        };

        /**
         * Encodes the specified NumberArray message. Does not implicitly {@link app.NumberArray.verify|verify} messages.
         * @function encode
         * @memberof app.NumberArray
         * @static
         * @param {app.INumberArray} message NumberArray message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NumberArray.encode = function encode(message, writer) {
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
         * Encodes the specified NumberArray message, length delimited. Does not implicitly {@link app.NumberArray.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.NumberArray
         * @static
         * @param {app.INumberArray} message NumberArray message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NumberArray.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NumberArray message from the specified reader or buffer.
         * @function decode
         * @memberof app.NumberArray
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.NumberArray} NumberArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NumberArray.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.NumberArray();
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
         * Decodes a NumberArray message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.NumberArray
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.NumberArray} NumberArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NumberArray.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NumberArray message.
         * @function verify
         * @memberof app.NumberArray
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NumberArray.verify = function verify(message) {
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
         * Creates a NumberArray message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.NumberArray
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.NumberArray} NumberArray
         */
        NumberArray.fromObject = function fromObject(object) {
            if (object instanceof $root.app.NumberArray)
                return object;
            var message = new $root.app.NumberArray();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".app.NumberArray.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i)
                    message.data[i] = Number(object.data[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a NumberArray message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.NumberArray
         * @static
         * @param {app.NumberArray} message NumberArray
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NumberArray.toObject = function toObject(message, options) {
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
         * Converts this NumberArray to JSON.
         * @function toJSON
         * @memberof app.NumberArray
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NumberArray.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NumberArray;
    })();

    app.SumOfNumberArray = (function() {

        /**
         * Properties of a SumOfNumberArray.
         * @memberof app
         * @interface ISumOfNumberArray
         * @property {number|null} [sum] SumOfNumberArray sum
         */

        /**
         * Constructs a new SumOfNumberArray.
         * @memberof app
         * @classdesc Represents a SumOfNumberArray.
         * @implements ISumOfNumberArray
         * @constructor
         * @param {app.ISumOfNumberArray=} [properties] Properties to set
         */
        function SumOfNumberArray(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SumOfNumberArray sum.
         * @member {number} sum
         * @memberof app.SumOfNumberArray
         * @instance
         */
        SumOfNumberArray.prototype.sum = 0;

        /**
         * Creates a new SumOfNumberArray instance using the specified properties.
         * @function create
         * @memberof app.SumOfNumberArray
         * @static
         * @param {app.ISumOfNumberArray=} [properties] Properties to set
         * @returns {app.SumOfNumberArray} SumOfNumberArray instance
         */
        SumOfNumberArray.create = function create(properties) {
            return new SumOfNumberArray(properties);
        };

        /**
         * Encodes the specified SumOfNumberArray message. Does not implicitly {@link app.SumOfNumberArray.verify|verify} messages.
         * @function encode
         * @memberof app.SumOfNumberArray
         * @static
         * @param {app.ISumOfNumberArray} message SumOfNumberArray message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SumOfNumberArray.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sum != null && Object.hasOwnProperty.call(message, "sum"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.sum);
            return writer;
        };

        /**
         * Encodes the specified SumOfNumberArray message, length delimited. Does not implicitly {@link app.SumOfNumberArray.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.SumOfNumberArray
         * @static
         * @param {app.ISumOfNumberArray} message SumOfNumberArray message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SumOfNumberArray.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SumOfNumberArray message from the specified reader or buffer.
         * @function decode
         * @memberof app.SumOfNumberArray
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.SumOfNumberArray} SumOfNumberArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SumOfNumberArray.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.SumOfNumberArray();
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
         * Decodes a SumOfNumberArray message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.SumOfNumberArray
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.SumOfNumberArray} SumOfNumberArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SumOfNumberArray.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SumOfNumberArray message.
         * @function verify
         * @memberof app.SumOfNumberArray
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SumOfNumberArray.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sum != null && message.hasOwnProperty("sum"))
                if (typeof message.sum !== "number")
                    return "sum: number expected";
            return null;
        };

        /**
         * Creates a SumOfNumberArray message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.SumOfNumberArray
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.SumOfNumberArray} SumOfNumberArray
         */
        SumOfNumberArray.fromObject = function fromObject(object) {
            if (object instanceof $root.app.SumOfNumberArray)
                return object;
            var message = new $root.app.SumOfNumberArray();
            if (object.sum != null)
                message.sum = Number(object.sum);
            return message;
        };

        /**
         * Creates a plain object from a SumOfNumberArray message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.SumOfNumberArray
         * @static
         * @param {app.SumOfNumberArray} message SumOfNumberArray
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SumOfNumberArray.toObject = function toObject(message, options) {
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
         * Converts this SumOfNumberArray to JSON.
         * @function toJSON
         * @memberof app.SumOfNumberArray
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SumOfNumberArray.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SumOfNumberArray;
    })();

    return app;
})();

module.exports = $root;
