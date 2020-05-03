/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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
