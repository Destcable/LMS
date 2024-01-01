async function topics(root, args, context) {
    return await context.prisma.topic.findMany();
};

module.exports = { topics };