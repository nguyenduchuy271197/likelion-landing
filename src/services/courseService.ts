export interface Root {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  subtitle: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  modules: Modules;
  objectives: Objectives;
}

export interface Modules {
  data: Daum[];
}

export interface Daum {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  lessons: Lessons;
}

export interface Lessons {
  data: Daum2[];
}

export interface Daum2 {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
}

export interface Objectives {
  data: Daum3[];
}

export interface Daum3 {
  id: number;
  attributes: Attributes4;
}

export interface Attributes4 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface Meta {}

export async function getCourseBySlug(slug: string) {
  const res = await fetch(`http://localhost:1337/api/courses/${slug}`);

  if (!res.ok) throw new Error("Failed to fetch");

  const data = (await res.json()) as Root;

  return data;
}
