async function topics(root, args, context) {
    return await context.prisma.topic.findMany();
};

async function topicHeader(root, args, context) {
    const { topicId } = args;

    return await context.prisma.topicHeader.findUnique({
        where: { topicId }
    });
}

module.exports = { topics, topicHeader };