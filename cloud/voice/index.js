const cloud = require("wx-server-sdk");

const config = {
  env: "pro-dcxrw",
  doc: "voice-list",
  rule: {},
  field: {},
  limit: 100
};
cloud.init();
exports.main = async (event, context) => {
  console.log('event: ', event, context);
  const {
    env,
    doc,
    rule,
    limit,
    field
  } = event;
  const db = cloud.database({
    env: env || config.env
  });
  return await db
    .collection(doc || config.doc)
    .where(rule || config.rule)
    .orderBy("createdAt", "asc")
    .limit(limit || config.limit)
    .field(field || config.field)
    .get();
};