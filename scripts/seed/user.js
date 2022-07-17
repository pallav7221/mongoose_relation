const {faker} = require("@faker-js/faker");
const User = require("../../database/users")
const connectDatabase = require("../../database")

async function createFakeUser(count){
    for(let i = 0; i <count; i++){
        await User.create({
            name: faker.name.firstName(),
            email : faker.internet.email(),
            social_profile:{
                linkedin: faker.internet.domainName(),
                facebook: faker.internet.domainName(),
                Twiter: faker.internet.domainName(),
                Github: faker.internet.domainName(),
                Instagram: faker.internet.domainName(),
            },
            Addresses:[
                {
                    City: faker.address.city(),
                    State:faker.address.state(),
                    // PinCode:faker.address.pinCode(),
                }
            ]

        })
    }
}

connectDatabase().then(()=>{
    createFakeUser(50)
})