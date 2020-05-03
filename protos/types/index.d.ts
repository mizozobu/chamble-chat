import * as $protobuf from "protobufjs";
/** Namespace chat. */
export namespace chat {

    /** Represents a ChatController */
    class ChatController extends $protobuf.rpc.Service {

        /**
         * Constructs a new ChatController service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new ChatController service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ChatController;

        /**
         * Calls Connect.
         * @param request ReqConnect message or plain object
         * @param callback Node-style callback called with the error, if any, and ResConnect
         */
        public connect(request: chat.IReqConnect, callback: chat.ChatController.ConnectCallback): void;

        /**
         * Calls Connect.
         * @param request ReqConnect message or plain object
         * @returns Promise
         */
        public connect(request: chat.IReqConnect): Promise<chat.ResConnect>;

        /**
         * Calls Disconnect.
         * @param request ReqDisconnect message or plain object
         * @param callback Node-style callback called with the error, if any, and ResDisconnect
         */
        public disconnect(request: chat.IReqDisconnect, callback: chat.ChatController.DisconnectCallback): void;

        /**
         * Calls Disconnect.
         * @param request ReqDisconnect message or plain object
         * @returns Promise
         */
        public disconnect(request: chat.IReqDisconnect): Promise<chat.ResDisconnect>;

        /**
         * Calls SendChatMessage.
         * @param request ReqSendChatMessage message or plain object
         * @param callback Node-style callback called with the error, if any, and ResSendChatMessage
         */
        public sendChatMessage(request: chat.IReqSendChatMessage, callback: chat.ChatController.SendChatMessageCallback): void;

        /**
         * Calls SendChatMessage.
         * @param request ReqSendChatMessage message or plain object
         * @returns Promise
         */
        public sendChatMessage(request: chat.IReqSendChatMessage): Promise<chat.ResSendChatMessage>;
    }

    namespace ChatController {

        /**
         * Callback as used by {@link chat.ChatController#connect}.
         * @param error Error, if any
         * @param [response] ResConnect
         */
        type ConnectCallback = (error: (Error|null), response?: chat.ResConnect) => void;

        /**
         * Callback as used by {@link chat.ChatController#disconnect}.
         * @param error Error, if any
         * @param [response] ResDisconnect
         */
        type DisconnectCallback = (error: (Error|null), response?: chat.ResDisconnect) => void;

        /**
         * Callback as used by {@link chat.ChatController#sendChatMessage}.
         * @param error Error, if any
         * @param [response] ResSendChatMessage
         */
        type SendChatMessageCallback = (error: (Error|null), response?: chat.ResSendChatMessage) => void;
    }

    /** Properties of a ReqConnect. */
    interface IReqConnect {

        /** ReqConnect userId */
        userId?: (number|null);
    }

    /** Represents a ReqConnect. */
    class ReqConnect implements IReqConnect {

        /**
         * Constructs a new ReqConnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IReqConnect);

        /** ReqConnect userId. */
        public userId: number;

        /**
         * Creates a new ReqConnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqConnect instance
         */
        public static create(properties?: chat.IReqConnect): chat.ReqConnect;

        /**
         * Encodes the specified ReqConnect message. Does not implicitly {@link chat.ReqConnect.verify|verify} messages.
         * @param message ReqConnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IReqConnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqConnect message, length delimited. Does not implicitly {@link chat.ReqConnect.verify|verify} messages.
         * @param message ReqConnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IReqConnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqConnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqConnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.ReqConnect;

        /**
         * Decodes a ReqConnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqConnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.ReqConnect;

        /**
         * Verifies a ReqConnect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqConnect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqConnect
         */
        public static fromObject(object: { [k: string]: any }): chat.ReqConnect;

        /**
         * Creates a plain object from a ReqConnect message. Also converts values to other types if specified.
         * @param message ReqConnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.ReqConnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqConnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResConnect. */
    interface IResConnect {

        /** ResConnect chatRoomId */
        chatRoomId?: (number|null);

        /** ResConnect userId */
        userId?: (number|null);

        /** ResConnect chatText */
        chatText?: (string|null);
    }

    /** Represents a ResConnect. */
    class ResConnect implements IResConnect {

        /**
         * Constructs a new ResConnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IResConnect);

        /** ResConnect chatRoomId. */
        public chatRoomId: number;

        /** ResConnect userId. */
        public userId: number;

        /** ResConnect chatText. */
        public chatText: string;

        /**
         * Creates a new ResConnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResConnect instance
         */
        public static create(properties?: chat.IResConnect): chat.ResConnect;

        /**
         * Encodes the specified ResConnect message. Does not implicitly {@link chat.ResConnect.verify|verify} messages.
         * @param message ResConnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IResConnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResConnect message, length delimited. Does not implicitly {@link chat.ResConnect.verify|verify} messages.
         * @param message ResConnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IResConnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResConnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResConnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.ResConnect;

        /**
         * Decodes a ResConnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResConnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.ResConnect;

        /**
         * Verifies a ResConnect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResConnect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResConnect
         */
        public static fromObject(object: { [k: string]: any }): chat.ResConnect;

