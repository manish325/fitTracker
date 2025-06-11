import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    ManyToMany,
    OneToMany,

} from 'typeorm';
import { Role } from './role.entity';
import { Assets } from './assets.entity';
import { Template } from './templates.entity';
import { ChatHistory } from './chat_history.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    description: string;

    @ManyToOne(
        () => Role,
        role => role.users
    )
    role: Role;

    @ManyToOne(
        () => Assets,
        assets => assets.uploadedBy
    )
    assetsUploaded: Assets[];

    @OneToMany(
        () => Template,
        template => template.user
    )
    templates: Template[];

    @OneToMany(() => ChatHistory, (chat) => chat.from)
    sentMessages: ChatHistory[];

    // Received messages
    @OneToMany(() => ChatHistory, (chat) => chat.to)
    receivedMessages: ChatHistory[];
}