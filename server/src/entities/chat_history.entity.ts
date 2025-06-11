import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class ChatHistory {
    @PrimaryGeneratedColumn()
    id: number;


    @ManyToOne(() => User, (user) => user.sentMessages, { onDelete: 'CASCADE' })
    from: User;

    @ManyToOne(() => User, (user) => user.receivedMessages, { onDelete: 'CASCADE' })
    to: User;

    @Column()
    message: string;

    @CreateDateColumn({
        default: () => Date.now()
    })
    createdAt: Date;
}
