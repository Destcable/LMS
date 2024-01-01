async function createTopic(root, args, context) { 
    const { name } = args;
    return await context.prisma.topic.create({ 
        data: { 
            name
        }
    })
};

async function deleteTopic(root, args, context) { 
    const { id } = args;
    return await context.prisma.topic.delete({
        where: { 
            id
        }
    })
}

module.exports = { createTopic }