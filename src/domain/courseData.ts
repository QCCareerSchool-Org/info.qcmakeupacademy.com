import type { CourseCode } from './courseCode';

interface CourseData {
  name: string;
  url: string;
  description: string;
  certification: string | undefined;
  subjects: string[] | undefined;
  workload: string | undefined;
}

const baseUrl = 'https://www.qcmakeupacademy.com';

export const dataMap: Readonly<Record<CourseCode, CourseData>> = {
  mz: {
    name: 'Master Makeup Artistry',
    url: `${baseUrl}/online-makeup-courses/master-makeup-artistry`,
    description: '',
    certification: 'Master International Makeup Professional™',
    subjects: undefined,
    workload: undefined,
  },
};