        /**
         * Creates a plain object from a ResConnect message. Also converts values to other types if specified.
         * @param message ResConnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.ResConnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResConnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqDisconnect. */
    interface IReqDisconnect {

        /** ReqDisconnect userId */
        userId?: (number|null);
    }

    /** Represents a ReqDisconnect. */
    class ReqDisconnect implements IReqDisconnect {

        /**
         * Constructs a new ReqDisconnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IReqDisconnect);

        /** ReqDisconnect userId. */
        public userId: number;

        /**
         * Creates a new ReqDisconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqDisconnect instance
         */
        public static create(properties?: chat.IReqDisconnect): chat.ReqDisconnect;

        /**
         * Encodes the specified ReqDisconnect message. Does not implicitly {@link chat.ReqDisconnect.verify|verify} messages.
         * @param message ReqDisconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IReqDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqDisconnect message, length delimited. Does not implicitly {@link chat.ReqDisconnect.verify|verify} messages.
         * @param message ReqDisconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IReqDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqDisconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqDisconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.ReqDisconnect;

        /**
         * Decodes a ReqDisconnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqDisconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.ReqDisconnect;

        /**
         * Verifies a ReqDisconnect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqDisconnect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqDisconnect
         */
        public static fromObject(object: { [k: string]: any }): chat.ReqDisconnect;

        /**
         * Creates a plain object from a ReqDisconnect message. Also converts values to other types if specified.
         * @param message ReqDisconnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.ReqDisconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqDisconnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResDisconnect. */
    interface IResDisconnect {

        /** ResDisconnect ok */
        ok?: (boolean|null);
    }

    /** Represents a ResDisconnect. */
    class ResDisconnect implements IResDisconnect {

        /**
         * Constructs a new ResDisconnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IResDisconnect);

        /** ResDisconnect ok. */
        public ok: boolean;

        /**
         * Creates a new ResDisconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResDisconnect instance
         */
        public static create(properties?: chat.IResDisconnect): chat.ResDisconnect;

        /**
         * Encodes the specified ResDisconnect message. Does not implicitly {@link chat.ResDisconnect.verify|verify} messages.
         * @param message ResDisconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IResDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResDisconnect message, length delimited. Does not implicitly {@link chat.ResDisconnect.verify|verify} messages.
         * @param message ResDisconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IResDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResDisconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResDisconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.ResDisconnect;

        /**
         * Decodes a ResDisconnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResDisconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.ResDisconnect;

        /**
         * Verifies a ResDisconnect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResDisconnect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResDisconnect
         */
        public static fromObject(object: { [k: string]: any }): chat.ResDisconnect;

        /**
         * Creates a plain object from a ResDisconnect message. Also converts values to other types if specified.
         * @param message ResDisconnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.ResDisconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResDisconnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqSendChatMessage. */
    interface IReqSendChatMessage {

        /** ReqSendChatMessage chatRoomId */
        chatRoomId?: (number|null);

        /** ReqSendChatMessage userId */
        userId?: (number|null);

        /** ReqSendChatMessage chatText */
        chatText?: (string|null);
    }

    /** Represents a ReqSendChatMessage. */
    class ReqSendChatMessage implements IReqSendChatMessage {

        /**
         * Constructs a new ReqSendChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IReqSendChatMessage);

        /** ReqSendChatMessage chatRoomId. */
        public chatRoomId: number;

        /** ReqSendChatMessage userId. */
        public userId: number;

        /** ReqSendChatMessage chatText. */
        public chatText: string;

        /**
         * Creates a new ReqSendChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSendChatMessage instance
         */
        public static create(properties?: chat.IReqSendChatMessage): chat.ReqSendChatMessage;

        /**
         * Encodes the specified ReqSendChatMessage message. Does not implicitly {@link chat.ReqSendChatMessage.verify|verify} messages.
         * @param message ReqSendChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IReqSendChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqSendChatMessage message, length delimited. Does not implicitly {@link chat.ReqSendChatMessage.verify|verify} messages.
         * @param message ReqSendChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IReqSendChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqSendChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSendChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.ReqSendChatMessage;

        /**
         * Decodes a ReqSendChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSendChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.ReqSendChatMessage;

        /**
         * Verifies a ReqSendChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqSendChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqSendChatMessage
         */
        public static fromObject(object: { [k: string]: any }): chat.ReqSendChatMessage;

        /**
         * Creates a plain object from a ReqSendChatMessage message. Also converts values to other types if specified.
         * @param message ReqSendChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.ReqSendChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqSendChatMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResSendChatMessage. */
    interface IResSendChatMessage {

