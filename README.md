<!-- prettier-ignore -->
grpcurl -plaintext -proto ./protos/test.proto -import-path ./protos -d @ localhost:5000 test.TestController/Accumulate <<EOM
{
  "data": [
    1,
    10,
    100
  ]
}
EOM

<!-- prettier-ignore -->
grpcurl -plaintext -proto ./protos/test.proto -import-path ./protos -d @ localhost:5000 test.TestController/AccumulateStream <<EOM
{
  "data": [
    1,
    10,
    100
  ]
}
EOM

<!-- prettier-ignore -->
grpcurl -plaintext -proto ./protos/test.proto -import-path ./protos -d @ localhost:5000 test.TestController/AccumulateStreamPass <<EOM
{
  "data": [
    1,
    10,
    100
  ]
}
EOM
