import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Assets } from './assets.entity';

@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToOne(
        () => Assets,
        (assets) => assets.category,
    )
    image: Assets;
}
