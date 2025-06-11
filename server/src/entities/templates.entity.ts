import {
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Template {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @Column()
    description : string;

    @ManyToOne(
        () => User,
        user => user.templates
    )
    user: User;
}