import https from 'http';

export default {
  afterCreate() {
    https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=websiteLogo&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
  },
  afterCreateMany() {
    https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=websiteLogo&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
  },

  afterUpdate() {
    https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=websiteLogo&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
  },
  afterUpdateMany() {
    https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=websiteLogo&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
  },

  afterDelete() {
    https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=websiteLogo&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
  },
  afterDeleteMany() {
    https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=websiteLogo&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
  },
}
