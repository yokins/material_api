-- AlterTable
ALTER TABLE `company_groups` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `logo` VARCHAR(191) NULL,
    MODIFY `address` VARCHAR(191) NULL;
