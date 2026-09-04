import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("Starting database seeding...");

  // 1. Clean existing records in reverse dependency order
  console.log("Cleaning database...");
  await prisma.settings.deleteMany();
  await prisma.auditLog.deleteMany();
  await prisma.announcement.deleteMany();
  await prisma.coupon.deleteMany();
  await prisma.accessLog.deleteMany();
  await prisma.favorite.deleteMany();
  await prisma.withdrawal.deleteMany();
  await prisma.commission.deleteMany();
  await prisma.referral.deleteMany();
  await prisma.affiliate.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.membership.deleteMany();
  await prisma.membershipPlan.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  // 2. Seed Membership Plans
  console.log("Seeding membership plans...");
  const basicPlan = await prisma.membershipPlan.create({
    data: {
      name: "Basic Tier",
      slug: "basic",
      price: 1500,
      currency: "DZD",
      duration: 1,
      durationType: "MONTHS",
      accessLevel: "BASIC",
      description: "Access basic resources, download limit 10 items/day",
      features: ["Access to Basic assets", "10 downloads/day", "Standard support"],
      active: true,
      sortOrder: 1,
    },
  });

  const proPlan = await prisma.membershipPlan.create({
    data: {
      name: "Pro Tier",
      slug: "pro",
      price: 4500,
      currency: "DZD",
      duration: 1,
      durationType: "MONTHS",
      accessLevel: "PRO",
      description: "Access pro resources, unlimited downloads",
      features: ["Access to Basic & Pro assets", "Unlimited downloads", "Priority support"],
      active: true,
      sortOrder: 2,
    },
  });

  const lifetimePlan = await prisma.membershipPlan.create({
    data: {
      name: "Lifetime Access",
      slug: "lifetime",
      price: 15000,
      currency: "DZD",
      duration: 99,
      durationType: "LIFETIME",
      accessLevel: "LIFETIME",
      description: "One-time payment for permanent unlimited access",
      features: ["Unrestricted access to all assets", "Unlimited downloads forever", "Dedicated account support"],
      active: true,
      sortOrder: 3,
    },
  });

  // 3. Seed Default Users & Profiles
  console.log("Seeding default users...");
  // Dummy password hashes (e.g. for testing)
  // Actual auth will hash using bcrypt/argon2 in Phase 2
  const adminPasswordHash = "$2b$12$DUMMYHASH123456789012345678901234567890123456789";
  const memberPasswordHash = "$2b$12$DUMMYHASH123456789012345678901234567890123456789";

  const admin = await prisma.user.create({
    data: {
      email: "admin@zeddigital.com",
      name: "ZED Admin",
      passwordHash: adminPasswordHash,
      role: "ADMIN",
      status: "ACTIVE",
      profile: {
        create: {
          avatarUrl: null,
          phone: "0550000000",
          country: "Algeria",
          bio: "ZED Digital Administrator Account",
        },
      },
    },
  });

  const member = await prisma.user.create({
    data: {
      email: "member@zeddigital.com",
      name: "John Doe",
      passwordHash: memberPasswordHash,
      role: "MEMBER",
      status: "ACTIVE",
      profile: {
        create: {
          avatarUrl: null,
          phone: "0550000001",
          country: "Algeria",
          bio: "Regular member account",
        },
      },
    },
  });

  // 4. Seed Settings
  console.log("Seeding default settings...");
  await prisma.settings.create({
    data: {
      key: "siteConfig",
      value: {
        siteName: "ZED Digital",
        supportEmail: "support@zeddigital.com",
        currency: "DZD",
        logoUrl: "/logo.png",
      },
    },
  });

  await prisma.settings.create({
    data: {
      key: "commissionConfig",
      value: {
        type: "PERCENTAGE",
        rate: 20, // 20% commission
        minWithdrawal: 5000, // 5000 DZD minimum withdrawal
        eligibilityDays: 30, // eligible 30 days after conversion
      },
    },
  });

  await prisma.settings.create({
    data: {
      key: "baridiMobConfig",
      value: {
        instructions: "Send the total amount to the RIP/CCP account listed below. Enter the order reference code in the transaction notes. Upload the transaction receipt to complete checkout.",
        accountReference: "007999990001234567 89",
        supportContact: "billing@zeddigital.com",
        notes: "Admin review typically takes 1-2 hours.",
      },
    },
  });

  await prisma.settings.create({
    data: {
      key: "receiptUploadConfig",
      value: {
        acceptedFormats: ["jpg", "png", "pdf"],
        maxSizeMB: 5,
      },
    },
  });

  console.log("Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error during database seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
