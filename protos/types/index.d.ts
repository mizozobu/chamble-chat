import * as $protobuf from "protobufjs";
/** Namespace app. */
export namespace app {

    /** Represents an AppController */
    class AppController extends $protobuf.rpc.Service {

        /**
         * Constructs a new AppController service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new AppController service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AppController;

        /**
         * Calls Accumulate.
         * @param request NumberArray message or plain object
         * @param callback Node-style callback called with the error, if any, and SumOfNumberArray
         */
        public accumulate(request: app.INumberArray, callback: app.AppController.AccumulateCallback): void;

        /**
         * Calls Accumulate.
         * @param request NumberArray message or plain object
         * @returns Promise
         */
        public accumulate(request: app.INumberArray): Promise<app.SumOfNumberArray>;
    }

    namespace AppController {

        /**
         * Callback as used by {@link app.AppController#accumulate}.
         * @param error Error, if any
         * @param [response] SumOfNumberArray
         */
        type AccumulateCallback = (error: (Error|null), response?: app.SumOfNumberArray) => void;
    }

    /** Properties of a NumberArray. */
    interface INumberArray {

        /** NumberArray data */
        data?: (number[]|null);
    }

    /** Represents a NumberArray. */
    class NumberArray implements INumberArray {

        /**
         * Constructs a new NumberArray.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.INumberArray);

        /** NumberArray data. */
        public data: number[];

        /**
         * Creates a new NumberArray instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NumberArray instance
         */
        public static create(properties?: app.INumberArray): app.NumberArray;

        /**
         * Encodes the specified NumberArray message. Does not implicitly {@link app.NumberArray.verify|verify} messages.
         * @param message NumberArray message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.INumberArray, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NumberArray message, length delimited. Does not implicitly {@link app.NumberArray.verify|verify} messages.
         * @param message NumberArray message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.INumberArray, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NumberArray message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NumberArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.NumberArray;

        /**
         * Decodes a NumberArray message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NumberArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.NumberArray;

        /**
         * Verifies a NumberArray message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NumberArray message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NumberArray
         */
        public static fromObject(object: { [k: string]: any }): app.NumberArray;

        /**
         * Creates a plain object from a NumberArray message. Also converts values to other types if specified.
         * @param message NumberArray
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.NumberArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NumberArray to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SumOfNumberArray. */
    interface ISumOfNumberArray {

        /** SumOfNumberArray sum */
        sum?: (number|null);
    }

    /** Represents a SumOfNumberArray. */
    class SumOfNumberArray implements ISumOfNumberArray {

        /**
         * Constructs a new SumOfNumberArray.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.ISumOfNumberArray);

        /** SumOfNumberArray sum. */
        public sum: number;

        /**
         * Creates a new SumOfNumberArray instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SumOfNumberArray instance
         */
        public static create(properties?: app.ISumOfNumberArray): app.SumOfNumberArray;

        /**
         * Encodes the specified SumOfNumberArray message. Does not implicitly {@link app.SumOfNumberArray.verify|verify} messages.
         * @param message SumOfNumberArray message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.ISumOfNumberArray, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SumOfNumberArray message, length delimited. Does not implicitly {@link app.SumOfNumberArray.verify|verify} messages.
         * @param message SumOfNumberArray message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.ISumOfNumberArray, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SumOfNumberArray message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SumOfNumberArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.SumOfNumberArray;

        /**
         * Decodes a SumOfNumberArray message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SumOfNumberArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.SumOfNumberArray;

        /**
         * Verifies a SumOfNumberArray message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SumOfNumberArray message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SumOfNumberArray
         */
        public static fromObject(object: { [k: string]: any }): app.SumOfNumberArray;

        /**
         * Creates a plain object from a SumOfNumberArray message. Also converts values to other types if specified.
         * @param message SumOfNumberArray
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.SumOfNumberArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SumOfNumberArray to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
