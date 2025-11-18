import { Config, DefineConfig, PrimaryKey, Property } from "@mikro-orm/core";

export class BaseEntity 
{

    [Config]?: DefineConfig<{ forceObject: true }>;

    @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
    id: string;

    @Property({ type: 'timestamptz', onCreate: () => new Date(), precision: 3 })
    created_at?: Date;

    @Property({ type: 'timestamptz', onUpdate: () => new Date(), nullable: true, precision: 3 })
    updated_at?: Date;

}