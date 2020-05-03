# Unary
grpcurl -plaintext -proto ./protos/test.proto -import-path ./protos -d @ localhost:5000 test.TestController/UnaryAccumulate <<EOM
{
  "data": [
    1,
    10,
    100
  ]
}
EOM

# ClientStream
grpcurl -plaintext -proto ./protos/test.proto -import-path ./protos -d @ localhost:5000 test.TestController/ClientStreamAccumulate <<EOM
{
  "data": [
    1,
    10,
    100
  ]
}
{
  "data": [
    2,
    20,
    200
  ]
}
EOM

# DuplexStream
grpcurl -plaintext -proto ./protos/test.proto -import-path ./protos -d @ localhost:5000 test.TestController/DuplexStreamAccumulate <<EOM
{
  "data": [
    1,
    10,
    100
  ]
}
{
  "data": [
    2,
    20,
    200
  ]
}
EOM

# ClientStreamObservable
grpcurl -plaintext -proto ./protos/test.proto -import-path ./protos -d @ localhost:5000 test.TestController/ClientStreamObservableAccumulate <<EOM
{
  "data": [
    1,
    10,
    100
  ]
}
{
  "data": [
    2,
    20,
    200
  ]
}
EOM

# ServerStreamObservable
grpcurl -plaintext -proto ./protos/test.proto -import-path ./protos -d @ localhost:5000 test.TestController/ServerStreamObservableAccumulate <<EOM
{
  "data": [
    1,
    10,
    100
  ]
}
EOM

# DuplexStreamObservable
grpcurl -plaintext -proto ./protos/test.proto -import-path ./protos -d @ localhost:5000 test.TestController/DuplexStreamObservableAccumulate <<EOM
{
  "data": [
    1,
    10,
    100
  ]
}
{
  "data": [
    2,
    20,
    200
  ]
}
EOM
