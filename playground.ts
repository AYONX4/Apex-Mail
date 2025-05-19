import { db } from "~/server/db";

await db.user.create({
    data: {
        emailAddress: "tanmoykaarjee110@gmail.com",
        firstName: "Ayon",
        lastName: "Kaarjee",
    }
})

console.log("User created");