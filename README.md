grpcurl -d '{"data": [41,4,5]}' -plaintext -proto ./protos/app.proto -import-path ./protos localhost:5000 app.AppController/Accumulate

or

grpcurl -plaintext -proto ./protos/app.proto -import-path ./protos -d @ localhost:5000 app.AppController/Accumulate <<EOM
{
  "data": [
    1,
    10,
    100
  ]
}
EOM
