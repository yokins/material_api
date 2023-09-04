import { PrismaClient } from "@prisma/client";
import { fakerZH_CN as faker } from "@faker-js/faker";

const prisma = new PrismaClient();
async function main() {
    for (let i = 0; i < 10; i++) {
        const company_group = await prisma.company_groups.upsert({
            where: { id: i + 1 },
            update: {},
            create: {
                name: faker.company.name(),
                logo: faker.image.avatarLegacy(),
                address: faker.location.streetAddress({ useFullAddress: true }),
                companies: {
                    create: {
                        name: faker.company.name(),
                        logo: faker.image.avatarLegacy(),
                        address: faker.location.streetAddress({
                            useFullAddress: true,
                        }),
                    },
                },
            },
        });
        console.log(
            "🚀 ~ file: company_groups.js:16 ~ main ~ company_group:",
            company_group
        );
    }
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
