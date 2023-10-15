print("START")


db = db.getSiblingDB('product-service')

db.createUser(
    {
     user: "ajaqueduarte",
     password: "gbc2023",
     roles: [{role:'readWrite', db: 'product-service'}]
    }
);

db.createCollection("user");

print("END")
