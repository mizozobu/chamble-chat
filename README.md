grpcurl -d '{"data": [41,4,5]}' -plaintext -proto ./src/app.proto -import-path ./src localhost:5000 app.AppController/Accumulate
