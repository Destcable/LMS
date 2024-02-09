async function topics(_, _, context) {
    return await context.prisma.topic.findMany();
};

async function topicHeader(_, args, context) {
    const { topicId } = args;

    return await context.prisma.topicHeader.findUnique({
        where: { topicId }
    });
};

async function topicThemes(_, args, context) { 
    const { topicId } = args;

    return await context.prisma.topicTheme.findMany({
        where: { topicId }
    })
};

async function topicThemeById(_, args, context) {
    const { id } = args;

    return await context.prisma.topicTheme.findUnique({
        where: { id }
    });
};

module.exports = { 
    topics, 
    topicHeader,
    topicThemes,
    topicThemeById
};