import { Entity, Column, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid";

@Entity("users")
export class Users {

    @PrimaryColumn()
    id: string;

    @Column()
    name:string;

    @Column()
    password:string

    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}
