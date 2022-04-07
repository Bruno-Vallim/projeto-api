import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1649184411924 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"name",
                        type: "varchar(255)",
                        isUnique: true
                    },
                    {
                        name:"password",
                        type: "varchar(255)"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
