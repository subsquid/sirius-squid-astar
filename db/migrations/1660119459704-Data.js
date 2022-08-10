module.exports = class Data1660119459704 {
  name = 'Data1660119459704'

  async up(db) {
    await db.query(`CREATE TABLE "system_info" ("id" character varying NOT NULL, "exchange_count" numeric NOT NULL, "swap_count" numeric NOT NULL, "token_count" numeric NOT NULL, "updated" numeric NOT NULL, "updated_at_block" numeric NOT NULL, "updated_at_transaction" bytea NOT NULL, CONSTRAINT "PK_b0c31720cc7fe00ce9116ac7606" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "swap_event" ("id" character varying NOT NULL, "data" jsonb, "block" numeric NOT NULL, "timestamp" numeric NOT NULL, "transaction" bytea NOT NULL, "swap_id" character varying, CONSTRAINT "PK_556d6f3bd0c2899dbb0455d4e0a" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_f330e9a035722e55b285a2a9ab" ON "swap_event" ("swap_id") `)
    await db.query(`CREATE TABLE "exchange" ("id" character varying NOT NULL, "data" jsonb, "block" numeric NOT NULL, "timestamp" numeric NOT NULL, "transaction" bytea NOT NULL, "swap_id" character varying, CONSTRAINT "PK_cbd4568fcb476b57cebd8239895" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_f58d7544bf751579b42e4b81b4" ON "exchange" ("swap_id") `)
    await db.query(`CREATE TABLE "daily_tvl" ("id" character varying NOT NULL, "timestamp" numeric NOT NULL, "tvl" text NOT NULL, "swap_id" character varying, CONSTRAINT "PK_02680949226f3a9cc5e8fbb9c93" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_b76ee280bd4cda9b9304c9633b" ON "daily_tvl" ("swap_id") `)
    await db.query(`CREATE TABLE "hourly_volume" ("id" character varying NOT NULL, "timestamp" numeric NOT NULL, "volume" text NOT NULL, "swap_id" character varying, CONSTRAINT "PK_5ad493af69e7662fc1bc69c8b64" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_c12feefd964de37df66c01a68b" ON "hourly_volume" ("swap_id") `)
    await db.query(`CREATE TABLE "daily_volume" ("id" character varying NOT NULL, "timestamp" numeric NOT NULL, "volume" text NOT NULL, "swap_id" character varying, CONSTRAINT "PK_16b2e73f99fb121dcc9e90ffd32" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_46ce54619866aecbabbe96447c" ON "daily_volume" ("swap_id") `)
    await db.query(`CREATE TABLE "weekly_volume" ("id" character varying NOT NULL, "timestamp" numeric NOT NULL, "volume" text NOT NULL, "swap_id" character varying, CONSTRAINT "PK_9cc098c7506986090c60748b465" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_4cee7ac9991f191a16faf9850a" ON "weekly_volume" ("swap_id") `)
    await db.query(`CREATE TABLE "swap" ("id" character varying NOT NULL, "address" bytea NOT NULL, "base_swap_address" bytea NOT NULL, "num_tokens" integer NOT NULL, "tokens" jsonb NOT NULL, "base_tokens" jsonb NOT NULL, "all_tokens" jsonb NOT NULL, "balances" numeric array NOT NULL, "lp_token" bytea NOT NULL, "a" numeric NOT NULL, "swap_fee" numeric NOT NULL, "admin_fee" numeric NOT NULL, "withdraw_fee" numeric, "virtual_price" numeric NOT NULL, "owner" bytea NOT NULL, "tvl" numeric(50,18) NOT NULL, "apy" numeric(50,18) NOT NULL, CONSTRAINT "PK_4a10d0f359339acef77e7f986d9" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "token" ("id" character varying NOT NULL, "address" bytea NOT NULL, "decimals" numeric NOT NULL, "name" text, "symbol" text, CONSTRAINT "PK_82fae97f905930df5d62a702fc9" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "lock" ("id" character varying NOT NULL, "address" bytea NOT NULL, "amount" numeric NOT NULL, "end" numeric NOT NULL, CONSTRAINT "PK_b47095fc0260d85601062b8ed1d" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "lock_system_info" ("id" character varying NOT NULL, "lock_count" numeric NOT NULL, "average_lock_time" numeric NOT NULL, "updated" numeric NOT NULL, "updated_at_block" numeric NOT NULL, "updated_at_transaction" bytea, CONSTRAINT "PK_4d28decb4c8f262d855f0d5ab01" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "airdropee" ("id" character varying NOT NULL, "address" bytea NOT NULL, "count" numeric NOT NULL, "swap_count" numeric NOT NULL, "add_liquidity_count" numeric NOT NULL, "remove_liquidity_count" numeric NOT NULL, "remove_liquidity_imbalance_count" numeric NOT NULL, "remove_liquidity_one_count" numeric NOT NULL, "farm_deposit_count" numeric NOT NULL, "farm_withdraw_count" numeric NOT NULL, "farm_claim_count" numeric NOT NULL, "updated" numeric NOT NULL, "updated_at_block" numeric NOT NULL, "updated_at_transaction" bytea, CONSTRAINT "PK_25e01af2f861a971d5b23d622f8" PRIMARY KEY ("id"))`)
    await db.query(`ALTER TABLE "swap_event" ADD CONSTRAINT "FK_f330e9a035722e55b285a2a9abe" FOREIGN KEY ("swap_id") REFERENCES "swap"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "exchange" ADD CONSTRAINT "FK_f58d7544bf751579b42e4b81b42" FOREIGN KEY ("swap_id") REFERENCES "swap"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "daily_tvl" ADD CONSTRAINT "FK_b76ee280bd4cda9b9304c9633b5" FOREIGN KEY ("swap_id") REFERENCES "swap"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "hourly_volume" ADD CONSTRAINT "FK_c12feefd964de37df66c01a68b6" FOREIGN KEY ("swap_id") REFERENCES "swap"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "daily_volume" ADD CONSTRAINT "FK_46ce54619866aecbabbe96447cd" FOREIGN KEY ("swap_id") REFERENCES "swap"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "weekly_volume" ADD CONSTRAINT "FK_4cee7ac9991f191a16faf9850a6" FOREIGN KEY ("swap_id") REFERENCES "swap"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "system_info"`)
    await db.query(`DROP TABLE "swap_event"`)
    await db.query(`DROP INDEX "public"."IDX_f330e9a035722e55b285a2a9ab"`)
    await db.query(`DROP TABLE "exchange"`)
    await db.query(`DROP INDEX "public"."IDX_f58d7544bf751579b42e4b81b4"`)
    await db.query(`DROP TABLE "daily_tvl"`)
    await db.query(`DROP INDEX "public"."IDX_b76ee280bd4cda9b9304c9633b"`)
    await db.query(`DROP TABLE "hourly_volume"`)
    await db.query(`DROP INDEX "public"."IDX_c12feefd964de37df66c01a68b"`)
    await db.query(`DROP TABLE "daily_volume"`)
    await db.query(`DROP INDEX "public"."IDX_46ce54619866aecbabbe96447c"`)
    await db.query(`DROP TABLE "weekly_volume"`)
    await db.query(`DROP INDEX "public"."IDX_4cee7ac9991f191a16faf9850a"`)
    await db.query(`DROP TABLE "swap"`)
    await db.query(`DROP TABLE "token"`)
    await db.query(`DROP TABLE "lock"`)
    await db.query(`DROP TABLE "lock_system_info"`)
    await db.query(`DROP TABLE "airdropee"`)
    await db.query(`ALTER TABLE "swap_event" DROP CONSTRAINT "FK_f330e9a035722e55b285a2a9abe"`)
    await db.query(`ALTER TABLE "exchange" DROP CONSTRAINT "FK_f58d7544bf751579b42e4b81b42"`)
    await db.query(`ALTER TABLE "daily_tvl" DROP CONSTRAINT "FK_b76ee280bd4cda9b9304c9633b5"`)
    await db.query(`ALTER TABLE "hourly_volume" DROP CONSTRAINT "FK_c12feefd964de37df66c01a68b6"`)
    await db.query(`ALTER TABLE "daily_volume" DROP CONSTRAINT "FK_46ce54619866aecbabbe96447cd"`)
    await db.query(`ALTER TABLE "weekly_volume" DROP CONSTRAINT "FK_4cee7ac9991f191a16faf9850a6"`)
  }
}
