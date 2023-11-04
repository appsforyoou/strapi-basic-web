import https from 'http';

export default {
  afterCreate() {
    const req = https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=articles&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    req.on('error', (error) => {
      console.error(error);
    });
  },
  afterCreateMany() {
    const req = https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=articles&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    req.on('error', (error) => {
      console.error(error);
    });
  },

  afterUpdate() {
    const req = https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=articles&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    req.on('error', (error) => {
      console.error(error);
    });
  },
  afterUpdateMany() {
    const req = https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=articles&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    req.on('error', (error) => {
      console.error(error);
    });
  },

  afterDelete() {
    const req = https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=articles&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    req.on('error', (error) => {
      console.error(error);
    });
  },
  afterDeleteMany() {
    const req = https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=articles&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    req.on('error', (error) => {
      console.error(error);
    });
  },
}