        /** ResSendChatMessage ok */
        ok?: (boolean|null);
    }

    /** Represents a ResSendChatMessage. */
    class ResSendChatMessage implements IResSendChatMessage {

        /**
         * Constructs a new ResSendChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IResSendChatMessage);

        /** ResSendChatMessage ok. */
        public ok: boolean;

        /**
         * Creates a new ResSendChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResSendChatMessage instance
         */
        public static create(properties?: chat.IResSendChatMessage): chat.ResSendChatMessage;

        /**
         * Encodes the specified ResSendChatMessage message. Does not implicitly {@link chat.ResSendChatMessage.verify|verify} messages.
         * @param message ResSendChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IResSendChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResSendChatMessage message, length delimited. Does not implicitly {@link chat.ResSendChatMessage.verify|verify} messages.
         * @param message ResSendChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IResSendChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResSendChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResSendChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.ResSendChatMessage;

        /**
         * Decodes a ResSendChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResSendChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.ResSendChatMessage;

        /**
         * Verifies a ResSendChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResSendChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResSendChatMessage
         */
        public static fromObject(object: { [k: string]: any }): chat.ResSendChatMessage;

        /**
         * Creates a plain object from a ResSendChatMessage message. Also converts values to other types if specified.
         * @param message ResSendChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.ResSendChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResSendChatMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace test. */
export namespace test {

    /** Represents a TestController */
    class TestController extends $protobuf.rpc.Service {

        /**
         * Constructs a new TestController service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new TestController service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TestController;

        /**
         * Calls UnaryAccumulate.
         * @param request ReqAccumulate message or plain object
         * @param callback Node-style callback called with the error, if any, and ResAccumulate
         */
        public unaryAccumulate(request: test.IReqAccumulate, callback: test.TestController.UnaryAccumulateCallback): void;

        /**
         * Calls UnaryAccumulate.
         * @param request ReqAccumulate message or plain object
         * @returns Promise
         */
        public unaryAccumulate(request: test.IReqAccumulate): Promise<test.ResAccumulate>;

        /**
         * Calls ClientStreamAccumulate.
         * @param request ReqAccumulate message or plain object
         * @param callback Node-style callback called with the error, if any, and ResAccumulate
         */
        public clientStreamAccumulate(request: test.IReqAccumulate, callback: test.TestController.ClientStreamAccumulateCallback): void;

        /**
         * Calls ClientStreamAccumulate.
         * @param request ReqAccumulate message or plain object
         * @returns Promise
         */
        public clientStreamAccumulate(request: test.IReqAccumulate): Promise<test.ResAccumulate>;

        /**
         * Calls DuplexStreamAccumulate.
         * @param request ReqAccumulate message or plain object
         * @param callback Node-style callback called with the error, if any, and ResAccumulate
         */
        public duplexStreamAccumulate(request: test.IReqAccumulate, callback: test.TestController.DuplexStreamAccumulateCallback): void;

        /**
         * Calls DuplexStreamAccumulate.
         * @param request ReqAccumulate message or plain object
         * @returns Promise
         */
        public duplexStreamAccumulate(request: test.IReqAccumulate): Promise<test.ResAccumulate>;

        /**
         * Calls ClientStreamObservableAccumulate.
         * @param request ReqAccumulate message or plain object
         * @param callback Node-style callback called with the error, if any, and ResAccumulate
         */
        public clientStreamObservableAccumulate(request: test.IReqAccumulate, callback: test.TestController.ClientStreamObservableAccumulateCallback): void;

        /**
         * Calls ClientStreamObservableAccumulate.
         * @param request ReqAccumulate message or plain object
         * @returns Promise
         */
        public clientStreamObservableAccumulate(request: test.IReqAccumulate): Promise<test.ResAccumulate>;

        /**
         * Calls ServerStreamObservableAccumulate.
         * @param request ReqAccumulate message or plain object
         * @param callback Node-style callback called with the error, if any, and ResAccumulate
         */
        public serverStreamObservableAccumulate(request: test.IReqAccumulate, callback: test.TestController.ServerStreamObservableAccumulateCallback): void;

        /**
         * Calls ServerStreamObservableAccumulate.
         * @param request ReqAccumulate message or plain object
         * @returns Promise
         */
        public serverStreamObservableAccumulate(request: test.IReqAccumulate): Promise<test.ResAccumulate>;

        /**
         * Calls DuplexStreamObservableAccumulate.
         * @param request ReqAccumulate message or plain object
         * @param callback Node-style callback called with the error, if any, and ResAccumulate
         */
        public duplexStreamObservableAccumulate(request: test.IReqAccumulate, callback: test.TestController.DuplexStreamObservableAccumulateCallback): void;

