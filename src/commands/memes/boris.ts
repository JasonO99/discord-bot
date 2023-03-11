import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const BORIS_URL = `${process.env.IMAGE_BASE_URL}memes/boris.gif`;

export const boris: CommandDefinition = {
    name: 'boris',
    description: 'boris soudn',
    category: CommandCategory.MEMES,
    executor: (msg) => {
        const borisEmbed = makeEmbed({ image: { url: BORIS_URL } });
        return msg.channel.send({ embeds: [borisEmbed] });
    },
};
