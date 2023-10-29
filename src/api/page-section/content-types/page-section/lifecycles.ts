import https from 'http';

export default {
  afterCreate() {
    try {
      https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=withSections&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    } catch (error) {
      console.error(error);
    }
  },
  afterCreateMany() {
    try {
      https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=withSections&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    } catch (error) {
      console.error(error);
    }
  },

  afterUpdate() {
    try {
      https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=withSections&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    } catch (error) {
      console.error(error);
    }
  },
  afterUpdateMany() {
    try {
      https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=withSections&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    } catch (error) {
      console.error(error);
    }
  },

  afterDelete() {
    try {
      https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=withSections&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    } catch (error) {
      console.error(error);
    }
  },
  afterDeleteMany() {
    try {
      https.get(`${process.env.NEXTJS_REVALIDATE_TAG_PATH}?tag=withSections&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    } catch (error) {
      console.error(error);
    }
  },
}
