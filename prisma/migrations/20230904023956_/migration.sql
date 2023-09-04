-- AlterTable
ALTER TABLE `companies` ADD COLUMN `company_groupsId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `companies` ADD CONSTRAINT `companies_company_groupsId_fkey` FOREIGN KEY (`company_groupsId`) REFERENCES `company_groups`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
