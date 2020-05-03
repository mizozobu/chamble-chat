import * as $protobuf from "protobufjs";
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
