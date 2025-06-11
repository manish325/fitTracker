import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm';
import { Assets } from './assets.entity';

@Entity()
export class Exercise {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(
        () => Assets,
        (assets) => assets.exercise,
    )
    exerciseAssets: Assets[];

    

}