        /**
         * Calls DuplexStreamObservableAccumulate.
         * @param request ReqAccumulate message or plain object
         * @returns Promise
         */
        public duplexStreamObservableAccumulate(request: test.IReqAccumulate): Promise<test.ResAccumulate>;
    }

    namespace TestController {

        /**
         * Callback as used by {@link test.TestController#unaryAccumulate}.
         * @param error Error, if any
         * @param [response] ResAccumulate
         */
        type UnaryAccumulateCallback = (error: (Error|null), response?: test.ResAccumulate) => void;

        /**
         * Callback as used by {@link test.TestController#clientStreamAccumulate}.
         * @param error Error, if any
         * @param [response] ResAccumulate
         */
        type ClientStreamAccumulateCallback = (error: (Error|null), response?: test.ResAccumulate) => void;

        /**
         * Callback as used by {@link test.TestController#duplexStreamAccumulate}.
         * @param error Error, if any
         * @param [response] ResAccumulate
         */
        type DuplexStreamAccumulateCallback = (error: (Error|null), response?: test.ResAccumulate) => void;

        /**
         * Callback as used by {@link test.TestController#clientStreamObservableAccumulate}.
         * @param error Error, if any
         * @param [response] ResAccumulate
         */
        type ClientStreamObservableAccumulateCallback = (error: (Error|null), response?: test.ResAccumulate) => void;

        /**
         * Callback as used by {@link test.TestController#serverStreamObservableAccumulate}.
         * @param error Error, if any
         * @param [response] ResAccumulate
         */
        type ServerStreamObservableAccumulateCallback = (error: (Error|null), response?: test.ResAccumulate) => void;

        /**
         * Callback as used by {@link test.TestController#duplexStreamObservableAccumulate}.
         * @param error Error, if any
         * @param [response] ResAccumulate
         */
        type DuplexStreamObservableAccumulateCallback = (error: (Error|null), response?: test.ResAccumulate) => void;
    }

    /** Properties of a ReqAccumulate. */
    interface IReqAccumulate {

        /** ReqAccumulate data */
        data?: (number[]|null);
    }

    /** Represents a ReqAccumulate. */
    class ReqAccumulate implements IReqAccumulate {

        /**
         * Constructs a new ReqAccumulate.
         * @param [properties] Properties to set
         */
        constructor(properties?: test.IReqAccumulate);

        /** ReqAccumulate data. */
        public data: number[];

        /**
         * Creates a new ReqAccumulate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAccumulate instance
         */
        public static create(properties?: test.IReqAccumulate): test.ReqAccumulate;

        /**
         * Encodes the specified ReqAccumulate message. Does not implicitly {@link test.ReqAccumulate.verify|verify} messages.
         * @param message ReqAccumulate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: test.IReqAccumulate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqAccumulate message, length delimited. Does not implicitly {@link test.ReqAccumulate.verify|verify} messages.
         * @param message ReqAccumulate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: test.IReqAccumulate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqAccumulate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAccumulate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): test.ReqAccumulate;

        /**
         * Decodes a ReqAccumulate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAccumulate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): test.ReqAccumulate;

        /**
         * Verifies a ReqAccumulate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqAccumulate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqAccumulate
         */
        public static fromObject(object: { [k: string]: any }): test.ReqAccumulate;

        /**
         * Creates a plain object from a ReqAccumulate message. Also converts values to other types if specified.
         * @param message ReqAccumulate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: test.ReqAccumulate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqAccumulate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResAccumulate. */
    interface IResAccumulate {

        /** ResAccumulate sum */
        sum?: (number|null);
    }

    /** Represents a ResAccumulate. */
    class ResAccumulate implements IResAccumulate {

        /**
         * Constructs a new ResAccumulate.
         * @param [properties] Properties to set
         */
        constructor(properties?: test.IResAccumulate);

        /** ResAccumulate sum. */
        public sum: number;

        /**
         * Creates a new ResAccumulate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResAccumulate instance
         */
        public static create(properties?: test.IResAccumulate): test.ResAccumulate;

        /**
         * Encodes the specified ResAccumulate message. Does not implicitly {@link test.ResAccumulate.verify|verify} messages.
         * @param message ResAccumulate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: test.IResAccumulate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResAccumulate message, length delimited. Does not implicitly {@link test.ResAccumulate.verify|verify} messages.
         * @param message ResAccumulate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: test.IResAccumulate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResAccumulate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResAccumulate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): test.ResAccumulate;

        /**
         * Decodes a ResAccumulate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResAccumulate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): test.ResAccumulate;

        /**
         * Verifies a ResAccumulate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResAccumulate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResAccumulate
         */
        public static fromObject(object: { [k: string]: any }): test.ResAccumulate;

        /**
         * Creates a plain object from a ResAccumulate message. Also converts values to other types if specified.
         * @param message ResAccumulate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: test.ResAccumulate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResAccumulate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
