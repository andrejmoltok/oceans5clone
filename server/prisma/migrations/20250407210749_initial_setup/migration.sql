-- CreateTable
CREATE TABLE `games5` (
    `id` VARCHAR(24) NOT NULL,
    `player1` VARCHAR(50) NOT NULL,
    `player2` VARCHAR(50) NOT NULL,
    `winner` VARCHAR(50) NOT NULL,
    `status` VARCHAR(50) NOT NULL,
    `length` TIME(0) NULL,
    `startedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `endedAt` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lobby5` (
    `id` VARCHAR(24) NOT NULL,
    `user_id` VARCHAR(50) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `message` LONGTEXT NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `lobby5_unique`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `moves5` (
    `id` VARCHAR(24) NOT NULL,
    `gameID` VARCHAR(24) NOT NULL,
    `playerID` VARCHAR(50) NOT NULL,
    `turn` INTEGER UNSIGNED NOT NULL,
    `message` VARCHAR(2000) NULL,
    `action` VARCHAR(100) NOT NULL,
    `x` INTEGER UNSIGNED NOT NULL,
    `y` VARCHAR(1) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player5` (
    `id` VARCHAR(24) NOT NULL,
    `user_id` VARCHAR(50) NOT NULL,
    `accuracyRatio` DECIMAL(10, 0) NOT NULL DEFAULT 0,
    `avgScore` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `gamesLost` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `gamesPlayed` DECIMAL(10, 0) NOT NULL DEFAULT 0,
    `gamesWon` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `level` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `loseRatio` DECIMAL(10, 0) NOT NULL DEFAULT 0,
    `nickname` VARCHAR(100) NOT NULL,
    `imgURL` VARCHAR(1000) NULL,
    `playtimeTotal` DECIMAL(10, 0) NOT NULL DEFAULT 0,
    `rank` VARCHAR(100) NOT NULL DEFAULT 'Seaman',
    `totalPoints` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `winRatio` DECIMAL(10, 0) NOT NULL DEFAULT 0,
    `xp` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `player5_unique`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
