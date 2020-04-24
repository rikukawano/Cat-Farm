module.exports = (knex, UserMessage) => {
  return (params) => {
    return knex("user_messages")
      .where("from_id", params.fromId) // fromId: rpt-3, toId: muddybarefeet
      .where("to_id", params.toId)
      .orWhere("from_id", params.toId)
      .orWhere("to_id", params.fromId)
      .then((userMessages) => {
        return Promise.all(userMessages.map((userMessage) => {}));
      });
  };
};
