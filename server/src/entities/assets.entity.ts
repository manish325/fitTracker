import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    OneToMany,
    OneToOne,
    ManyToOne
} from 'typeorm';
import { User } from './user.entity';
import { Categories } from './categories.entity';
import { Exercise } from './exercises.entity';

@Entity()
export class Assets {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type : 'blob'
    })
    data: Buffer;

    @Column({
        type : 'text'
    })
    fileName : string;

    @Column({
        default : () => Date.now()
    })
    createdAt : Date;

   @OneToMany(
    () => User,
    (user) => user.assetsUploaded
   )
    uploadedBy : User;

    @OneToOne(
        () => Categories,
        (categories) => categories.image
    )
    category : Categories;

    @ManyToOne(
        () => Exercise,
        (exercise) => exercise.exerciseAssets
    )
    exercise : Exercise;
    
}
