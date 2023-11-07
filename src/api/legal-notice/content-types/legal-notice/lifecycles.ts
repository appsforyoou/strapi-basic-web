import httpAdapter from '../../../../helpers/httpAdapter';
import { revalidatePath } from '../../../../helpers/utils';

export default {
  afterCreate() {
    const req = httpAdapter(revalidatePath).get(`${revalidatePath}?tag=legalNotice&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    req.on('error', (error) => {
      console.error(error);
    });
  },
  afterCreateMany() {
    const req = httpAdapter(revalidatePath).get(`${revalidatePath}?tag=legalNotice&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    req.on('error', (error) => {
      console.error(error);
    });
  },

  afterUpdate() {
    const req = httpAdapter(revalidatePath).get(`${revalidatePath}?tag=legalNotice&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    req.on('error', (error) => {
      console.error(error);
    });
  },
  afterUpdateMany() {
    const req = httpAdapter(revalidatePath).get(`${revalidatePath}?tag=legalNotice&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    req.on('error', (error) => {
      console.error(error);
    });
  },

  afterDelete() {
    const req = httpAdapter(revalidatePath).get(`${revalidatePath}?tag=legalNotice&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    req.on('error', (error) => {
      console.error(error);
    });
  },
  afterDeleteMany() {
    const req = httpAdapter(revalidatePath).get(`${revalidatePath}?tag=legalNotice&secret=${process.env.NEXTJS_REVALIDATE_TAG_TOKEN}`);
    req.on('error', (error) => {
      console.error(error);
    });
  },
}
