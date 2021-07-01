import { BeforeUpdate, Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
class User{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    @BeforeUpdate()
    email: string;
    
    @Column()
    @BeforeUpdate()
    picture_url: string;

    constructor() {
        if (!this.id)
            this.id = uuid();
    }

};

export { User };