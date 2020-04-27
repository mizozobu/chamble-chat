grpcurl -d '{"champion_id": 1}' -plaintext -proto ./rpc/rpc.proto -import-path ./protos 127.0.0.1:5000 rpc.Rpc/GetChampion

127.0.0.1:5000
